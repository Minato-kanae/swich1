// 経験値やアイテムの管理
let experience = 0;
let items = [];
let rarityList = [];

// 色のリスト
const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#FFFFFF"];
const rarities = [
  { color: "#FFFFFF", probability: 0.003 },
  { color: "#FF0000", probability: 0.05 },
  { color: "#FFFF00", probability: 0.07 },
  { color: "#00FF00", probability: 0.10 },
  { color: "#0000FF", probability: 0.15 },
  { color: "#800080", probability: 0.20 },
  { color: "#000000", probability: 0.50 }
];

// ランダムな色を表示
function displayRandomColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("color-box").style.backgroundColor = randomColor;
}

// 経験値の取得
function gainExperience() {
  const random = Math.random();
  let gainedXp = 0;
  let rarity = "黒"; // 黒はハズレ

  // レアリティ計算
  let cumulativeProbability = 0;
  for (let i = 0; i < rarities.length; i++) {
    cumulativeProbability += rarities[i].probability;
    if (random < cumulativeProbability) {
      rarity = rarities[i].color;
      gainedXp = Math.floor(Math.random() * 100) + 1; // 経験値は1~100のランダム
      break;
    }
  }

  // 経験値追加
  experience += gainedXp;
  items.push(rarity); // アイテムリストに追加

  // 経験値とアイテムを更新
  document.getElementById("xp").innerText = experience;
  updateItemList();
  updateRarityList();
}

// アイテムリストを更新
function updateItemList() {
  const itemList = document.getElementById("item-list");
  itemList.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `アイテム: ${item}`;
    itemList.appendChild(li);
  });
}

// レアリティリストを更新
function updateRarityList() {
  const rarityListElement = document.getElementById("rarity-list");
  rarityListElement.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `レアリティ: ${item}`;
    rarityListElement.appendChild(li);
  });
}

// アイテム交換の処理
document.getElementById("exchange-btn").addEventListener("click", () => {
  if (experience >= 100) {
    experience -= 100; // 100XPでアイテム交換
    document.getElementById("xp").innerText = experience;
    alert("シコティを交換しました！");
  } else {
    alert("経験値が足りません！");
  }
});

// 色当てボタンの処理
document.getElementById("guess-btn").addEventListener("click", () => {
  displayRandomColor();
  gainExperience();
});
