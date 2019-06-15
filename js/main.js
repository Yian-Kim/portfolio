/*

    작성자 : CHANMI KIM
    파일명 : main.css
    작성일자 : 2019.06.15.
    최근 수정날짜 : 2019.06.15.
    프로그램명 : CHANMI KIM's Portfolio
    상세설명 : 포트폴리오 사이트에 들어가는 JavaScript입니다.
            index.html 파일에 들어가는 js 파일을 다루고 있습니다.

*/


// 오른쪽 마우스 방지
$(document).ready(function(){  

    $(document).on("contextmenu dragstart selectstart",function(e){

        return false;

    });

});


// 네이버 지도 삽입
var mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
};

var map = new naver.maps.Map('map', mapOptions);