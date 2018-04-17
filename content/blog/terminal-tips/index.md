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

https://medium.com/@jessesrsmith/five-tips-for-iterm-91db83cf4d4e

https://codeburst.io/8-must-know-terminal-commands-and-tips-for-productivity-mac-edition-95935dba3ebc

http://teohm.com/blog/working-effectively-with-iterm2/

My productivity heavily depends on the tool belt I use. Terminal is not an exception and I'd like to share my configuration and tips.

Let's go thought all the steps I would do if I bought the new laptop and I need to configure everything from scratch.

## iTerm and oh-my-zsh

for [iTerm2](https://www.iterm2.com/), the best
replacement of the default `Terminal.app`.

## Open links from terminal

Hold `Cmd` key while clicking on the link in the terminal. It's really useful when the output of the command is referring to some external resource.

## Different working directories

Often time when I am working in the terminal, I want to have a split screen of the current location. By default, splitting current screen in iTerm2 gives me new split screen in default location (which is user’s home directory) not in my current location.

If you want to have split screen of the current location you are working in go to: Preferences → Profiles → General → Working Directory

Then choose Advanced Configuration [Edit] .

## Useful Hotkeys

Paste history `Cmd + Shift + H`
Find current input `Cmd + /`
Split pane horizontally `Cmd + D`
Split pane vertically `Cmd + Shift + D`
Next pane `Cmd + ]`
Previous pane `Cmd + [`
Increase font size `Cmd + +`
Decrease font size `Cmd + -`
Open new tab: `Cmd + T`
Switch to window: `Cmd + Number`
Clear buffer: `Cmd + K`

## Custom Hotkeys

| Keys        | Action        | Value  | Purpose                       |
| ------------|:-------------:|-------:|------------------------------:|
| Cmd ←         | “HEX CODE”    | `0x01` | Jump to beginning of the line |
| Cmd ➝         | “HEX CODE”    | `0x05` | Jump to end of the line       |
| Cmd Backspace | “HEX CODE”    | `0x15` | Delete current line           |
| Alt ←         | “ESCAPE SEQ”  | `b`    | Jump to beginning of the word |
| Alt ➝         | “ESCAPE SEQ”  | `f`    | Jump to end of the word       |
| Alt Backspace | “HEX CODE”    | `0x17` | Delete word                   |
