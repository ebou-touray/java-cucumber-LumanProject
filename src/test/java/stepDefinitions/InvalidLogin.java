package stepDefinitions;


import Base.TestBase;
import cucumber.api.java.en.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class InvalidLogin extends TestBase {

    /*@Given("^I am on the landing page$")
    public void iAmOnTheLandingPage() {
        System.setProperty("webdriver.chrome.driver", "C:\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.navigate().to("https://magento.softwaretestingboard.com/");
    }

    @And("^I click sign in$")
    public void iClickSignIn() {
        driver.findElement(By.className("authorization-link")).click();
    }
*/
    @When("^I enter my \"([^\"]*)\"$")
    public void iEnterMy(String arg0) throws Throwable {
        driver.findElement(By.name("login[username]")).sendKeys("amieocolley@gmail.com");
        Thread.sleep(5000);
    }
    @And("^I type my \"([^\"]*)\"$")
    public void iTypeMy(String arg0) throws Throwable {
        driver.findElement(By.name("login[password]")).sendKeys("Jalato@1");
    }

    @When("^I press the login button$")
    public void iPressTheLoginButton() {
        driver.findElement(By.id("send2")).click();
    }

    @Then("^I should get the correct \"([^\"]*)\"$")
    public void iShouldGetTheCorrect(String arg0) throws Throwable {
       // String ExpectedErrorInMessage = errorMessage;
        String ActualLoggedInMessage = driver.findElement(By.xpath("/html/body/div[2]/header/div[1]/div/ul/li[1]/span")).getText();
      //  Assert.assertEquals(ExpectedErrorInMessage , ActualLoggedInMessage);
        System.out.println(ActualLoggedInMessage);

        driver.quit();
    }


}
