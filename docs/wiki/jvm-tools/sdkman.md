# SDKMAN

This document serves as a reference guide for using SDKMAN, a tool that simplifies the management of software development kits (SDKs) and related tools. SDKMAN provides an easy way to install, manage, and switch between multiple versions of SDKs, such as Java, Kotlin, Groovy, and more.

## Installation

To install SDKMAN, run the following command in your terminal:

```bash
curl -s "https://get.sdkman.io" | bash
```

This command downloads and installs SDKMAN on your system.

Once the installation is complete, you need to restart your terminal or run the following command to start using SDKMAN:

```bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
```

## SDK Installation

- **List available SDKs:**

  ```bash
  sdk list
  ```

  This command displays a list of available SDKs that can be installed using SDKMAN.

- **Install a specific SDK:**

  ```bash
  sdk install <sdk_name>
  ```

  Replace `<sdk_name>` with the name of the SDK you want to install. For example, to install Java, use `sdk install java`.

- **Switch to a different version of an installed SDK:**

  ```bash
  sdk use <sdk_name> <version>
  ```

  Specify the `<sdk_name>` and `<version>` to switch to the desired version of the installed SDK. For example, to switch to a different version of Java, use `sdk use java 11.0.12-zulu`.

- **Display installed SDKs:**

  ```bash
  sdk list <sdk_name>
  ```

  Replace `<sdk_name>` with the name of the SDK to list its installed versions. For example, to list installed Java versions, use `sdk list java`.

- **Remove an installed SDK version:**

  ```bash
  sdk uninstall <sdk_name> <version>
  ```

  Specify the `<sdk_name>` and `<version>` of the SDK version to uninstall. For example, to uninstall a specific Java version, use `sdk uninstall java 11.0.12-zulu`.

## SDK Usage

- **Configure an SDK for the current terminal session:**

  ```bash
  sdk use <sdk_name> <version>
  ```

  This command configures the specified `<sdk_name>` and `<version>` for the current terminal session. It sets the environment variables necessary to use the selected SDK version.

- **Display the current SDK and version:**

  ```bash
  sdk current
  ```

  This command shows the currently configured SDK and its version.

- **Open the SDK home directory in a file explorer:**

  ```bash
  sdk home <sdk_name> <version>
  ```

  Replace `<sdk_name>` and `<version>` with the name and version of the SDK you want to open the home directory for. For example, `sdk home java 11.0.12-zulu` will open the Java 11.0.12-zulu home directory.

## Additional SDKMAN Commands

- **Upgrade SDKMAN to the latest version:**

  ```bash
  sdk selfupdate
  ```

  This command updates SDKMAN itself to the latest available version.

- **List available commands:**

  ```bash
  sdk help
  ```

  Use this command to display the available commands and their descriptions.

## Additional Resources

For more detailed information on SDKMAN and its usage, refer to the official SDKMAN documentation:

- [SDKMAN Installation Guide](https://sdkman.io/install)
- [SDKMAN Usage Guide](https://sdkman.io/usage)
