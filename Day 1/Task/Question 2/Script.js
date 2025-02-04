const adjectives = ["Crazy", "Amazing", "Fire"];
const shopNames = ["Engine", "Foods", "Garments"];
const otherWords = ["Bros", "Limited", "Hub"];

function generateName() {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomShopName = shopNames[Math.floor(Math.random() * shopNames.length)];
    const randomOtherWord = otherWords[Math.floor(Math.random() * otherWords.length)];

    const businessName = `${randomAdjective} ${randomShopName} ${randomOtherWord}`;
    
    document.getElementById('business-name').textContent = businessName;
}
