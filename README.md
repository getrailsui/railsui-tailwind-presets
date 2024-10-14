# Rails UI Tailwind CSS Presets

Tailwind CSS presets for [Rails UI](https://github.com/getrailsui/railsui). These presets are designed to work with the [Tailwind CSS](https://tailwindcss.com/) framework.

## Installation

To install the presets, run the following command in your terminal:

```bash
npm install railsui-tailwind-presets
```

## Usage

Once installed, you can import the presets into your Tailwind CSS configuration file (e.g., `tailwind.config.js`) and use them in your project. Bear in mind, these are designed for exclusive use with [Rails UI](https://railsui.com). Here's an example:

```javascript
// tailwind.config.js
const presets = require("railsui-tailwind-presets")

module.exports = {
  presets: [presets.hound],
  content: ["./app/**/*.html.erb"],
}
```

Or just import one preset:

```javascript
// tailwind.config.js
const { hound } = require("railsui-tailwind-presets")
module.exports = {
  presets: [hound],
  // Other Tailwind CSS configuration options...
}
```

In this example, we're using the `hound` preset, which includes the Rails UI styles and a custom primary and secondary color palette. You can choose from the following presets (more coming soon):

- `hound`
- `shepherd`
- `retriever`
- `setter`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
