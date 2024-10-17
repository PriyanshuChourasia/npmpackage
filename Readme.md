# First Npm Package

This is my first npm package which I built to learn how to upload npm package and what are the steps.

### How to create your own npm package

steps:
1. First you have to register your email id to npm website.
2. Create a folder locally then open that folder in a code editor
    a. run : npm adduser : after running npm adduser then there will be an option to (Press Enter to open in the browser....)
    press enter. It will open a browser window where you have to enter your npm login password. 
    This all process will happen to ensure that you are an authenticated user.
    
    b. if you want to check you are logged in or not then run: npm whoami
    
3. After all these process open your terminal and then:
    a. npm init -y
    b. Give the desired name to your package and this name will your package name on npm website
        /* create a folder name dist */
        {
            "name":"yourPackageName",
            "version":"0.0.1", //This is the initial version of any project
            "description":"Give a short summary of your project",
            "main":"./dist/index.js" // This is the entry point of the package
            "module":"./dist/index.mjs" // This is the path to esm entry point
            "types":"./dist/index.d.ts" // This is the types entry point for type safety
            "scripts":{
                "build":"tsup"
            },
            "keywords":["test","hello"],
            "author":"Your name",
            "license":"MIT" // This lib is used by most of the open source developer you can write your own
        }

    c. Now run some npm commands:
        1. npm install -g typescript // This is for global
        2. npm install -D typescript tsup
        3. create a file named tsconfig.json
            In this tsconfig configuration file there will be some typescript config commands which will help to write better code.
            {
                "compilerOptions": {
                "strict": true,
                "noImplicitAny": true,
                "esModuleInterop": true,
                "strictNullChecks": true,
                "target": "ES2023",
                "moduleResolution": "Node",
                "module": "CommonJS",
                "declaration": true,
                "isolatedModules": true,
                "noEmit": true,
                "outDir": "dist"
                },
                "include": ["src"],
                "exclude": ["node_modules"]
            }
            // These configurations ca be changed according to need
    d. create a file in your root directory named tsup.config.ts
        tsup package will help us to transpile typescript to javascript, so in this file the configuration will be written.
        import {defineConfig} from "tsup";

        export default defineConfig({
            format:['cjs','esm'],
            entry:['./src/index.ts'],
            dts:true,
            shims:true,
            skipNodeModulesBundle:true,
            clean:true
        })
    
    e. Create a src folder in root directory
