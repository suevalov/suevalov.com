---
title: "Terminal Tips: iTerm2, oh-my-zsh and more"
slug: "terminal-tips"
date: "2018-04-17"
draft: false
cover: "./iterm.jpg"
showCoverInPost: true
tags:
    - programming
    - tools
---

My productivity heavily depends on the tool belt I use. Terminal is not an exception and I'd like to share my configuration and tweaks.

Let's go thought all the steps I would do if I bought the new laptop and I need to configure everything from scratch.

## Use iTerm2

Let's start from replacing default `Terminal.app` by [iTerm2](https://www.iterm2.com/), feature-packed and easily configurable solution that claimed to "do amazing things". Can't disagree with that.

* Download [iTerm2](https://www.iterm2.com/downloads.html)
* Read [the whole list](https://www.iterm2.com/features.html) of its features

## Use ZSH and Oh My ZSH

When you start a terminal application, by default it is running a shell called __Bash__. It's the most popular shell, but there are alternatives that make using the terminal faster and
more comfortable for developers.

My choice is ZSH and ZSH framework - [Oh My ZSH](http://ohmyz.sh/). It comes bundled with a hot of helpful functions, helpers and plugins that boost your productivity.

* Install [Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh)

* Read [Become A Command-Line Power User With Oh My ZSH And Z](https://www.smashingmagazine.com/2015/07/become-command-line-power-user-oh-my-zsh-z/)

## Make Your Terminal Pretty

I tried a lot of ZSH prompt themes and finally stayed with [Pure](https://github.com/sindresorhus/pure).

* Install [Pure](https://github.com/sindresorhus/pure)
* Install [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)
* Import [Snazzy.itermcolors](https://github.com/sindresorhus/iterm2-snazzy) to `Profiles -> Colors` in iTerm2 Settings

## Learn iTerm2 Tips & Tricks

### Useful Hotkeys

| Keys                 | Purpose                       |
| -------------------- | ----------------------------: |
| `Cmd + Shift + H`    | Show paste history            |
| `Cmd + /`            | Find current input            |
| `Cmd + D`            | Split pane horizontally       |
| `Cmd + Shift + D`    | Split pane vertically         |
| `Cmd + ]`            | Next pane                     |
| `Cmd + [`            | Previous pane                 |
| `Cmd + +`            | Increase font size            |
| `Cmd + -`            | Decrease font size            |
| `Cmd + T`            | Open new tab                  |
| `Cmd + Number`       | Switch to window              |
| `Cmd + K`            | Clear buffer                  |

### Open links from terminal

<figure style="text-aling: center;">
    <img src="iterm-links.gif" alt="Opening links in iTerm2">
    <figcaption>Hover while <code class="language-text">Cmd</code> is pressed</figcaption>
</figure>

Hold `Cmd` key while clicking on the link in the terminal. It's really useful when the output of the command is referring to some external resource.

### Different working directories

By default, splitting current screen in iTerm2 gives me new split screen in default location (which is user’s home directory) not in my current location.

If you want to have split screen of the current location you are working in go to: Preferences → Profiles → General → Working Directory

Then choose Advanced Configuration [Edit] .

### Custom Hotkeys

| Keys          |    Action    |  Value |                       Purpose |
| ------------- | :----------: | -----: | ----------------------------: |
| Cmd ←         |  “HEX CODE”  | `0x01` | Jump to beginning of the line |
| Cmd ➝         |  “HEX CODE”  | `0x05` |       Jump to end of the line |
| Cmd Backspace |  “HEX CODE”  | `0x15` |           Delete current line |
| Alt ←         | “ESCAPE SEQ” |    `b` | Jump to beginning of the word |
| Alt ➝         | “ESCAPE SEQ” |    `f` |       Jump to end of the word |
| Alt Backspace |  “HEX CODE”  | `0x17` |                   Delete word |

## Add Plugins and Aliases

* itermocil
* thefuck
* z
* add plugins for zsh
