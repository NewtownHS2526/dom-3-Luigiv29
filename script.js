let totalInCent = 0;


const stickerButton = document.querySelector("#sticker");
const keychainButton = document.querySelector("#keychain");
const plushButton = document.querySelector("#plush");
const comicButton = document.querySelector("#comic");
const mysteryButton = document.querySelector("#mystery");


const shoppingCart = document.querySelector("#shopping-cart");
const totalSpan = document.querySelector("#total-span");

const updateTotal = () => {
    totalSpan.textContent = (totalInCent / 100).toFixed(2);
};


const addSticker = () => {
    shoppingCart.innerHTML += `<p>Sticker</p>`;
    totalInCent += 50;
    updateTotal();
};

const addKeychain = () => {
    shoppingCart.innerHTML += `<p>Keychain</p>`;
    totalInCent += 150;
    updateTotal();
};

const addPlush = () => {
    shoppingCart.innerHTML += `<p>Plush</p>`;
    totalInCent += 400;
    updateTotal();
};

const addComic = () => {
    shoppingCart.innerHTML += `<p>Comic</p>`;
    totalInCent += 275;
    updateTotal();
};

const addMystery = () => {
    shoppingCart.innerHTML += `<p>Mystery Item</p>`;
    totalInCent += 325;
    updateTotal();
};

// Event Listeners
stickerButton.addEventListener("click", addSticker);
keychainButton.addEventListener("click", addKeychain);
plushButton.addEventListener("click", addPlush);
comicButton.addEventListener("click", addComic);
mysteryButton.addEventListener("click", addMystery);
