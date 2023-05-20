---
slug: first-blog-post
title: "First Blog Post: Setting Up Vyogami!"
authors: legitShivam
tags: [docusaurus, vyogami, digtal-garden]
---

<p align="center">
<img src="img/vyogami.png" width="200"></img>
<h1>Vyogami</h1>
/ˈvʲoɡəmi/
</p>

Welcome to my first blog post on Vyogami, my very own digital garden! In this post, I will walk you through the process of setting up Vyogami using Docusaurus, a powerful and feature-rich documentation generator. Unlike my previous attempt with mdbook, Docusaurus offers a wide range of benefits, including enhanced code block syntax highlighting and support for blocks.

## What is a Digital Garden?

Before we dive into the setup process, let me explain what a digital garden is and why I decided to build one. A digital garden is an online wiki-like platform that serves as a personal knowledge repository or a second brain. It's a place where I can collect, organize, and share my thoughts, ideas, and resources in an interconnected way. Instead of traditional linear blog posts, a digital garden allows me to cultivate my knowledge and let it grow over time.

## Why Docusaurus?

I initially started my digital garden journey using mdbook, a simple and lightweight tool. However, I quickly encountered some limitations. One major drawback was the limited code block syntax highlighting options. As someone who frequently writes about programming, it was crucial for me to have robust syntax highlighting to make my code examples more readable and visually appealing.

Furthermore, mdbook lacked support for blocks, which are essential for structuring and organizing content effectively. Blocks allow me to create reusable components or sections, such as notes, warnings, and tips, which can be easily referenced throughout my digital garden.

After careful consideration and research, I found that Docusaurus could provide a more comprehensive solution. Docusaurus is a powerful documentation generator that offers a wide range of features, including:

- Advanced syntax highlighting for code blocks
- Support for blocks, enabling better content structuring
- Theming and customization options to create a unique look and feel
- Built-in search functionality for easy navigation and discovery
- Support for Markdown and other content formats

## Setting up Vyogami with Docusaurus

Now let's get into the nitty-gritty of setting up Vyogami using Docusaurus. Follow these steps to create your own digital garden:

### Step 1: Install Docusaurus

To start, make sure you have Node.js installed on your machine. Then, open your terminal and run the following command to install Docusaurus globally:

```bash
npm install --global docusaurus-init
```

### Step 2: Create a New Docusaurus Project

Once Docusaurus is installed, navigate to the desired directory where you want to create your digital garden. Run the following command to create a new Docusaurus project named "vyogami":

```bash
npx docusaurus-init vyogami classic
```

This command will create a new directory named "vyogami" with the basic Docusaurus project structure.

### Step 3: Customize and Configure

Next, navigate into the "vyogami" directory and open the `docusaurus.config.js` file. This file contains the configuration settings for your digital garden. Customize the site title, description, and other options according to your preferences.

You can also explore the theme options and customize the appearance of your digital garden by modifying the CSS files located in the `src/css` directory.

### Step 4: Add and Organize Content

Now it's time to add content to your digital garden. Docusaurus organizes content using Markdown files. Create a new Markdown file in the `docs` directory or create subdirectories for better organization.

Within your Markdown files, you can use standard Markdown syntax, such as headers, lists, links, and images, to structure your content.
