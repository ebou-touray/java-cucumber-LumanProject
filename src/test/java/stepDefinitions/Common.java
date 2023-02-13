package stepDefinitions;

import Base.TestBase;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;

import java.io.IOException;

public class Common extends TestBase {
    @Before
    public void  setup() throws IOException {
        initialize();
    }
    @Given("^I am on the homepage$")
    public void iAmOnTheHomepage() {
        driver.manage().deleteAllCookies();
        driver.get(CONFIG.getProperty("URL"));
        driver.manage().window().maximize();
    }

    @When("^I click the signin link$")
    public void iClickTheSigninLink() {
        driver.findElement(By.className("authorization-link")).click();
    }
}
