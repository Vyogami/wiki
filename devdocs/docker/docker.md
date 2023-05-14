# Docker Documentation

This document serves as a reference guide for using Docker, a popular platform for building, packaging, and distributing containerized applications. Docker allows you to create lightweight, isolated containers that encapsulate your application and its dependencies.

- [Docker Documentation](#docker-documentation)
  - [Installation](#installation)
  - [Basic Commands](#basic-commands)
  - [Container Management](#container-management)
  - [Port Mapping](#port-mapping)
    - [Example](#example)
  - [Image Management](#image-management)
  - [Volume Management](#volume-management)
  - [Network Management](#network-management)
  - [Miscellaneous Commands](#miscellaneous-commands)
  - [Further Reading](#further-reading)

## Installation

To install Docker, follow the instructions for your operating system from the official Docker documentation:

- [Docker Installation Documentation](https://docs.docker.com/get-docker/)

## Basic Commands

Here are some of the most commonly used commands in Docker:

## Container Management

- **List running containers:**

    ```shell
    docker ps
    ```

- **List all containers (including stopped ones):**

    ```shell
    docker ps -a
    ```

- **Create a container from an image:**

    ```shell
    docker create --name mycontainer image:tag
    ```

  - `--name`: Specifies the name you want to assign to the container. (Default: randomly generated name)
  - `image:tag`: Specifies the image and its version or tag to use for creating the container.
    > tag can be thought of as a version, default is `latest`

- **Start a container:**

    ```shell
    docker start mycontainer
    ```

- **Stop a running container:**

    ```shell
    docker stop mycontainer
    ```

- **Restart a container:**

    ```shell
    docker restart mycontainer
    ```

- **Remove a container:**

    ```shell
    docker rm mycontainer
    ```

## Port Mapping

To map ports when running a container, use the `-p` or `--publish` flag followed by the host port and container port.

```shell
docker run -p <host_port>:<container_port> image:tag
```

### Example

To map port 8080 from the container to port 8888 on the host system, you can use the following command:

```shell
docker run -p 8888:8080 image:tag
```

## Image Management

- **List available images:**

    ```shell
    docker image ls
    ```

- **Pull an image from a registry:**

    ```shell
    docker pull image:tag
    ```

- **Remove an image:**

    ```shell
    docker image rm image:tag
    ```

    > `prune` is used for removing unused images to reclaim disk space, `rm` is used for selectively removing specific Docker images.

- **Remove unused images:**
  
  ```shell
  docker image prune
  ```

- **Interactive tty:**
  To run image in interactive tty use the following command

  ```shell
  docker run -it image:tag
  ```

- **Build an image from a Dockerfile:**

    ```shell
    docker build -t image:tag .
    ```

  - `-t`: Assigns a tag or name to the built image. (Default: no tag)
  - `.`: Specifies the build context, which is the directory containing the Dockerfile.

    Sample Docker file

    ```dockerfile
    # Base image
    FROM ubuntu:latest

    # Set the working directory inside the container
    WORKDIR /app

    # Copy the application files to the container
    COPY . .

    # Install dependencies
    RUN apt-get update \
        && apt-get install -y <package1> <package2> \
        && apt-get clean

    # Expose a port for the application to listen on
    EXPOSE 8080

    # Set an environment variable
    ENV ENV_VARIABLE=value

    # Set the entry point command
    ENTRYPOINT ["python"]

    # Specify the default command argument
    CMD ["app.py"]
    ```

    - **FROM**: Specifies the base image for the Docker image. In this example, we are using the latest version of the Ubuntu image as the base.

    - **WORKDIR**: Sets the working directory inside the container where subsequent commands will be executed. In this case, it sets the working directory to `/app`.

    - **COPY**: Copies the files and directories from the build context (current directory) to the specified location inside the container. This command copies the application files into the `/app` directory inside the container.

    - **RUN**: Executes a command inside the container during the build process. In this example, it updates the package index, installs specified packages, and cleans up any temporary files.

    - **EXPOSE**: Informs Docker that the container will listen on the specified port at runtime. It does not actually publish the port to the host system. Here, port 8080 is exposed.

    - **ENV**: Sets an environment variable inside the container. In this case, it defines the `ENV_VARIABLE` with the value `value`. You can use this variable within the container during runtime.

    - **ENTRYPOINT**: Specifies the command to be executed when the container starts. Unlike `CMD`, which can be overridden with a new command when running the container, `ENTRYPOINT` provides a fixed command that cannot be easily overridden. In this example, the entry point command is set to `python`.

    - **CMD**: Provides default arguments for the `ENTRYPOINT` command. If no arguments are passed to the container at runtime, the values specified in `CMD` will be used. In this case, the default command argument is `app.py`, so if no alternate command is provided when running the container, it will execute `python app.py`.

    The `ENTRYPOINT` and `CMD` instructions together define the executable for the container. The `CMD` instruction provides defaults, and the `ENTRYPOINT` instruction allows the container to be run as if it were the specified executable. You can override the `CMD` values by providing a new command when running the container.

## Volume Management

- **Create a named volume:**

    ```shell
    docker volume create myvolume
    ```

- **Mount a volume to a container:**

    ```shell
    docker run -v myvolume:/path/in/container image:tag
    ```

  - `-v`: Mounts a volume to the specified path inside the container.

- **List all volumes:**

    ```shell
    docker volume ls
    ```

- **Remove a volume:**

    ```shell
    docker volume rm myvolume
    ```

## Network Management

- **List all networks:**

    ```shell
    docker network ls
    ```

- **Create a network:**

    ```shell
    docker network create mynetwork
    ```

- **Run a container on a specific network:**

    ```shell
    docker run --network=mynetwork image:tag
    ```

  - `--network`: Specifies the network to connect the container to. (Default: "bridge"), other networks are `host`.

- **Remove a network:**

    ```shell
    docker network rm mynetwork
    ```

## Miscellaneous Commands

Here are a few more commands that can be helpful:

- **View logs of a running container:**

    ```shell
    docker logs mycontainer
    ```

- **Execute a command inside a running container:**

    ```shell
    docker exec mycontainer command
    ```

- **Inspect details of a container:**

    ```shell
    docker inspect mycontainer
    ```

## Further Reading

For more detailed information on Docker and its usage,refer to the official Docker documentation:

- [Docker User Guide](https://docs.docker.com/get-started/)
- [Docker Command-Line Reference](https://docs.docker.com/engine/reference/commandline/cli/)
