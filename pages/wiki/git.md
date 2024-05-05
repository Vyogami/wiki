# Git

This document serves as a reference guide for using Git, a distributed version control system widely used for managing source code and project files. Git enables multiple developers to collaborate on a project, track changes, and manage different versions of files.

## Installation

To install Git, follow the instructions for your operating system from the official Git documentation:

- [Git Installation Documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Repository Initialization

- **Initialize a new repository:**

  ```bash
  git init
  ```

- **Clone a repository:**

  ```bash
  git clone <repository_url>
  ```

## Configuration

- **Set user information:**

  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "yourname@example.com"
  ```

## Branches

- **Create a new branch:**

  ```bash
  git branch <branch_name>
  ```

- **Switch to a branch:**

  ```bash
  git checkout <branch_name>
  ```

- **Create and switch to a new branch:**

  ```bash
  git checkout -b <branch_name>
  ```

- **List branches:**

  ```bash
  git branch
  ```

- **Delete a branch:**

  ```bash
  git branch -d <branch_name>
  ```

- **Rename a branch:**

  ```bash
  git branch -m <new_branch_name>
  ```

  > Here '-m' stands for 'move'

## Committing Changes

- **View changes made to files:**

  ```bash
  git status
  ```

- **Stage changes:**

  ```bash
  git add <file_name>
  ```

- **Stage all changes:**

  ```bash
  git add -A
  ```

- **Stage all changes made in the current working directory:**

  ```bash
  git add .
  ```

- **Commit changes:**

  ```bash
  git commit -m "Commit message"
  ```

- **Push changes to a remote repository:**

  ```bash
  git push origin <branch_name>
  ```

## Updating and Synchronizing

- **Update local repository with remote changes:**

  ```bash
  git pull
  ```

- **Fetch changes from a remote repository:**

  ```bash
  git fetch
  ```

  > `fetch` retrieves the changes from a remote repository without automatically merging them, while `pull` fetches the changes and automatically merges them into the current branch

- **Merge changes from a branch:**

  ```bash
  git merge <branch_name>
  ```

- **Rebase changes from a branch:**

  ```bash
  git rebase <branch_name>
  ```

## History and Logs

- **View commit history:**

  ```bash
  git log
  ```

- **View commit details and changes:**

  ```bash
  git show <commit_hash>
  ```

- **View the reflog:**

  ```bash
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

  ```bash
  git reset --hard HEAD@{n}
  ```

  > Replace `n` with the desired position in the reflog history.

  The `git reset` command is a powerful tool in Git that allows you to undo changes and move the repository back to a previous commit. It operates on "The Three Trees of Git": the Commit Tree (HEAD), the Staging Index, and the Working Directory.

  There are three primary forms of invocation for `git reset`, each corresponding to different command line arguments: `--soft`, `--mixed`, and `--hard`. These arguments determine how the command affects the three trees.

  - `--soft`: This form of `git reset` moves the branch pointer (HEAD) to the specified commit, but leaves the changes in the Staging Index and Working Directory intact. It essentially undoes the last commit without losing the changes made.
  - `--mixed`: This is the default form of `git reset` if no argument is provided. It moves the branch pointer to the specified commit and updates the Staging Index to match that commit. However, it does not modify the Working Directory, so the changes made after the specified commit are still present but not staged[2].
  - `--hard`: This form of `git reset` moves the branch pointer to the specified commit, updates the Staging Index to match that commit, and also modifies the Working Directory to reflect the state of the specified commit. It effectively discards all changes made after the specified commit.

- **Clean up the reflog:**

  ```bash
  git reflog expire --expire=30.days
  ```

  The `git reflog expire` command can be used to remove old entries from the reflog. The `--expire` flag specifies the expiration time for the entries. In the example above, it removes entries older than 30 days.

  This command is useful for keeping the reflog concise and removing unnecessary history entries.

- **Recover a lost commit using reflog:**

  1. Identify the commit hash or reference from the reflog history.
  2. Use the `git cherry-pick` command to apply the changes from the lost commit to the current branch:

     ```bash
     git cherry-pick <commit_hash>
     ```

     Replace `<commit_hash>` with the commit hash you want to recover.

     This command applies the changes from the specified commit to the current branch, effectively recovering the lost commit.

## Remote Repository

- **Add a remote repository:**

  ```bash
  git remote add <remote_name> <repository_url>
  ```

- **List remote repositories:**

  ```bash
  git remote -v
  ```

- **Remove a remote repository:**

  ```bash
  git remote remove <remote_name>
  ```

## Undoing Changes

- **Discard local changes to a file:**

  ```bash
  git checkout -- <file_name>
  ```

- **Undo the last commit (keep changes locally):**

  ```bash
  git reset HEAD~1
  ```

- **Delete untracked files:**

  ```bash
  git clean -df
  ```

  > Note: here -d remove all the untracked directories -f all the untracked files.

## Stash

- **Stash changes for later use:**

  ```bash
  git stash save "Message"
  ```

- **Apply the most recent stash:**

  ```bash
  git stash apply
  ```

- **List all stashes:**

  ```bash
  git stash list
  ```

## Collaboration and Advanced Operations

- **Cherry-pick a commit from another branch:**

  ```bash
  git cherry-pick <commit_hash>
  ```

- **Merge changes with a specific strategy:**

  ```bash
  git merge --strategy=<strategy> <branch_name>
  ```

  Replace `<strategy>` with the desired merge strategy, such as `recursive`, `ours`, or `theirs`.

- **View branches and their commit history graphically:**

  ```bash
  git log --graph --oneline --decorate --all
  ```

- **View the difference between branches or commits:**

  ```bash
  git diff <branch_or_commit>..<branch_or_commit>
  ```

- **Show changes introduced by a commit:**

  ```bash
  git show <commit_hash>
  ```

- **List all tags:**

  ```bash
  git tag
  ```

- **Create a tag for a specific commit:**

  ```bash
  git tag <tag_name> <commit_hash>
  ```

- **Delete a tag:**

  ```bash
  git tag -d <tag_name>
  ```

## Further Reading

For more detailed information on Git and its usage, refer to the official Git documentation:

- [Pro Git Book](https://git-scm.com/book/en/v2)
- [Git Command-Line Reference](https://git-scm.com/docs)
