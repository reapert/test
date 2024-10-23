let area = document.getElementById('area');
let char = document.getElementById('char');
let word = document.getElementById('word');

area.addEventListener('input', function () {

    
    let content = this.value;
    char.textContent = content.length;

   
    content.trim();
    console.log(content);

    let wordList = content.split(/\s/);

    
    let words = wordList.filter(function (element) {
        return element != "";
    });

    word.textContent = words.length;
});