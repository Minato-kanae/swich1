document.getElementById('spinButton').addEventListener('click', function() {
    const resultElement = document.getElementById('result');
    
    // 色とその確率
    const colors = [
        { name: '白', color: '#ffffff', probability: 0.3 },
        { name: '赤', color: '#ff0000', probability: 5 },
        { name: '黄色', color: '#ffcc00', probability: 7 },
        { name: '緑', color: '#00ff00', probability: 10 },
        { name: '青', color: '#0000ff', probability: 15 },
        { name: '紫', color: '#800080', probability: 20 },
        { name: '黒', color: '#000000', probability: 42.7 }  // 残りの確率
    ];

    // 確率に基づいてランダムな色を選ぶ
    const random = Math.random() * 100;
    let cumulativeProbability = 0;
    let selectedColor = colors[colors.length - 1]; // 黒をデフォルトに

    for (let i = 0; i < colors.length; i++) {
        cumulativeProbability += colors[i].probability;
        if (random <= cumulativeProbability) {
            selectedColor = colors[i];
            break;
        }
    }

    // 結果を表示
    resultElement.textContent = `あなたの色は ${selectedColor.name} です！`;
    resultElement.style.backgroundColor = selectedColor.color;
});

document.getElementById('displayRarityButton').addEventListener('click', function() {
    console.log('レアリティ表示ボタンがクリックされました');
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
