// - The fuction that takes two value and return maximum value.
function maximumValue(a, b) {
   
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// Example usage:
const result = maximumValue(10, 20);
console.log("The maximum value is:", result);



// - The function that takes an array and return the truthy values.
function maximumValue(a, b) {
    return a > b ? a : b;
}

// Example usage:
const maxResult = maximumValue(10, 20);
console.log("The maximum value is:", maxResult);

	
	// - Create a funtion includes and pass the two parameters array and searchElement the funciton will
    function includes(array, searchElement) {
        return array.includes(searchElement);
    }
    
    // Example usage:
    const includesResult = includes([1, 2, 3, 4, 5], 3);
    console.log("Element found:", includesResult);
    


	//   the search for searchEement in array and will return the true, false.
    function countOccurrences(array, searchElement) {
        return array.reduce((count, currentValue) => {
            return currentValue === searchElement ? count + 1 : count;
        }, 0);
    }
    
    // Example usage:
    const countResult = countOccurrences([1, 2, 3, 2, 4, 2, 5], 2);
    console.log("Occurrences of element:", countResult);
    

	// - Implement the countOccurence function for the array just like we did in the string.