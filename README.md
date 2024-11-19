# `tspci vite`

<h3 align="center">A vite only pci builder</h3>

## Getting Started

-   `npm run dev` - Starts a dev server at http://localhost:5173/

-   `npm run build` - Watch rollup build for PCIS

This is a modified default Vite preact project.


Added this to the vite.config.ts

_vite.config.ts_
```ts
  build: {
    copyPublicDir: false,
    lib: {
      name:"pci",
      entry: resolve(__dirname, 'src/index.tsx'),
      formats: ['umd']
    },
    rollupOptions: {
      external:"qtiCustomInteractionContext",
      output: {
        entryFileNames: "index.js",
        dir: "public"
      }
    },
  },
```

You have to run both
 - `npm run dev` for the test environment
 - `npm run build` - for the modified rollup UMD build

 copied the test template index.html into this project to test the build

 the PCI is continously build with rollup and placed in the `public` folder.
 `index.js`

 No need to kick a final build, just copy this version.
