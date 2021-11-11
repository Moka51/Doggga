var addresses = {
    contract: "Not yet ser wait glam glam ",
    charityWallet: "NULL"
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
