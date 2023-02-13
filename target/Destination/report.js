$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/InvalidLoogin.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": ": Validate error messages for each invalid login scenario",
  "description": "",
  "id": "login;:-validate-error-messages-for-each-invalid-login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Given I am on the landing page"
    },
    {
      "line": 9,
      "value": "#And I click sign in"
    }
  ],
  "line": 10,
  "name": "I enter my \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I type my \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I press the login button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should get the correct \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "login;:-validate-error-messages-for-each-invalid-login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ],
      "line": 17,
      "id": "login;:-validate-error-messages-for-each-invalid-login-scenario;;1"
    },
    {
      "cells": [
        "davidzoe@gmail.com",
        "Testing123",
        "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."
      ],
      "line": 18,
      "id": "login;:-validate-error-messages-for-each-invalid-login-scenario;;2"
    },
    {
      "cells": [
        "davidzoe@gmail.com",
        "Testing123!",
        "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."
      ],
      "line": 19,
      "id": "login;:-validate-error-messages-for-each-invalid-login-scenario;;3"
    },
    {
      "cells": [
        "",
        "Testing123!",
        "This is a required field."
      ],
      "line": 20,
      "id": "login;:-validate-error-messages-for-each-invalid-login-scenario;;4"
    },
    {
      "cells": [
        "davidzoe@gmail.com",
        "",
        "This is a required field."
      ],
      "line": 21,
      "id": "login;:-validate-error-messages-for-each-invalid-login-scenario;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8624114600,
  "status": "passed"
});
formatter.before({
  "duration": 239600,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I click the signin link",
  "keyword": "When "
});
formatter.match({
  "location": "Common.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 5394361800,
  "status": "passed"
});
formatter.match({
  "location": "Common.iClickTheSigninLink()"
});
formatter.result({
  "duration": 3249455300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": ": Validate error messages for each invalid login scenario",
  "description": "",
  "id": "login;:-validate-error-messages-for-each-invalid-login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Given I am on the landing page"
    },
    {
      "line": 9,
      "value": "#And I click sign in"
    }
  ],
  "line": 10,
  "name": "I enter my \"davidzoe@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I type my \"Testing123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I press the login button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should get the correct \"The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "davidzoe@gmail.com",
      "offset": 12
    }
  ],
  "location": "InvalidLogin.iEnterMy(String)"
});
formatter.result({
  "duration": 5784151300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing123",
      "offset": 11
    }
  ],
  "location": "InvalidLogin.iTypeMy(String)"
});
formatter.result({
  "duration": 215444200,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin.iPressTheLoginButton()"
});
formatter.result({
  "duration": 2862266300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.",
      "offset": 26
    }
  ],
  "location": "InvalidLogin.iShouldGetTheCorrect(String)"
});
formatter.result({
  "duration": 570042200,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d109.0.5414.120)\n  (Driver info: chromedriver\u003d109.0.5414.74 (e7c5703604daa9cc128ccf5a5d3e993513758913-refs/branch-heads/5414@{#1172}),platform\u003dWindows NT 10.0.19044 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 282 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027ebou-touray\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:59686}, webauthn:extension:credBlob\u003dtrue, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, unexpectedAlertBehaviour\u003dignore, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d109.0.5414.74 (e7c5703604daa9cc128ccf5a5d3e993513758913-refs/branch-heads/5414@{#1172}), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir23756_1146191570}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d109.0.5414.120, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 1270c20ec578a05dc4448cb18dc1781d\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:158)\r\n\tat stepDefinitions.InvalidLogin.iShouldGetTheCorrect(InvalidLogin.java:43)\r\n\tat ✽.Then I should get the correct \"The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.\"(src/test/Resources/InvalidLoogin.feature:13)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 117100,
  "status": "passed"
});
formatter.before({
  "duration": 88900,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I click the signin link",
  "keyword": "When "
});
formatter.match({
  "location": "Common.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 2420044800,
  "status": "passed"
});
formatter.match({
  "location": "Common.iClickTheSigninLink()"
});
formatter.result({
  "duration": 3314550600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": ": Validate error messages for each invalid login scenario",
  "description": "",
  "id": "login;:-validate-error-messages-for-each-invalid-login-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Given I am on the landing page"
    },
    {
      "line": 9,
      "value": "#And I click sign in"
    }
  ],
  "line": 10,
  "name": "I enter my \"davidzoe@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I type my \"Testing123!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I press the login button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should get the correct \"The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "davidzoe@gmail.com",
      "offset": 12
    }
  ],
  "location": "InvalidLogin.iEnterMy(String)"
});
formatter.result({
  "duration": 7142492300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing123!",
      "offset": 11
    }
  ],
  "location": "InvalidLogin.iTypeMy(String)"
});
formatter.result({
  "duration": 151289500,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin.iPressTheLoginButton()"
});
formatter.result({
  "duration": 2523203100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.",
      "offset": 26
    }
  ],
  "location": "InvalidLogin.iShouldGetTheCorrect(String)"
});
formatter.result({
  "duration": 3647299000,
  "status": "passed"
});
formatter.before({
  "duration": 115800,
  "status": "passed"
});
formatter.before({
  "duration": 99900,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I click the signin link",
  "keyword": "When "
});
formatter.match({
  "location": "Common.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 1944200,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027ebou-touray\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:130)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:730)\r\n\tat stepDefinitions.Common.iAmOnTheHomepage(Common.java:18)\r\n\tat ✽.Given I am on the homepage(src/test/Resources/InvalidLoogin.feature:3)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Common.iClickTheSigninLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": ": Validate error messages for each invalid login scenario",
  "description": "",
  "id": "login;:-validate-error-messages-for-each-invalid-login-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Given I am on the landing page"
    },
    {
      "line": 9,
      "value": "#And I click sign in"
    }
  ],
  "line": 10,
  "name": "I enter my \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I type my \"Testing123!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I press the login button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should get the correct \"This is a required field.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    }
  ],
  "location": "InvalidLogin.iEnterMy(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing123!",
      "offset": 11
    }
  ],
  "location": "InvalidLogin.iTypeMy(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "InvalidLogin.iPressTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a required field.",
      "offset": 26
    }
  ],
  "location": "InvalidLogin.iShouldGetTheCorrect(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 182500,
  "status": "passed"
});
formatter.before({
  "duration": 655900,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I click the signin link",
  "keyword": "When "
});
formatter.match({
  "location": "Common.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 979600,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027ebou-touray\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:130)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:730)\r\n\tat stepDefinitions.Common.iAmOnTheHomepage(Common.java:18)\r\n\tat ✽.Given I am on the homepage(src/test/Resources/InvalidLoogin.feature:3)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Common.iClickTheSigninLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": ": Validate error messages for each invalid login scenario",
  "description": "",
  "id": "login;:-validate-error-messages-for-each-invalid-login-scenario;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Given I am on the landing page"
    },
    {
      "line": 9,
      "value": "#And I click sign in"
    }
  ],
  "line": 10,
  "name": "I enter my \"davidzoe@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I type my \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I press the login button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should get the correct \"This is a required field.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "davidzoe@gmail.com",
      "offset": 12
    }
  ],
  "location": "InvalidLogin.iEnterMy(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 11
    }
  ],
  "location": "InvalidLogin.iTypeMy(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "InvalidLogin.iPressTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a required field.",
      "offset": 26
    }
  ],
  "location": "InvalidLogin.iShouldGetTheCorrect(String)"
});
formatter.result({
  "status": "skipped"
});
});