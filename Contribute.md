
# Contributing to Personal Portfolio Website

Thank you for your interest in contributing to this project! While this is primarily a personal portfolio, contributions that improve code quality, fix bugs, or enhance functionality are welcome.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Guidelines](#development-guidelines)
- [Submitting Changes](#submitting-changes)
- [Style Guide](#style-guide)
- [Community](#community)

## 📜 Code of Conduct

This project adheres to a standard of respectful and inclusive behavior. By participating, you are expected to:

- Use welcoming and inclusive language
- Respect differing viewpoints and experiences
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards other contributors

## 🤝 How Can I Contribute?

### Reporting Bugs

Before submitting a bug report:

1. **Check existing issues** — Your bug may already be reported
2. **Test on multiple browsers** — Verify it's not browser-specific
3. **Check the latest version** — Ensure you're using the current codebase

When submitting a bug report, include:

- Clear, descriptive title
- Steps to reproduce the issue
- Expected vs. actual behavior
- Screenshots (if applicable)
- Browser and OS information

**Example:**
```markdown
**Bug:** Navigation menu doesn't close on mobile

**Steps to Reproduce:**
1. Open site on mobile device
2. Tap hamburger menu
3. Select a link
4. Menu remains open

**Expected:** Menu should close after selection
**Actual:** Menu stays open
**Browser:** Chrome Mobile 120.0
**Device:** iPhone 12, iOS 17
```

### Suggesting Enhancements

Enhancement suggestions are welcome for:

- **Accessibility improvements** — WCAG compliance, screen reader support
- **Performance optimizations** — Faster load times, optimized assets
- **Responsive design fixes** — Better mobile/tablet experience
- **Code quality** — Refactoring, better practices
- **New features** — Must align with portfolio purpose

**Not Accepted:**
- Personal content changes (certificates, skills, bio)
- Major design overhauls without prior discussion
- Framework migrations (e.g., converting to React)

### Pull Requests

Good pull request candidates:

- ✅ Bug fixes
- ✅ Accessibility improvements
- ✅ Performance optimizations
- ✅ Cross-browser compatibility fixes
- ✅ Code refactoring with clear benefits
- ✅ Documentation improvements

## 🚀 Getting Started

### Fork and Clone

1. **Fork the repository** on GitHub
2. **Clone your fork locally:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/portfolio.git
   cd portfolio
   ```

3. **Add upstream remote:**
   ```bash
   git remote add upstream https://github.com/ORIGINAL-OWNER/portfolio.git
   ```

### Set Up Development Environment

1. **Open the project** in your preferred code editor
2. **Use a local server** for testing:
   ```bash
   # Option 1: Python
   python -m http.server 8000
   
   # Option 2: Node.js
   npx http-server
   
   # Option 3: VS Code Live Server extension
   ```

3. **Test across browsers:**
   - Chrome/Edge (Chromium)
   - Firefox
   - Safari (if on macOS)

## 💻 Development Guidelines

### Branch Naming

Use descriptive branch names:

```bash
feature/add-dark-mode
fix/mobile-menu-bug
docs/update-readme
refactor/css-structure
accessibility/aria-labels
```

### Commit Messages

Follow conventional commit format:

```
type(scope): brief description

Detailed explanation (if needed)

Fixes #123
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Formatting, whitespace (no code change)
- `refactor`: Code restructuring
- `perf`: Performance improvement
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**
```bash
git commit -m "fix(nav): resolve mobile menu closing issue"
git commit -m "feat(accessibility): add ARIA labels to navigation"
git commit -m "docs(readme): update installation instructions"
```

### Code Standards

#### HTML Guidelines

- ✅ Use semantic HTML5 elements (`<header>`, `<nav>`, `<section>`, `<article>`)
- ✅ Include proper `alt` attributes for images
- ✅ Use ARIA labels where appropriate
- ✅ Maintain proper heading hierarchy (h1 → h2 → h3)
- ✅ Keep markup clean and indented (2 spaces)

```html
<!-- Good -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="#about">About</a></li>
  </ul>
</nav>

<!-- Avoid -->
<div class="nav">
  <div class="link">About</div>
</div>
```

#### CSS Guidelines

- ✅ Use consistent naming conventions (BEM or semantic)
- ✅ Group related properties logically
- ✅ Comment complex sections
- ✅ Use CSS custom properties for colors and spacing
- ✅ Maintain mobile-first responsive design
- ✅ Avoid `!important` unless absolutely necessary

```css
/* Good */
:root {
  --primary-color: #2c3e50;
  --spacing-unit: 1rem;
}

.card {
  padding: var(--spacing-unit);
  background-color: var(--primary-color);
}

@media (min-width: 768px) {
  .card {
    padding: calc(var(--spacing-unit) * 2);
  }
}

/* Avoid */
.card {
  padding: 16px !important;
  background: #2c3e50;
}
```

#### Accessibility Checklist

- [ ] All images have descriptive `alt` text
- [ ] Color contrast meets WCAG AA standards (4.5:1)
- [ ] Interactive elements are keyboard accessible
- [ ] Focus indicators are visible
- [ ] ARIA labels present where needed
- [ ] Form inputs have associated labels
- [ ] Heading hierarchy is logical

### Testing

Before submitting, verify:

1. **Visual testing** across different screen sizes
2. **Browser compatibility** (Chrome, Firefox, Safari, Edge)
3. **Keyboard navigation** works properly
4. **No console errors** in browser DevTools
5. **HTML validation** using [W3C Validator](https://validator.w3.org/)
6. **CSS validation** using [CSS Validator](https://jigsaw.w3.org/css-validator/)

## 📤 Submitting Changes

### Pull Request Process

1. **Sync your fork** with upstream:
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** following the guidelines above

4. **Test thoroughly** across browsers and devices

5. **Commit your changes:**
   ```bash
   git add .
   git commit -m "feat(scope): description"
   ```

6. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request** on GitHub

### Pull Request Template

Your PR should include:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Tested on mobile devices
- [ ] No console errors

## Screenshots (if applicable)
Add before/after screenshots

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-reviewed the code
- [ ] Commented complex sections
- [ ] Updated documentation
- [ ] Changes generate no new warnings
```

### Review Process

1. Maintainer will review your PR within **3-5 business days**
2. Address any requested changes
3. Once approved, your PR will be merged
4. You'll be added to the contributors list! 🎉

## 📚 Style Guide

### File Naming

- Use lowercase with hyphens: `style-guide.css`, `mobile-nav.js`
- Be descriptive: `contact-form.html` not `form.html`

### Indentation

- **HTML/CSS:** 2 spaces
- **No tabs**

### Comments

```css
/* ==========================================================================
   Section Name
   ========================================================================== */

/* Component: Card
   ========================================================================== */
.card {
  /* Layout */
  display: flex;
  
  /* Visual */
  background-color: white;
  border-radius: 8px;
}
```

## 💬 Community

### Questions?

- Open a [GitHub Discussion](https://github.com/your-username/portfolio/discussions)
- Email: [saihemanth225@gmail.com](mailto:saihemanth225@gmail.com)

### Recognition

All contributors will be recognized in the project README. Thank you for helping improve this portfolio! 🙏

---

<div align="center">
  <sub>Happy Contributing! 🚀</sub>
</div>
