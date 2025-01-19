const rootDiv = document.getElementById('root')
import { blackPawn, whitePawn } from "../data/pieces.js";

function initGameRender(data) {
    
    data.forEach(element => {
        const rowElm = document.createElement('div')
        element.forEach(square => {
            const squareElm = document.createElement('div')
            squareElm.id = square.id
            squareElm.classList.add(square.color, "square")
            rowElm.appendChild(squareElm)

            // render black pawn
            if(square.id[1] == 7){
                square.piece = blackPawn(square.id)
            }

            // render white pawn
            if(square.id[1] == 2){
                square.piece = whitePawn(square.id)  
            }
        })
        rowElm.classList.add('rowelm')
        rootDiv.appendChild(rowElm)
    });

    pieceRender(data)
}

function pieceRender(data) {
    data.forEach(row => {
        row.forEach(col =>{
            if(col.piece.img){
                const square = document.getElementById(col.id)
                
                const piece = document.createElement("img")
                piece.classList.add("piece")
                piece.src = col?.piece?.img;
                
                square.appendChild(piece)
            }
        })
    })
}

export {initGameRender};