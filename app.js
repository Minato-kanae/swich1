document.getElementById('spinButton').addEventListener('click', function() {
    const resultElement = document.getElementById('result');
    const xpElement = document.getElementById('xp'); // 経験値表示用の要素
    
    // 色とその確率、および対応する経験値
    const colors = [
        { name: '白', color: '#ffffff', probability: 0.3, xp: 5 },     // 白は5 XP
        { name: '赤', color: '#ff0000', probability: 5, xp: 50 },      // 赤は50 XP
        { name: '黄色', color: '#ffcc00', probability: 7, xp: 70 },   // 黄色は70 XP
        { name: '緑', color: '#00ff00', probability: 10, xp: 100 },    // 緑は100 XP
        { name: '青', color: '#0000ff', probability: 15, xp: 150 },    // 青は150 XP
        { name: '紫', color: '#800080', probability: 20, xp: 200 },    // 紫は200 XP
        { name: '黒', color: '#000000', probability: 42.7, xp: 0 }     // 黒は外れ（0 XP）
    ];

    // 確率に基づいてランダムな色を選択
    const random = Math.random() * 100;
    let cumulativeProbability = 0;
    let selectedColor = colors[colors.length - 1]; // 黒をデフォルトに

    // 色を決定するロジック
    for (let i = 0; i < colors.length; i++) {
        cumulativeProbability += colors[i].probability;
        if (random <= cumulativeProbability) {
            selectedColor = colors[i];
            break;
        }
    }

    // 結果（選ばれた色）を表示
    resultElement.textContent = `あなたの色は ${selectedColor.name} です！`;
    resultElement.style.backgroundColor = selectedColor.color;

    // 経験値を表示
    xpElement.textContent = `獲得経験値: ${selectedColor.xp} XP`;
});

// レアリティ表示ボタンが押されたときの処理
document.getElementById('displayRarityButton').addEventListener('click', function() {
    console.log('レアリティ表示ボタンがクリックされました');
    
    // レアリティデータ
    const rarityData = [
        { name: '白', probability: '0.3%' },
        { name: '赤', probability: '5%' },
        { name: '黄色', probability: '7%' },
        { name: '緑', probability: '10%' },
        { name: '青', probability: '15%' },
        { name: '紫', probability: '20%' },
        { name: '黒', probability: '42.7%' }
    ];

    // テーブルのtbodyを取得
    const tableBody = document.getElementById('rarityTable').getElementsByTagName('tbody')[0];
    
    // 既存の内容をクリア（再度ボタンを押した時に重複しないように）
    tableBody.innerHTML = '';

    // rarityDataから行を生成してテーブルに追加
    rarityData.forEach(function(item) {
        const row = document.createElement('tr');

        const cell1 = document.createElement('td');
        cell1.textContent = item.name;
        row.appendChild(cell1);

        const cell2 = document.createElement('td');
        cell2.textContent = item.probability;
        row.appendChild(cell2);

        tableBody.appendChild(row);
    });
});
