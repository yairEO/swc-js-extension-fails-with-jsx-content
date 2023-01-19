# Install:
```
npm i
```

I've tried first with `pnpm` but things don't work well using it, due to some missing dependencies for some reason.

# Problem explained:

I am trying to use SWC with Mocha to run `.js` test files which contains tests for React components,
I have hundereds of tests file already in the project, all with `.js` extension. It is a huge mess to migrate
those files to `.jsx` extension, which I really prefer to avoid.

Using Babel, this setup has worked for years. Now I'm trying to switch to SWC.

This repo is the smallest minimal demo I could come up with.

There is a single React component and 2 tests files - one if `.js` extension and an identical with `.jsx` extension.

After installing the packages, run mocha for each file and see:

### Fails:
```
mocha src/Foo.test.js

// Unexpected token '<'
```

### Works:
```
mocha src/Foo.test.jsx
```