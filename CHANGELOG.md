# Changelog

All notable changes to `@todovue/tv-card` will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/).

## [1.0.3] - 2025-11-13
### 🐛 Fixed
- Fixed styles for dark and light mode in the library build.
- Fixed the title overflow when it is too long and does not fit on a single line.

### 🛠️ Changed
- Corrected demo imports.

## [1.0.2] - 2025-10-17
### 🛠️ Changed
- The library build now uses `src/entry.ts` (exports both the component and the plugin) instead of directly exporting the `.vue` file.
- CSS injection via JS has been removed for the library build (it is only kept for the demo), generating a `tv-card.css` file optimized for SSR/Nuxt.
- Changed node-version to workflows release.yml to 20.

### ✨ Added
- Plugin installation support: `app.use(TvLabel)` or `app.use(TvLabelPlugin)`.
- Explicit export of the style file: `import '@todovue/tv-label/style.css'`.
- Documentation for usage in SSR and Nuxt 3 applications.

## [1.0.1] - 2025-05-07

### 🐛 Fixed
- Fixed styles and global style imports

## [1.0.0] - 2025-05-05
### ✨ Added
- Initial release of `TvCard` component under the `@todovue` namespace.
- Supports basic card structure with:
    - Title, description, image, and alt text.
    - Primary action button.
- Added support for:
    - Secondary button (`secondaryButtonText`).
    - Custom labels with optional label limit.
    - Fully customizable color scheme: background, text, button styles.
- Emitted events:
    - `clickButton` (on primary button click)
    - `clickSecondaryButton` (on secondary button click)
    - `clickLabel` (on label click)

[1.0.2]: https://github.com/TODOvue/todovue-card/pull/6/files
[1.0.1]: https://github.com/TODOvue/todovue-card/pull/4/files
[1.0.0]: https://github.com/TODOvue/todovue-card/pull/3/files
