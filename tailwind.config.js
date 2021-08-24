module.exports = {
    purge: {
      content: [
      './components/**/*.vue',
      './node_module/vuefront/**/*.vue',
      './node_module/@vuefront/checkout-app/**/*.vue',
      ],
      safelist: [/^vf-/]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('vuefront/tailwind/plugin.js')
    ],
  }