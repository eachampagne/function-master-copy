//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
	// initialize empty array to store values
	let values = [];

	// loop over the keys in the input object
	for (let key in object) {
		// push the corresponding value into the values array
		values.push(object[key]);
	}

	//return values
	return values;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
	// get array of keys with Object.keys(), use join() to join, then return
	return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
	// initialize empty array to hold string values
	let strings = [];

	// loop over keys of object
	for (let key in object) {
		// check if the value is a string
		if (typeof object[key] === "string") {
			// if so, add it to the strings array
			strings.push(object[key]);
		}
	}

	// return the strings joined with spaces
	return strings.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
	// check if the collection is an array
	if (Array.isArray(collection)) {
		// if so, return "array"
		return "array";
	// check if it's an object, but not null or date
	} else if (typeof collection === "object" && collection !== null && !(collection instanceof Date)) {
		// if so, return "object"
		return "object";
	} else {
		// if it's neither and array nor an object, return undefined
		return undefined;
	}
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
	// access the first letter and raise it to uppercase
	let word = string[0].toUpperCase();
	// add the rest of the string as-is
	word += string.slice(1);
	// return the word
	return word;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
	// split the string into an array of individual words (assumes all are separated with spaces, rather than underscores, dashes, etc)
	let words = string.split(" ");
	// loop over the words array
	for (let i = 0; i < words.length; i++) {
		//replace the word in the array with the capitalized version of itself
		words[i] = capitalizeWord(words[i]);
	}
	// rejoin the array, and return
	return words.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
	// use capitalizeWord to ensure the name is capitalized, then return the assembled string
	return "Welcome " + capitalizeWord(object.name) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
	// return the assembled string, using capitalizeWord to capitalize the name and species
	return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
	// check whether object has a noises property
	if (!object.hasOwnProperty("noises")) {
		// if not, return "there are noises"
		return "there are no noises";
	// check if the noises array has empty
	} else if (object.noises.length === 0) {
		// if so, return "there are no noises"
		return "there are no noises";
	} else {
		// otherwise, join the noises with a space and return
		return object.noises.join(" ");
	}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
	// split the string into individual words
	// this is better for just searching for a substring that matches the word, because this method won't match partial words
	// Ex: a sentence containing the word "notebook" contains the substring "book" but not the word "book"
	// this is case-sensitive and doesn't trim punctuation, so the last word before a comma, period, etc will never get matched
	let words = string.split(" ");

	// loop over the words array
	for (let i = 0; i < words.length; i++) {
		// check if any element matches word
		if (words[i] === word) {
			// if so return true
			return true;
		}
	}

	// if completed the loop, word is not in the array, so return false
	return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
	// this function doesn't check whether a name already exists before adding it so it can create duplicate friends

	// check if object has a friends property
	if (object.hasOwnProperty("friends")) {
		// if so add the name to the existing friends
		object.friends.push(name);
	} else {
		// otherwise create the friends property and initialize it to an array containing the name
		object.friends = [name];
	}
	// return the object
	return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
	// first check whether object has a friends property
	if (!object.hasOwnProperty("friends")) {
		// if not return false
		return false;
	} else {
		// if the property exists, uses includes() to check whether friends contains the name and return the result
		return object.friends.includes(name);
	}
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
	//this assumes friendships are symmetric; i.e. if person 1 is listed as a friend of person 2, then person 2 is listed as a friend of person 1

	// initialize empty array of non-friends
	let notFriends = [];

	// loop over list of people objects
	for (let i = 0; i < array.length; i++) {
		// check whether this person is the name we're checking for so we don't list a person as not friends with themself
		if (array[i].name !== name) {
			// check if this person is friends with name
			if (!array[i].friends.includes(name)) {
				// if not, add them to the list of non-friends
				notFriends.push(array[i].name);
			}
		}
	}

	// return list of non-friends
	return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
	// set object[key] to value
	// if key existed, this will update it; if it did not exist, it will create it
	object[key] = value;
	// return the updated object
	return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
	// loop over the property names in array
	for (let i = 0; i < array.length; i++) {
		// check if the property exists on object
		if (object.hasOwnProperty(array[i])) {
			// if so, delete it
			delete object[array[i]];
		}
	}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
	// initialize empty array to store the first instance of a given value
	let cleanArray = [];

	// loop over the input array
	for (let i = 0; i < array.length; i++) {
		// check if the cleanArray already contains this value
		if (!cleanArray.includes(array[i])) {
			// only add to cleanArray if it's not already present
			cleanArray.push(array[i]);
		}
	}
	// return cleanArray
	return cleanArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
