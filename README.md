# Levers for Progress codebase

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

#

## Website to-dos: Anson
- Ensure pics in lever pages and their captions show up on website
- Animations
- Letter image styling
- Remaining levers outreach
- Bolded text on letter looks kinda blurry?
- Foonote issue
- Update CTA to make you can go to collection right away
- Custom images for levers
- Intra-website link styling (e.g. going from AMCs to FROs lever)

