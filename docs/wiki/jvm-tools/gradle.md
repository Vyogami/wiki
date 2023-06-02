# Gradle

This document serves as a reference guide for using Gradle, a powerful build automation tool widely used for building, testing, and deploying software projects. Gradle provides a flexible and declarative approach to defining build configurations, allowing developers to automate various tasks and manage dependencies efficiently.

## Installation

To install Gradle, follow the instructions for your operating system from the official Gradle documentation:

- [Gradle Installation Documentation](https://docs.gradle.org/current/userguide/installation.html)

## Project Initialization

- **Create a new Gradle project:**

  ```bash
  gradle init
  ```

  The `gradle init` command initializes a new Gradle project in the current directory. It prompts you to select a project type (Java, Groovy, Kotlin, etc.) and generates the necessary project structure and build files.

## Build Files

A Gradle build is defined using build files, which typically have the name `build.gradle` or `build.gradle.kts` (for Kotlin DSL). These files contain the project configuration, including dependencies, tasks, and custom settings. Here are some common configurations:

- **Define project dependencies:**

  ```groovy
  dependencies {
      implementation 'group:name:version'
      testImplementation 'group:name:version'
  }
  ```

  This block specifies the dependencies required for the project. The `implementation` configuration is used for dependencies required during runtime, while `testImplementation` is for dependencies used only for testing.

- **Create a custom task:**

  ```groovy
  task customTask {
      // Task configuration
      doLast {
          // Task actions
      }
  }
  ```

  This code snippet defines a custom Gradle task named `customTask`. You can configure the task and specify the actions to be executed when the task is run.

- **Apply plugins:**

  ```groovy
  plugins {
      id 'java'
      id 'com.github.johnrengelman.shadow' version '7.0.0'
  }
  ```

  The `plugins` block applies plugins to the project. Plugins provide additional functionality and tasks that can be used in the build process. In this example, the `java` plugin and the `shadow` plugin (version 7.0.0) are applied.

## Gradle Wrapper

The Gradle Wrapper is a script that allows you to run Gradle builds without having Gradle installed globally. It ensures that the build uses a specific version of Gradle, making your project more portable and independent of the Gradle installation on the build machine.

To use the Gradle Wrapper, perform the following steps:

1. Include the Gradle Wrapper files in your project:

   ```bash
   gradle wrapper --gradle-version <version>
   ```

   Replace `<version>` with the desired Gradle version. This command generates the necessary wrapper files, including `gradlew` (for Unix-based systems) and `gradlew.bat` (for Windows).

2. Run Gradle commands using the Gradle Wrapper:

   - On Unix-based systems (Linux, macOS):

     ```bash
     ./gradlew <task_name>
     ```

   - On Windows:

     ```bash
     gradlew.bat <task_name>
     ```

   Replace `<task_name>` with the name of the task you want to execute.

## Gradle Tasks

Gradle tasks represent the different actions that can be performed during the build process. Here are some commonly used tasks:

- **Compile the Java source code:**

  ```bash
  ./gradlew compileJava
  ```

  This command compiles the Java source code in the project.

- **Run the Java application:**

  ```bash
  ./gradlew run
  ```

  The `run` task executes the main class of the Java application.

- **Clean the build directory:**

  ```bash
  ./gradlew clean
  ```

  The `clean` task deletes the build directory, removing all generated files.

- **Run tests:**

  ```bash
  ./gradlew test
  ```

  The `test` task runs the tests in the project.

- **Build the project (including tests):**

  ```bash
  ./gradlew build
  ```

  The `build` task compiles the source code, runs tests, and creates the output artifacts.

- **Generate a JAR file:**

  ```bash
  ./gradlew jar
  ```

  The `jar` task generates a JAR file containing the compiled classes and resources.

- **Create a distribution package:**

  ```bash
  ./gradlew distZip
  ```

  This command creates a distribution package, typically a ZIP file, containing the application and its dependencies.

- **Generate API documentation:**

  ```bash
  ./gradlew javadoc
  ```

  The `javadoc` task generates API documentation from the project's Java source code.

## Dependency Management

- **Download dependencies:**

  ```bash
  ./gradlew dependencies
  ```

  The `dependencies` task displays the resolved dependencies for the project.

- **Update dependencies:**

  ```bash
  ./gradlew dependencyUpdates
  ```

  This command checks for newer versions of the project's dependencies.

- **Display dependency tree:**

  ```bash
  ./gradlew dependencyTree
  ```

  The `dependencyTree` task shows a tree-like representation of the project's dependencies.

## Additional Resources

For more detailed information on Gradle and its usage, refer to the official Gradle documentation:

- [Gradle User Manual](https://docs.gradle.org/current/userguide/userguide.html)
- [Gradle Build Script Basics](https://docs.gradle.org/current/userguide/tutorial_using_tasks.html)
- [Gradle Command-Line Interface](https://docs.gradle.org/current/userguide/command_line_interface.html)
