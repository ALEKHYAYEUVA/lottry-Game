const pickthebutton = document.getElementById("pick the button");
const resultbutton = document.getElementById("result");
const lotterycontainersheet = document.getElementById("lotterycontainersheet");
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
pickthebutton.addEventListener("click", function () {
  let randomnumber = Math.random() * 50;
  let drawnnumber = Math.floor(randomnumber) + 1;
  console.log(gifts[drawnnumber - 1]);
  const gift = gifts[drawnnumber - 1];
  console.log(drawnnumber);
  resultbutton.textContent = `You have got ${drawnnumber} and you won ${gift}`;
});
gifts.forEach(function (value, i) {
  const boxelement = `<div class="box">${i + 1}. ${value}</div>`;
  console.log(boxelement);
  lotterycontainersheet.insertAdjacentHTML("beforeend", boxelement);
});
