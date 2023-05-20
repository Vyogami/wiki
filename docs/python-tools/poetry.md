# Poetry

Poetry is a dependency manager and build tool for Python. It is designed to simplify and streamline the process of managing and installing packages for Python projects.

## Installation

To install Poetry, follow these steps:

   ```bash
   curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -
   ```

## Creating a New Project

   ```bash
   poetry new myproject
   ```

   This command creates a new directory named `myproject` and initializes it with a basic project structure and a `pyproject.toml` file, which is used by Poetry to manage project dependencies.

## Managing Dependencies

Poetry allows you to manage dependencies for your project using the `pyproject.toml` file. Here are some common commands and their usage:

- **Add a dependency**:

  ```bash
  poetry add package_name
  ```

  This command installs the specified package and its dependencies and adds it to the `pyproject.toml` file.

- **Add a dependency in development mode**:
  
  ```bash
  poetry add -D package_name
  ```

  > **Warning**: -D or -dev option is [deprecated], use the `--group dev` notation instead.

  ```bash
  poetry add --group dev package_name
  ```

- **Remove a dependency**:

  ```bash
  poetry remove package_name
  ```

  This command removes the specified package from the project and updates the `pyproject.toml` file.

- **Update all dependencies**:

  ```bash
  poetry update
  ```

  Use this command to update all dependencies to their latest versions.

- **Install dependencies**:

  ```bash
  poetry install
  ```

  This command installs all dependencies specified in the `pyproject.toml` file.

- **Export dependencies to a requirements file**:

  ```bash
  poetry export -f requirements.txt --output requirements.txt
  ```

  This command saves a list of all installed packages and their versions into a file named `requirements.txt`. You can use this file to share or replicate the exact environment on another machine.

## Environment Management

Poetry provides an integrated approach to manage Python environments for your projects. It creates a virtual environment specific to each project. Here are some environment-related commands:

- **Create a virtual environment**:

  ```bash
  poetry env use python3.9
  ```

  This command creates a virtual environment using the specified Python version (e.g., `python3.9`).

- **Activate the virtual environment**:

  ```bash
  poetry shell
  ```

  This command activates the virtual environment associated with your project, allowing you to work within an isolated environment.

- **Deactivate the virtual environment**:

  ```bash
  exit
  ```

  Use this command to exit the virtual environment and return to your system's default Python environment.

- **Remove the virtual environment**:
  
  To remove a virtual environment created by poetry you can simply delete the env

  For example:

  ```bash
  rm -rf ~/.cache/pypoetry/virtualenvs/scraper-2VoIUhnA-py3.5 
  ```
  
  > **Note**: you can check the location of the env by executing `which python` after activating the env using `poetry shell`.

## Building and Running

Poetry provides several commands to build and run your Python project. Here are some common commands and their usage:

- **Build the project**:

  ```bash
  poetry build
  ```

  This command builds a distribution package for your project.

- **Run the project**:

  ```bash
  poetry run python myscript.py
  ```

  This command runs the specified Python script within the project's virtual environment.

## YouTube Videos

- **Quick overview**: [NeuralNine](https://www.youtube.com/watch?v=Qks3eqlImy8)
