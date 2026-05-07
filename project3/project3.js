const container = document.querySelector(".container")
const btnElement = document.querySelector(".btn")
btnElement.addEventListener("click",() => {
    update()
})

function update(){
    for(let i=0;i< 6; i++){
    const img=document.createElement("img");
    img.src="https://picsum.photos/200/300?random=1"
    container.appendChild(img)
}
}