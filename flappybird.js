auto.waitFor();
console.show();

toast("脚本启动成功");
if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
 }
 sleep(10000);

 for(var i = 0; i < 10; i++){
     click(50,50);
     sleep(100);
 }

 var line_down = 500;
 var click_interval = 0;

while(true){
    var img = captureScreen();
    var point_bird = findColorInRegion(img, "#f6fbf7", 317, 50, 1, 1800);
    var point_pillar = findColorInRegion(img, "#513949", 225, 10, 747, 1);
    if(!point_bird){
        toast("find bird failed!");
        exit();
    }
    if(point_bird.y > 1700){
        toast("游戏结束！");
        exit();
    }
    if(point_pillar){
        var point_pillar_down = findColorInRegion(img, "#513949", point_pillar.x + 15, point_pillar.y, 1, 1800);
        if(point_pillar_down){
             line_down = point_pillar_down.y + 450;
        }else{
            point_pillar_down = findColorInRegion(img, "#513949", point_pillar.x - 15, point_pillar.y, 1, 1800);
            if(point_pillar_down){
                line_down = point_pillar_down.y + 450;
            }else{
                continue;
            }
        }
    }
    /*
    if(point_bird.y - 250 <= line_down - 350){
        sleep(50);
        continue;
    }*/
    if(point_bird.y + 200 >= line_down){
        if(click_interval <= 0){
            click(point_bird.x, point_bird.y);
            click_interval = 1;
        }else{
            click_interval = click_interval - 1;
        }
    }
    
    log("bird:"+point_bird.y + "; line: " + line_down);
    sleep(100);
}



toast("脚本运行结束");





/*

var appName = "Flappy Bird";

launchApp(appName);

sleep(5000);
toast("App 启动成功");

var str = "";
str += "width:" + device.width;
str += "height:" + device.height;

sleep(2000);
toast(str);


while(true){
    var gameover = text("Game").findOnce();
    if(gameover){
        toast("游戏结束");
        exit();
    }else{
        sleep(2000);
        
        
        


    }
}

*/
