# Git

This document serves as a reference guide for using Git, a distributed version control system widely used for managing source code and project files. Git enables multiple developers to collaborate on a project, track changes, and manage different versions of files.

## Table of Contents

- [Git](#git)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Repository Initialization](#repository-initialization)
  - [Configuration](#configuration)
  - [Branches](#branches)
  - [Committing Changes](#committing-changes)
  - [Updating and Synchronizing](#updating-and-synchronizing)
  - [History and Logs](#history-and-logs)
  - [Remote Repository](#remote-repository)
  - [Undoing Changes](#undoing-changes)
  - [Stash](#stash)
  - [Collaboration and Advanced Operations](#collaboration-and-advanced-operations)
  - [Further Reading](#further-reading)

## Installation

To install Git, follow the instructions for your operating system from the official Git documentation:

- [Git Installation Documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Repository Initialization

- **Initialize a new repository:**

  ```shell
  git init
  ```

- **Clone a repository:**

  ```shell
  git clone <repository_url>
  ```

## Configuration

- **Set user information:**

  ```shell
  git config --global user.name "Your Name"
  git config --global user.email "yourname@example.com"
  ```

## Branches

- **Create a new branch:**

  ```shell
  git branch <branch_name>
  ```

- **Switch to a branch:**

  ```shell
  git checkout <branch_name>
  ```

- **Create and switch to a new branch:**

  ```shell
  git checkout -b <branch_name>
  ```

- **List branches:**

  ```shell
  git branch
  ```

- **Delete a branch:**

  ```shell
  git branch -d <branch_name>
  ```

## Committing Changes

- **View changes made to files:**

  ```shell
  git status
  ```

- **Stage changes:**

  ```shell
  git add <file_name>
  ```

- **Stage all changes:**

  ```shell
  git add -A
  ```

- **Stage all changes made in the current working directory:**

  ```shell
  git add .
  ```

- **Commit changes:**

  ```shell
  git commit -m "Commit message"
  ```

- **Push changes to a remote repository:**

  ```shell
  git push origin <branch_name>
  ```

## Updating and Synchronizing

- **Update local repository with remote changes:**

  ```shell
  git pull
  ```

- **Fetch changes from a remote repository:**

  ```shell
  git fetch
  ```
  
  >  `fetch` retrieves the changes from a remote repository without automatically merging them, while `pull` fetches the changes and automatically merges them into the current branch
- **Merge changes from a branch:**

  ```shell
  git merge <branch_name>
  ```

- **Rebase changes from a branch:**

  ```shell
  git rebase <branch_name>
  ```

## History and Logs

- **View commit history:**

  ```shell
  git log
  ```

- **View commit details and changes:**

  ```shell
  git show <commit_hash>
  ```

- **View the reflog:**

  ```shell
  git reflog
  ```

  The `git reflog` command displays the reference log, which records the movements of `HEAD` and branch references in your repository. It shows a detailed history of commits, branch updates, and other operations, even if they are no longer reachable from the current branch.

  The output of `git reflog` includes information such as commit hashes, branch names, dates, and associated actions. It can be useful for recovering lost commits or undoing unintended changes.

  Example output:

  ```plaintext
  3c1d4f2 (HEAD -> master) HEAD@{0}: commit: Update README.md
  7f87f36 HEAD@{1}: commit: Add new feature
  a3b1e5c HEAD@{2}: commit: Fix bug #123
  c583246 HEAD@{3}: merge develop: Fast-forward
  f2d8a93 HEAD@{4}: commit: Implement feature XYZ
  ```

  Each entry in the reflog represents a previous state of `HEAD`. The `(HEAD -> master)` part indicates the current branch.

  To revert to a previous state, you can use the commit hash or reference the `HEAD@{n}` notation, where `n` is the position in the reflog history.

- **Restore to a previous state using reflog:**

  ```shell
  git reset --hard HEAD@{n}
  ```

  Replace `n` with the desired position in the reflog history.

- **Clean up the reflog:**

  ```shell
  git reflog expire --expire=30.days
  ```

  The `git reflog expire` command can be used to remove old entries from the reflog. The `--expire` flag specifies the expiration time for the entries. In the example above, it removes entries older than 30 days.

  This command is useful for keeping the reflog concise and removing unnecessary history entries.

- **Recover a lost commit using reflog:**

  1. Identify the commit hash or reference from the reflog history.
  2. Use the `git cherry-pick` command to apply the changes from the lost commit to the current branch:

     ```shell
     git cherry-pick <commit_hash>
     ```

     Replace `<commit_hash>` with the commit hash you want to recover.

     This command applies the changes from the specified commit to the current branch, effectively recovering the lost commit.

## Remote Repository

- **Add a remote repository:**

  ```shell
  git remote add <remote_name> <repository_url>
  ```

- **List remote repositories:**

  ```shell
  git remote -v
  ```

- **Remove a remote repository:**

  ```shell
  git remote remove <remote_name>
  ```

## Undoing Changes

- **Discard local changes to a file:**

  ```shell
  git checkout -- <file_name>
  ```

- **Undo the last commit (keep changes locally):**

  ```shell
  git reset HEAD~1
  ```

- **Delete untracked files:**

  ```shell
  git clean -f
  ```

## Stash

- **Stash changes for later use:**

  ```shell
  git stash save "Message"
  ```

- **Apply the most recent stash:**

  ```shell
  git stash apply
  ```

- **List all stashes:**

  ```shell
  git stash list
  ```

## Collaboration and Advanced Operations

- **Cherry-pick a commit from another branch:**

  ```shell
  git cherry-pick <commit_hash>
  ```

- **Merge changes with a specific strategy:**

  ```shell
  git merge --strategy=<strategy> <branch_name>
  ```

  Replace `<strategy>` with the desired merge strategy, such as `recursive`, `ours`, or `theirs`.

- **View branches and their commit history graphically:**

  ```shell
  git log --graph --oneline --decorate --all
  ```

- **View the difference between branches or commits:**

  ```shell
  git diff <branch_or_commit>..<branch_or_commit>
  ```

- **Show changes introduced by a commit:**

  ```shell
  git show <commit_hash>
  ```

- **List all tags:**

  ```shell
  git tag
  ```

- **Create a tag for a specific commit:**

  ```shell
  git tag <tag_name> <commit_hash>
  ```

- **Delete a tag:**

  ```shell
  git tag -d <tag_name>
  ```

## Further Reading

For more detailed information on Git and its usage, refer to the official Git documentation:

- [Pro Git Book](https://git-scm.com/book/en/v2)
- [Git Command-Line Reference](https://git-scm.com/docs)
