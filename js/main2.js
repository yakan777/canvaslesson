//画用紙の取得
const cvs=document.getElementById('cvs');
//2dコンテキスト取得(筆&絵の具)
const ctx=cvs.getContext('2d');

//キャンバスの大きさ設定
cvs.width=800;
cvs.height=500;

//キャンバスの背景色設定
ctx.fillStyle="#ddd"
ctx.fillRect(0,0,cvs.width,cvs.height);

//画像配列作成
const imgs=[new Image(),new Image(),new Image()];
const paths=["kaba1.jpg","kaba2.jpg","kaba3.jpg"];
for(let i=0;i<imgs.length;i++){
    imgs[i].src="./images/"+paths[i]
}

//すべての画像の読み込み完了時に動かすcallbackをセットする関数
const setLoadAllCallback=(imgs,callback)=>{
    let count = 0;
    for(let i=0;i<imgs.length;i++){
        imgs[i].onload=()=>{
            ++count;
            if(count==imgs.length){
                callback(imgs);
            }
        };
    }
}

//実行
setLoadAllCallback(imgs,(imgs)=>{
    let count=0;
    let timerId=setInterval(()=>{
        count++;
        let idx=Math.floor(Math.random()*imgs.length);
        let img=imgs[idx];
        ctx.save();
        ctx.translate(Math.random()*cvs.width,Math.random()*cvs.height);
        ctx.rotate(Math.random()*2*Math.PI);
        let width=Math.floor(Math.random()*200)+100;
        ctx.drawImage(img,0,0,width,width*3/4);
        ctx.restore();
        if(count > 100){
            clearInterval(timerId);
        }
    },30);
});


/*
//塗りの設定
ctx.fillStyle="blue";
//四角を描いて塗りつぶす
ctx.fillRect(30,20,150,100);

//線の設定
ctx.strokeStyle="yellow";
ctx.lineWidth=4;

ctx.strokeRect(30,20,150,100);

//線の設定
ctx.strokeStyle="purple"
ctx.lineCap="round"

//ラインの描画
ctx.beginPath();
ctx.moveTo(50,200);
ctx.lineTo(150,250);
ctx.lineTo(250,350);
ctx.stroke();

//三角形の描画]
ctx.fillStyle="green";
ctx.beginPath();
ctx.moveTo(50,300);
ctx.lineTo(200,300);
ctx.lineTo(200,450);
ctx.closePath();
ctx.fill();
//線の追加
ctx.stroke();

//円の描画
ctx.fillStyle="red";
ctx.beginPath();
ctx.arc(250,70,50,0,Math.PI*2);
ctx.closePath();
ctx.fill();

//パックマン
ctx.fillStyle="yellow";
ctx.beginPath();
ctx.moveTo(250,200);
ctx.arc(250,200,50,-1*Math.PI/6,Math.PI/6,true);
ctx.closePath();
ctx.fill();

//テキスト
ctx.font = "36px sans-serif";
ctx.fillText("こんにちはCanvas",250,350);
ctx.fillStyle="purple";
ctx.font = "40px serif";
ctx.lineWidth=1;
ctx.fillText("こんにちはCanvas",250,400);

//画像配置
const img1=new Image();
img1.src="./images/kaba1.jpg";
//画像読み込み終了後描画
img1.onload =()=>{
    //ctx.drawImage(img1,350,20);
    ctx.drawImage(img1,350,20,200,150);
}

//canvas回転
const img2=new Image();
img2.src="./images/kaba2.jpg";
//画像読み込み終了後描画
img2.onload =()=>{
    ctx.save();//既存の座標系を保存
    ctx.translate(500,80);//座標系の原点をx方向に500,y方向に80移動(回転の中点となる)
    ctx.rotate(Math.PI/8);//canvasを回転
    ctx.drawImage(img2,0,0,200,150);//新しくなった原点から描画
    ctx.restore();//座標系を元に戻す
}

//canvasの連続回転
const img3=new Image();
img3.src="./images/kaba3.jpg";
//画像読み込み終了後描画
img3.onload =()=>{
    for(let i=0;i<8;i++){
        ctx.save();
        ctx.translate(600,300);
        ctx.rotate(Math.PI/4*i);
        ctx.drawImage(img3,0,0,200,150);
        ctx.restore();
    }
}*/