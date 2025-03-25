# Playwright Automation Test Suite

This repository contains automation test cases for an assignment. The tests are built using **Playwright** with **JavaScript** and cover various end-to-end (E2E) scenarios for the website [51 to Carbon Zero](https://alpha.51tocarbonzero.com/#/sign-in).

## Prerequisites

Before running the tests, ensure that the following prerequisites are met:

1. **Install Node.js and npm**  
   Playwright requires **Node.js** and npm to run.  

   - **For Windows**:  
     Download Node.js from [https://nodejs.org/](https://nodejs.org/) and follow the setup instructions.  

   - **For Mac**:  
     You can install Node.js using Homebrew:  
     ```bash
     brew install node
     ```  

   - **Verify installation** (after installing Node.js):  
     ```bash
     node -v  
     npm -v  
     ```  
     This will display the installed versions of Node.js and npm.

2. **Install Playwright**  
   Once Node.js and npm are installed, run the following command to set up Playwright:  
   ```bash
   npm init playwright@latest

3. **Clone the repository**
    ```git clone https://github.com/sharanya-ramesh/51tocz.git```
4. **Navigate to the folder**
    ```git checkout develop```
5.**Update the Keys file**
   The tests require url, username , password, incorrect username and password to be provided. Please update these in the keys file. They are not committed for 
   security reasons.

   The keys file is under tests/keys.json
6. **Run the tests**
    ```

    To run a specific test , please use

    npx playwright test tests/appSignInSignOut.spec.js --headed

    To run all tests, please use

    npx playwright test
    
    ```

7. **View the test report**
    ```
      npx playwright show-report  

    ```
