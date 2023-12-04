var words;
var rows = [];

function LoadFile() {
    var oFrame = document.getElementById("frmFile");
    var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
    words = strRawContents.split("\n");
    document.getElementById("right").innerHTML = strRawContents;
}


function start(){
    let board = document.getElementById("board");

    for (let i = 0; i < 5; i++) {
        let row = new Row(document.createElement("div"));
        rows.push(row);
        
        board.appendChild(row.element);
    }
}

function set(){
    let rowNum = document.getElementById("rowSelect").value;
    let word = document.getElementById("text").value;
    updateWord.call(rows[rowNum], word);
    updatePossible();
}

function updatePossible(){
    let list = words.slice();

    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            let box = rows[i].boxes[j];
            list = list.filter(word => box.color != 0 == word.includes(box.letter));
            list = list.filter(word => (word.charAt(j) == box.letter) == (box.color == 2));
        }
    }

    let string = ""

    for(let i = 0; i < list.length; i++){
        string += list[i] + " ";
        if(i % 17 == 0){
            string += "\n";
        }
    }

    
    document.getElementById("right").innerHTML = string;
}