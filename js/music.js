Parse.initialize("n5CGD485m3Af5vpfShBL3l25KF6EOrx4vnQ5ambB", "CJe1CrIqhgPL6aEieos9P2S12ygrIUbV9EvBNwry");


// Create a new sub-class of the Parse.Object, with name "Music"
var Music = Parse.Object.extend('Music');


// // Create a new instance of your Music class 
// var musicItem = new Music();

// // Set a property 'band' equal to a band name
// musicItem.set("band", "Test");


// // Set a property 'website' equal to the band's website
// musicItem.set("website", "TestBand.com");

    
// // Set a property 'song' equal to a song
// musicItem.set("song", "Test Song");


// Save your instance of your song -- and go see it on parse.com!
//musicItem.save();

// Click event when form is submitted
$('form').submit(function() {
	// Create a new instance of your Music class 
	var musicItem = new Music();

	// For each input element, set a property of your new instance equal to the input's value
	$("input").each(function(){
		var thisInput = $(this);
		musicItem.set(thisInput.attr('id'), thisInput.val());
		thisInput.val("");
	})


	// After setting each property, save your new instance back to your database
	musicItem.save();
	
	return false
})



// Write a function to get data
var getData = function() {
	

	// Set up a new query for our Music class


	// Set a parameter for your query -- where the website property isn't missing


	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
}

// A function to build your list
var buildList = function(data) {
	// Empty out your unordered list
	
	// Loop through your data, and pass each element to the addItem function

}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function

	
	// Append li that includes text from the data item


	
	// Time pending, create a button that removes the data item on click
	
}

// Call your getData function when the page loads


