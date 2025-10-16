---
sidebar_position: 10
---

# Markdown Style Guide

### Minimum Style Guide Table of Contents
1. [Visual Size/Placement Guidelines](#main-header-for-a-page)
1. [Color Use](#documentation-color-scheme)
1. [Typefaces and their applications](#main-header-for-a-page)
1. [Images](#images)
1. [Voice and Style](#document-voice)

# Main Header for a page

Use one hash tag to create the main header for a page. This also becomes the title on the sidebar.

## Sub Heading Style

Use two hash tags for sub sections. These will appear in the right side menu for easier navigation.

### Third-Level Heading

Three hash tags create a smaller subsection. You can continue increasing the number of hashes up to six levels.

## Text Styles

- **Bold**: `**bold text**` → **bold text**
- _Italic_: `*italic text*` → _italic text_
- **_Bold + Italic_**: `***bold italic***` → **_bold italic_**
- ~~Strikethrough~~: `~~strikethrough~~` → ~~strikethrough~~

## Lists

### Unordered Lists

- Item 1
- Item 2

  - Subitem 2a
  - Subitem 2b

- Item 3

### Ordered Lists

1. First
2. Second

   1. Subitem
   2. Subitem

3. Third

## Links

- Inline link: `[Link Text](https://example.com)` → [Link Text](https://example.com)
- Internal link aka link a different documentation page `[intro page](intro.md)` do not forget to include the path if the other page is not in the same directory like this `tutorial-basics/congratulations.md` → [intro page](intro.md)
- Internal link to a specific section within a different page `[generate a site](intro.md#generate-a-new-site)` → [generate a site](intro.md#generate-a-new-site)
- Internal link to a different section on the same page `[code](#code)` → [code](#code)
- Reference link:

[Link Text][1]

[1]: https://example.com

## Images

- Inline image: `![Alt text](https://picsum.photos/id/29/600/300)` →

![Alt text](https://picsum.photos/id/29/600/300)

- Local image (stored in `static/img/` folder): `![My Image](/img/logo.png)` →

![Logo Image (or other alt text)](/img/logo.png)

- Resize Images with HTML

If you need to resize your image you need to use html like this:

```html
<img src="/img/logo.png" alt="Logo" width="300" />
```

<img src="/img/logo.png" alt="Logo" width="300" />

width="300" sets the width to 300 pixels.

You can also use height="auto" to maintain the aspect ratio.

## Code

### Inline Code

Use backticks for inline code: `` `inline code` `` → `inline code`

this is good for explaining variables inside a paragraph section. for example. The command `sudo` in linux is a valuable command that should be used sparingly

### Multiline Code Blocks

Use triple backticks to create a code block. Optionally specify any language for syntax highlighting and a title for context.

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

```javascript
const greet = () => {
  console.log('Hello, world!');
};
greet();
```

```bash
sudo pacman -Syu
```

```
code block with no syntax higliting
```

## Blockquotes

> This is a blockquote
>
> You can span multiple lines and paragraphs within the same blockquote.

## Tables

| Header 1 | Header 2 |
| -------- | -------- |
| Row 1    | Value 1  |
| Row 2    | Value 2  |

## Horizontal Line

Use three hyphens to create a horizontal line:

---

## Tips for Consistent Markdown

- Use headings hierarchically.
- Use bold and italic for emphasis, avoid all caps.
- Use lists for grouping content or steps.
- Include images consistently from `static/img/`.
- Always use code blocks for code snippets, specifying the language when possible.
- Maintain spacing between sections for readability.
- Preview your Markdown to ensure correct formatting.

## Documentation Color Scheme

The following colors are the primary colors of our document, inspired by VS Code's main color scheme:

1. #1e1e1e
1. #007acc
1. #006bb3
1. #005c99
1. #004d80
1. #1a88d0
1. #3396d6
1. #66b1e0

## Document Voice

Our documentation will use a business casual tone, a friendly and approachable one so that readers are comfortable approaching the document while maintaining a sense of professionalism so that readers can trust the writers knowledge and understanding.
