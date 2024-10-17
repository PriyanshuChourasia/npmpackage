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
        {
            "name":"yourPackageName",
            "version":"0.0.1", //This is the initial version of any project
            "description":"Give a short summary of your project",
            "main":"./dist/index.js"
        }