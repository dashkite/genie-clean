# Technical Notes

### Masonry Integration

Genie Clean acts as a lightweight bridge between the Genie task runner and the Masonry asset pipeline toolkit. Under the hood, it registers a Genie event listener for the `"clean"` event, and its handler simply delegates to `M.clean "build"`. This ensures that artifact cleanup relies on the file system operations provided by Masonry rather than ad-hoc scripts.
