# Working w/ `git`

## Getting started

Clone your repository to your laptop.

Please NOTE: *Replace `<USERSNAME>`* with your selected username.

    $ git clone ssh://<USERNAME>@blackbox.pubkey.space/home/<USERNAME>/archive.git archive

## Workflow

Generally speaking the 3 steps you will do most often, when adding new content to the server.

### Add new files to git

    $ git add *

### Do a commit with a message

    $ git commit -am "I added the file foo"

### Push the repository to the server

    $ git push origin master

## NOTES

You have to be in the `archive/` folder in the terminal for the commands to work.  You can verify this as follows.

    $ pwd

Should should you are in the `archive/` folder.

    $ cd ~/archive

Should place you in the correct folder.

## History

Git stores a working history for you.  That's why commit messages can be handy.

### Show the history log

    $ git log

### Show a specific commit

    $ git show <HASH>

`<HASH>` is the hash of the commit.  Probably something like ...

    $ git show 3beaab03b902ecd10a600580f447c256d0a7e1af

### Resetting to a historical point

    $ git reset --hard <HASH>

ex.

    $ git reset --hard 3beaab03b902ecd10a600580f447c256d0a7e1af

