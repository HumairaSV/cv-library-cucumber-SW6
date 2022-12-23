@Login
Feature: Job Search Test
  As user I want to search for different jobs using the cv library website

  @Smoke @Regression
  Scenario Outline: Verify job search result using different data set
    Given I am on homepage
    When  I accept all cookies
    And   I enter job title as "<Job Title>"
    And   I enter location as "<Location>"
    And   I select distance of "<Distance>"
    And   I click on more search option link
    And   I enter minimum salary as "<Salary Min>"
    And   I enter maximum salary as"<Salary Max>"
    And   I select the type of salary as "<Salary Type>"
    And   I select the job type as "<Job Type>"
    And   I click on Find jobs button
    Then  I verify the "<Result>"

    Examples:
      | Job Title          | Location   | Distance          | Salary Min | Salary Max | Salary Type | Job Type       | Result                                         |
      | Tester             | Harrow     | up to 5 miles     | 30000      | 50000      | Per annum   | Permanent      | Permanent Tester jobs in Harrow on the Hill    |
      | Team Leader        | Manchester | up to 1 mile      | 25000      | 40000      | Per month   | Contract       | Contract Team Leader jobs in Manchester        |
      | Administrator      | Blackpool  | up to 2 miles     | 30000      | 50000      | Per week    | Temporary      | Temporary Administrator jobs in Blackpool      |
      | Business Analyst   | London     | up to 7 miles     | 40000      | 80000      | Per annum   | Apprenticeship | Apprenticeship Business Analyst jobs in London |
      | Product Specialist | Watford    | up to 10 miles    | 25000      | 55000      | Per hour    | Permanent      | Permanent Product Specialist jobs in Watford   |
      | Scrum Master       | Oldham     | up to 15 miles    | 40000      | 75000      | Per day     | Contract       | Contract Scrum Master jobs in Oldham           |
      | Developer          | Edinburgh  | up to 500 miles   | 40000      | 85000      | Per annum   | Part Time      | Part Time Developer jobs in Edinburgh          |
