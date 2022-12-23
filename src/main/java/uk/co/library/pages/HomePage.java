package uk.co.library.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;
import uk.co.library.utility.Utility;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "keywords")
    WebElement jobTitleRef;

    @CacheLookup
    @FindBy(id = "location")
    WebElement location;

    @CacheLookup
    @FindBy(xpath = "//select[@id='distance']")
    WebElement distanceDropDown;

    @CacheLookup
    @FindBy(xpath = "//button[@id='toggle-hp-search']")
    WebElement moreSearchOptionsLink;

    @CacheLookup
    @FindBy(id = "salarymin")
    WebElement salaryMin;

    @CacheLookup
    @FindBy(id = "salarymax")
    WebElement salaryMax;

    @CacheLookup
    @FindBy(id = "salarytype")
    WebElement salaryTypeDropDown;

    @CacheLookup
    @FindBy(id = "tempperm")
    WebElement jobTypeDropDown;

    @CacheLookup
    @FindBy(id = "hp-search-btn")
    WebElement findJobsBtn;

    @CacheLookup
    @FindBy(xpath = "//span[text()='Accept All']")
    WebElement acceptAll;



    public void acceptCookies(){
        log.info("Switch to Iframe to accept all in manage privacy" + acceptAll);
        driver.switchTo().frame("gdpr-consent-notice");
        clickOnElement(acceptAll);
        driver.switchTo().defaultContent();

    }

    public void enterJobTitle(String jobTitle){
        log.info("Enter Job Title "+ jobTitle + " in the Job Title field" + jobTitleRef.toString());
     sendTextToElement(jobTitleRef, jobTitle);
    }

    public void enterLocation(String town){
        log.info("Enter location "+ town + " in the Location field" + location.toString());
        sendTextToElement(location, town);

    }

    public void selectDistance(String distance){
        log.info("Select distance"+ distance + " from the distance drop down menu" + distanceDropDown.toString());
    selectByVisibleTextFromDropDown(distanceDropDown, distance);
    }

    public void clickOnMoreSearchOptionLink(){
        log.info("Click on More Search Option Link" + moreSearchOptionsLink.toString());
    clickOnElement(moreSearchOptionsLink);
    }

    public void enterMinSalary(String minSalary){
        log.info("Enter  minimum salary "+ minSalary + " in the Salary Min field" + salaryMin.toString());
    sendTextToElement(salaryMin, minSalary);
    }

    public void enterMaxSalary(String maxSalary){
        log.info("Enter  Max Salary "+ maxSalary + " in the Salary Max field" + salaryMax.toString());
        sendTextToElement(salaryMax, maxSalary);
    }

    public void selectSalaryType(String sType){
        log.info("Select salary Type"+ sType + " from the Talary Type drop down menu" + salaryTypeDropDown.toString());
    selectByVisibleTextFromDropDown(salaryTypeDropDown, sType);
    }

    public void selectJobType(String jobType){
        log.info("Select Job type"+ jobType + " from the Job Type drop down menu" + jobTypeDropDown.toString());
    selectByVisibleTextFromDropDown(jobTypeDropDown, jobType);

    }

    public void clickOnFindJobsButton(){
        log.info("Click on find jobs button" + findJobsBtn.toString());
    clickOnElement(findJobsBtn);
    }



}
