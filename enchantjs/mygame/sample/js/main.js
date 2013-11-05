enchant();
 
window.onload = function() {
    var game_ = new Game(320, 320); // ゲーム本体を準備すると同時に、表示される領域の大きさを設定しています。
    game_.fps = 100; // frames(フレーム) per(毎) second(秒): ゲームの進行スピードを設定しています。
    game_.preload('./img/chara1.png'); // pre(前)-load(読み込み): ゲームに使う素材を予め読み込んでおきます。
 
    game_.onload = function() { // ゲームの準備が整ったらメインの処理を実行します。
 
        var kuma = new Sprite(32, 32);  // クマというスプライト(操作可能な画像)を準備すると同時に、スプライトの表示される領域の大きさを設定しています。
        kuma.image = game_.assets['./img/chara1.png']; // クマにあらかじめロードしておいた画像を適用します。
        kuma.x = 270; // クマの横位置を設定します。
        kuma.y = 270; // クマの縦位置を設定します。
        game_.rootScene.addChild(kuma); // ゲームのシーンにクマを表示させます。
        game_.rootScene.backgroundColor  = '#7ecef4'; // ゲームの動作部分の背景色を設定しています(16進数)。
        kuma.frame = [1, 1, 2, 2];   // select sprite frame
        var speed = 1;// クマのスピードを表す変数(ハコ)を用意しておきます。
        
    }
    game_.start(); // ゲームをスタートさせます
};