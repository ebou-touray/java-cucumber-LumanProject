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
  "duration": 4285743300,
  "status": "passed"
});
formatter.before({
  "duration": 219900,
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
  "duration": 3857457300,
  "status": "passed"
});
formatter.match({
  "location": "Common.iClickTheSigninLink()"
});
formatter.result({
  "duration": 1920947800,
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
  "duration": 5458472000,
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
  "duration": 191937200,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin.iPressTheLoginButton()"
});
formatter.result({
  "duration": 2633574700,
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
  "duration": 2693919200,
  "status": "passed"
});
formatter.before({
  "duration": 158400,
  "status": "passed"
});
formatter.before({
  "duration": 210200,
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
  "duration": 5700800,
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
      "val": "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.",
      "offset": 26
    }
  ],
  "location": "InvalidLogin.iShouldGetTheCorrect(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 120600,
  "status": "passed"
});
formatter.before({
  "duration": 136300,
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
  "duration": 499400,
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
  "duration": 4395400,
  "status": "passed"
});
formatter.before({
  "duration": 132400,
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
  "duration": 716200,
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