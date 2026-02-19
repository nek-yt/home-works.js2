const api = "https://699328f38f29113acd402f5b.mockapi.io/gamble/api/v1/gamble"
const box = document.querySelector(".box")

async function getUser() {
    try {
        let response = await fetch(api)
        let data = await response.json()
        showUser(data)
    } catch (error) {
        console.log(error)        
    }
}

function showUser(data) {
    box.innerHTML = ""
    data.forEach((e,i) => {
        let h2 = document.createElement("h2")
        h2.innerHTML = e.name
        box.append(h2)
    })
}

getUser()