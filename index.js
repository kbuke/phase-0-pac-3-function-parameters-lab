//Define function "introduction"
//Define parameter "name"
//Returns phrase "Hi, my name is ${name}"
function introduction(name) {
    return `Hi, my name is ${name}.`;
}

// Define function "introductionWithLanguage"
// Defines 2 parameters "name" and "language"
// Returns phrase "Hi, my name is ${name}, and I'm learning to program in ${language}."
function introductionWithLanguage(name,language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

// Copy function 2, rename it "introductionWithLanguageOptional"
// 2 parameters, name and language
// language should have a default value of javascript
function introductionWithLanguageOptional(name,language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}