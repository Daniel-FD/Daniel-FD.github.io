# Adding Images to Your Portfolio Content

## In Blog Posts

You can add images directly in your blog post content using standard Markdown syntax:

```markdown
![Alt text](/images/blog/example-image.jpg)
```

Or with HTML for more control:

```html
<img src="/images/blog/example-image.jpg" alt="Description" style="max-width: 100%; height: auto;" />
```

## In Portfolio Project Pages

For individual portfolio project pages, you can add images in the content:

```markdown
![Project Screenshot](/images/portfolio/project-screenshot.jpg)

## Features

This project includes:
- Feature 1 with ![inline icon](/images/icons/feature1.png)
- Feature 2
- Feature 3

![Architecture Diagram](/images/portfolio/architecture.jpg)
```

## Image Optimization Tips

1. **Compress images** before uploading (use tools like TinyPNG)
2. **Use appropriate formats**: JPG for photos, PNG for graphics with transparency, WebP for modern browsers
3. **Responsive images**: Hugo automatically handles responsive images
4. **Alt text**: Always include descriptive alt text for accessibility

## Example Structure

```
static/
├── images/
│   ├── blog/
│   │   ├── blockchain-security.jpg
│   │   ├── ai-development.jpg
│   │   └── performance-charts.jpg
│   ├── portfolio/
│   │   ├── range-platform.jpg
│   │   ├── medical-ai-dashboard.jpg
│   │   └── blockchain-explorer.jpg
│   └── icons/
│       ├── tech-icons/
│       └── feature-icons/
```
