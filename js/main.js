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
        let element = document.createElement("div");
        let input = document.createElement("input");
        input.type = "text";
        input.id = "text" + i;
        input.addEventListener("change", (event)=>{
            set(event.target.id);
        });
        board.appendChild(input);
        let row = new Row(element);
        rows.push(row);
        
        board.appendChild(row.element);
    }
}

function set(id){
    let word = document.getElementById(id).value;
    updateWord.call(rows[Number(id.charAt(4))], word);
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
    
    document.getElementById("right").innerHTML = list.toString().replaceAll(",", " ");
}