let experiencePoints = 0;

// ローカルストレージから経験値を取得（再読み込み後でも保持）
if (localStorage.getItem("experiencePoints")) {
    experiencePoints = parseInt(localStorage.getItem("experiencePoints"));
}

// 色のレアリティ設定
const rarities = [
    { color: "white", rarity: 0.3, exp: 10 },
    { color: "red", rarity: 5, exp: 20 },
    { color: "yellow", rarity: 7, exp: 30 },
    { color: "green", rarity: 10, exp: 40 },
    { color: "blue", rarity: 15, exp: 50 },
    { color: "purple", rarity: 20, exp: 60 },
    { color: "black", rarity: 42.7, exp: 0 }
];

// 経験値表示を更新する関数
function updateExperience() {
    const expDisplay = document.getElementById("exp-display");
    expDisplay.textContent = `経験値: ${experiencePoints}`;
    localStorage.setItem("experiencePoints", experiencePoints);  // ローカルストレージに保存
}

// 色を表示し、経験値を更新する関数
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
    updateExperienceWithColor(selectedColor);
    displayRarity(selectedColor);
}

// 経験値を加算
function updateExperienceWithColor(selectedColor) {
    experiencePoints += selectedColor.exp;
    updateExperience();
}

// レアリティを表示する関数
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

// アイテム交換機能
function exchangeItem(cost, itemName) {
    if (experiencePoints >= cost) {
        experiencePoints -= cost;
        updateExperience();
        alert(`${itemName} を交換しました！`);
    } else {
        alert("経験値が足りません。");
    }
}
