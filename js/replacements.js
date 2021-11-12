var addresses = {
    contract: "0xf5cc0be61f32d4676c40e3716130c928b70734e0",
    charityWallet: "0xf5cc0be61f32d4676c40e3716130c928b70734e0"
}

var links = {
    bscscan: `https://bscscan.com/token/${addresses.contract}`,
    buy: `https://exchange.pancakeswap.finance/#/swap?outputCurrency=${addresses.contract}`,
    chart: `https://poocoin.app/tokens/${addresses.contract}`,
    buyGuide: "notyet",
    twitter: "notyet",
    medium: "notyet",
    facebook: "notyet",
    instagram: "notyet",
    reddit: "notyet",
    tiktok: "notyet",
    telegram: "notyet",
    telegramMemes: "notyet",
    discord: "notyet"
}

var innerLinks = {
    home: "index.html",
    story: "index.html",
    meme: "index.html",
    marketplace: "#",
    earning: "notyet"
}

for (var prop in addresses) {
    if (addresses.hasOwnProperty(prop)) {
        document.querySelectorAll(`[data-replace=${prop}]`).forEach(el => el.textContent = addresses[prop]);
    }
}

for (var prop in links) {
    if (links.hasOwnProperty(prop)) {
        document.querySelectorAll(`[data-replace=${prop}]`).forEach(el => el.setAttribute("href", links[prop]));
    }
}

for (var prop in innerLinks) {
    if (innerLinks.hasOwnProperty(prop)) {
        document.querySelectorAll(`[data-replace=${prop}]`).forEach(el => el.setAttribute("href", innerLinks[prop]));
    }
}
