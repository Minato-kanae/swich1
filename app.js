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
