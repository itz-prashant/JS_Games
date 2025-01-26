import { rootDiv } from "../helper/constant.js";
import { globalState } from "../index.js";
import { clearAllHighlight, removeSelfHighlight, selfHighlight } from "../render/main.js";

let selfHighlightState = null;

function clickWhitePawn({piece}) {

    const currentPos = piece.currentPosition

    removeSelfHighlight(selfHighlightState)
    selfHighlight(piece)
    selfHighlightState = piece

    if(currentPos[1] == 2){
        const highlightSquare = [
            `${currentPos[0]}${Number(currentPos[1]) + 1}`,
            `${currentPos[0]}${Number(currentPos[1]) + 2}`,
        ]

        clearAllHighlight();

        highlightSquare.forEach((highlight)=> {
            globalState.forEach(row=> {
                row.forEach(el=>{
                    if(el.id == highlight){
                        el.highlightCircle()
                    }
                })
            })
        })
    }
}

function globalEvent (){
    rootDiv.addEventListener('click', function(e){
        if(e.target.localName == "img"){
            const clickId = e.target.parentNode.id;
            const flatArray = globalState.flat();
            const square = flatArray.find(el => el.id == clickId)
            
            if(square.piece.pieceName == "WhitePawn"){
                clickWhitePawn(square)
            }
        }
    })
}
export { globalEvent }