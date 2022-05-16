function getIsbnInfo() {
    if (window.XMLHttpRequest) {
        x = document.getElementById("isbnRequestNum");
        x.innerHTML = "正在请求数据……"
        var httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', 'https://api.jike.xyz/situ/book/count', true);
        httpRequest.send();
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                var json = JSON.parse(httpRequest.responseText);
                var s = "";
                if (json.data.isbnGet) {
                    s += "已成功返回 " + json.data.isbnGet + " 次有效结果"
                }
                if (json.data.total) {
                    s += "<br\>共有 " + json.data.total + " 条图书记录"
                }
                if (s.length > 0) {

                } else {
                    s = "服务出错！"
                }
                x.innerHTML = s
            }
        };
    }
}

function getByIsbn() {
    var isbn = document.getElementById("isbn4request").value;
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://api.jike.xyz/situ/book/isbn/' + isbn, true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = JSON.parse(httpRequest.responseText);
            x = document.getElementById("theNewBookInfo");
            s = JSON.stringify(json, null, 4).replaceAll("\n", "<br/>").replaceAll("    ", "&nbsp;&nbsp;&nbsp;&nbsp;");
            x.innerHTML = s;
        }
    };
    // buildIsbnImg(isbn);
}

function getRewardRecord() {
    if (window.XMLHttpRequest) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', 'https://api.jike.xyz/base/reward/record', true);
        httpRequest.send();
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                var json = JSON.parse(httpRequest.responseText);
                var allItem = json.data;
                let newKeys = Object.keys(allItem).sort((a, b) => {
                    return parseInt(allItem[a].id) - parseInt(allItem[b].id)
                });
                for (let one of newKeys.reverse()) {
                    var item = allItem[one]
                    var tr = document.createElement("tr");
                    //创建td
                    var td1 = document.createElement("td");
                    td1.innerHTML = item.showName
                    var td2 = document.createElement("td");
                    td2.innerHTML = item.channel;
                    var td3 = document.createElement("td");
                    td3.innerHTML = "¥" + item.money;
                    var td4 = document.createElement("td");
                    td4.innerHTML = item.time.slice(0, 16).replaceAll("T", " ");
                    var td5 = document.createElement("td");
                    td5.innerHTML = item.leaveWord;
                    var td6 = document.createElement("td");
                    td6.innerHTML = item.reply == null ? "多谢支持" : item.reply;
                    //将创建的td添加到tr中
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);
                    tr.appendChild(td5);
                    tr.appendChild(td6);
                    //使用appendChild（tr）方法，将tr添加到listbody中
                    //其中获取的listbody是要将表格添加的位置的id
                    var listbody = document.getElementById("recordList");
                    listbody.appendChild(tr);
                }
                //s = JSON.stringify(json, null, 4).replaceAll("\n", "<br/>").replaceAll("    ", "&nbsp;&nbsp;&nbsp;&nbsp;");

            }
        };
    }
}


function getUserRewardList() {
    var apikey = document.getElementById("apikeytext").value;
    console.log(apikey);
    if (!apikey) {
        alert('apikey不能为空');
    }
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://api.jike.xyz/base/reward/user?apikey=' + apikey, true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = JSON.parse(httpRequest.responseText);
            var allItem = json.data;
            let newKeys = Object.keys(allItem).sort((a, b) => {
                return parseInt(allItem[a].id) - parseInt(allItem[b].id)
            });
            for (let one of newKeys.reverse()) {
                var item = allItem[one]
                var tr = document.createElement("tr");
                //创建td
                var td1 = document.createElement("td");
                td1.innerHTML = item.showName
                var td2 = document.createElement("td");
                td2.innerHTML = item.channel;
                var td3 = document.createElement("td");
                td3.innerHTML = "¥" + item.money;
                var td4 = document.createElement("td");
                td4.innerHTML = item.time.slice(0, 16).replaceAll("T", " ");
                var td5 = document.createElement("td");
                td5.innerHTML = item.leaveWord;
                var td6 = document.createElement("td");
                td6.innerHTML = item.reply == null ? "多谢支持" : item.reply;
                //将创建的td添加到tr中
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tr.appendChild(td6);
                //使用appendChild（tr）方法，将tr添加到listbody中
                //其中获取的listbody是要将表格添加的位置的id
                var listbody = document.getElementById("recordList");
                listbody.appendChild(tr);
            }
            //s = JSON.stringify(json, null, 4).replaceAll("\n", "<br/>").replaceAll("    ", "&nbsp;&nbsp;&nbsp;&nbsp;");

        }
    }
}


function getRewardSum() {
    if (window.XMLHttpRequest) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', 'https://api.jike.xyz/base/reward/sum', true);
        httpRequest.send();
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                var json = JSON.parse(httpRequest.responseText);

                for (let one of Object.keys(json.data).sort()) {
                    item = json.data[one]
                    var tr = document.createElement("tr");
                    //创建td
                    var td1 = document.createElement("td");
                    td1.innerHTML = one == "total" ? "合计" : one;
                    var td2 = document.createElement("td");
                    td2.innerHTML = "¥" + item
                    //将创建的td添加到tr中
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    //使用appendChild（tr）方法，将tr添加到listbody中
                    //其中获取的listbody是要将表格添加的位置的id
                    var listbody = document.getElementById("rewardSum");
                    listbody.appendChild(tr);
                }
                //s = JSON.stringify(json, null, 4).replaceAll("\n", "<br/>").replaceAll("    ", "&nbsp;&nbsp;&nbsp;&nbsp;");

            }
        };
    }
}

function getCostList() {
    var m = datemonth("2021/09/01", (new Date()).toLocaleDateString()) + 1;
    var json = [
        {
            "name": "树莓派",
            "price": "300/台",
            "total": "1200",
            "remark": "爬取数据(电费就忽略不计了)"
        },
        {
            "name": "服务器",
            "price": "102/月",
            "total": 700 + m * 102,
            "remark": "提供接口服务</br>(早期是一台700/年的小弱机，2021-09换成了4核8G的轻量应用服务器)"
        }
    ];
    for (let one of json) {
        var tr = document.createElement("tr");
        //创建td
        var td1 = document.createElement("td");
        td1.innerHTML = one.name;
        var td2 = document.createElement("td");
        td2.innerHTML = "¥" + one.price;
        var td3 = document.createElement("td");
        td3.innerHTML = "¥" + one.total;
        var td4 = document.createElement("td");
        td4.innerHTML = one.remark;
        //将创建的td添加到tr中
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        //使用appendChild（tr）方法，将tr添加到listbody中
        //其中获取的listbody是要将表格添加的位置的id
        var listbody = document.getElementById("costList");
        listbody.appendChild(tr);
    }
}
// function buildIsbnImg(isbn) {
//     if (!isbn) {
//         isbn = document.getElementById("isbn4request").value;
//     }
//     url = "https://www.fontke.com/tool/barcodegen?codename=isbn&codeval=" + isbn + "&fileformat=png&foreground=%23000000&background=%23FFFFFF&thickness=30&scale=2&fontsize=14"
//     var httpRequest = new XMLHttpRequest();
//     httpRequest.open('GET', url, true);
//     httpRequest.send();
//     httpRequest.onreadystatechange = function () {
//         if (httpRequest.readyState == 4 && httpRequest.status == 200) {
//             document.getElementById("isbn4requestImg").src = httpRequest.responseText
//         }
//     }
// }
function datemonth(date1, date2) {
    // 拆分年月日
    date1 = date1.split('/');
    // 得到月数
    date1 = parseInt(date1[0]) * 12 + parseInt(date1[1]);
    // 拆分年月日
    date2 = date2.split('/');
    // 得到月数
    date2 = parseInt(date2[0]) * 12 + parseInt(date2[1]);
    var m = Math.abs(date1 - date2);
    return m;
}


function initQr() {
    result = ""
    for (let k in showType) {
        result = result + "\n" + showType[k] + "\n<br>";
        j = 0;
        for (let i in imgData) {
            if (imgData[i]['type'] == k) {
                // if(j % 4 == 0){
                //     result = result + "<br>"
                // }
                j++;
                result = result + '<INPUT TYPE="button" value="' + imgData[i]['name'] + '" onclick="reP(\'' + imgData[i]['key'] + '\')" id="' + imgData[i]['key'] + '">\n';
            }
        }
        result = result + "<br>"
    }
    document.getElementById("qrShow").innerHTML = result;
}


function reP(name) {
    // resetStatus();
    for (let k in imgData) {
        if (imgData[k]['key'] == name) {
            document.getElementById('showImage').src = imgData[k]['url'];
            //修改被点击按钮背景颜色
            document.getElementById(name).style.backgroundColor = '#dbdbdb';
            //修改图片上方提示文字
            document.getElementById("qrcode_name").innerHTML = "正在展示：" + name;
        } else {
            let element = document.getElementById(imgData[k]['key']);
            //修改被点击按钮背景颜色
            if (element) element.style.backgroundColor = 'white';
        }
    }
}

function alipayOnPhone() {
    if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { // | iPad
        window.open("https://qr.alipay.com/tsx08323tni2lw83ma6e4c3");
    }
}


var showType = {
    "wereward": "微信打赏",
    "wepay": "微信收款",
    "alipay": "支付宝收款",
    "unionpay": "银联云闪付"
}
var imgData = [
    {
        "key": "reward-hosea",
        "name": "hosea",
        "type": "wereward",
        "url": "/img/qr/reward_hosea.png"
    },
    {
        "key": "wechat_hosea",
        "name": "hosea",
        "type": "wechat",
        "url": "/img/qr/wechat.jpg"
    },
    {
        "key": "wepay_hosea",
        "name": "hosea",
        "type": "wepay",
        "url": "/img/qr/wepay_hosea_400.png"
    },
    {
        "key": "wepay_xzl",
        "name": "xzl",
        "type": "wepay",
        "url": "/img/qr/wepay_xzl_400.png"
    },
    {
        "key": "wepay_harper",
        "name": "harper",
        "type": "wepay",
        "url": "/img/qr/wepay_harper.png"
    },
    {
        "key": "alipay_hosea",
        "name": "hosea",
        "type": "alipay",
        "url": "/img/qr/alipay_hosea_395.png"
    },
    {
        "key": "alipay_leo",
        "name": "leo",
        "type": "alipay",
        "url": "/img/qr/alipay_leo_395.png"
    },
    {
        "key": "alipay_zhqxzl",
        "name": "zhqxzl",
        "type": "alipay",
        "url": "/img/qr/alipay_zhqxzl_395.png"
    },
    {
        "key": "alipay_cmaxzl",
        "name": "cmaxzl",
        "type": "alipay",
        "url": "/img/qr/alipay_cmaxzl_395.png"
    },
    {
        "key": "alipay_harper",
        "name": "harper",
        "type": "alipay",
        "url": "/img/qr/alipay_harper.png"
    },
    {
        "key": "alipay_xuma",
        "name": "徐妈",
        "type": "alipay",
        "url": "/img/qr/alipay_xuma.png"
    },
    {
        "key": "unionpay_hosea",
        "name": "hosea",
        "type": "unionpay",
        "url": "/img/qr/unionpay.png"
    }
]
