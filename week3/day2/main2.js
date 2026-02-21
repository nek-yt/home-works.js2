import { getUser, showUser } from "./main.js"

let api = "https://699328f38f29113acd402f5b.mockapi.io/gamble/api/v1/gamble"
let form = document.querySelector(".form")
let dialog = document.querySelector(".dialog")
let btnEA = document.querySelector(".btnEA")
let x = document.querySelector(".x")


form.addEventListener("submit", async (e) => {
    e.preventDefault()
    let profile = form.profile.value
    let name = form.name.value
    let job = form.job.value
    try {
        await axios.post(api, { profile, name, job })
        getUser()
        form.reset()
    } catch (error) {
        console.error(error)
    }   
})

btnEA.addEventListener("click", () => {
    dialog.showModal()
})
x.addEventListener("click", () => {
    dialog.close()
})
