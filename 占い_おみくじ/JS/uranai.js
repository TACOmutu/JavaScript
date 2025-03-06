'use strict';

const hosi = ['　','★','★★','★★★','★★★★','★★★★★']

const zodiacSigns = [
    { name: "山羊座", start: "01-01", end: "01-19" },
    { name: "水瓶座", start: "01-20", end: "02-18" },
    { name: "魚座", start: "02-19", end: "03-20" },
    { name: "牡羊座", start: "03-21", end: "04-19" },
    { name: "牡牛座", start: "04-20", end: "05-20" },
    { name: "双子座", start: "05-21", end: "06-20" },
    { name: "蟹座", start: "06-21", end: "07-22" },
    { name: "獅子座", start: "07-23", end: "08-22" },
    { name: "乙女座", start: "08-23", end: "09-22" },
    { name: "天秤座", start: "09-23", end: "10-22" },
    { name: "蠍座", start: "10-23", end: "11-21" },
    { name: "射手座", start: "11-22", end: "12-21" },
    { name: "山羊座", start: "12-22", end: "12-31" }
];
// 星座を計算する関数
function getZodiacSign(date) {
    const monthDay = date.slice(5); // "YYYY-MM-DD"の形式から"MM-DD"を取り出す
    for (const sign of zodiacSigns) {
        if (monthDay >= sign.start && monthDay <= sign.end) {
            return sign.name;
        }
    }
    return null;
}

//確認用
console.log(hosi);
console.log(seiza);

/*ボタンが押されたときの処理*/
const button = document.getElementById('hiku');

/*関数*/
button.addEventListener('click', function() {
    const birthday = document.getElementById('birthday').value;
    const zodiac = getZodiacSign(birthday);

    if (zodiac) {
        document.getElementById('seiza').textContent = "あなたの星座: " + zodiac;
    } else {
        document.getElementById('seiza').textContent = "無効な日付です。";
    }
    function RandomHosi() {
        return hosi[Math.floor(Math.random() * hosi.length)];
    }

/*処理*/
    document.getElementById('UGN').textContent = RandomHosi();
    document.getElementById('UKN').textContent = RandomHosi();
    document.getElementById('URE').textContent = RandomHosi();
    document.getElementById('UKI').textContent = RandomHosi();
    document.getElementById('UGA').textContent = RandomHosi();
});

