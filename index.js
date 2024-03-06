// Calculate the sum of an array of numbers
function calculateSum(numbers) {
    return numbers.reduce((sum, current) => sum + current, 0);
}

// Main function to use the helper function
function calculateAndLogSum(numbers) {
    const sum = calculateSum(numbers);
    console.log(`The sum of the numbers is: ${sum}`);
}

// Example usage
const inputNumbers = [3, 7, 12, 5];
calculateAndLogSum(inputNumbers);
