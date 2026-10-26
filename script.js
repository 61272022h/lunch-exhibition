// 初始化票數（如果瀏覽器裡沒有紀錄，則從 0 開始）
let votes = {
    1: parseInt(localStorage.getItem('vote1')) || 0,
    2: parseInt(localStorage.getItem('vote2')) || 0,
    3: parseInt(localStorage.getItem('vote3')) || 0
};

// 畫面載入時更新顯示數字
window.onload = function() {
    updateDisplay();
};

// 投票函式
function vote(option) {
    votes[option]++;
    // 儲存到瀏覽器記憶體中
    localStorage.setItem('vote' + option, votes[option]);
    updateDisplay();
}

// 歸零機制函式
function resetVotes() {
    if (confirm("確定要把所有票數歸零嗎？")) {
        votes = { 1: 0, 2: 0, 3: 0 };
        localStorage.clear(); // 清除儲存的票數
        updateDisplay();
    }
}

// 更新畫面的票數顯示
function updateDisplay() {
    document.getElementById('count1').textContent = votes[1] + ' 票';
    document.getElementById('count2').textContent = votes[2] + ' 票';
    document.getElementById('count3').textContent = votes[3] + ' 票';
}