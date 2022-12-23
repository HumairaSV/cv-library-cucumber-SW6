package uk.co.library.cucumber.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.library.pages.HomePage;
import uk.co.library.pages.ResultPage;

public class JobSearchSteps {

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I accept all cookies$")
    public void iAcceptAllCookies() {
       new HomePage().acceptCookies();
    }

    @And("^I enter job title as \"([^\"]*)\"$")
    public void iEnterJobTitleAs(String jobTitle){
        new HomePage().enterJobTitle(jobTitle);
    }

    @And("^I enter location as \"([^\"]*)\"$")
    public void iEnterLocationAs(String location){
        new HomePage().enterLocation(location);
    }

    @And("^I select distance of \"([^\"]*)\"$")
    public void iSelectDistanceOf(String distance){
        new HomePage().selectDistance(distance);
    }

    @And("^I click on more search option link$")
    public void iClickOnMoreSearchOptionLink() {
        new HomePage().clickOnMoreSearchOptionLink();
    }

    @And("^I enter minimum salary as \"([^\"]*)\"$")
    public void iEnterMinimumSalaryAs(String minSalary){
        new HomePage().enterMinSalary(minSalary);
    }

    @And("^I enter maximum salary as\"([^\"]*)\"$")
    public void iEnterMaximumSalaryAs(String maxSalary){
        new HomePage().enterMaxSalary(maxSalary);
    }

    @And("^I select the type of salary as \"([^\"]*)\"$")
    public void iSelectTheTypeOfSalaryAs(String salaryType){
        new HomePage().selectSalaryType(salaryType);
    }

    @And("^I select the job type as \"([^\"]*)\"$")
    public void iSelectTheJobTypeAs(String jobType){
        new HomePage().selectJobType(jobType);
    }

    @And("^I click on Find jobs button$")
    public void iClickOnFindJobsButton() {
        new HomePage().clickOnFindJobsButton();
    }

    @Then("^I verify the \"([^\"]*)\"$")
    public void iVerifyThe(String expected){
        new ResultPage().verifyTheResults(expected);
    }
}
