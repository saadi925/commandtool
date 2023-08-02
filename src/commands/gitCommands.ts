const gitCommandsList = [
  {
    subheading: "Git Setup and Configuration:",
    commands: [
      "git config --global user.name Saad",
      "git config --global user.email userid925925@gmail.com",
    ],
    searchKeywords: ["setup", "git configuration"],
  },
  {
    subheading: "Repository Initialization and Basic Commands:",
    commands: [
      "git init",
      "git add .",
      "git status",
      "git commit -m 'Commit Changes'",
      "git commit -a -m 'Direct Commit without staging area'",
      "git commit --amend",
      "git rm -r [file-name.txt]",
    ],
    searchKeywords: ["git repo", "git basic commands", "direct commit"],
  },
  {
    subheading: "Git Aliases:",
    commands: [
      "git config --global alias.st status",
      "git config --global alias.ci commit",
      "git config --global alias.unstage 'restore --staged --'",
      "git config --global alias.last 'log -p -1'",
    ],
    searchKeywords: ["", "", "", ""],
  },
  {
    subheading: "Remote Repository and Changes:",
    commands: [
      "git remote -v",
      "git remote push -u origin master",
      "git remote add origin ssh://git@github.com/[username]/[repository-name].git",
      "git push",
      "git pull",
      "git pull origin [branch name]",
      "git remote set-url origin ssh://git@github.com/[username]/[repository-name].git",
    ],
    searchKeywords: [
      "git remote repositry",
      "repo git",
      "git changes",
      "git push and pull",
    ],
  },
  {
    subheading: "Branching:",
    commands: [
      "git branch",
      "git branch -d [branch name]",
      "git branch -D [branch name]",
      "git branch",
      "git checkout -b [branchname]",
      "git branch -v",
      "git branch --merged",
      "git branch --nomerged",
    ],
    searchKeywords: ["merge", "no merge"],
  },
  {
    subheading: "Git Log and History:",
    commands: [
      "git log",
      "git log --summary",
      "git log --oneline",
      "git log --oneline",
      "git log --stat",
      "git diff [source branch] [target branch]",
      "git diff --staged",
    ],
    searchKeywords: [
      "git logging",
      "git history",
      "log and history",
      "git statistics",
    ],
  },
  {
    subheading: "Git Stash:",
    commands: ["git stash", "git stash pop", "git stash clear"],
    searchKeywords: ["stashing", "git stashing", "git clear"],
  },
  {
    subheading: "Reverting and Squashing",
    commands: ["git revert", "git rebase -i"],
    searchKeywords: ["revert in git", "git squashing"],
  },
  {
    subheading: "Fetch and Reset:",
    commands: ["git fetch origin", "git reset --hard origin/master"],
    searchKeywords: ["git fetch", "git reset"],
  },
  {
    subheading: "Other Useful Commands",
    commands: ["git clean -df"],
    searchKeywords: ["git clean", "-df"],
  },
];

export default gitCommandsList;
