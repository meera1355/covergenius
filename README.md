# This folder contains end-to-end tests for the rentalcover web application
```sh

Project layout
---

📁--- cypress # all of the code which cypress runs in the browser lives here
| 📁--- fixtures # test data, samples files, etc.
| 📁--- e2e # main specs directory
| 📁--- support # additional Cypress commands and lifecycle extensions
🗎--> cypress.config.js # Cypress config file


Running the tests
---
Pre-requisite to run Cypress
1. Download node.js from  https://nodejs.org/en/download/
2. Run "npm install" in your terminal #installs packages from package.json (run this first)

Steps to execute Cypress Test
---
1.Run "npm start" in your terminal #to run the spec file, you can either pick it from the interactive test runner.This command will open Cypress test runner and you can select E2E Testing and browser.This will open all the specs and you can select "getquote" specs.

# Alternatively, if you don't want to open Cypress terminal, please run "npm test" which will run scripts in CLI and also generate HTML report under results folder.


Issues Found
------
While running www.rentalcover.com and getting the Quote, noticed that “Policy Information & Payment” page is not displayed all the time as shown in the task instead "https://www.rentalcover.com/en-us/quote" page is displayed intermittently and causing script to fail.Thus creating assertion for this page is challennging as last page is not consistent.


Did not use Page-Object Model:
--------

Reason:
Page Objects is a design pattern commonly used in test automation to represent web pages as objects in code, making it easier to organize and maintain test code. While Page Objects can be used with Cypress, it is not recommended by Cypress official documentation.

There are a few reasons why Cypress does not recommend using Page Objects:

Cypress has a unique architecture that makes traditional Page Objects unnecessary. Cypress allows direct access to the DOM, which means you can interact with elements on the page without having to go through an intermediary Page Object layer.

Cypress also provides a powerful command chaining system that eliminates the need for Page Objects. You can chain commands together to build complex interactions with the page, without the need for a Page Object layer.

Page Objects can sometimes introduce unnecessary complexity and maintenance overhead. They can also be difficult to use with dynamic web applications that change frequently.

While Page Objects can be useful in some cases, Cypress documentation recommends using a simpler and more direct approach to test authoring that takes advantage of the unique features of Cypress architecture.

````
