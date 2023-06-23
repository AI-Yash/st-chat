# Creating a Streamlit Component

using [react](https://react.dev/)

## initiate the frontend

we will be using [vite](https://vitejs.dev/) for initiating the frontend, as its quite fast compared to create react app[^1]

```bash
$ npm create vite@latest
```
give the project name as `frontend`, select the framework as react (or any other of your choice)

```bash
? Select a framework: › - Use arrow-keys. Return to submit.
    Vanilla
    Vue
❯   React
    Preact
    Lit
    Svelte
    Others
```
depending on the language you want to use, choose that language variant
```
? Select a variant: › - Use arrow-keys. Return to submit.
    TypeScript
❯   TypeScript + SWC
    JavaScript
    JavaScript + SWC
```

## installing necessary packages

now `cd` into the project directory `cd frontend` and execute 
```bash
$ npm install
```
after that, install the `streamlit-component-lib`

```bash
$ npm install streamlit-component-lib
```

after executing these commands, edit the :file: `vite.config.ts` to look like
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,  // to launch the server on port 3001
  },
  base: '',      // to use absolute url's in the build, might not work without it
})
```

now using this setup, create your component, to run the development server run the following command
```bash
$ npm run dev
```
to build your component run
```bash
$ npm run build
```
now build the wheel
```bash
$ python setup.py sdist bdist_wheel
```

and at last upload it to pypi using twine (testpypi)
```bash
$ python3 -m twine upload --repository testpypi dist/*
```
(pypi)
```bash
$ python3 -m twine upload dist/*
```

[^1]: https://blog.openreplay.com/how-to-build-your-react-app-using-vite/
