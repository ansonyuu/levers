# Speculative Technologies codebase

_Developed by [Anson Yu](https://www.ansonyu.me/)_

This README file serves as basic documentation for the website to help future developers working on it.

## Overview

This website uses:

- NextJS as the overall framework
  - this makes it easy to find the file corresponding to a URL: just go to `pages/[route]`
  - mostly straightforward frontend without SSR functions
- TailwindCSS for styling
  - Tailwind Typography for blog post formatting
  - some custom colors (grey-300) configured in `tailwind.config.js`
  - the `components` folder contains Tailwind-based re-usable components like `CtaLink`, `FieldInput`, etc.
- HeadlessUI for dropdown menus (`popover`) and accordions (`disclosure`)

## Setup

Set up how you would a normal Node/React/NextJS project. After cloning the repo:

- run `npm i` to install packages
- run `npm run dev` to start a hot-refreshing preview at `localhost:3000`
- run `npm run build` to build the site. This will be run when deploying, ex. by a CI/CD service. If the build is failing in CI/CD, it can be useful to test locally.

Other data should be self-explanatory if you look at the page code.

## Updates

### Adding to Team, Updates, or FAQ

These are pages/components that lend themselves to semi-frequent updates. All of these sections source their data from files in `/data`. Content can be updated there and will be reflected in the final rendering

### Adding to the Library

To add a new post to the library, follow the guidelines below.

0. Turn the post into a markdown file. The parser accomodates h1-h4, but
1. Add the markdown file to the `/posts` folder. URLs and pages are automaticaly generated from the markdown file title.
2. Ensure that your file includes the following meta-data at the top, a sample is provided below.

```
---
title: "Whence Systems Research?"
subtitle: "What the the heck is systems research? Why is it important? Why are we bad at it? How could we do better?"
author: "Ben Reinhardt"
date: "2021-12-13"
type: "Article"
bannerImageBool: true
bannerImage: "/library/systems/cover.png"
---

```

| Metadata          | Purpose & Tips                                                                                                                     |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `title`           | Displayed as the title of the piece on the `/library` page and the respective post                                                 |
| `subtitle`        | Displayed as the title of the piece on the `/library` page and the respective post. Best approximately ~10 words long              |
| `authors`         | Displayed as authors on piece. Can include multiple                                                                                |
| `date`            | Displayed as date published. Also used to order posts on `/library` page. Formatted as `YYYY-MM-DD`                                |
| `type`            | Displayed as type. No set categories so any string can be used                                                                     |
| `bannerImageBool` | Used to determine whether or not there will be banner image                                                                        |
| `bannerImage`     | Used as source of hero banner image. Routes stated should be relative to the `/public` folder. If no banner, leave as empty string |

You are also able to add the "class="wide-figure" to `<figure>` to make it reach the end of the page

3. Add photos from within the piece to the `/public/library` folder, organized into a piece specific folder to keep things neat.

## Tips

**Adding Scripts**

All scripts go in the `<Head>` tag of `_document.tsx`. You can use NextJS's `<Script>` component, or go with a regular old `<script> tag. One thing to note is that it doesn't do well with inline scripts, and would opt for importing it from a static route instead. Exmaple below

` <script type="text/javascript" src="/static/script.js"></script>`

**Custom Classes for Site**

This site uses TailwindCSS for most of the styling. Like most tools, there is a tradeoff between flexibility and convenience. We can get around this by adding classes in `global.css`. Classes defined here can be used in any component throughout the site

**Custom Styling for Posts**

To maximize the reading experience, the styling and typography of the blog posts is different from the rest of the website. You may notice that the headers, `<li>` tags, etc are all different. If you are want to customize this further, it can be done in `pages/library/[slug].module.scss`
