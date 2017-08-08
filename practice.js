//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

  var me = {
    name : 'Trent',
    age : 30
  };

  console.log(me.name);

//NEXT PROBLEM

//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

var favoriteThings = {
  band : 'Nightwish',
  food : 'seafood',
  person : 'wife',
  book : 'Harry Potter',
  movie : 'Star Wars',
  holiday : 'Halloween'
}

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.
favoriteThings.car = 'Ferrari';
favoriteThings.brand = 'Titleist';

//Now change the value of the food key in your favoriteThings object to be 'Chicken Nuggets' and change the value of the book key in your favoriteThings object to be 'Harry Potter'.

favoriteThings.food = 'Chicken Nuggets';

//NEXT PROBLEM

/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

var backPack = {
};
var item = 'firstPocket';
backPack[item] = 'chapstick';

//After you do the above, alert your entire backPack object.

//alert(backPack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

console.log(backPack);

//NEXT PROBLEM

//Create an 'alsoMe' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

var alsoMe = {
  name : 'Trent Bennett',
  age :  30,
  height :  'short',
  gender :  'Male',
  married :  'Yes',
  eyeColor :  'hazel',
  hairColor :  'brown'
};

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc
function truthyObj1(alsoMe){
  for(var i in alsoMe){
    if(alsoMe.hasOwnProperty(i)){
      return alsoMe[i];
    }
    }
  return alsoMe[i];
}
console.log(truthyObj1(alsoMe));

//NEXT PROBLEM

//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

var album = {
  Africa : 78,
  Alone : 85,
  America : 878,
  Anything : 854,
  Assasin : 745
};

//Now, loop through your album object alerting every song title individually.
function truthyObj2(album){
  for(var i in album){
    if(album.hasOwnProperty(i)){
      return album[i];
    }
    }
  return album[i];
}
console.log(truthyObj2(album));

//NEXT PROBLEM

//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

var states = {
  Utah : 200,
  California : 500,
  Texas : 425,
  Maine : 80,
  Idaho : 97
};

//Now, loop through your states object and if the states population is greater than 30K, alert that state.
function truthyObj3(states){
  for(var i in states){
    if(states.hasOwnProperty(i)){
      return states[i];
    }
    }
  return states[i];
}
console.log(truthyObj3(states));

//NEXT PROBLEM

var user1 = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */
function truthyObj(user1){
  for(var i in user1){
    if(!user1[i]){
      delete user1[i];
    }
  }
  return user1;
}

console.log(truthyObj(user1));

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.
user1.name = 'Trent Bennett';
user1.pwHash = '8585';
user1.username = 'tb45';

//NEXT PROBLEM

var user2 = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayEmail: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.
user2.name = 'Tyler S. McGinnis';
user2.email = 'tyler.mcginnis@devmounta.in'

//Now call the sayEmail method that's on the user object which will alert the users email
sayEmail.function();

//NEXT PROBLEM

//Create an empty object called methodCollection.
var methodCollection = {};

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */
methodCollection.alertHello(function(){
    alert('Hello : ' + this.alertHello);
});

methodCollection.logHello(function(){
    console.log('logHello : ' + this.logHello);
});

//Now call your alertHello and logHello methods.

  //Code Here



//NEXT PROBLEM



// Create a function called makePerson which takes in name, birthday, ssn as its
// parameters and returns a new object with all of the information that you passed in.

  //Code Here



//NEXT PROBLEM



// Create a function called makeCard which takes in cardNumber, expirationDate, and securityCode to make a Credit Card object and returns that object so that whenever you invoke makeCard, you get a brand new credit card.

  //Code Here



//NEXT PROBLEM



/* As of this point you should have a makePerson and a makeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard. While Object.assign would give you the answer, specRunner requires an answer without using it.
*/

  //Code Here
