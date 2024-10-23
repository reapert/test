const words = [
    "react",
    "angular",
    "javascript",
    "bootstrap",
    "tailwind",
    "enormity",
    "abrogate",
    "lieutenant",
    "diatribe",
    "equivocate",
    "worcestershire",
    "blandishment",
    "anachronism",   
];

const hints =[
   "JavaScript framework", 
    "JavaScript Framework", 
    "Scripting Language", 
    "Styling Library", 
    "Styling Library",
    "synonymous with massive",
    "an attempt to obfuscate or avoid something",
    "Military Title",
    "intentional use of ambiguous language to conceal a purpose",
    "a type of sauce",
    "flattery in an attempt to persuade someone to do something",

    "something which appears out of place to where it is",
];

let displayWord = "";
function shuffle(str) {
    strArray = Array.from(str);
    for (let i = 0; i < strArray.length - 1; ++1) {
        let j = Math.floor(Math.random()* strArray.length);
        let temp = strArray[i];
        strArray[i] = strArray[j];
        strArray[j] = temp;
    }
    return strArray.join(" ");
}
function check() {
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    if (
        input.value.toLocaleLowerCase() ===
        displayWord.toLocaleLowerCase()
    )
    output.innerHTML = "Result:Correct";
    else output.innerHTML = "Result: Incorrect";
}
function refresh() {
    index = Math.floor(Math.random()* 5);
    displayWord = words[index];
    displayHint = hints [index];
    scrambleWord =
    document.getElementById("scrambleWord");
    scrambleWord.innerText = 
        shuffle(displayWord).toUpperCase();
    let hint = document.getElementById("hint");
    hint.innerHTML = "<b>Hint:<b>" + displayHint;
    document.getElementById("output").innerText = "Result:";
}
refresh();