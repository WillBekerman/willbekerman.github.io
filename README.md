# William Bekerman's website

Source for https://willbekerman.github.io, built with Jekyll and deployed by GitHub Pages.

## Editing the site

- About: `_pages/about.md`
- Research and abstracts: `_pages/publications.html`
- Teaching: `_pages/teaching.html`
- CV: `files/CV.pdf`
- Navigation: `_data/navigation.yml`
- Shared layout: `_layouts/personal.html`
- Styles: `assets/css/personal.css`
- Footer: `_includes/personal-footer.html`
- Photograph: `images/profile.png`

The CV link opens the PDF directly. Older CV and publication URLs are retained as redirects.
Research abstracts use native HTML details elements; JavaScript adds the expand-all control.

## Local preview

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve
```

## Attribution

This repository originated from AcademicPages and the Minimal Mistakes Jekyll theme.
The original MIT license is retained in `LICENSE`.
