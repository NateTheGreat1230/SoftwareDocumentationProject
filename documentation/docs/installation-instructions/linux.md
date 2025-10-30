---
sidebar_position: 2
---

# Installation On Linux

Instructions here vary depending on what version of linux you use. There are many ways to install VS Code on linux, but the easiest ways for each distribution type are listed below.

## Debian Based

_**Note:** This applies to all Linux distributions that use the `apt` package manager, including Ubuntu, Debian, and their derivatives._

1. Download the [VS Code .deb](https://go.microsoft.com/fwlink/?LinkID=760868) package (64-bit).

2. Open a terminal and navigate to the directory where the package was downloaded.

3. Run the following command to install it:

   ```bash
   sudo apt install ./<file>.deb
   ```

   _**Note:** Replace `<file>` with the actual file name of the downloaded package._

   **Optional**: On **non-interactive systems**, you can enable automatic repository setup by running:

   ```bash
   echo "code code/add-microsoft-repo boolean true" | sudo debconf-set-selections
   ```

4. After installation, you can launch VS Code from:

   - The **application menu**.
   - Or by typing `code` in the terminal.

## Arch Based

_**Note:** This applies to all Linux distributions that use the `pacman` package manager, including Arch Linux, Manjaro, and their derivatives._

1. Open a terminal.

2. Install Visual Studio Code from the **Arch User Repository (AUR)** using an AUR helper such as `yay`:

   ```bash
   yay -S visual-studio-code-bin
   ```

   _**Note:** You must have an AUR helper like `yay` installed to use this command. Instructions for installing `yay` can be found in the [Arch Wiki](https://wiki.archlinux.org/title/AUR_helpers#yay)._

3. After installation, you can launch VS Code from:

   - The **application menu**.
   - Or by typing `code` in the terminal.

## Red Hat Based

_**Note:** This applies to all Linux distributions that use the `dnf` or `yum` package managers, including Fedora, Red Hat Enterprise Linux (RHEL), and CentOS._

1. Open a terminal.

2. Add the official Microsoft repository and signing key:

   ```bash
   sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
   echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\nautorefresh=1\ntype=rpm-md\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" | sudo tee /etc/yum.repos.d/vscode.repo > /dev/null
   ```

3. Update your package list and install VS Code:

   ```bash
   sudo dnf check-update
   sudo dnf install code
   ```

   _**Note:** If you are using an older distribution that uses `yum` instead of `dnf`, replace `dnf` with `yum` in the commands._

4. After installation, you can launch VS Code from:

   - The **application menu**.
   - Or by typing `code` in the terminal.

## Other Distributions

If your distribution is not listed here, install VS Code from source using GitHub repository:

```bash
git clone https://github.com/microsoft/vscode.git
```

Follow your distribution's specific instructions for building and installing software from source.
