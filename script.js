// 記錄各選項初始票數的物件
let votes = { 
    1: 12, 
    2: 8, 
    3: 15 
};

// 點擊投票時觸發的函數
function vote(id) {
    votes[id]++; // 對應的票數 +1
    
    // 即時更新畫面上顯示的數字
    document.getElementById(`count${id}`).textContent = votes[id] + " 票";
    
    // 找到被點擊的那顆按鈕，給它一點可愛的文字回饋
    const clickedBtn = event.target;
    clickedBtn.textContent = "已登記！😂";
    clickedBtn.style.backgroundColor = "#27ae60"; // 變成綠色
    
    // 1秒後恢復原狀
    setTimeout(() => {
        clickedBtn.textContent = "我也吃過這苦 (+1)";
        clickedBtn.style.backgroundColor = "#e67e22";
    }, 1000);
}