var numVideo = 200;

let autowatch_app = {
    run: function (runTimes) {
        var sleepTime = 10;
        // 统计运行次数
        var flagTime = 0;
        while (true) {
            flagTime++;
            // 超过次数终止程序
            if (flagTime > runTimes) {
                break;
            }
            sleepTime = randNum(5, 15);
            toast(sleepTime.toString() + 's之后跳到下个视频！已经执行 ' + flagTime.toString() + "次");
            sleep(sleepTime * 1000);
            nextVideo();
        }
        home();
        sleep(1000);

        function nextVideo() {
            //获得手机分辨率
            var width = device.width;
            var height = device.height;
            swipe(width / 2, height / 2, width / 2, height / 3, 10);
        };
        //获取范围内的随机数
        function randNum(minnum, maxnum) {
            return Math.floor(minnum + Math.random() * (maxnum - minnum));
        };
    }
};

function main() {
    home();
    autowatch_app.run(numVideo)//参数为每次循环刷动的次数
};

main();