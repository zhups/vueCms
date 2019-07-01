function downloadIamge(imgsrc, name = 'photo') { //下载图片地址和图片名
    if (!imgsrc) return
    let image = new Image();
    // 解决跨域 Canvas 污染问题
    console.log(imgsrc)
    image.setAttribute("crossOrigin", "anonymous");
    image.onload = function() {
        let canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        let context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        let url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
        let a = document.createElement("a"); // 生成一个a元素
        let event = new MouseEvent("click"); // 创建一个单击事件
        a.download = name; // 设置图片名称
        a.href = url; // 将生成的URL设置为a.href属性
        a.dispatchEvent(event); // 触发a的单击事件
    };
    image.src = imgsrc;
}

let tableToExcel = function(head = [], Data = []) {
    let str = '<tr>'
    for (let item in head) { //增加\t为了不让表格显示科学计数法或者其他格式   
        str += `<td>${ head[item] + '\t'}</td>`;
    }
    str += '</tr>'
    for (let i = 0, len = Data.length; i < len; i++) {
        str += '<tr>';
        for (let item in Data[i]) {
            str += `<td>${ Data[i][item] + '\t'}</td>`;
        }
        str += '</tr>';
    } //Worksheet名      
    let worksheet = 'Sheet1'
    let uri = 'data:application/vnd.ms-excel;base64,'; //下载的表格模板数据     
    var template = `<html xmlns:o="urn:schemas-microsoft-com:office:office"       xmlns:x="urn:schemas-microsoft-com:office:excel"       xmlns="http://www.w3.org/TR/REC-html40">    <head><meta charset="UTF-8">  <head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>        <x:Name>${worksheet}</x:Name>        <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>        </x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->        </head><body><table>${str}</table></body></html>`; //下载模板    
    window.location.href = uri + window.btoa(unescape(encodeURIComponent(template)))
}

function getStype(n) {
    let text = ''
    switch (parseInt(n)) {
        case 1:
            text = '商票'
            break;
        case 2:
            text = '佣金'
            break;
        case 3:
            text = '积分'
            break;
    }
    return text
}

function getIdentity(n) {
    let text = ''
    switch (parseInt(n)) {
        case 1:
            text = '普通会员'
            break;
        case 2:
            text = '钻石会员'
            break;
        case 3:
            text = '创业店主'
            break;
        case 4:
            text = '合伙人'
            break;
    }
    return text
}

function getStatus(n) {
    let text = ''
    switch (parseInt(n)) {
        case 1:
            text = '待审核'
            break;
        case 2:
            text = '审核通过'
            break;
        case 3:
            text = '审核不通过'
            break;
    }
    return text
}

export {
    downloadIamge,
    tableToExcel,
    getStype,
    getIdentity,
    getStatus
}