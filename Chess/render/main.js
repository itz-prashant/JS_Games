const rootDiv = document.getElementById('root')

function initGameRender(data) {
    data.forEach(element => {
        const rowElm = document.createElement('div')
        rowElm.classList.add('rowelm')
        rootDiv.appendChild(rowElm)

        element.forEach(square => {
            const squareElm = document.createElement('div')
            squareElm.classList.add(square.color, "square")
            rowElm.appendChild(squareElm)
        })
    });
}

export {initGameRender};