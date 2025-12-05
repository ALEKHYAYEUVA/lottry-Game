const pickthebutton = document.getElementById("pick the button");
const resultbutton = document.getElementById("result");
const lotterycontainersheet = document.getElementById("lotterycontainersheet");
const tick = new Audio(`tap.wav`);
const win = new Audio(`WIN.wav`);
const gifts = [
  "₹100 Cash",
  "Toy Car",
  "chocolate Box",
  "₹500 Cash",
  "Smartphone Cover",
  "Book",
  "Headphones",
  "₹50 Cash",
  "Gift Voucher",
  "Watch",
  "Teady Bear",
  "Bluetooth Speaker",
  "Movie Tickets",
  "₹200 Cash",
  "Puzzle Game",
  "perfum",
  "Sunglasses",
  "₹100 Cash",
  "Board Game",
  "Fitness Band",
  "Digital Clock",
  "Lamp",
  "Shopping Vocher",
  "Laptop Bag",
  "Wireless Mouse",
  "Travel Mouse",
  "Notebook Set",
  "Gaming Mousepad",
  "V250 Cah",
  "KeyChain",
  "WaterBottle",
  "Portable Charge",
  "Desk Organizer",
  "Cooking Set",
  "Action Figure",
  "₹300 Cash",
  "Travel pillow",
  "Mini Backpack",
  "Personalized Mug",
  "Gaming Controller",
  "Camer Strap",
  "Toy Robot",
  "₹750 Cash",
  "sports Equipment",
  "pen Set",
  "Bluetooth Earbunds",
  "Digital Photo Frame",
  "Wallet",
  "Backpack",
  "Gift Hamper",
];
console.log(gifts);
pickthebutton.addEventListener("click", function () {
  for (i = 1; i < 50; i++) {
    document.getElementById(i).classList.remove("winningbox");
  }
  resultbutton.textContent = "please wait...";
  /* setTimeout(function () {
    let randomnumber = Math.random() * 50;
    let drawnnumber = Math.floor(randomnumber) + 1;
    console.log(gifts[drawnnumber - 1]);
    const gift = gifts[drawnnumber - 1];
    console.log(drawnnumber);
    resultbutton.textContent = `You have got ${drawnnumber} and you won ${gift}`;
    document.getElementById(drawnnumber).classList.add("winningbox");
  }, 5000); */
  let secondcount = 0;
  const intervalid = setInterval(function () {
    tick.pause();
    tick.currentTime = 0;
    tick.play();
    secondcount = secondcount + 1;
    const randombox = Math.floor(Math.random() * 50) + 1;
    console.log(randombox);
    for (let i = 1; i <= 50; i++) {
      if (i === randombox) {
        document.getElementById(randombox).classList.add("highlightedbox");
      } else {
        document.getElementById(i).classList.remove("highlightedbox");
      }
    }
    if (secondcount === 5) {
      let randomnumber = Math.random() * 50;
      let drawnnumber = Math.floor(randomnumber) + 1;
      console.log(gifts[drawnnumber - 1]);
      const gift = gifts[drawnnumber - 1];
      console.log(drawnnumber);
      resultbutton.textContent = `You have got ${drawnnumber} and you won ${gift}`;
      document.getElementById(randombox).classList.remove("highlightedbox");
      document.getElementById(drawnnumber).classList.add("winningbox");
      win.pause();
      win.currentTime = 0;
      win.play();
      clearInterval(intervalid);
    }
  }, 1000);
});
gifts.forEach(function (value, i) {
  const boxelement = `<div class="box" id=${i + 1}>${i + 1}. ${value}</div>`;
  console.log(boxelement);
  lotterycontainersheet.insertAdjacentHTML("beforeend", boxelement);
});
