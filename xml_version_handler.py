#!/usr/bin/env python
# -*- coding: utf-8 -*-
import xml.etree.ElementTree as ET
import re
import os
import sys
import subprocess
import io

# 强制标准输出使用UTF-8
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def process_files():
    modified_files = sys.argv[1:] if len(sys.argv) > 1 else []
    main_data, snapshot_data = {}, {}
    
    for xml_file in modified_files:
        try:
            basename = os.path.basename(xml_file)
            if basename == "MissFisher.xml":
                main_data = parse_xml(xml_file, is_main=True)
                print(f"[SUCCESS] 主文件处理完成：{main_data}")
            elif basename == "MissFisher Snapshot.xml":
                snapshot_data = parse_xml(xml_file, is_main=False)
                print(f"[SUCCESS] 快照文件处理完成：{snapshot_data}")
        except Exception as e:
            print(f"[ERROR] 文件处理失败：{xml_file}")
            print(f"错误详情：{str(e)}")
            os._exit(1)
    
    final_data = resolve_data(main_data, snapshot_data)
    generate_csv("Versions.csv", final_data)
    return True

def parse_xml(xml_path, is_main):
    tree = ET.parse(xml_path)
    root = tree.getroot()
    exported_folder = root.find(".//ExportedFolder")
    
    raw_vars = exported_folder.get("RawEnvironmentVariables", "")
    
    # 提取版本号
    version_match = re.search(r'版本\s*=\s*(\d+\.\d+\.\d+)', raw_vars)
    if not version_match:
        raise ValueError("未找到版本号")
    version = version_match.group(1)
    
    # 提取快照号（仅快照文件）
    snapshot = ""
    if not is_main:
        snapshot_match = re.search(r'快照\s*=\s*([^\r\n]+)', raw_vars)
        if not snapshot_match:
            raise ValueError("未找到快照号")
        snapshot = snapshot_match.group(1)
    
    # 提取摘要
    changelog_match = re.search(r'摘要\s*=\s*(.*?)(?=\"?\r?\n\S+\s*=|\Z)', raw_vars, re.DOTALL)
    changelog = changelog_match.group(1).strip() if changelog_match else ""
    
    # 生成新名称
    new_name = (
        f"MissFisher {version}" if is_main 
        else f"MissFisher Snapshot {snapshot}"
    )
    exported_folder.set("Name", new_name)
    
    # 保存XML（手动控制换行符）
    xml_str = ET.tostring(root, encoding="utf-8", xml_declaration=True).decode()
    with open(xml_path, "w", encoding="utf-8", newline="\n") as f:
        f.write(xml_str.replace("\r\n", "\n"))
    
    return {
        "version": version,
        "snapshot": snapshot,
        "changelog": process_changelog(changelog)
    }

def process_changelog(text):
    return (
        text.replace("\r\n", r"\r\n")
    )

def resolve_data(main, snapshot):
    return {
        "version": snapshot.get("version", main.get("version", "")),
        "snapshot": snapshot.get("snapshot", main.get("snapshot", "")),
        "main_changelog": main.get("changelog", ""),
        "snapshot_changelog": snapshot.get("changelog", "")
    }

def generate_csv(csv_path, new_data):
    # 读取旧数据逻辑不变...
    # 写入时强制使用LF
    with open(csv_path, "w", encoding="utf-8-sig", newline="\n") as f:
        f.write(f"{new_data['version']}\n")
        f.write(f"{new_data['snapshot']}\n")
        f.write(f"{new_data['main_changelog']}\n")
        f.write(new_data['snapshot_changelog'])

if __name__ == "__main__":
    if process_files():
        subprocess.run(["git", "add", "MissFisher.xml", "MissFisher Snapshot.xml", "Versions.csv"])
        os._exit(0)
    else:
        os._exit(1)