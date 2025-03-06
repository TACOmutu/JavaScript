'use stript';

const omikuziimg = ['images/omikuji_chuukichi.png',
                  'images/omikuji_kyou.png',
                  'images/omikuji_daikichi.png',
                  'images/omikuji_daikyou.png',
                  'images/omikuji_syoukichi.png']
const ganbou   = ['叶う　　　　　','叶うかも　　　','叶うといい　　','叶うのは難しい','絶望　　　　']
const kenkou   = ['元気いっぱい　','元気　　　　　','普通　　　　　','調子悪い　　　','不調　　　　']
const renai    = ['成就する　　　','成就するかも　','普通　　　　　','様子見　　　　','諦め　　　　']
const kinun    = ['良し　　　　　','まあ良し　　　','注意　　　　　','ちょっと悪い　','悪い　　　　']
const gakumon  = ['うまくいく　　','きっと大丈夫　','注意　　　　　','多分無理　　　','無理　　　　']

/*ボタンが押されたとき */
const button = document.getElementById('hiku');
const kuziimages = document.getElementById('kuziimg');


button.addEventListener('click',function(){
    /*関数*/    
    function RandomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }

    /*処理*/
    kuziimages.src = omikuziimg[RandomIndex(omikuziimg)];
    kuziimages.style.width = '100px'; 
    kuziimages.style.height = 'auto'; 
    document.getElementById('GN').textContent = ganbou[RandomIndex(gakumon)];
    document.getElementById('KN').textContent = kenkou[RandomIndex(kenkou)];
    document.getElementById('RE').textContent = renai[RandomIndex(renai)];
    document.getElementById('KI').textContent = kinun[RandomIndex(kinun)];
    document.getElementById('GA').textContent = gakumon[RandomIndex(gakumon)]; 
    /*
    document.getElementById('GN').textContent = '願望：' + ganbou[RandomIndex(gakumon)];
    document.getElementById('KN').textContent = '健康：' + kenkou[RandomIndex(kenkou)];
    document.getElementById('RE').textContent = '恋愛：' + renai[RandomIndex(renai)];
    document.getElementById('KI').textContent = '金運：' + kinun[RandomIndex(kinun)];
    document.getElementById('GA').textContent = '学問：' + gakumon[RandomIndex(gakumon)]; 
    */
});


