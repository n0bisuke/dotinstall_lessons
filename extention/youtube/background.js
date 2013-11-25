
//バッジを出力
chrome.browserAction.setBadgeText({"text":"52"});

function onYouTubePlayerReady(playerId) {
	if(i == mlist.length-1)i=0; //最後まで動画再生をしたら最初に戻る。
	ytplayer = document.getElementById("myytplayer");
	ytplayer.cueVideoById(mlist[i]);
	timerID=setInterval("getStatus()",1);
	ytplayer.playVideo(); //自動生成
	// var s="";
	// s+="動画のURL:<br /><input type='text' style='width:560px;border:1px solid #ccc;' value='"+ytplayer.getVideoUrl()+"' /><br />";
	// s+="動画の埋め込みコード:<br /><textarea style='width:560px;height:150px;border:1px solid #ccc;background:#eee;'>"+ytplayer.getVideoEmbedCode()+"</textarea>";
	// $("#status").append(s);
}

function getStatus(){
    var controller='<a href="#" id="btn_play">再生</a><a href="#" id="btn_stop">停止</a><span id="duration"></span>';
    $("#controller").html(controller);
    $("#info").css("top","-200px");

    //動画の長さ取得
    var s="";
    s+="再生中の動画の長さ:"+ytplayer.getDuration()+"<br />";
    $("#duration").html(s);
    //動画の状態取得
    var tmp=ytplayer.getPlayerState();
    if(tmp==-1){
       tmpstr="未開始";
    }else if(tmp==0){
       tmpstr="終了";
    }else if(tmp==1){
       tmpstr="再生中";
    }else if(tmp==2){
       tmpstr="一時停止";
    }else if(tmp==3){
       tmpstr="バッファリング中";
    }else if(tmp=-5){
       tmpstr="頭出し済";
    }
    var playerstatus="プレーヤーの状態:"+tmpstr+"<br />";
    $("#status").html(playerstatus);
    $("#mInfoGenre").html(mInfo[i]['genre'] + mInfo[i]['rank'] + "位");
    $("#mInfoTitle")
       .addClass("box")
       .html(
          '<p class="label">タイトル</p><br />'+
          mInfo[i]['title']
          );
    $("#mInfoArtistName")
       .addClass("box")
       .html(
          '<p class="label">アーティスト名</p><br />'+
          mInfo[i]['artistName']
          );
    //動画が終了状態したら
    if(tmp==0){
    	i++; //次の曲へ
   	onYouTubePlayerReady(); //連続再生
 	}
}