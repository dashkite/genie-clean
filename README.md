# Genie Clean

*Clean up build artifacts*

[![Hippocratic License HL3-CORE](https://img.shields.io/static/v1?label=Hippocratic%20License&message=HL3-CORE&labelColor=5e2751&color=bc8c3d)](https://firstdonoharm.dev/version/3/0/core.html)

Genie Clean is a task plugin for the Genie task runner that provides a standardized way to clean up build artifacts. It integrates directly with the `@dashkite/masonry` toolkit to clear out the `build` directory before new builds run.

## Features

- Integrates directly with the Genie task runner.
- Leverages Masonry to efficiently clean the build directory.
- Simplifies project setup by providing a standard cleanup task out of the box.

## Installation

```bash
pnpm install -D @dashkite/genie-clean
```

## Usage

Because Genie automatically discovers and registers plugins, there is no need for manual code instantiation. Once `@dashkite/genie-clean` is installed as a dependency, the `clean` task is automatically registered and available.

You can invoke the clean task directly using the Genie CLI:

```bash
npx genie clean
```

## Other Resources

- [Reference](docs/reference.md)
- [Recipes](docs/recipes.md)
- [Technical Notes](docs/technical-notes.md)
- [Testing](docs/testing.md)
