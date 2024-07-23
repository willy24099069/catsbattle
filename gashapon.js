
var celllist1 = ['幼獸加歐','幼傑達太貓','幼獸加爾','命運之子佛諾','巫女姬御靈','災難少女凱斯莉','歡笑揮舞孃','曉之伊邪那岐'];
var celllist2 = ['黑獸牙王','影傑漆黑達太貓','黑獸加迪','非命之王佛挪','黑無垢御靈','禍根魔女凱斯莉','悲嘆揮舞孃','宵之伊邪那美'];
var celllist3 = ['奇幻貓','踢腳貓','手甩貓','刺骨貓','角擊貓','額頭貓','不明貓','頭槌貓','異能貓','捲捲貓','怒髮貓'];
var celllist4 = ['冰雪貓','惡鬼喵魔','貓咪Baby','貓咪鬥惡龍','拉斯沃斯','天狗貓','機器貓','巨劍騎士貓','貓護士','花漾桃子','召喚少年小悟'];
var celllist5 = ['宮本武藏','前田慶次','伊達政宗','上杉謙信','成田甲斐','天草四郎','真田幸村','織田信長','武田信玄','今川義元','服部半藏','明智光秀'];
var celllist6 = ['聖女貓會長貞德','雷神珊迪亞','召喚・八戒貓','冥界卡莉法','英雄令媛蜜斯','狩獵女孩媞倫','風神溫蒂','猿帝・悟空貓','寶杖使者・悟淨貓','雙掌星西兒＆小毬','妖賢女莉莉','鐵籠的姵卡薩'];
var celllist7 = ['天龍城巴比貓塔','聖龍梅基多拉','神龍卡姆庫拉','霸龍迪歐拉姆斯','角龍格拉迪歐斯','海龍達萊亞薩','地龍索多姆','龍騎士巴魯斯','龍戰機雷電','古龍剛格利昂','邪龍赫維賈克'];
var celllist8 = ['貓若丸','白鶴貓','斗笠地藏','咔嚓咔嚓山崽子','金太郎','一寸法師','浦島太郎','桃太郎','輝夜姬','猴蟹大戰貓','舌切雀'];
var celllist9 = ['超越科學者天域博士','西園寺機器子','白兔女俠','天誅飛隼','狙擊天才沙紀','閃電傑克','阿激拉','貓俠大帝','咒術師死亡小丑','亡者偵探吳仲力','白騎士庫克洛普斯'];
var celllist10 = ['大地女神蓋婭','守護神阿努比斯','太陽神天照','海王神波塞頓','冥界神黑帝斯','光翼神伊西絲','天空神宙斯','美女神阿芙蘿黛蒂','象頭神迦內薩','時空神克羅諾絲','墮天神路西法'];
var celllist11 = ['終末兵器・異滅堂','古代軍船・戰槳隊','觀測兵器・探天隊','空中商店・探險家','周遊藝團・雜耍隊','帝國陸軍・石砲隊','飛空襲擊・轟炸隊','溫泉天堂・浴場隊','超龍戰機・毀滅團','建築兵團・運輸隊'];
var celllist12 = ['奇幻精靈露米納','水精靈密茲','雷精靈波特','闇精靈亞米','鐵精靈卡卿','火精靈梅拉','風精靈艾爾','石精靈滾瓦','冰精靈布莉茲'];
var celllist13 = ['京坂七穗','美人魚琉璃','狼來妹迪兒','冒險家佳奈','忍者女孩多萌耶','俏狐娘百荷','木乃伊梨香','不死女薇薇','闇女神蓓卡'];

function createTable(tableId,rows,cols) {
        
        const table = document.getElementById(tableId);
        let cellId = 0;

        if (tableId === 'table1'){
            for (let i = 0; i < rows; i++) {
                const row = table.insertRow();
                for (let j = 0; j < cols; j++) {
                    const cell = row.insertCell();
                    cell.innerHTML = celllist1[cellId];
                    const img = document.createElement('img');
                    img.src = `./img/${tableId}/${cellId+1}.png`;
                    cell.appendChild(img);
                    cellId++;
                    if (cellId === celllist1.length){
                        break;
                    }
                }
            }
        }
        if (tableId === 'table2'){
            for (let i = 0; i < rows; i++) {
                const row = table.insertRow();
                for (let j = 0; j < cols; j++) {
                    const cell = row.insertCell();
                    cell.innerHTML = celllist2[cellId];
                    const img = document.createElement('img');
                    img.src = `./img/${tableId}/${cellId+1}.png`;
                    cell.appendChild(img);
                    cellId++;
                    if (cellId === celllist2.length){
                        break;
                    }
                }
            }
        }
        if (tableId === 'table3'){
            for (let i = 0; i < rows; i++) {
                const row = table.insertRow();
                for (let j = 0; j < cols; j++) {
                    const cell = row.insertCell();
                    cell.innerHTML = celllist3[cellId];
                    const img = document.createElement('img');
                    img.src = `./img/${tableId}/${cellId+1}.png`;
                    cell.appendChild(img);
                    cellId++;
                    if (cellId === celllist3.length){
                        break;
                    }
                }
            }
        }
        if (tableId === 'table4'){
            for (let i = 0; i < rows; i++) {
                const row = table.insertRow();
                for (let j = 0; j < cols; j++) {
                    const cell = row.insertCell();
                    cell.innerHTML = celllist4[cellId];
                    const img = document.createElement('img');
                    img.src = `./img/${tableId}/${cellId+1}.png`;
                    cell.appendChild(img);
                    cellId++;
                    if (cellId === celllist4.length){
                        break;
                    }
                }
            }
        }
        if (tableId === 'table5'){
            for (let i = 0; i < rows; i++) {
                const row = table.insertRow();
                for (let j = 0; j < cols; j++) {
                    const cell = row.insertCell();
                    cell.innerHTML = celllist5[cellId];
                    const img = document.createElement('img');
                    img.src = `./img/${tableId}/${cellId+1}.png`;
                    cell.appendChild(img);
                    cellId++;
                    if (cellId === celllist5.length){
                        break;
                    }
                }
            }
        }
        if (tableId === 'table6'){
            for (let i = 0; i < rows; i++) {
                const row = table.insertRow();
                for (let j = 0; j < cols; j++) {
                    const cell = row.insertCell();
                    cell.innerHTML = celllist6[cellId];
                    const img = document.createElement('img');
                    img.src = `./img/${tableId}/${cellId+1}.png`;
                    cell.appendChild(img);
                    cellId++;
                    if (cellId === celllist6.length){
                        break;
                    }
                }
            }
        }
        if (tableId === 'table7'){
            for (let i = 0; i < rows; i++) {
                const row = table.insertRow();
                for (let j = 0; j < cols; j++) {
                    const cell = row.insertCell();
                    cell.innerHTML = celllist7[cellId];
                    const img = document.createElement('img');
                    img.src = `./img/${tableId}/${cellId+1}.png`;
                    cell.appendChild(img);
                    cellId++;
                    if (cellId === celllist7.length){
                        break;
                    }
                }
            }
        }
        if (tableId === 'table8'){
            for (let i = 0; i < rows; i++) {
                const row = table.insertRow();
                for (let j = 0; j < cols; j++) {
                    const cell = row.insertCell();
                    cell.innerHTML = celllist8[cellId];
                    const img = document.createElement('img');
                    img.src = `./img/${tableId}/${cellId+1}.png`;
                    cell.appendChild(img);
                    cellId++;
                    if (cellId === celllist8.length){
                        break;
                    }
                }
            }
        }
        if (tableId === 'table9'){
            for (let i = 0; i < rows; i++) {
                const row = table.insertRow();
                for (let j = 0; j < cols; j++) {
                    const cell = row.insertCell();
                    cell.innerHTML = celllist9[cellId];
                    const img = document.createElement('img');
                    img.src = `./img/${tableId}/${cellId+1}.png`;
                    cell.appendChild(img);
                    cellId++;
                    if (cellId === celllist9.length){
                        break;
                    }
                }
            }
        }
        if (tableId === 'table10'){
            for (let i = 0; i < rows; i++) {
                const row = table.insertRow();
                for (let j = 0; j < cols; j++) {
                    const cell = row.insertCell();
                    cell.innerHTML = celllist10[cellId];
                    const img = document.createElement('img');
                    img.src = `./img/${tableId}/${cellId+1}.png`;
                    cell.appendChild(img);
                    cellId++;
                    if (cellId === celllist10.length){
                        break;
                    }
                }
            }
        }
        if (tableId === 'table11'){
            for (let i = 0; i < rows; i++) {
                const row = table.insertRow();
                for (let j = 0; j < cols; j++) {
                    const cell = row.insertCell();
                    cell.innerHTML = celllist11[cellId];
                    const img = document.createElement('img');
                    img.src = `./img/${tableId}/${cellId+1}.png`;
                    cell.appendChild(img);
                    cellId++;
                    if (cellId === celllist11.length){
                        break;
                    }
                }
            }
        }
        if (tableId === 'table12'){
            for (let i = 0; i < rows; i++) {
                const row = table.insertRow();
                for (let j = 0; j < cols; j++) {
                    const cell = row.insertCell();
                    cell.innerHTML = celllist12[cellId];
                    const img = document.createElement('img');
                    img.src = `./img/${tableId}/${cellId+1}.png`;
                    cell.appendChild(img);
                    cellId++;
                    if (cellId === celllist12.length){
                        break;
                    }
                }
            }
        }
        if (tableId === 'table13'){
            for (let i = 0; i < rows; i++) {
                const row = table.insertRow();
                for (let j = 0; j < cols; j++) {
                    const cell = row.insertCell();
                    cell.innerHTML = celllist13[cellId];
                    const img = document.createElement('img');
                    img.src = `./img/${tableId}/${cellId+1}.png`;
                    cell.appendChild(img);
                    cellId++;
                    if (cellId === celllist13.length){
                        break;
                    }
                }
            }
        }
        
    const cells = table.querySelectorAll('td');
    cells.forEach(cell => {
        cell.addEventListener('click', () => handleCellClick(tableId, cell));
    });
}

function updateLocalStorage () {
    const highlightedTds = Array.from(document.querySelectorAll("td.highlighted")).map(td => {
        const img = td.querySelector("img");
        return {
            src: img.src,
            backgroundColor: window.getComputedStyle(td).backgroundColor
        };
    });
    localStorage.setItem("highlightedTds", JSON.stringify(highlightedTds));
};

function handleCellClick(tableId, cell) {
    const table = document.getElementById(tableId);
    const rows = Array.from(table.rows);
    const cells = rows.flatMap(row => Array.from(row.cells));
    const highlightedCells = Array.from(table.querySelectorAll('.highlighted'));


    if (cell.classList.contains('highlighted')) {
        cell.classList.remove('highlighted');
    } else {
        cell.classList.add('highlighted');
    }

    const newOrder = highlightedCells.filter(c => c !== cell);

    if (cell.classList.contains('highlighted')) {
        newOrder.unshift(cell);
    }

    newOrder.push(...cells.filter(c => !c.classList.contains('highlighted')));

    table.innerHTML = '';

    for (let i = 0 ; i < rows.length; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 6; j++) {
            const index = i * 6 + j;
            if (index < newOrder.length) {
                const newCell = row.insertCell();
                newCell.innerHTML = newOrder[index].innerHTML;
                if (newOrder[index].classList.contains('highlighted')) {
                    newCell.classList.add('highlighted');
                }
                newCell.addEventListener('click', () => handleCellClick(tableId, newCell));
            }
        }
    }

    saveTableState(tableId);
}

function saveTableState(tableId) {
    const table = document.getElementById(tableId);
    const rows = Array.from(table.rows);
    const tableState = rows.map(row => {
        return Array.from(row.cells).map(cell => {
            return {
                content: cell.innerHTML,
                highlighted: cell.classList.contains('highlighted')
            };
        });
    });
    localStorage.setItem(tableId, JSON.stringify(tableState));

}

function loadTableState(tableId) {
    const tableState = JSON.parse(localStorage.getItem(tableId));
    if (tableState) {
        const table = document.getElementById(tableId);
        table.innerHTML = ''; 
        for (let i = 0; i < tableState.length; i++) {
            const row = table.insertRow();
            for (let j = 0; j < tableState[i].length; j++) {
                const cellData = tableState[i][j];
                const cell = row.insertCell();
                cell.innerHTML = cellData.content;
                if (cellData.highlighted) {
                    cell.classList.add('highlighted');
                }
                cell.addEventListener('click', () => handleCellClick(tableId, cell));
            }
        }
    } else {
        createTable(tableId, 2, 6);
    }
}

window.onload = function() {
    loadTableState('table1');
    loadTableState('table2');
    loadTableState('table3');
    loadTableState('table4');
    loadTableState('table5');
    loadTableState('table6');
    loadTableState('table7');
    loadTableState('table8');
    loadTableState('table9');
    loadTableState('table10');
    loadTableState('table11');
    loadTableState('table12');
    loadTableState('table13');
    updateLocalStorage();
};
