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
    main_updated, snapshot_updated = False, False
    
    for xml_file in modified_files:
        try:
            basename = os.path.basename(xml_file)
            if basename == "MissFisher.xml":
                main_data = parse_xml(xml_file, is_main=True)
                main_updated = True
                print(f"[SUCCESS] 主文件处理完成：{main_data}")
            elif basename == "MissFisher Snapshot.xml":
                snapshot_data = parse_xml(xml_file, is_main=False)
                snapshot_updated = True
                print(f"[SUCCESS] 快照文件处理完成：{snapshot_data}")
        except Exception as e:
            print(f"[ERROR] 文件处理失败：{xml_file}")
            print(f"错误详情：{str(e)}")
            os._exit(1)
    
    generate_csv("Versions.csv", main_data, snapshot_data, main_updated, snapshot_updated)
    
    # 智能Git提交
    files_to_add = []
    if main_updated: files_to_add.append("MissFisher.xml")
    if snapshot_updated: files_to_add.append("MissFisher Snapshot.xml")
    files_to_add.append("Versions.csv")
    subprocess.run(["git", "add"] + files_to_add)
    
    return True

def parse_xml(xml_path, is_main):
    # 原有解析逻辑保持不变...
    # （与问题中提供的原始parse_xml函数内容完全一致）

def process_changelog(text):
    # 原有日志处理逻辑保持不变...

def generate_csv(csv_path, main_data, snapshot_data, main_updated, snapshot_updated):
    # 读取现有CSV内容
    try:
        with open(csv_path, 'r', encoding='utf-8-sig') as f:
            existing = f.read().split('\n')
            lines = existing[:4] + ['']*(4-len(existing))  # 保证至少4行
    except FileNotFoundError:
        lines = [''] * 4
    
    # 按更新标志覆盖对应行
    if main_updated:
        lines[0] = main_data.get('version', '')
        lines[2] = main_data.get('changelog', '')
    if snapshot_updated:
        lines[1] = snapshot_data.get('snapshot', '')
        lines[3] = snapshot_data.get('changelog', '')
    
    # 写入新内容
    with open(csv_path, 'w', encoding='utf-8-sig', newline='\n') as f:
        f.write('\n'.join(lines[:4]))

if __name__ == "__main__":
    if process_files():
        os._exit(0)
    else:
        os._exit(1)