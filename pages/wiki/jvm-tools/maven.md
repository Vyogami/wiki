# Maven

This document serves as a reference guide for using Maven, a popular build automation and dependency management tool for Java projects. Maven simplifies the build process by providing a standard project structure, managing dependencies, and automating various tasks.

## Installation

To install Maven, follow the instructions for your operating system from the official Maven documentation:

- [Maven Installation Documentation](https://maven.apache.org/install.html)

## Project Initialization

- **Create a new Maven project:**

  ```bash
  mvn archetype:generate -DgroupId=com.example -DartifactId=my-project -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
  ```

  This command creates a new Maven project using the `maven-archetype-quickstart` archetype. It generates a basic project structure with source code and a sample test class.

## Project Structure

Maven follows a standard project structure, where source code, resources, and configuration files are organized in specific directories. Here are some important directories:

- `src/main/java`: Contains the main Java source code.
- `src/main/resources`: Contains the main resources, such as configuration files and property files.
- `src/test/java`: Contains the test Java source code.
- `src/test/resources`: Contains the test resources.
- `pom.xml`: The Project Object Model (POM) file that defines the project configuration, dependencies, and build settings.

## POM (Project Object Model) Configuration

The POM file (`pom.xml`) is the heart of a Maven project. It contains project information, configuration, and dependency declarations. Here are some common configurations:

- **Define project information:**

  ```xml
  <groupId>com.example</groupId>
  <artifactId>my-project</artifactId>
  <version>1.0.0</version>
  ```

  These elements specify the project's group ID, artifact ID, and version.

- **Declare project dependencies:**

  ```xml
  <dependencies>
      <dependency>
          <groupId>com.example</groupId>
          <artifactId>my-library</artifactId>
          <version>1.0.0</version>
      </dependency>
  </dependencies>
  ```

  This block declares the dependencies required for the project. Specify the group ID, artifact ID, and version of each dependency.

- **Configure build plugins:**

  ```xml
  <build>
      <plugins>
          <plugin>
              <groupId>org.apache.maven.plugins</groupId>
              <artifactId>maven-compiler-plugin</artifactId>
              <version>3.8.1</version>
              <configuration>
                  <source>1.8</source>
                  <target>1.8</target>
              </configuration>
          </plugin>
      </plugins>
  </build>
  ```

  This example configures the `maven-compiler-plugin` to set the source and target compatibility to Java 8.

## Maven Build Lifecycle

Maven follows a predefined build lifecycle that consists of phases and goals. Here are some commonly used commands:

- **Compile the project:**

  ```bash
  mvn compile
  ```

  This command compiles the source code of the project.

- **Run tests:**

  ```bash
  mvn test
  ```

  The `test` command executes the tests in the project.

- **Package the project:**

  ```bash
  mvn package
  ```

  The `package` command creates a JAR or WAR file of the project, depending on the packaging configuration in the POM file.

- **Install the project artifacts to the local repository:**

  ```bash
  mv

  install
  ```

  This command installs the project artifacts (JAR, WAR, etc.) into the local Maven repository. Other projects can then use these artifacts as dependencies.

- **Clean the project:**

  ```bash
  mvn clean
  ```

  The `clean` command deletes the target directory, removing all generated files.

- **Generate project documentation:**

  ```bash
  mvn site
  ```

  This command generates the project documentation, including reports and other useful information.

- **Run a custom Maven goal:**

  ```bash
  mvn <goal_name>
  ```

  Replace `<goal_name>` with the name of the desired Maven goal.

## Dependency Management

- **Download project dependencies:**

  ```bash
  mvn dependency:resolve
  ```

  The `dependency:resolve` command downloads the project dependencies.

- **Update project dependencies:**

  ```bash
  mvn versions:display-dependency-updates
  ```

  This command checks for newer versions of the project's dependencies.

- **Display project dependency tree:**

  ```bash
  mvn dependency:tree
  ```

  The `dependency:tree` command shows a tree-like representation of the project's dependencies.

## Additional Resources

For more detailed information on Maven and its usage, refer to the official Maven documentation:

- [Maven Getting Started Guide](https://maven.apache.org/guides/getting-started/)
- [Maven POM Reference](https://maven.apache.org/pom.html)
