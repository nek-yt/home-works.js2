let api = "https://699328f38f29113acd402f5b.mockapi.io/gamble/api/v1/gamble"
let box = document.querySelector(".box")
let form = document.querySelector("form")
let dialog = document.querySelector(".dialog")
let addu = document.querySelector(".addUser")
let x = document.querySelector(".x")

async function getUser() {
    try {
        const response = await axios.get(api)
        const data = response.data
        showUser(data)
    } catch (error) {
        console.error(error)
    }
}

function showUser(user) {
    box.innerHTML = ""
    user.forEach((e) => {
        let tr = document.createElement("tr")
        let tdProfile = document.createElement("td")
        let tdName = document.createElement("td")
        let tdAge = document.createElement("td")
        let btnE = document.createElement("button")
        let btnD = document.createElement("button")
        let tdAct = document.createElement("td")
        
        tdProfile.innerHTML = `<img src="${e.profile}" alt="">`
        tdName.innerText = e.name
        tdAge.innerText = e.age
        btnE.innerText = "Edit"
        btnD.innerText = "Delete"

        tdAct.append(btnE, btnD)
        tr.append(tdProfile, tdName, tdAge, tdAct)
        box.append(tr)
    })
}
getUser()