function convertCurrency() 
{
    var taiwanAmount = parseFloat(document.getElementById("taiwanAmount").value);

    // 讀取 rate.xml 檔案
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "rate.xml", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var xmlDoc = xhr.responseXML;
            var rates = xmlDoc.getElementsByTagName("rate");

            var usRate, euroRate, yenRate, wonRate, audRate;

            // 遍歷匯率資訊，找到對應的匯率
            for (var i = 0; i < rates.length; i++) {
                var currency = rates[i].getAttribute("currency");
                var rate = parseFloat(rates[i].getAttribute("value"));

                if (currency === "USD") {
                    usRate = rate;
                } else if (currency === "EUR") {
                    euroRate = rate;
                } else if (currency === "JPY") {
                    yenRate = rate;
                } else if (currency === "KRW") {
                    wonRate = rate;
                } else if (currency === "AUD") {
                    audRate = rate;
                }
            }

            // 進行轉換計算
            var usAmount = taiwanAmount * usRate;
            var euroAmount = taiwanAmount * euroRate;
            var yenAmount = taiwanAmount * yenRate;
            var wonAmount = taiwanAmount * wonRate;
            var audAmount = taiwanAmount * audRate;

            // 更新結果
            document.getElementById("usAmount").innerHTML = "美金：" + usAmount.toFixed(2);
            document.getElementById("euroAmount").innerHTML = "歐元：" + euroAmount.toFixed(2);
            document.getElementById("yenAmount").innerHTML = "日圓：" + yenAmount.toFixed(2);
            document.getElementById("wonAmount").innerHTML = "韓元：" + wonAmount.toFixed(2);
            document.getElementById("audAmount").innerHTML = "澳幣：" + audAmount.toFixed(2);
        }
    };
    xhr.send();
}

function resetCalculator() {
    document.getElementById("taiwanAmount").value = "";
    document.getElementById("usAmount").innerHTML = "";
    document.getElementById("euroAmount").innerHTML = "";
    document.getElementById("yenAmount").innerHTML = "";
    document.getElementById("wonAmount").innerHTML = "";
    document.getElementById("audAmount").innerHTML = "";
}
