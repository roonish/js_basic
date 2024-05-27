document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve and store form values in variables
    var userName = document.getElementById('name').value;
    var userEmail = document.getElementById('email').value;
    var userAge = parseInt(document.getElementById('age').value);
    var isStudent = false;  // Boolean variable to indicate whether the user is a student

    // Perform operations with the variables
    // Concatenation
    var welcomeMessage = "Welcome, " + userName + "!";
    // Arithmetic operations
    var futureAge = userAge + 5;
    var isAdult = userAge >= 18;
    var emailValid = userEmail.includes('@');
    // Logical AND operation
    var canRegister = emailValid && isAdult;
    // Logical OR operation 
    var notTeenager = userAge < 13 || userAge > 19; 
    // Logical NOT operation
    var isOlder = !(userAge < 30); 

    console.log(welcomeMessage);
    console.log("In 5 years, you will be " + futureAge + " years old.");
    console.log("Is the user an adult? " + isAdult);
    console.log("Is the email valid? " + emailValid);
    console.log("Is the user a student? " + isStudent);
    console.log("Can the user register? " + canRegister);
    console.log("Is the user not a teenager? " + notTeenager);
    console.log("Is the user 30 years old or older? " + isOlder);

    // Create an object representing a book
    var book = {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        yearOfPublication: 1960,
        isbn: "978-0-06-112008-4"
    };

    // Access and display the properties of the book object
    console.log("Book Title: " + book.title);
    console.log("Book Author: " + book.author);
    console.log("Year of Publication: " + book.yearOfPublication);
    console.log("ISBN: " + book.isbn);

    // Update some properties of the book object with new values
    book.yearOfPublication = 2020;
    book.isbn = "978-0-06-112241-5";

    console.log("Updated Year of Publication: " + book.yearOfPublication);
    console.log("Updated ISBN: " + book.isbn);

    // Add a new property to the book object
    book.publisher = "J.B. Lippincott & Co.";

    console.log("Publisher: " + book.publisher);

    // Delete one of the properties from the book object
    delete book.isbn;

    console.log("ISBN after deletion: " + book.isbn);
}
);
