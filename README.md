# webpack

Webpack is complex and it is often jumped into too quickly.  This shows step by
step how it works.  Start with the [01.basic] branch.

## 04.entry-points

This specifies two entry points.  And uses the `[name]` variable to generate
unique outputs.  If there is one output, the names will conflict.

Each entry is its own graph and the emitted bundle will have the same webpack
boostrap code at the top then unique webpack bundles for each of the files in
the dependency graph.

```
entry: {
  main: path.resolve(__dirname, 'src/index.js'),
  section1: path.resolve(__dirname, 'src/section1/index.js'),
},

output: {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].bundle.js'
},
```

This config results in bundles placed here.

```
▼ dist/
    main.bundle.js
    section1.bundle.js
```

To maintain a similar file structure, we can change it to.

```
entry: {
  bundle: path.resolve(__dirname, 'src/index.js'),
  'section1/bundle': path.resolve(__dirname, 'src/section1/index.js'),
},

output: {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].js'
},
```


```
▼ dist/
  ▼ section1/
      bundle.js
    bundle.js
```



[01.basic]: https://github.com/reergymerej/explore-webpack/tree/01.basic
