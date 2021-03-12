$(function () {
    //소스 반복
    setInterval(fnslide, 3000);
    // 함수명();  -> 함수를 실행시키는 코드( =함수의 호출, 콜 Call)
    function fnslide() { //함수가 호출되었을 때 실행해야하는 내용( =함수의 정의)
        //
        $("#slideShuttleFrame").animate({
                "margin-left": "-1000px"
            },
            1000,
            "swing", // 기본값 = swing
            function () {
                $("#slideShuttleFrame>a:first-child").insertAfter("#slideShuttleFrame>a:last-child");
                $("#slideShuttleFrame").css({
                    "margin-left": "0px"
                });
            });
    }
});
