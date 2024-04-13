function clickAnswer(){
    var english, vietnamese;
    var titleAnswer = document.getElementById("title-answer");

    fetch('https://thebookofanswers.azurewebsites.net/answer/random')
        .then(response => {
            if (response.ok) {
                return response.json(); // Parse the response data as JSON
            } else {
                throw new Error('API request failed');
            }
        })
        .then(data => {
            // Process the response data here
            // console.log(english); // Example: Logging the data to the console
            english = data.english;
            vietnamese = data.vietnamese;
        })
        .catch(error => {
            // Handle any errors here
            console.error(error); // Example: Logging the error to the console
        });

    //define the containers of the info we target
    var timeAnimation = 500;
    var quoteContainer = $('#quoteContainer');

    titleAnswer.innerText = "Your Answer";

    //fade out animation with callback
    quoteContainer.fadeOut(timeAnimation, function () {
        quoteContainer.html('');
        quoteContainer.append('<p id ="vietnamese">'+ vietnamese + '</p>' + '<p id ="english">' + english + '</p>');
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
    });
}