# Terminal Workshop

## Unix vs. Windows

*Always pay attention to your prompt!*  The instructions below contain some examples which start with `$` (this is for Unx based machines), the examples with `>` are for Windows.

## Who am I?

You are a user 🙋. To find out who you are you can always ask!

    $ whoami

    > whoami

## Where am I?

Directories are folders 📁. When you open the terminal you are in your home 🏠 folder or directory. If you get lost you can ask!

    $ pwd

    > echo %cd%

##  What is in the 📁 or directory?

    $ ls

    > dir

## Navigating to a new 📁

Think of 📁 as a tree 🌲. You can climb up and down the 🌲.

To go in a 📁 up the tree. 

    $ cd Documents

    > cd Documents

To go back down the tree.

    $ cd ..

    > cd ..

## Making a new 📁

    $ mkdir 🌞

    > mkdir 🌞

## Putting some stuff together 🤔

    $ cd 🌞

    $ pwd

    $ cd ..

    $ pwd

## Creating files 📝

    $ cd 🌞

You can create an empty file by touching 👈 it and naming it.

    $ touch 🌏

    > echo.> 🌏

    > type nul > 🌏

Was the 🌏 📝 created? List the contents of 🌞. 

    $ ls

    > dir

Let's add some 👯 to 🌏. You can do this by simply echoing 📣 👯, and directing it into 🌏.   

    $ echo 👯 > 🌏

To see if 🌏 now has 👯, you have to ask the cat 😺. 

    $ cat 🌏

    > type 🌏

Let's add more 👯 to 🌏, and then count 💯 them! The >> means to add/append to 🌏. 

    $ echo 👯 >> 🌏 

    $ echo 👯 >> 🌏 

    $ echo 👯 >> 🌏 

    $ wc 🌏


    > type 🌏 | find /c /v ""

The `wc` shows number of 👯, number of lines and number of bytes. 

## Deleting ❌

    $ touch 🌕

    $ ls

    $ rm 🌕


    > echo.> 🌕 

    > dir

    > del 🌕

## Searching 🔍

You can search through 📃 by grepping 🔍. So to 🔍 for 👯 on 🌏.

    $ grep 👯 🌏

    > type 🌏 | findstr "👯"

## Pipes |

You can send output from one command into another with a pipe |. What does the following do? 

    $ cat 🌏 | wc

The Internet w/ curl 📡

    curl https://www.reddit.com

Windows

https://stackoverflow.com/questions/9507353/how-do-i-install-and-use-curl-on-windows

## Cut/Replace ✂️

    $ sed -i -e 's/👯/👫/g' 🌏

Putting some stuff together...

    $ curl -o 🐔 https://www.reddit.com

    $ sed -e 's/</👯/g' 🐔 > 📱

    $ cat 📱

    $ cat 📱 | sed -e 's/>/🌮/g' > 💻

    $ cat  💻

Repeat!

    $ sed -e 's/a/🌯/g' 💻 > 📱

    $ cat 📱 | sed -e 's/1/🌯/g' > 💻
    
## Hacker tools

[https://hacker-tools.github.io/](https://hacker-tools.github.io/)

## Install Git

https://git-scm.com/

## Create a blackbox account

Select a username that is: *all one word*.

*Write down your password, and don't forget it.*

http://blackbox.pubkey.space/signup/

## Checkout your repository

Please NOTE: *Replace __USERNAME__* with your selected username.

    $ git clone ssh://__USERNAME__@blackbox.pubkey.space/home/__USERNAME__/archive.git archive

## Go into your repository folder/director

    $ cd archive

## Add a file to that folder

    $ touch foo

## Add the file to git

    $ git add foo 

Or ...

    $ git add *

## Do a commit with a message

    $ git commit -am "I added the file foo"

## Commit the file to the server

    $ git push origin master

