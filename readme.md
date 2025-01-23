# Verdaccio Setup and Package Creation

## Introduction

Verdaccio is a lightweight, private npm registry. It allows you to host your own packages, making it easier to share and manage packages within your team or organization.

This guide will walk you through the process of setting up Verdaccio and creating your own packages to publish.

## Prerequisites

- Node.js and npm installed on your machine.
- A terminal or command line interface (CLI).

## 1. Install Verdaccio

To install Verdaccio globally, run the following command:

```bash
npm install -g verdaccio
```

## 2. Run Verdaccio locally  or we can also use deployed server

After installation, run Verdaccio to start the local npm registry server:

```bash
verdaccio
```

This will start the Verdaccio server at http://localhost:4873.

## 3.Configure npm to Use Verdaccio
To publish and install packages from your local Verdaccio registry, configure npm to point to it:

```bash
npm set registry http://localhost:4873/ 
```
or you can use your custom url

You can also reset to the default npm registry later with:

```bash
npm set registry https://registry.npmjs.org/
```

## 4. Create a Package

### step 1: To create a new package, 

navigate to your project directory and initialize npm:

```bash
npm init
```

### step 2: Set Up TypeScript

```bash
npm install typescript @types/node --save-dev
```

and Now, initialize a TypeScript configuration:

```bash
npx tsc --init
```

This command creates a tsconfig.json file with default TypeScript configurations.

### step 3: Write the TypeScript Code

In your project directory, create a file named index.ts. This will be the main file of your package.

### step 4: Configure the Build Process
Deploy a component to npm

To deploy our component to npm we need to do some important things. So far we only have the source code, we don’t want to upload this code because these are just our sources which are not optimized or minified. Therefore to build the result files we will use the tsup tool. This is a great and simple tool that uses esbuild under the hood, which is a very fast bundler (definitely faster than rollup or webpack for example)

tsup bundler

https://tsup.egoist.sh/

In your `tsconfig.json`, you can configure the output directory for your compiled JavaScript. For example:


```json
{
  "compilerOptions": {
    ...
    "jsx": "react-jsx", 
    "moduleResolution": "node",
    "allowUmdGlobalAccess": true,
     "declaration": true,                            
     "declarationMap": true,   
    "outDir": "dist",

    ...
  },
  "include": ["src"],
  ...
}
```

Install `tsup`by running `npm i -D tsup`

Create a new file `tsup.config.json` and in it:

```json
 {
    "splitting": true,
    "sourcemap": true,
    "clean": true,
    "dts":true,
    "outDir": "dist",
    "minify": true,
    "entry": [
      "src/index.ts"
    ],
    "format":["esm", "cjs"]
   }
```

Update your package.json to include a build script

```json
{
  ...
  "scripts": {
    "build": "tsup"
  },
  ...
}
```

Customizing `package.json` for deployment

To deploy the appropriate files to npm, we need to set the path to them in `package.json`. Under the files field we specify the path to the dist folder.

```json
"files": [
 "dist"
]
```

### step 5: Prepare for Publishing
Before publishing, you should determine the entry point for your library. In `package.json`, set the `main` field to the compiled version of your code and `types` to the type definitions:

```json
{
  ...
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "module": "dist/index.mjs",
  ...
}
```


## 6. Publishing to npm

Before publishing, ensure you’re logged in to npm:

```bash
npm login
```
Once logged in, build your TypeScript code

```bash
npm run build
```
Now, you can publish your package:

```bash
npm publish
```

or

you can publish on your server

```bash
npm adduser --registry yourUrl
```

and create user

and build package
```bash
npm run build
```

publish package

```bash
npm publish --registry yourUrl
```

Creating an npm package with TypeScript is straightforward. TypeScript enhances the developer experience by adding type safety, and with the steps above, you can easily share your TypeScript libraries with the world. Happy coding!

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.
