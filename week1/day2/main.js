let btn = document.querySelector(".btn")
btn.style.width = "100px"
btn.style.height = "50px"
btn.style.marginLeft = "500px"
btn.style.marginTop = "300px"
console.log(btn);

let txt = document.querySelector(".txt")
txt.style.width = "300px"
txt.style.height = "45px"
console.log(txt);
btn.onclick = () => {
    alert(txt.value)
}
console.log(btn);
