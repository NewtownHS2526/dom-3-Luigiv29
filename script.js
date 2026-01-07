let totalInCent = 0;

const Buttonsticker = document.querySelector("#sticker");
const keychainButton = document.querySelector("#keychain");
const plushButton = document.querySelector("#plush");
const comicButton = document.querySelector("#comic");
const mystery = document.querySelector("#mystery")

const shoppingCart = document.querySelector("#shopping-cart");
const totalSpan = document.querySelector("#total-span");

const updateTotal = () => {
    totalSpan.textContent = totalInCent / 100;
}

const addApple = () => {
    shoppingCart.innerHTML += `<p> Apple </p>`;
    totalInCent += 75;
    updateTotal();
}
const addMango = () => {
    shoppingCart.innerHTML += `<p> Mango </p>`;
    totalInCent += 125;
    updateTotal();
}
const addBanana = () => {
    shoppingCart.innerHTML += `<p> Banana </p>`;
    totalInCent += 30;
    updateTotal();
}

// Event Listeners

appleButton.addEventListener("click", addsticker);
mangoButton.addEventListener("click", addkeychain);
bananaButton.addEventListener("click", addplush);
