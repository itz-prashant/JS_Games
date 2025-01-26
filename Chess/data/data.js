import { renderHighlight } from "../render/main.js";

function square(color, id, piece){

    const highlightCircle = function (state){
        renderHighlight(this.id)   
        this.highlighted = true
    }
    return {color, id, piece, highlightCircle}
}

function squareRow(rowId){
    let squareRow = [];
    const char = ["a", "b", "c", "d", "e", "f", "g", "h"]

    if(rowId % 2 == 0){
        char.forEach((elm, i)=>{
            if(i % 2 == 0){
                squareRow.push(square("white", elm + rowId, "null"));
            }else{
                squareRow.push(square("black", elm + rowId, "null"));
            }
        })
    }else{
        char.forEach((elm, i)=>{
            if(i % 2 == 0){
                squareRow.push(square("black", elm + rowId, "null"));
            }else{
                squareRow.push(square("white", elm + rowId, "null"));
            }
        })
    }

    return squareRow;
}

function initGame(){
    
    return [
        squareRow(8),
        squareRow(7),
        squareRow(6),
        squareRow(5),
        squareRow(4),
        squareRow(3),
        squareRow(2),
        squareRow(1),
    ]
}

export {initGame};