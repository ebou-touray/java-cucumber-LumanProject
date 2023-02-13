package Pages;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class CreateNewUserPage {

    //Declare Your element and locators here
    @FindBy(how = How.LINK_TEXT, using = "Create an Account")
    public static WebElement CreateNewAccountLink;

    @FindBy(how = How.ID_OR_NAME, using = "firstname")
    public static WebElement NewUserFirstName;

    @FindBy(how = How.ID_OR_NAME, using = "lastname")
    public static WebElement NewUserLastName;
    @FindBy(how = How.ID_OR_NAME, using = "is_subscribed")
    public static WebElement NewsLetterCheckbox;

    @FindBy(how = How.ID_OR_NAME, using = "email_address")
    public static WebElement NewUserEmailAddress;
    @FindBy(how = How.ID_OR_NAME, using = "password")
    public static WebElement NewUserPassword;
    @FindBy(how = How.ID_OR_NAME, using = "password-confirmation")
    public static WebElement PasswordConfirmation;
    @FindBy(how = How.XPATH, using = "//span[text() = 'Create an Account']")
    public static WebElement CreateAccountButton;

    @FindBy(how = How.XPATH, using = "/html/body/div[2]/header/div[1]/div/ul/li[1]/span")
    public static WebElement AccountCreationSuccessMessage;


    //Declare your methods
    public void clickCreateAccountLink() {
        CreateNewAccountLink.click();
    }

    public void enterNewUserFirstName() {
        NewUserFirstName.sendKeys("John");
    }

    public void enterNewUserLastName() {
        NewUserLastName.sendKeys("Joe");
    }

    public void subscribeToNewsLetter() {
        NewsLetterCheckbox.click();
    }

    public void enterNewUserEmail() {
        int random = 100 + (int) (Math.random() * ((1000 - 1) + 1));
        NewUserEmailAddress.sendKeys("newTestUser123" + random + "@gmail.com");
    }

    public void enterNewUserPassword() {
        NewUserPassword.sendKeys("Testing123!");
    }

    public void confirmNewUserPassword() {
        PasswordConfirmation.sendKeys("Testing123!");
    }

    public void createAccountButton() {
        CreateAccountButton.click();
    }

    public void AssertSuccessfullyAccountCreation() throws InterruptedException {
        Thread.sleep(10000);
        String ExpectedLoggedInMessage = "Welcome, John Joe! ";
        String ActualLoggedInMessage = AccountCreationSuccessMessage.getText();
        Assert.assertEquals(ExpectedLoggedInMessage, ActualLoggedInMessage);
        Thread.sleep(10000);
        System.out.println(ActualLoggedInMessage);


    }
}