const callButtons = document.querySelectorAll(".btn-success");
const copyButtons = document.querySelectorAll(".btn-outline");
const heartButtons = document.querySelectorAll(".card .btn-ghost");
const historySection = document.getElementById("history-section");
const clearHistoryBtn = document.getElementById("clear-history");
const coinCountEl = document.getElementById("coin-count");
const copyCountEl = document.getElementById("copy-count");
const heartCountEl = document.getElementById("heart-count");

let coins = 100;
let copyCount = 0;
let heartCount = 0;


heartButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    heartCount++;
    heartCountEl.textContent = heartCount;

    btn.classList.add("scale-125", "text-red-500");
    setTimeout(() => btn.classList.remove("scale-125", "text-red-500"), 200);
  });
});

callButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = btn.closest(".card");
    const serviceName = card.querySelector("h2").textContent;
    const serviceNumber = card.querySelector(".text-3xl").textContent;

    if (coins < 20) {
      alert("You don't have enough coins! Please recharge.");
      return;
    }

    coins -= 20;
    coinCountEl.textContent = coins;

    alert(`Calling ${serviceName} at ${serviceNumber}...`);

    const currentTime = new Date().toLocaleTimeString();

    const historyItem = document.createElement("div");
    historyItem.className =
      "flex justify-between items-center bg-gray-100 rounded-lg px-3 py-2 shadow";
    historyItem.innerHTML = `
      <div>
        <p class="font-semibold">${serviceName}</p>
        <p class="text-sm text-gray-600">${serviceNumber}</p>
      </div>
      <span class="text-xs text-gray-500">${currentTime}</span>
    `;

    historySection.prepend(historyItem);
  });
});
copyButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = btn.closest(".card");
    const serviceNumber = card.querySelector(".text-3xl").textContent;

    navigator.clipboard
      .writeText(serviceNumber)
      .then(() => {
        copyCount++;
        copyCountEl.textContent = copyCount;

        alert(`Hotline ${serviceNumber} copied successfully!`);
      })
      .catch(() => {
        alert("Failed to copy. Please try again.");
      });
  });
});
clearHistoryBtn.addEventListener("click", function () {
  if (confirm("Are you sure you want to clear the call history?")) {
    historySection.innerHTML = "";
  }
});
