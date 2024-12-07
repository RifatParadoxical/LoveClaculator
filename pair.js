function lovePercentage(name1, name2) {
    // Combine names in a consistent order (alphabetical)
    const combinedNames =
        name1.toLowerCase() < name2.toLowerCase()
            ? name1.toLowerCase() + name2.toLowerCase()
            : name2.toLowerCase() + name1.toLowerCase();

    // Generate a hash value from the combined names
    let hash = 0;
    for (let i = 0; i < combinedNames.length; i++) {
        hash = (hash * 31 + combinedNames.charCodeAt(i)) % 10000; // Prime multiplier for better distribution
    }

    // Normalize the hash to a percentage (1-100)
    const percentage = (hash % 100) + 1;

    return percentage;
}

// Example usage
const name1 = document.getElementById("he").value;
const name2 = document.getElementById("she").value;
    let result2 = "The love percentage of " + "<span class='person'>" + he + "</span>" + " and " + "<span class='person'>" + she + "</span>" + " is : " + "<span class='hero'>" + percent + "</span>" + "%";
    // let result2 = "hello world"
    document.getElementById("result").innerHTML = result2;

// Test with other names
console.log(`Love Percentage between Alice and Bob is: ${lovePercentage("Alice", "Bob")}%`);
console.log(`Love Percentage between Jack and Jill is: ${lovePercentage("Jack", "Jill")}%`);
