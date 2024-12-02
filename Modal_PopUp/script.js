window.addEventListener("DOMContentLoaded", () => {
  const prize = [
    "A gift card",
    "$100 voucher",
    "Ticket to Dubai",
    "A car",
    "A Bike",
    "A fan",
    "An AC",
    "Recharge Voucher",
  ];
  // let randomIndex = ;

  const main = document.querySelector("main");
  const button = document.querySelector("#btn-1");

  const popup = document.createElement("div");

  button.addEventListener("click", () => {
    popup.classList.add("modal-popup");
    popup.innerHTML = `
            <div class= "cross-icon"><i class="ri-close-line"></i></div>
            <div class= "baloons"></div>
            <h2> Congrats You have won <br> ${
              prize[Math.floor(Math.random() * prize.length)]
            } </h2>
        `;
    main.appendChild(popup);
    main.style.backgroundColor = "rgba(0,0,0,.75)";
    const closePopup = document.querySelector(".cross-icon i");

    closePopup.addEventListener("click", () => {
      closeModal();
    });

    window.addEventListener("click", outsideClickHandler);
  });

  function outsideClickHandler(e) {
    if (!popup.contains(e.target) && e.target !== button) {
      closeModal();
    }
  }

  function closeModal() {
    main.removeChild(popup);
    main.style.backgroundColor = "white";
    window.removeEventListener("click", outsideClickHandler);
  }
});
