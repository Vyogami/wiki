# Conda

This document serves as a quick reference guide for using Conda, a package and environment management system. Conda is commonly used for managing Python packages, but it can also manage packages from other languages. It allows you to create isolated environments with different package versions and dependencies.

## Table of Contents

<!-- toc -->

## Installation

To install Conda, follow the instructions for your operating system from the official Conda documentation:

- [Conda Installation Documentation](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html)

## Environment Management

- **Create a new environment:**

  ```bash
  conda create --name myenv
  ```

  For specifying a specific Python version:

  ```shel
  conda create --name myenv python=3.8
  ```

- **Activate an environment:**

  ```shel
  conda activate myenv
  ```

- **Deactivate the current environment:**

  ```shel
  conda deactivate
  ```

- **List all environments:**

  ```shel
  conda env list
  ```

- **Remove an environment:**

  ```shel
  conda env remove --name myenv
  ```

- **Create a requirements.txt file:**

  ```shel
  conda list --explicit > requirements.txt
  ```

- **Create an environment from a requirements.txt file:**

  ```shel
  conda create --name myenv --file requirements.txt
  ```

- **Export an environment to a YAML file:**

  ```shel
  conda env export --name myenv > environment.yml
  ```

    > The resulting YAML file can be used to recreate the environment.

## Package Management

- **List installed packages:**

  ```shel
  conda list
  ```

- **Install a package:**

  ```shel
  conda install packagename
  ```

  For specifying a specific version:

  ```shel
  conda install packagename=1.2.3
  ```

- **Update a package:**

  ```shel
  conda update packagename
  ```

- **Remove a package:**

  ```shel
  conda remove packagename
  ```

- **Search for a package:**

  ```shel
  conda search packagename
  ```

## Managing Channels

Conda uses channels to find and install packages. Here are some commands for managing channels:

- **Add a channel:**

  ```shel
  conda config --add channels channelname
  ```

- **Remove a channel:**

  ```shel
  conda config --remove channels channelname
  ```

- **List configured channels:**

  ```shel
  conda config --get channels
  ```

## Miscellaneous Commands

Here are a few more commands that can be handy:

- **Update Conda itself:**

  ```shel
  conda update conda
  ```

## Further Reading

For more detailed information on Conda and its usage, refer to the official Conda documentation:

- [Conda User Guide](https://docs.conda.io/projects/conda/en/latest/user-guide/index.html)
- [Conda Command Reference](https://docs.conda.io/projects/conda/en/latest/commands.html)
