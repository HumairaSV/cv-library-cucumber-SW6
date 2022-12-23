$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("JobSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Job Search Test",
  "description": "As user I want to search for different jobs using the cv library website",
  "id": "job-search-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Verify job search result using different data set",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data-set",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept all cookies",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter job title as \"\u003cJob Title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location as \"\u003cLocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select distance of \"\u003cDistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter minimum salary as \"\u003cSalary Min\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter maximum salary as\"\u003cSalary Max\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the type of salary as \"\u003cSalary Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the job type as \"\u003cJob Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the \"\u003cResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data-set;",
  "rows": [
    {
      "cells": [
        "Job Title",
        "Location",
        "Distance",
        "Salary Min",
        "Salary Max",
        "Salary Type",
        "Job Type",
        "Result"
      ],
      "line": 21,
      "id": "job-search-test;verify-job-search-result-using-different-data-set;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 5 miles",
        "30000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 22,
      "id": "job-search-test;verify-job-search-result-using-different-data-set;;2"
    },
    {
      "cells": [
        "Team Leader",
        "Manchester",
        "up to 1 mile",
        "25000",
        "40000",
        "Per month",
        "Contract",
        "Contract Team Leader jobs in Manchester"
      ],
      "line": 23,
      "id": "job-search-test;verify-job-search-result-using-different-data-set;;3"
    },
    {
      "cells": [
        "Administrator",
        "Blackpool",
        "up to 2 miles",
        "30000",
        "50000",
        "Per week",
        "Temporary",
        "Temporary Administrator jobs in Blackpool"
      ],
      "line": 24,
      "id": "job-search-test;verify-job-search-result-using-different-data-set;;4"
    },
    {
      "cells": [
        "Business Analyst",
        "London",
        "up to 7 miles",
        "40000",
        "80000",
        "Per annum",
        "Apprenticeship",
        "Apprenticeship Business Analyst jobs in London"
      ],
      "line": 25,
      "id": "job-search-test;verify-job-search-result-using-different-data-set;;5"
    },
    {
      "cells": [
        "Product Specialist",
        "Watford",
        "up to 10 miles",
        "25000",
        "55000",
        "Per hour",
        "Permanent",
        "Permanent Product Specialist jobs in Watford"
      ],
      "line": 26,
      "id": "job-search-test;verify-job-search-result-using-different-data-set;;6"
    },
    {
      "cells": [
        "Scrum Master",
        "Oldham",
        "up to 15 miles",
        "40000",
        "75000",
        "Per day",
        "Contract",
        "Contract Scrum Master jobs in Oldham"
      ],
      "line": 27,
      "id": "job-search-test;verify-job-search-result-using-different-data-set;;7"
    },
    {
      "cells": [
        "Developer",
        "Edinburgh",
        "up to 500 miles",
        "40000",
        "85000",
        "Per annum",
        "Part Time",
        "Part Time Developer jobs in Edinburgh"
      ],
      "line": 28,
      "id": "job-search-test;verify-job-search-result-using-different-data-set;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 35817131500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify job search result using different data set",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data-set;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept all cookies",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter job title as \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location as \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select distance of \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter minimum salary as \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter maximum salary as\"50000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the type of salary as \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the job type as \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 83981400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptAllCookies()"
});
formatter.result({
  "duration": 13300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitleAs(String)"
});
formatter.result({
  "duration": 148323600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iEnterLocationAs(String)"
});
formatter.result({
  "duration": 76403800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectDistanceOf(String)"
});
formatter.result({
  "duration": 128218600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 96453600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 27
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalaryAs(String)"
});
formatter.result({
  "duration": 178493700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 26
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalaryAs(String)"
});
formatter.result({
  "duration": 110663900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 32
    }
  ],
  "location": "JobSearchSteps.iSelectTheTypeOfSalaryAs(String)"
});
formatter.result({
  "duration": 68182600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 26
    }
  ],
  "location": "JobSearchSteps.iSelectTheJobTypeAs(String)"
});
formatter.result({
  "duration": 106298500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 108802600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iVerifyThe(String)"
});
formatter.result({
  "duration": 21203537800,
  "status": "passed"
});
formatter.after({
  "duration": 700755400,
  "status": "passed"
});
formatter.before({
  "duration": 33962451600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify job search result using different data set",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data-set;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept all cookies",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter job title as \"Team Leader\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location as \"Manchester\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select distance of \"up to 1 mile\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter minimum salary as \"25000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter maximum salary as\"40000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the type of salary as \"Per month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the job type as \"Contract\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the \"Contract Team Leader jobs in Manchester\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 20700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptAllCookies()"
});
formatter.result({
  "duration": 11900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Team Leader",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitleAs(String)"
});
formatter.result({
  "duration": 65893600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manchester",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iEnterLocationAs(String)"
});
formatter.result({
  "duration": 72949100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 1 mile",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectDistanceOf(String)"
});
formatter.result({
  "duration": 100498200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 77065900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 27
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalaryAs(String)"
});
formatter.result({
  "duration": 230603100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 26
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalaryAs(String)"
});
formatter.result({
  "duration": 64920400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per month",
      "offset": 32
    }
  ],
  "location": "JobSearchSteps.iSelectTheTypeOfSalaryAs(String)"
});
formatter.result({
  "duration": 85479100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 26
    }
  ],
  "location": "JobSearchSteps.iSelectTheJobTypeAs(String)"
});
formatter.result({
  "duration": 86154200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 87795800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Team Leader jobs in Manchester",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iVerifyThe(String)"
});
formatter.result({
  "duration": 20556342600,
  "status": "passed"
});
formatter.after({
  "duration": 641125900,
  "status": "passed"
});
formatter.before({
  "duration": 33757605100,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify job search result using different data set",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data-set;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept all cookies",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter job title as \"Administrator\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location as \"Blackpool\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select distance of \"up to 2 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter minimum salary as \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter maximum salary as\"50000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the type of salary as \"Per week\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the job type as \"Temporary\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the \"Temporary Administrator jobs in Blackpool\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 45200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptAllCookies()"
});
formatter.result({
  "duration": 14600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Administrator",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitleAs(String)"
});
formatter.result({
  "duration": 84762000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blackpool",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iEnterLocationAs(String)"
});
formatter.result({
  "duration": 67488700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 2 miles",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectDistanceOf(String)"
});
formatter.result({
  "duration": 85436300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 65688000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 27
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalaryAs(String)"
});
formatter.result({
  "duration": 213891600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 26
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalaryAs(String)"
});
formatter.result({
  "duration": 73836800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per week",
      "offset": 32
    }
  ],
  "location": "JobSearchSteps.iSelectTheTypeOfSalaryAs(String)"
});
formatter.result({
  "duration": 86491500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temporary",
      "offset": 26
    }
  ],
  "location": "JobSearchSteps.iSelectTheJobTypeAs(String)"
});
formatter.result({
  "duration": 75664200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 81582500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temporary Administrator jobs in Blackpool",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iVerifyThe(String)"
});
formatter.result({
  "duration": 8946205800,
  "status": "passed"
});
formatter.after({
  "duration": 678876200,
  "status": "passed"
});
formatter.before({
  "duration": 34719421600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify job search result using different data set",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data-set;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept all cookies",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter job title as \"Business Analyst\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location as \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select distance of \"up to 7 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter minimum salary as \"40000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter maximum salary as\"80000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the type of salary as \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the job type as \"Apprenticeship\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the \"Apprenticeship Business Analyst jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 13700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptAllCookies()"
});
formatter.result({
  "duration": 6000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Analyst",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitleAs(String)"
});
formatter.result({
  "duration": 80707200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iEnterLocationAs(String)"
});
formatter.result({
  "duration": 60395900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 7 miles",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectDistanceOf(String)"
});
formatter.result({
  "duration": 106793800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 69998000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 27
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalaryAs(String)"
});
formatter.result({
  "duration": 215514900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80000",
      "offset": 26
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalaryAs(String)"
});
formatter.result({
  "duration": 58505700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 32
    }
  ],
  "location": "JobSearchSteps.iSelectTheTypeOfSalaryAs(String)"
});
formatter.result({
  "duration": 51490200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apprenticeship",
      "offset": 26
    }
  ],
  "location": "JobSearchSteps.iSelectTheJobTypeAs(String)"
});
formatter.result({
  "duration": 79718400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 87547500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apprenticeship Business Analyst jobs in London",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iVerifyThe(String)"
});
formatter.result({
  "duration": 8818363200,
  "status": "passed"
});
formatter.after({
  "duration": 694314600,
  "status": "passed"
});
formatter.before({
  "duration": 33633577400,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify job search result using different data set",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data-set;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept all cookies",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter job title as \"Product Specialist\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location as \"Watford\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select distance of \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter minimum salary as \"25000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter maximum salary as\"55000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the type of salary as \"Per hour\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the job type as \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the \"Permanent Product Specialist jobs in Watford\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 13700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptAllCookies()"
});
formatter.result({
  "duration": 7500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product Specialist",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitleAs(String)"
});
formatter.result({
  "duration": 87805100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Watford",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iEnterLocationAs(String)"
});
formatter.result({
  "duration": 62560300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectDistanceOf(String)"
});
formatter.result({
  "duration": 78479700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 65081800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 27
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalaryAs(String)"
});
formatter.result({
  "duration": 228027900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55000",
      "offset": 26
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalaryAs(String)"
});
formatter.result({
  "duration": 62702200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per hour",
      "offset": 32
    }
  ],
  "location": "JobSearchSteps.iSelectTheTypeOfSalaryAs(String)"
});
formatter.result({
  "duration": 94459700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 26
    }
  ],
  "location": "JobSearchSteps.iSelectTheJobTypeAs(String)"
});
formatter.result({
  "duration": 71374700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 79747500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Product Specialist jobs in Watford",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iVerifyThe(String)"
});
formatter.result({
  "duration": 9201272500,
  "status": "passed"
});
formatter.after({
  "duration": 701654700,
  "status": "passed"
});
formatter.before({
  "duration": 33916786000,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify job search result using different data set",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data-set;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept all cookies",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter job title as \"Scrum Master\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location as \"Oldham\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select distance of \"up to 15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter minimum salary as \"40000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter maximum salary as\"75000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the type of salary as \"Per day\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the job type as \"Contract\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the \"Contract Scrum Master jobs in Oldham\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 29300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptAllCookies()"
});
formatter.result({
  "duration": 17000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Scrum Master",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitleAs(String)"
});
formatter.result({
  "duration": 69462800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oldham",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iEnterLocationAs(String)"
});
formatter.result({
  "duration": 59026400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectDistanceOf(String)"
});
formatter.result({
  "duration": 56759000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 71462500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 27
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalaryAs(String)"
});
formatter.result({
  "duration": 106013700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "75000",
      "offset": 26
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalaryAs(String)"
});
formatter.result({
  "duration": 87508700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per day",
      "offset": 32
    }
  ],
  "location": "JobSearchSteps.iSelectTheTypeOfSalaryAs(String)"
});
formatter.result({
  "duration": 85782900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 26
    }
  ],
  "location": "JobSearchSteps.iSelectTheJobTypeAs(String)"
});
formatter.result({
  "duration": 82975800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 90645200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Scrum Master jobs in Oldham",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iVerifyThe(String)"
});
formatter.result({
  "duration": 9358165000,
  "status": "passed"
});
formatter.after({
  "duration": 679468700,
  "status": "passed"
});
formatter.before({
  "duration": 34735068800,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify job search result using different data set",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data-set;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept all cookies",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter job title as \"Developer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location as \"Edinburgh\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select distance of \"up to 500 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter minimum salary as \"40000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter maximum salary as\"85000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the type of salary as \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the job type as \"Part Time\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the \"Part Time Developer jobs in Edinburgh\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptAllCookies()"
});
formatter.result({
  "duration": 8400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Developer",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitleAs(String)"
});
formatter.result({
  "duration": 69239100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edinburgh",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iEnterLocationAs(String)"
});
formatter.result({
  "duration": 69750200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 500 miles",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectDistanceOf(String)"
});
formatter.result({
  "duration": 97911800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 67447300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 27
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalaryAs(String)"
});
formatter.result({
  "duration": 205137000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "85000",
      "offset": 26
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalaryAs(String)"
});
formatter.result({
  "duration": 72246300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 32
    }
  ],
  "location": "JobSearchSteps.iSelectTheTypeOfSalaryAs(String)"
});
formatter.result({
  "duration": 68779500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Part Time",
      "offset": 26
    }
  ],
  "location": "JobSearchSteps.iSelectTheJobTypeAs(String)"
});
formatter.result({
  "duration": 75650500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 74845200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Part Time Developer jobs in Edinburgh",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iVerifyThe(String)"
});
formatter.result({
  "duration": 28524697100,
  "status": "passed"
});
formatter.after({
  "duration": 685962800,
  "status": "passed"
});
});