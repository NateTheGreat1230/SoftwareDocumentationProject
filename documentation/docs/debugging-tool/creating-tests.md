---
sidebar_position: 3
---

# Using VSCode Tests

This guide will walk you through creating and using VSCode tests, these tests will run your testing functions. There are a lot of testing tools out there, but for this tutorial, we will stick with testing python using the 'unittest' library. This guide assumes you have some familiarity with using unittests in python.

The process of creating these tests is to add all of your specific 'unittest' functions to a testing file. Using the testing tool will allow a much more organized workflow than you might get when running your tests manually. The testing tool will automatically find all of your tests, give visual indicators for the status of the test, and let you run or debug individual tests easily.

Without using this tool, you would be searching long console logs to see which tests failed, and have to rerun every tests everytime you make a change. The testing tools purpose is to make this process more streamlined and easy to work with.

## Setting up testing

For the process of setting up tests, we will use the command pallet which you can open using ```Ctrl+Shift+P``` or ```Cmd+Shift+P```. You can also navigate to the search bar in the top middle and type '>'.

We will then type and select ```Python: Configure Tests```, you will be asked to select a testing framework, choose ```unittest```. You can then select the folder where all of your tests are placed, it is good practice to have a ```tests/``` folder to organize all of your tests.

You will be asked to specify the naming convention of your tests, you can read through these options and select which convention you like best. You will then ensure that all of your tests follow this name scheme, then they will appear in the testing tool interface. A common naming convention is prefixing the testname with 'test_' as in ```test_myfunction.py```.

![logo](/img/debugger/Test0.png)

Here you should see all of the tests that you just configured.

![configured tests](/img/debugger/test1.png)

Now you will be able to hover and run each test individually, in normal or debug mode. To run all tests open the command pallet ```Ctrl+Shift+P``` and type ```Python: Run All Tests```.

![running tests](/img/debugger/test2.png)

Congratulations, you have now configured and ran your first tests in VSCode!

To view the results, you can check the top-right toolbar of the testing panel, or by selecting "TEST RESULTS" in the console interface.

![test results](/img/debugger/test3.png)

### Command line testing
You can run the tests using the terminal if you prefer, you can use ```python -m unittest``` to run your tests.

```python -m unittest tests/test_example.py``` to run a test from a specific file.

Or ```python -m unittest tests.test_example.TestAddFunction.test_add_two_numbers``` to run a specific test.

You can also quickly rerun your failed tests by clicking the "Run Failed Test" in the testing interface.

## Summary

Using the VSCode testing tool is very useful because of how simple it is to setup and run your tests. It provides an organized environment to quickly test and debug your code! When working with teams, everyone will be able to see the same test layout, and it will be easy to create new tests and collaborate across machines.

Lets create a summary of what we did in this guide, we:

| What we did | How we did it |
|---|---|
|Configured testing | Ctrl+Shift+P → Python: Configure Tests |
| Run all tests | Ctrl+Shift+P → Python: Run All Tests |
| Run individual tests | Click ▶️ beside it in the Testing panel |
| Rerun failed tests | Click “Run Failed Tests” in the Testing panel |
| View results | Testing panel → top-right toolbar, or the console interface |

Testing is one of the most important skills a developer can have, so any tool that can make this process easier, is a tool that should be used.
