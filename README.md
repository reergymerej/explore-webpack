# webpack

Webpack is complex and it is often jumped into too quickly.  This shows step by
step how it works.  Check the branches.

## Branches

### 01.basic

This is the most basic setup.  There are no plugins or loaders, just an input
file and an output.

When building - `yarn webpack` -  you can see the bundle is created with the imported files.

```
funktacular.bundle.js  2.63 kB       0  [emitted]  main
   [0] ./src/index.js 57 bytes {0} [built]
   [1] ./src/i-am-included.js 30 bytes {0} [built]
 ```

