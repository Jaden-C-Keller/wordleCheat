function Row(element){
    if(!(this instanceof Row)){
        console.log("thing");
        return;
    }
    this.element = element;
    this.boxes = [];

    this.element.className = "letter-row";

    for(let i = 0; i < 5; i++){
        let box = new Box(document.createElement("div"));
        box.element.className = "letter-box";
        this.element.appendChild(box.element);
        this.boxes.push(box);
    }
    
    return this;
}

var colors = ["grey", "yellow", "green"];

function Box(element){
    this.element = element;
    this.color = 0;
    this.element.style.backgroundColor = "grey";
    this.letter = '0';

    this.element.addEventListener("click", ()=>{
        this.color = (this.color + 1) % 3;
        this.element.style.backgroundColor = colors[this.color];
        updatePossible();
    });

    return this;
}

function updateWord(word){
    if(!(this instanceof Row)){
        console.log(this);
        return;
    }

    for(let i = 0; i < 5; i++){
        updateLetter.call(this.boxes[i], word.charAt(i));
    }

    updatePossible();
}

function updateLetter(letter){
    this.letter = letter;
    this.element.innerHTML = letter;
}