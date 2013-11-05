enchant();

function rand(n){
	return Math.floor(Math.random() * (n+1));
}

window.onload = function(){
    
    var core = new Core(320, 320);
    core.preload('chara1.png');
    core.onload = function(){
        
        var shiro = Class.create(Sprite,{
        	initialize: function(x, y, z){
        		Sprite.call(this, 32, 32);
        		this.x = x;
        		this.y = y;
        		this.image = core.assets['chara1.png'];
        		this.frame = z;
        		this.opacity = rand(100) / 100;
        		
        		//this.on('enterframe', function(){
        			//this.x += 5;
        		//	this.rotate(rand(10));
        		//});
        		this.tl.moveBy(rand(100), 0, 40, enchant.Easing.BOUNCE_EASEOUT)
        			.moveBy(-rand(100), -rand(20), rand(20))
        			.fadeOut(20)
        			.fadeIn(10)
        			.loop();
        		
        		core.rootScene.addChild(this);
        	}
        });
       
        var bears = [];
        for (var i = 0; i < 100; i ++){
        	bears[i] = new shiro(rand(320), rand(320), rand(5));
        }

             
        var bear = new Sprite(32, 32);
        bear.image = core.assets['chara1.png'];
        bear.x = 0;
        bear.y = 0;
        
        bear.frame = 1;
        
        bear.addEventListener('enterframe', function(){
            if(core.input.left) this.x -= 5;
            if(core.input.right) this.x += 5;
            if(core.input.up) this.y -= 5;
            if(core.input.down) this.y += 5;
            //this.x += 2; //右へ移動
            //this.frame = this.age % 3 + 5; //0か1か2
            if(this.x > 320)this.x = 0; //繰り返し
            //this.rotate(2); //回転
            //this.scale(1.0, 1.01); //大きくする
            if(this.intersect(enemy)){
                label.text = 'hit';
            }
            if(this.within(enemy, 50)){
                label.text = 'もう少し';
            }
            if(this.within(enemy, 10)){
                //label.text = 'しゃ！';
                core.pushScene(gameOverScene);
                core.stop();
            }
        });
        
        bear.on('touchstart', function(){
            core.rootScene.removeChild(this);
        });
        
        core.rootScene.on('touchstart', function(e){
            bear.x = e.x;
            bear.y = e.y;
        });
        core.rootScene.addChild(bear);
        
        var label = new Label();
        label.x = 200;
        label.y = 5;
        label.color = 'red';
        label.font = '14px "Arial"';
        label.text = '0';
        //時間経過
        //label.on('enterframe', function(){
        //    label.text = (core.frame / core.fps).toFixed(4);
        //});
        core.rootScene.addChild(label);
        
        
        var enemy = new Sprite(32, 32);
        enemy.image = core.assets['chara1.png'];
        enemy.x = 80;
        enemy.y = 100;
        enemy.frame = 5;
        
        enemy.addEventListener('enterframe', function(){
            //if(core.input.left) this.x -= 5;
            //if(core.input.right) this.x += 5;
            //if(core.input.up) this.y += 5;
            //if(core.input.down) this.y -= 5;
        });
        core.rootScene.addChild(enemy);
        
        var gameOverScene = new Scene();
        gameOverScene.backgroundColor = 'red';

    }
    core.start();
    //console.log('hello');
};