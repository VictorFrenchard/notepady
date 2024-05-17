function saveText() {
    
    const texto = document.getElementById('textId').value;

    var word = document.getElementById("word-show");
    
    localStorage.setItem('myText', texto);

    const words = texto.split(' ');

    const word_Number = words.length;

    word.innerHTML = `Words: ${word_Number}`;

    localStorage.setItem('logiNum', word_Number);

}

window.onload = function() {
    
    const textSaved = localStorage.getItem('myText');

    const LogiSaved = localStorage.getItem('logiNum')
    
    if (textSaved) {
        
        document.getElementById('textId').value = textSaved;
    
    }

    if (LogiSaved) {

        document.getElementById('word-show').innerHTML = `Words: ${LogiSaved}`;

    }

};

