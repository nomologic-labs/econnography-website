# Econography Writers Guide

This guide is for article writers who will use the GitHub website to add or update content on Econography.

You do **not** need programming experience to use this guide. You only need to know how to open files on GitHub, edit text, upload images, and save your changes.

## Before You Start

The most important safety rule is simple:

- Only work inside the `content` folder.

If you are looking at any other folder, stop and ask for help before changing anything.

## What Writers Are Allowed To Edit

Writers should only edit:

- `content`
- their own article folder inside `content`
- the `index.md` file inside that article folder
- image files that belong to that article

### Safe example

If your article is called `the-cost-of-energy-shocks`, the safe files would look like this:

- `content/the-cost-of-energy-shocks/index.md`
- `content/the-cost-of-energy-shocks/hero.jpg`
- `content/the-cost-of-energy-shocks/chart.jpg`

## What Writers Must Not Touch

Do **not** edit any of these folders:

- `app`
- `components`
- `lib`
- `data`
- `public`
- `node_modules`

Do **not** edit any of these files:

- `package.json`
- `package-lock.json`
- `next.config.mjs`
- `tsconfig.json`
- `tailwind.config.ts`
- `postcss.config.mjs`
- `LICENSE`

### Quick rule

If the file path does **not** start with `content/`, do not edit it.

## How Articles Are Stored

Every article lives in its **own folder** inside `content`.

Each article folder normally contains:

- `index.md` for the article text
- `hero.jpg` for the top banner image
- any extra images used inside the article, such as `chart.jpg` or `figure-1.png`

The article folder name also becomes part of the website link, so it should be chosen carefully and kept stable.

## How To Add a New Article

### Step 1: Create the article file on GitHub

1. Open the repository on GitHub.
2. Open the `content` folder.
3. Click `Add file`.
4. Click `Create new file`.
5. In the filename box, type:

```text
your-article-slug/index.md
```

This creates both the folder and the file at the same time.

### Step 2: Use a clean folder name

Use these rules for the folder name:

- use lowercase letters only
- separate words with hyphens `-`
- do not use spaces
- do not use quotation marks or special symbols
- keep it descriptive but not too long

Good example:

```text
the-impact-of-inflation-on-european-households
```

Bad example:

```text
The Impact of Inflation on European Households!!!
```

### Step 3: Paste the article template

Paste this template into `index.md`:

```md
---
title: "Your article title"
area: "Economics Reviews"
description: "A short summary of what this article explains."
tags:
  - "Macroeconomics"
  - "Inflation"
date: "2026-05-26"
featured: false
---

## Overview (These are example formating)

Write a short opening summary here.

## Main Analysis

Write the main body here.

## Conclusion

Write the closing section here.
```

### Step 4: Save the file

Scroll to the bottom of the GitHub page and save your change using the normal GitHub commit box.

If you are unsure what to write in the commit message, a simple message is enough, such as:

```text
Add draft of new article on energy inflation
```

## How To Fill In the Top Article Details

At the very top of every article is a metadata block. It begins and ends with `---`.

Do not remove these lines.

Example:

```md
---
title: "The Iran War's Economic Threat to Europe and Asia"
area: "Economics Reviews"
description: "Inflation and its consequences for growth are a growing concern for countries where memories of the 2022 energy crisis are fresh."
tags:
  - "Fiscal-Political-Dilemma"
  - "Energy-Shock"
  - "Debt"
date: "2026-03-19"
featured: true
---
```

### `title`

This is the main headline of the article.

Rules:

- keep it clear and professional
- make it specific
- avoid clickbait
- avoid writing in all caps
- avoid too much punctuation

Recommended style:

- calm
- informative
- editorial

### `area`

This tells the site which section the article belongs to.

Use only one of these:

- `"Economics Reviews"`
- `"Finance Reviews"`

Do not invent new area names.

### `description`

This is the short summary shown on article cards, listings, and search results.

Rules:

- keep it to one short sentence
- explain what the article covers
- do not simply repeat the title
- keep it factual and neutral

### `tags`

These are short topic labels shown on the article.

Rules:

- use 2 to 5 tags
- keep them short
- use topic phrases, not full sentences
- be consistent in spelling and style
- hyphenated tags are acceptable

Examples:

- `"Inflation"`
- `"Macroeconomics"`
- `"Cost-of-Living"`
- `"Monetary-Policy"`

Important note: tags are visible on the site, but they are **not yet an active filter system**.

### `date`

Use this format only:

```text
YYYY-MM-DD
```

Example:

```text
2026-05-26
```

This date matters because the website uses it to sort articles. A wrong date can place an article in the wrong position.

### `featured`

Use either:

- `true`
- `false`

Important note: this field is stored in the article, but the homepage currently depends mainly on article date order, not just the `featured` field alone. Do not rely on this setting by itself to control homepage placement.

## How To Add the Hero Image

The hero image is the large top image that appears near the beginning of the article page.

### Rules for the hero image

- upload it into the same folder as the article
- the filename must be exactly `hero.jpg`
- use a wide landscape image when possible
- if the file is not named exactly `hero.jpg`, the site will not use it automatically

### Steps

1. Open your article folder inside `content`.
2. Click `Add file`.
3. Click `Upload files`.
4. Upload your image.
5. Make sure the filename is exactly:

```text
hero.jpg
```

Allowed formats for regular article images include `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, and `.svg`, but for the hero image the current project expects `hero.jpg`.

If no `hero.jpg` is present, the website will show a placeholder image instead.

## How To Add Images Inside the Article

You can place images inside the article body by uploading them into the same article folder and then inserting a Markdown image line in `index.md`.

### Step 1: Upload the image

Upload the image into the same folder as `index.md`.

Examples:

- `chart.jpg`
- `figure-1.png`
- `oil-prices.webp`

### Step 2: Insert it in the article

Use this format:

```md
![Short description of the image](chart.jpg)
```

Example:

```md
![Oil price movements after the conflict](chart.jpg)
```

### Good image rules

- keep filenames simple
- use lowercase letters, numbers, and hyphens
- keep the image in the same article folder
- write a meaningful description inside the square brackets

If you want a caption, write plain text on the next line below the image:

```md
![Oil price movements after the conflict](chart.jpg)

Figure 1. Oil prices rose sharply after the first week of the conflict.
```

## How To Format the Article Body

Econography articles are written in Markdown. Markdown is a simple writing format that turns plain text into headings, lists, links, and images.

You only need a small amount of Markdown to write successfully here.

### Headings

Use:

- `##` for major sections
- `###` for smaller subsections

Example:

```md
## Overview

## Cause

### Consumers
```

### Paragraphs

Write normal text as plain paragraphs.

Leave a blank line between paragraphs so the site can display them properly.

### Bullet points

Use a dash and a space:

```md
- Higher fuel prices reduce household purchasing power
- Supply disruptions increase business costs
```

### Numbered lists

Use numbers followed by a period:

```md
1. Oil prices rise
2. Production costs increase
3. Inflation pressure grows
```

### Links

Use this format:

```md
[World Bank report](https://www.worldbank.org/)
```


## Capabilities of the Website

The current website can:

- publish articles written in Markdown
- show one hero image at the top of each article
- show images inside article text
- place articles into two sections: Economics Reviews and Finance Reviews
- display article summaries on the homepage and section pages
- calculate reading time automatically
- count article views automatically
- include article text in site search
- sort section pages by latest, oldest, or popularity
- display the site in both light mode and dark mode

## Current Limitations of the Website

The current website also has some important limitations.

- Only two article areas exist right now: `Economics Reviews` and `Finance Reviews`.
- The hero image must be named exactly `hero.jpg`.
- There is no writer-controlled author field.
- There is no draft field for hiding an unfinished article.
- There is no separate subtitle field.
- Tags are shown visually, but tag filtering is not active yet.
- Search currently uses article title, description, and body text; tags are not the main search feature.
- The `featured` field exists, but homepage lead placement is currently driven mostly by date order.
- There is no special caption system for images beyond writing normal text below them.
- Renaming an article folder changes the article URL.

## Licensing and Legal

### Software license

This repository is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)** for the website software.

In simple terms, this means the website code can be used, copied, modified, and redistributed, but only under the license's rules.

Key points:

- license notices must be kept
- modified versions that are redistributed must also remain under the AGPL
- if a modified version of the website is run publicly over a network, the corresponding source code of that modified version must also be made available under the AGPL rules
- the software is provided without warranty

### What writers should assume about article content

The repository includes a software license, but it does **not** clearly provide a separate content license for article text, charts, or images.

Because of that, writers should follow the safest rule:

- only upload writing you created or were authorized to publish
- only upload images, diagrams, and charts you created, licensed properly, or have permission to use
- do not copy images from search engines, newspapers, magazines, or other websites without permission
- if attribution is required, include that attribution in the article itself
- keep records of sources and permissions where needed

### What we can and cannot do

We can:

- publish original articles on the website
- update and correct our own articles
- upload original or properly licensed supporting images
- reuse and modify the site software under AGPL rules

We cannot safely do the following without proper rights or review:

- publish copyrighted third-party text without permission
- upload third-party images or charts without permission or a valid license
- remove software license obligations from redistributed code
- redistribute modified versions of the website as closed-source proprietary software

### Redistribution note

For the **software**, redistribution is allowed under AGPL conditions.

For the **editorial content**, do not assume free redistribution rights unless the organization explicitly publishes a separate content license or gives written approval.

### Legal caution

This guide is an operational summary for writers. It is not formal legal advice. If there is any uncertainty about copyright, permissions, attribution, or redistribution, ask the project owner before publishing.

## Final Pre-Publish Checklist

Before saving an article, confirm all of the following:

- I created the article inside `content`.
- My article folder name is lowercase and uses hyphens.
- My article text is in `index.md`.
- My hero image is named exactly `hero.jpg`.
- My in-article images are in the same article folder.
- My `area` is either `Economics Reviews` or `Finance Reviews`.
- My `date` uses the `YYYY-MM-DD` format.
- My `description` is short, factual, and clear.
- I did not edit any file outside `content`.
- I have permission to use every image, source, and quotation in the article.

## Need Help?

If you are unsure about any file outside `content`, do not guess. Ask for help first.