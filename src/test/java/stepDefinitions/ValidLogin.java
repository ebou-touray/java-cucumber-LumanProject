package stepDefinitions;

import Base.TestBase;
import cucumber.api.java.en.*;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
public class ValidLogin extends TestBase {

    @Given("^I am on the home page$")
    public void i_am_on_the_home_page() throws Throwable {
        System.setProperty("webdriver.chrome.driver", "C:\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.navigate().to("https://magento.softwaretestingboard.com/");
    }

    @When("^I click on sign in$")
    public void i_click_on_sign_in() throws Throwable {
        driver.findElement(By.className("authorization-link")).click();
    }

    @When("^I enter username$")
    public void i_enter_username() throws Throwable {
        driver.findElement(By.name("login[username]")).sendKeys("amieocolley@gmail.com");
        Thread.sleep(5000);
    }

    @When("^I enter password$")
    public void i_enter_password() throws Throwable {
        driver.findElement(By.name("login[password]")).sendKeys("Jalato@1");
    }

    @When("^I click the sign in button$")
    public void i_click_the_sign_in_button() throws Throwable {
        driver.findElement(By.id("send2")).click();
    }

    @Then("^I should be successfully logged$")
    public void i_should_be_successfully_logged() throws Throwable {
        String ExpectedLoggedInMessage = "Welcome, Ebou Touray!";
        String ActualLoggedInMessage = driver.findElement(By.xpath("/html/body/div[2]/header/div[1]/div/ul/li[1]/span")).getText();
        Assert.assertEquals(ExpectedLoggedInMessage, ActualLoggedInMessage);
        System.out.println(ActualLoggedInMessage );

        driver.quit();
    }

}
