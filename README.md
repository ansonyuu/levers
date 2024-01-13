# Levers for Progress codebase

_Developed by [Anson Yu](https://www.ansonyu.me/) and [Kelvin Yu](https://www.kelv.me)_

![Landing Page](https://github.com/ansonyuu/levers/blob/main/public/cover-landing.png)

This README file serves as basic documentation for the website to help future developers working on it.

## Overview

This website uses:

- NextJS as the overall framework
  - this makes it easy to find the file corresponding to a URL: just go to `pages/[route]`
- TailwindCSS for styling
  - Tailwind Typography for blog post formatting

![Moon Landing](https://github.com/ansonyuu/levers/blob/main/public/letter-moon.png)

## Setup

Set up how you would a normal Node/React/NextJS project. After cloning the repo:

- run `npm i` to install packages
- run `npm run dev` to start a hot-refreshing preview at `localhost:3000`
- run `npm run build` to build the site. This will be run when deploying, ex. by a CI/CD service. If the build is failing in CI/CD, it can be useful to test locally.
