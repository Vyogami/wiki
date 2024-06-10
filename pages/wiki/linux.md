# Linux

## CLI Tools

### usermod

- Add user to a group

  ```shell
  usermod -aG group_name username
  ```

  `OR`

  ```shell
  usermod --append --groups agroup_name username
  ```

  > Here: '-aG' stands for '--append' and '--groups'.

- Add user to multiple goups at once.

  ```shell
  usermod -aG admins,wheel,sudo vyogami
  ```

  > Here: 'admins', 'wheel', 'sudo' are the name of the group and 'vyogami' is the name of the user. '-aG' stands for '--append' and '--groups'.

- change username

  ```shell
  usermod -l new_username old_username
  ```

  > Here: '-l' stands for '--login'.

- change user shell

  ```shell
  usermod -s path/to/shell username
  ```

  > Here: '-s' stands for '--shell'.

- change user home directory

  ```shell
  sudo usermod --move-home --home path/to/new_home username
  ```

  `OR`

  ```shell
  sudo usermod -m -d path/to/new_home username
  ```

  > Here: '-l' stands for '--login'.

- change user shell

  ```shell
  usermod -s path/to/shell username
  ```

  > Here: '-s' stands for '--shell'.

- Lock user's password

  ```shell
  usermod -L username
  ```

  > Here: '-L' stands for '--lock'.

- Unlock user's password

  ```shell
  usermod -U username
  ```

  > Here: '-L' stands for '--unlock'.

- Add expire date to user account

  ```shell
  usermod -e 2024-08-21 username
  ```

  > Here: '-e' stands for '--expiredate'.

### lscpu

- Display information about CPU architecture

  ```shell
  lscpu
  ```

- Display the CPU information in human readable format.

  ```shell
  lscpu -e
  ```

  > Here: '-e' stands for '--extended'.

## Problemo

### Check battery health

```shell
upower -i /org/freedesktop/UPower/devices/battery_BAT0
```

### Changing Default Editor in shell

To set Neovim as default editor, add the following line to the shell's startup file(.bashrc, .zshrc, config.fish):

- For zsh and bash

  ```sh
  export EDITOR=nvim
  ```

- For fish (`~/.config/fish/config.fish`):

  ```sh
  set -Ux EDITOR nvim
  ```

#### Special Case: `visudo`

`sudo` sanitizes environment variables, so the above method won't work for `visudo`. Use this command instead:

```sh
sudo EDITOR=nvim visudo
```

Alternatively, add the following line to the top of your `/etc/sudoers` file:

```sh
Defaults editor=/usr/bin/nvim
```
