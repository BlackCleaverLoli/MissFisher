import xml.etree.ElementTree as ET
import re
import os
import sys
import subprocess

def process_files():
    modified_files = sys.argv[1:] if len(sys.argv) > 1 else []
    main_data, snapshot_data = {}, {}
    
    for xml_file in modified_files:
        try:
            if os.path.basename(xml_file) == "MissFisher.xml":
                main_data = parse_xml(xml_file, is_main=True)
            elif os.path.basename(xml_file) == "MissFisher Snapshot.xml":
                snapshot_data = parse_xml(xml_file, is_main=False)
        except Exception as e:
            print(f"❌ 文件处理失败：{xml_file}\n错误详情：{str(e)}")
            os._exit(1)
    
    final_data = resolve_data(main_data, snapshot_data)
    generate_csv("Versions.csv", final_data)
    return True

def parse_xml(xml_path, is_main):
    tree = ET.parse(xml_path)
    root = tree.getroot()
    exported_folder = root.find(".//ExportedFolder")
    
    raw_vars = exported_folder.get("RawEnvironmentVariables", "")
    
    # 提取关键数据
    version_match = re.search(r'版本\s*=\s*(\d+\.\d+\.\d+)', raw_vars)
    snapshot_match = re.search(r'快照\s*=\s*([^\r\n]+)', raw_vars)
    changelog_match = re.search(r'摘要\s*=\s*(.*?)(?=\"\r?\n\S+ = |$)', raw_vars, re.DOTALL)
    
    # 格式化分组名称
    new_name = (
        f"MissFisher {version_match.group(1)}" if is_main 
        else f"MissFisher Snapshot {snapshot_match.group(1)}"
    )
    exported_folder.set("Name", new_name)
    
    # 保存修改后的XML
    tree.write(xml_path, encoding="utf-8", xml_declaration=True)
    
    return {
        "version": version_match.group(1),
        "snapshot": snapshot_match.group(1) if not is_main else "",
        "changelog": process_changelog(changelog_match.group(1)) if changelog_match else ""
    }

def resolve_data(main, snapshot):
    # 数据合并规则
    return {
        "version": snapshot.get("version", main.get("version", "")),
        "snapshot": snapshot.get("snapshot", main.get("snapshot", "")),
        "main_changelog": main.get("changelog", ""),
        "snapshot_changelog": snapshot.get("changelog", "")
    }

def process_changelog(text):
    return (
        text.replace("\r\n", r"\r\n")
    )

def generate_csv(csv_path, new_data):
    # 读取旧数据（保留未修改字段）
    old_data = {}
    if os.path.exists(csv_path):
        with open(csv_path, "r", encoding="utf-8-sig") as f:
            lines = [line.strip() for line in f.readlines()]
            old_data = {
                "version": lines[0] if len(lines) >0 else "",
                "snapshot": lines[1] if len(lines) >1 else "",
                "main_changelog": lines[2] if len(lines) >2 else "",
                "snapshot_changelog": lines[3] if len(lines) >3 else ""
            }
    
    # 合并新旧数据
    merged_data = {
        "version": new_data.get("version", old_data.get("version", "")),
        "snapshot": new_data.get("snapshot", old_data.get("snapshot", "")),
        "main_changelog": new_data.get("main_changelog", old_data.get("main_changelog", "")),
        "snapshot_changelog": new_data.get("snapshot_changelog", old_data.get("snapshot_changelog", ""))
    }
    
    # 写入CSV（换行分隔，避免逗号影响）
    with open(csv_path, "w", encoding="utf-8-sig") as f:
        f.write(f"{merged_data['version']}\n")
        f.write(f"{merged_data['snapshot']}\n")
        f.write(f"{merged_data['main_changelog']}\n")
        f.write(merged_data['snapshot_changelog'])

if __name__ == "__main__":
    if process_files():
        subprocess.run(["git", "add", "MissFisher.xml", "MissFisher Snapshot.xml", "Versions.csv"])
        os._exit(0)
    else:
        os._exit(1)