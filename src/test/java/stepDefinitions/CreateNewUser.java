package stepDefinitions;

import Base.TestBase;
import Pages.CreateNewUserPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

public class CreateNewUser extends TestBase {


     public int random;
    //@Given("^I am on the home screen$")
    //public void iAmOnTheHomeScreen() {

        /*System.setProperty("webdriver.chrome.driver", "C:\\chromedriver.exe");
        driver = new ChromeDriver();

        driver.navigate().to("https://magento.softwaretestingboard.com/");*/

       // driver.manage().deleteAllCookies();
        //driver.get(CONFIG.getProperty("URL"));
       // driver.manage().window().maximize();


   // }

    //@And("^I click the link to create an account$")
    //public void iClickTheLinkToCreateAnAccount() {
        //CreateNewUserPage File = PageFactory.initElements(driver, CreateNewUserPage.class);
        //File.clickCreateAccountLink();
        //driver.findElement(By.linkText("Create an Account")).click();
    //}

    @And("^I enter first name$")
    public void iEnterFirstName() {
        CreateNewUserPage File = PageFactory.initElements(driver, CreateNewUserPage.class);
        File.enterNewUserFirstName();

        // driver.findElement(By.name("firstname")).sendKeys("John");
    }

    @And("^I enter lastname$")
    public void iEnterLastname() {
        CreateNewUserPage File = PageFactory.initElements(driver, CreateNewUserPage.class);
        File.enterNewUserLastName();
        //driver.findElement(By.id("lastname")).sendKeys("Joe");
    }

    @And("^I sign up for news letter$")
    public void iSignUpForNewsLetter() {
        CreateNewUserPage File = PageFactory.initElements(driver, CreateNewUserPage.class);
        File.subscribeToNewsLetter();
        //driver.findElement(By.id("is_subscribed")).click();
    }

    @And("^I enter email$")
    public void iEnterEmail() {
        CreateNewUserPage File = PageFactory.initElements(driver, CreateNewUserPage.class);
        File.enterNewUserEmail();
        //random = 100 + (int) (Math.random()*((1000-1)+1));
       // driver.findElement(By.id("email_address")).sendKeys("newTester"+ random + "@gmail.com");


        //driver.findElement(By.name("email")).sendKeys("newuser1@gmil.com");
    }

    @And("^I enter new user password$")
    public void iEnterNewUserPassword() {
        CreateNewUserPage File = PageFactory.initElements(driver, CreateNewUserPage.class);
        File.enterNewUserPassword();
        //driver.findElement(By.name("password")).sendKeys("Testing1234!");
    }

    @And("^I confirm password$")
    public void iConfirmPassword() {
        CreateNewUserPage File = PageFactory.initElements(driver, CreateNewUserPage.class);
        File.confirmNewUserPassword();
        //driver.findElement(By.id("password-confirmation")).sendKeys("Testing1234!");
    }

    @When("^I click the create aacount button$")
    public void iClickTheCreateAacountButton() {
        CreateNewUserPage File = PageFactory.initElements(driver, CreateNewUserPage.class);
        File.createAccountButton();
        //driver.findElement(By.xpath("//span[text() = 'Create an Account']")).click();
    }

    @Then("^my account should be created successfully$")
    public void myAccountShouldBeCreatedSuccessfully() throws InterruptedException {
        /*
         String ExpectedLoggedInMessage = "Welcome, John Joe!";
        String ActualLoggedInMessage = driver.findElement(By.xpath("/html/body/div[2]/header/div[1]/div/ul/li[1]/span")).getText();
        Assert.assertEquals(ExpectedLoggedInMessage, ActualLoggedInMessage);
         System.out.println(ActualLoggedInMessage);
        */
        Thread.sleep(10000);
        CreateNewUserPage File = PageFactory.initElements(driver, CreateNewUserPage.class);
        File.AssertSuccessfullyAccountCreation();

    }
}
