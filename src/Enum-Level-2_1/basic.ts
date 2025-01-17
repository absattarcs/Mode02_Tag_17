// Defining the HtmlError Enum
enum HtmlError {
  OK = 200,
  Redirect = 300,
  BadRequest = 400,
  InternalServerError = 500
}

// Function to show a random HTML error
function showHtmlError(): void {
  const randomValue = Math.floor(Math.random() * 6); // Generates a number between 0 and 5

  switch (randomValue) {
    case 0:
    case 1:
    case 2:
      console.log("Error:", HtmlError.OK);
      break;
    case 3:
      console.log("Error:", HtmlError.Redirect);
      break;
    case 4:
      console.log("Error:", HtmlError.BadRequest);
      break;
    case 5:
      console.log("Error:", HtmlError.InternalServerError);
      break;
    default:
      console.log("Unexpected value:", randomValue);
  }
}

// Calling the function 
showHtmlError();