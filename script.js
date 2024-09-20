function showSubMenu(type) {
    document.getElementById('main-menu').classList.add('hidden');

    if (type === 'ฮานอย') {
        document.getElementById('submenu-hanoi').classList.remove('hidden');
    }
}

function showDetails(lotteryType) {
    document.getElementById('submenu-hanoi').classList.add('hidden');
    document.getElementById('details').classList.remove('hidden');
    
    document.getElementById('lottery-title').innerText = lotteryType;
}

function selectLottery(type) {
    alert('คุณเลือก ' + type);
}