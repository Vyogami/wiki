# VENV

VENV is a built-in module in Python that allows you to create isolated environments for your Python projects. It provides a clean and separate space where you can install packages and dependencies without affecting your system's global Python installation.

## Creation

To create a new virtual environment, follow these steps:

1. Open a terminal or command prompt.

2. Navigate to the directory where you want to create your virtual environment.

3. Run the following command:

   ```bash
   python -m venv myenv
   ```

   This command creates a new virtual environment named `myenv` in the current directory.

## Activation

To activate the virtual environment, depending on your operating system, use one of the following commands:

- **On macOS and Linux**:

  ```bash
  source myenv/bin/activate
  ```

- **On Windows**:

  ```bash
  myenv\Scripts\activate
  ```

Once activated, your terminal prompt will change, indicating that you are now working within the virtual environment.

## Deactivation

To deactivate the virtual environment, depending on your operating system, use one of the following commands:

  ```bash
  deactivate
  ```

This command deactivates the current virtual environment and returns you to your system's default Python environment.

## Usage

After activating the virtual environment you can use `pip` to manage packages, Here are some of the most commonly used commands

- **Install a package**:

  ```bash
  pip install package_name
  ```

- **Upgrade a package**:

  ```bash
  pip install --upgrade package_name
  ```

  Use this command to upgrade an already installed package to the latest version within the virtual environment.

- **Uninstall a package**:

  ```bash
  pip uninstall package_name
  ```

- **List installed packages**:

  ```bash
  pip list
  ```

- **Export the environment to a requirements file**:

  ```bash
  pip freeze > requirements.txt
  ```

  This command saves a list of all installed packages and their versions into a file named `requirements.txt`. You can use this file to share or replicate the exact environment on another machine.

- **Check the Python interpreter version**:

  ```bash
  python --version
  ```

- **Check the path to the Python interpreter**:

  ```bash
  which python
  ```
