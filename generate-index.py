"""
Script to generate index of repository in markdown format.
"""

import os
import re


def extract_table_of_contents(md_file_path):
    """
    The extract_table_of_contents function takes a markdown file path as input and returns the table of contents
    of that markdown file. The table of contents is returned as a list, where each element in the list is one line
    in the table of contents.

    :param md_file_path: Specify the path to the markdown file
    :return: A list of strings
    """
    with open(md_file_path, 'r') as file:
        content = file.read()
    toc = re.findall(r'- \[.*\]\(#.*\)', content)
    return toc


def create_index_elements(directory_path, index=[]):
    """
    The create_index_elements function takes a directory path and an index list as arguments.
    It then iterates through the files in the directory, ignoring any hidden files or READMEs.
    If it finds a markdown file, it extracts its table of contents and appends that to the index list.
    If it finds another directory, it recursively calls itself on that subdirectory.

    :param directory_path: Pass the path of the directory to be indexed
    :param index: Store the index elements
    :return: A list of strings, each string
    """
    for entry in os.scandir(directory_path):
        if entry.name.startswith('.') or entry.name.startswith('README'):
            continue
        if entry.is_file() and entry.name.endswith('.md'):
            toc = extract_table_of_contents(entry.path)
            toc = "\n".join(toc)
            file_name = entry.name.replace('.md', '').capitalize().strip()
            index.append(
                f'\n<details>\n  <summary> <a href="{entry.path}"> {file_name} </a> </summary>\n\n{toc}\n\n</details>')
        elif entry.is_dir():
            create_index_elements(entry, index=index)
    return index


def generate_readme_file(index):
    """
    The generate_readme_file function generates a README.md file for the GitBook repository,
    which contains an index of all the topics/fields that are covered in this repository.

    :param index: Write the index of the gitbook to readme
    :return: None, because it doesn't have a return statement
    """
    with open('README.md', 'w') as file:
        file.write("""\
# GitBook

Welcome to GitBook, the secret vault of knowledge! 📚✨

Within these digital pages, you'll find a wondrous collection of my notes and self-documentation, covering everything from development tools and programming languages to tales of wild adventures, university course notes, and even the occasional spark of genius that struck me during a midnight snack break! 🍕🚀

Please remember, my fellow readers, that these notes are not for the faint of heart. They are imbued with secret reaping spells, unexpected bugs, and the occasional cryptic comment left by a long-lost programmer from a bygone era.

So grab your favorite caffeinated beverage, put on your lucky coding socks, and embark on this whimsical journey through my mind. But remember, dear friend, if you dare to wield this knowledge, do so at your own peril! Muahaha! 😈

<p align="right">- Code Reaper<p>

## Index\n\
""")
        for element in index:
            file.write(element + '\n')


ROOT_DIRECTORY_PATH = '.'  # Change this to the root directory of your folder structure
index = create_index_elements(ROOT_DIRECTORY_PATH)
generate_readme_file(index)
