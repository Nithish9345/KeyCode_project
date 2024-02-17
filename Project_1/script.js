const container = document.querySelector(".container")

function generateHTML(key, code, keycode){
    return `

    <div class="keyContainer">
    <h4 class>Key</h4>
    <div class="key-content">${key === " " ? "Space" : key}</div>
    </div>

    <div class="keyContainer">
    <h4 class>Code</h4>
    <div class="key-content">${code}</div>
    </div>

    <div class="keyContainer">
    <h4 class>Ascii value</h4>
    <div class="key-content">${keycode}</div>
    </div>
    
    
    `
}



window.addEventListener("keydown", (e)=>{
    container.innerHTML = generateHTML(e.key, e.code, e.key.charCodeAt(0))
})

container.innerHTML = generateHTML("-", "-", "-", "-")