import * as piece from "../data/pieces.js";
import { rootDiv } from "../helper/constant.js";

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
                square.piece = piece.blackPawn(square.id)
            }

            // render black rook
            if(square.id == 'a8' || square.id == 'h8'){
                square.piece = piece.blackRook(square.id)
            }
            // render black knight
            if(square.id == 'b8' || square.id == 'g8'){
                square.piece = piece.blackKnight(square.id)
            }
            // render black bishop
            if(square.id == 'c8' || square.id == 'f8'){
                square.piece = piece.blackBishop(square.id)
            }
            // render black king
            if(square.id == 'd8'){
                square.piece = piece.blackking(square.id)
            }
            // render black queen
            if(square.id == 'e8'){
                square.piece = piece.blackQueen(square.id)
            }

            // render white pawn
            if(square.id[1] == 2){
                square.piece = piece.whitePawn(square.id)  
            }
            // render white rook
            if(square.id == 'a1' || square.id == 'h1'){
                square.piece = piece.whiteRook(square.id)
            }
            // render white knight
            if(square.id == 'b1' || square.id == 'g1'){
                square.piece = piece.whiteKnight(square.id)
            }
            // render white bishop
            if(square.id == 'c1' || square.id == 'f1'){
                square.piece = piece.whiteBishop(square.id)
            }
            // render white king
            if(square.id == 'e1'){
                square.piece = piece.whiteking(square.id)
            }
            // render white queen
            if(square.id == 'd1'){
                square.piece = piece.whiteQueen(square.id)
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