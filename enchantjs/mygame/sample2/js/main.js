enchant();

function rand(n){
    return Math.floor(Math.random() * (n+1));
}

// function postForm(){
//     $(".hoge").append("<input type=\"text\" name=\"menber\"/>");
//     $(".name").css("color","red")
//         .append($('.hoge [name=don]').val()
//         .append(member.length)
//     );
// }

function sArray(){

//    alert(member.length + "てすと");
    alert(document.hoge.member.value);
}
 //   alert(member.length + "てすと");

function start(){
    var game = new Game(800, 520);
    game.fps = 20;
    game.preload(['./img/chara1.png','./img/bar.png','./audio/music.m4a','./audio/gooooal.m4a']);
    //game.preload(['./img/chara1.png','../music.mp3']);
    game.onload = function(){
        var BGM1 = game.assets['./audio/music.m4a'].clone();
        var BGM2 = game.assets['./audio/gooooal.m4a'].clone();
        game.rootScene.backgroundColor  = '#7ece00'; // ゲームの動作部分の背景色を設定しています(16進数)。
        var kumasan = new Array();
        var n_label = new Array();
        var n_label2 = new Array();
        var surface = new Array();
        var name = document.hoge.member.value.split(",");
        //var name = new Array(hoge,"しゃちょう","すなこ","おりまー","いのうぇ","やまもと","ふるだて","かんの","きくち","たかくら","ななちゅう");
        var goal_line = 700;
        

        // var array_count = 0;
        // var name = new Array(); //配列を宣言
        // $("[name='member']").each(function(){
        //     name[array_count] = $("[name='member']").eq(array_count).val();
        //     array_count++;
        // });


        for (var i = 0; i <= name.length-1; i++) {
            //キャラクタ
            kumasan[i] = new Sprite(32, 32);
            kumasan[i].image = game.assets['./img/chara1.png']; // クマにあらかじめロードしておいた画像を適用します。
            kumasan[i].x = 5; // クマの横位置を設定します。
            kumasan[i].y = (i*40)+15; // クマの縦位置を設定します。
            game.rootScene.addChild(kumasan[i]); // ゲームのシーンにクマを表示させます。
            kumasan[i].frame = [6, 6, 7, 7];   // select sprite frame
            //名前
            n_label[i] = new Label("");
            n_label[i].color = "#000";
            n_label[i].text = name[i];
            n_label[i].font = "normal normal 15px/1.0 monospace";
            n_label[i].x = kumasan[i].x+3;
            n_label[i].y = kumasan[i].y-10;
            game.rootScene.addChild(n_label[i]);
            
            //名前2
            n_label2[i] = new Label("");
            n_label2[i].color = "#000";
            n_label2[i].text = name[i];
            n_label2[i].font = "normal normal 15px/1.0 monospace";
            n_label2[i].x = 7;
            n_label2[i].y = (i*40)+5;
            game.rootScene.addChild(n_label2[i]);
        };

        //ラベル
        var g_label = new Label("");
        g_label.color = "#000";
        g_label.text = "順番<br />きめるよ";
        g_label.font = "normal normal 15px/1.0 monospace";
        g_label.x = goal_line;
        g_label.y = 440;
        game.rootScene.addChild(g_label);


        var g_label2 = new Label("");
        g_label2.color = "#000";
        g_label2.text = "ゴール";
        g_label2.color = "red";
        g_label2.font = "normal normal 6px/1.0 monospace";
        g_label2.x = goal_line-20;
        g_label2.y = 1;
        game.rootScene.addChild(g_label2);
        
        var dom_obj=document.getElementById('controller');
        var dom_obj_parent=dom_obj.parentNode;
        dom_obj_parent.removeChild(dom_obj);
        var dom_obj=document.getElementById('info');
        var dom_obj_parent=dom_obj.parentNode;
        dom_obj_parent.removeChild(dom_obj);

        //ゴールライン
        var fighter = new Sprite(3, 400);
        fighter.image = game.assets['./img/bar.png']; 
        fighter.x = goal_line;
        fighter.y = 10;
        game.rootScene.addChild(fighter);

        var rand_n = new Array();
        var rank = 1;
        var goal_flag = 0;
        BGM1.play();
        //ゴール時のアクション
        function goal(){
            g_label.text = "ゴール!!";
            BGM1.stop();
            BGM2.play();
            goal_flag = 1
        }

        game.rootScene.addEventListener(Event.ENTER_FRAME, function() {
            if(rank > kumasan.length && goal_flag == 0){//全員がゴール
                goal();
            }else{
                for (var i = kumasan.length - 1; i >= 0; i--){ //人数分の乱数を発生させる
                    rand_n[i] = 0.3 + Math.floor( Math.random() * 3);
                    if(Math.floor(game.frame/game.fps) >= 2){//数秒間は待機
                        if(kumasan[i].x <= goal_line){
                            n_label[i].x += rand_n[i];
                            kumasan[i].x += rand_n[i]; //ランダムなスピードで進む    
                        }else{//ゴール到着
                            if(rank <= kumasan.length){
                                if(n_label[i].text.match(/[^0-9]+/)){
                                    n_label[i].text = rank.toString();
                                    rank++;
                                } 
                            }
                        }
                    }
                };
            }
        });
    };
    game.start();
}

window.onload = function() {


//     var game = new Game(800, 520);
//     game.fps = 20;
//     game.preload(['./img/chara1.png','./img/bar.png']);
//     //game.preload(['./img/chara1.png','../music.mp3']);
//     game.onload = function(){
//         game.rootScene.backgroundColor  = '#7ece00'; // ゲームの動作部分の背景色を設定しています(16進数)。
//         var kumasan = new Array();
//         var n_label = new Array();
//         var n_label2 = new Array();
//         var surface = new Array();
//         var name = new Array("おくつ","しゃちょう","すなこ","おりまー","いのうぇ","やまもと","ふるだて","かんの","きくち","たかくら","ななちゅう");
//         var goal_line = 700;
        
//         for (var i = 0; i <= name.length-1; i++) {
//             //キャラクタ
//             kumasan[i] = new Sprite(32, 32);
//             kumasan[i].image = game.assets['./img/chara1.png']; // クマにあらかじめロードしておいた画像を適用します。
//             kumasan[i].x = 5; // クマの横位置を設定します。
//             kumasan[i].y = (i*40)+15; // クマの縦位置を設定します。
//             game.rootScene.addChild(kumasan[i]); // ゲームのシーンにクマを表示させます。
//             kumasan[i].frame = [6, 6, 7, 7];   // select sprite frame
//             //名前
//             n_label[i] = new Label("");
//             n_label[i].color = "#000";
//             n_label[i].text = name[i];
//             n_label[i].font = "normal normal 15px/1.0 monospace";
//             n_label[i].x = kumasan[i].x+3;
//             n_label[i].y = kumasan[i].y-10;
//             game.rootScene.addChild(n_label[i]);
            
//             //名前2
//             n_label2[i] = new Label("");
//             n_label2[i].color = "#000";
//             n_label2[i].text = name[i];
//             n_label2[i].font = "normal normal 15px/1.0 monospace";
//             n_label2[i].x = 7;
//             n_label2[i].y = (i*40)+5;
//             game.rootScene.addChild(n_label2[i]);
//         };

//         //ラベル
//         var g_label = new Label("");
//         g_label.color = "#000";
//         g_label.text = "順番<br />きめるよ";
//         g_label.font = "normal normal 15px/1.0 monospace";
//         g_label.x = goal_line+50;
//         g_label.y = 5;
//         game.rootScene.addChild(g_label);


//         var g_label2 = new Label("");
//         g_label2.color = "#000";
//         g_label2.text = "ゴール";
//         g_label2.color = "red";
//         g_label2.font = "normal normal 6px/1.0 monospace";
//         g_label2.x = goal_line-20;
//         g_label2.y = 1;
//         game.rootScene.addChild(g_label2);
 
//         function _delete_dom_obj( id_name ){
//             var dom_obj=document.getElementById(id_name);
//             var dom_obj_parent=dom_obj.parentNode;
//             //alert('ID: '+dom_obj.getAttribute('id')+' を削除します');
//             dom_obj_parent.removeChild(dom_obj);
//         }

//         //ゴールライン
//         var fighter = new Sprite(3, 400);
//         fighter.image = game.assets['./img/bar.png']; 
//         fighter.x = goal_line;
//         fighter.y = 10;
//         game.rootScene.addChild(fighter);

//         var rand_n = new Array();
//         var rank = 1;
//         var tmp = "";
//         game.rootScene.addEventListener(Event.ENTER_FRAME, function() {
//             //BGM1.play();
//             for (var i = kumasan.length - 1; i >= 0; i--){ //人数分の乱数を発生させる
//                 rand_n[i] = 0.3 + Math.floor( Math.random() * 3);
//                 if(Math.floor(game.frame/game.fps) >= 2.5){
//                     if(kumasan[i].x <= goal_line){
//                         n_label[i].x += rand_n[i];
//                         kumasan[i].x += rand_n[i]; //ランダムなスピードで進む    
//                     }else{//ゴール到着
//                         if(rank <= kumasan.length){
//                             if(n_label[i].text.match(/[^0-9]+/)){
//                                 n_label[i].text = rank.toString();
//                                 rank++;
//                             } 
//                         }else{//全員がゴール
//                             g_label.text = "ゴール!!";
//                             _delete_dom_obj('hoge');
//                         }
//                     }
//                 }
//             };
//         });
//     };
//     game.start();
};
