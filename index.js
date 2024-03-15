function introduction(name) {
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguageOptional("John")); // Output: "Hi, my name is John and I am learning to program in JavaScript."
console.log(introductionWithLanguageOptional("Alice", "Python")); // Output: "Hi, my name is Alice and I am learning to program in Python."

console.log(introductionWithLanguage("Bob", "Java")); // Output: "Hi, my name is Bob and I am learning to program in Java."
