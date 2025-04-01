let experiencePoints = 0;

const rarities = [
    { color: "white", rarity: 0.3, exp: 10 },
    { color: "red", rarity: 5, exp: 20 },
    { color: "yellow", rarity: 7, exp: 30 },
    { color: "green", rarity: 10, exp: 40 },
    { color: "blue", rarity: 15, exp: 50 },
    { color: "purple", rarity: 20, exp: 60 },
    { color: "black", rarity: 42.7, exp: 0 }
];

// 色の表示をランダムで生成
function generateColor() {
    const random = Math.random() * 100;
    let accumulatedRarity = 0;
    let selectedColor = null;
    
    for (let rarity of rarities) {
        accumulatedRarity += rarity.rarity;
        if (random <= accumulatedRarity) {
            selectedColor = rarity;
            break;
        }
    }

    const colorBox = document.getElementById("color-display");
    colorBox.style.backgroundColor = selectedColor.color;
    updateExperience(selectedColor);
    displayRarity(selectedColor);
}

// 経験値を更新
function updateExperience(selectedColor) {
    experiencePoints += selectedColor.exp;
    const expDisplay = document.getElementById("exp-display");
    expDisplay.textContent = `経験値: ${experiencePoints}`;
}

// レアリティの表示
function displayRarity(selectedColor) {
    const rarityDisplay = document.getElementById("rarity-display");
    const expRarityDisplay = document.getElementById("exp-rarity");
    
    rarityDisplay.textContent = `レアリティ: ${selectedColor.color}`;
    expRarityDisplay.textContent = `獲得経験値: ${selectedColor.exp}`;

    const rarityBar = document.getElementById("rarity-bar");
    const barWidth = (selectedColor.rarity / 100) * 100;
    const bar = document.createElement("div");
    bar.style.width = barWidth + "%";
    bar.style.backgroundColor = selectedColor.color;
    rarityBar.innerHTML = '';  // 以前のバーをクリア
    rarityBar.appendChild(bar);
}
