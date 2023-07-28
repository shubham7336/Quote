



let button = document.querySelector("#btn")
let quouteText = document.querySelector("#quote")
let authorText = document.querySelector("#author")
let tagsText = document.querySelector("#tags")

const getData = async () => {
    const response = await fetch('https://quotable.io/random')
    const data = await response.json()
     quouteText.innerText = data.content
     authorText.innerText = data.author
     tagsText.innerText = data.tags
}
button.addEventListener("click", getData )