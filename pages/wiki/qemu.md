# QEMU

1. Installation

    ```sh
    # @HOST
    sudo pacman -S qemu qemu-arch-extra samba openssh
    ```

1. Creating image

    ```sh
    # @HOST
    qemu-img create -f qcow2 [IMAGE-NAME] 15G
    ```

    - qemu-img: It’s the disk image utility provided by QEMU;
    - create: Indicates that we want to create new disk image, you can add options to enable or disable features;
    - -f qcow2: Specifies the image format; usually, you want ‘raw’ or ‘qcow2’. Raw images are fast, but it uses all the determined size at once; on the other hand, qcow2 is a little bit slower, but it increases the image size based on VM usage with the limit being the size given at creation;
    - [IMAGE-NAME]: This command will end up with an image file, and here is the name that we assign; feel free to assign whatever name you want to it;
    - 15G: The image size.
        > I'll recommend using atleast 30G
