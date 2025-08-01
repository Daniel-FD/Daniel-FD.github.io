---
title: "Adding Images to Your Hugo Portfolio"
date: 2024-12-15T10:00:00+06:00
description: "Learn how to add beautiful images to your blog posts and portfolio projects in Hugo"
author: "Daniel Fiuza"
type: "post"
image: "/images/blog/hugo-images.jpg"
tags: ["Hugo", "Tutorial", "Web Development"]
---

# Adding Images to Your Hugo Portfolio

Images make your portfolio and blog posts much more engaging and professional. Here's how you can add them to both your blog posts and portfolio projects.

## Blog Post Images

### Method 1: Featured Image in Frontmatter

Add an `image` field to your blog post's frontmatter:

```yaml
---
title: "Your Blog Post Title"
image: "/images/blog/your-image.jpg"
---
```

### Method 2: Images in Content

You can also add images directly in your markdown content:

```markdown
![Alt text for your image](/images/blog/content-image.jpg)
```

## Portfolio Project Images

For portfolio projects, add the `image` field in your `data/portfolio.yml`:

```yaml
item:
  - title: Your Project Name
    image: /images/portfolio/project-screenshot.jpg
    description: "Your project description"
    tags: ["Technology", "Framework"]
```

## Best Practices

1. **Image Optimization**: Use optimized images (WebP, proper sizing)
2. **Alt Text**: Always include descriptive alt text
3. **Consistent Naming**: Use clear, consistent file naming
4. **Responsive Images**: Hugo handles responsive images automatically

## File Organization

Store your images in:
- `/static/images/blog/` - for blog post images
- `/static/images/portfolio/` - for portfolio project images

The static folder content is served directly by Hugo.
