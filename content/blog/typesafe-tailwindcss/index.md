---
title: 'Typesafe Tailwind CSS'
slug: 'typesafe-tailwindcss'
date: '2021-05-27'
draft: true
tags:
  - programming
  - typescript
  - tailwind
---

Recently I've been working on a fully strong-typed Typescript project (Prisma, Blitz.js, React) and it's been a bless.

The only non-typed part was styles: I'm using beloved https://tailwindcss.com/ and https://tailwindui.com/. Almost everything is great with it, there are many articles why it's awesome and won't dive into details here. Some people don't like it, but the majority thinks it's a great tool and I'm in the same camp with them.

## Problem

But one thing that started bothering me as the project grew. I was modifying the default `tailwind.config.js` to enable and disable some features and every time after the change I had to do full-text search to replace classes that we're modified or removed.

Writing components wasn't always easy too. I'm not Tailwind pro yet and I had to look up their documentation many times. This specific problem could be solved by using [their VSCode extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) which provides quite advanced autocomplete, syntax-highlighting, and linting.

I wanted more. I wanted autocomplete no matter which editor you're using and I wanted type-safety so every mistake, typo, or using a class that is not generated anymore is caught during transpilation from Typescript to Javascript.

## Are there any existing solutions?

I did a quick research of the exising solutions. I was pretty sure that the problem is solved somehow. Yeah, it's solved but I didn't like the solutions.

https://github.com/thien-do/typed.tw is one of the solutions. It works quite good but Tailwind Plugins are not officially supported and PurgeCSS requires additional setup that might not work if you don't use Webpack.

<figure>
    <img src="./typed-tw.png" title="Typed.tw example">
</figure>

I didn't like syntax and conditional application of classes seemed to complicated to me. I got used to https://github.com/JedWatson/classnames and wanted to use something close.

There were a couple of other less popupar solutions and they were either pinned to a specific Tailwind version and didn't allow using additional plugins, or required additional complicated setup in the toolchain.

So, I decided to come up with something that suits my needs.

## Solution

> Disclaimer. The solution doesn't claim to be universal, but it worked for me really well.

### Step 1. Utility classes

As I said earlier, basically I wanted to wrap https://github.com/JedWatson/classnames with a custom type-safe function which would all to pass only classes that are valid for the current project Tailwind configuration.

```js
import cn from 'classnames';

classNames('flex', 'items-center'); // => 'flex items-center'

classNames(
  'flex',
  { 'items-center': true, 'items-baseline': false },
  isJustified ? 'justify-center' : undefined
); // => 'flex items-center justify-center'
```

So, the start is really simple:

```js
import cn from 'classnames';

// we will need to generate this type automatically based on your tailwind.config.js
type TWClass = 'flex' | 'items-center' | 'items-baseline';

type ClassValue = TWClass | { [key in TWClass]: boolean } | undefined | null;

export const tw = (...classes: ClassValue[]): string => {
  return cn(...classes);
};
```

Let's see how it looks in action in VSCode:

<figure>
    <img src="./example-1.gif" title="Typesafety and Autocomplete">
</figure>

It looks great already, really close to what I wanted to see in the end and it's very convenient to use if you have some if/else logic in your classname. But if you don't have any condition this `tw` function is not great because you'll need to separate use class separately. It's especially annoying when your definition is just a list of 10 classes without any logic, or you copy classes from a Tailwind example.

Let's try to come up with a solution for this use case. This solution will require Typescript&nbsp;4.1.

```js

type Split<S extends string, D extends string> = string extends S
  ? string[]
  : S extends ''
  ? []
  : S extends `${infer T}${D}${infer U}`
  ? [T, ...Split<U, D>]
  : [S];

const createFn = <F extends TWClass>() => {
  type OptionalF = F | null | undefined;
  return <T extends Split<T, ' '> extends F[] ? string : F>(
    className: T,
    ...classes: OptionalF[]
  ): string => cx(className, ...classes);
};

export const twf = createFn<TWClass>();

```

<figure>
    <img src="./example-2.gif" title="Typesafety and Autocomplete">
</figure>

### Step 2. Generating types

Let's focus on the second part of the goal: generate all possible class names based on `tailwind.config.js`.

> I wish Tailwind CLI had an option to generate an array of all possible class names. There's no such option, so we need to parse CSS.
