import { rootDiv } from "../helper/constant.js";

function globalEvent (){
    rootDiv.addEventListener('click', function(e){
        console.log(e);
    })
}
export { globalEvent }