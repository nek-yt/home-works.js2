let box = document.querySelector(".box")
let btn = document.createElement("button")
let jackPot = document.createElement("h1")

btn.innerHTML = "GAMBLE"
btn.classList = "button"
jackPot.classList = "jack"

btn.onclick = () => {
     let randomValue = Math.random() < 0.5;
     jackPot.innerHTML = "🎲 Rolling..."
     jackPot.style.color = " white"
   setTimeout(() => {
     if (randomValue) {
       jackPot.style.color = "green"
       jackPot.innerHTML = "🎉 JACKPOT!"

   } else {
       jackPot.innerHTML = "😢 You lost"
       jackPot.style.color = "red"
   }
  }, 1000);

};
box.append(jackPot,btn)
  
