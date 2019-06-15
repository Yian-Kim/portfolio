/*

    작성자 : CHANMI KIM
    파일명 : main.css
    작성일자 : 2019.06.15.
    최근 수정날짜 : 2019.06.16.
    프로그램명 : CHANMI KIM's Portfolio
    상세설명 : 포트폴리오 사이트에 들어가는 JavaScript입니다.
            index.html 파일에 들어가는 js 파일을 다루고 있습니다.

*/


/*
==================================================
    오른쪽 마우스 드래그 방지   
==================================================
*/
$(document).ready(function(){  

    $(document).on("contextmenu dragstart selectstart",function(e){

        return false;

    });

});

/*
==================================================
    지도 API    
==================================================
*/

/* 웹젠 지도 추가 */
// 네이버 지도 삽입
var map_webzen = new naver.maps.Map('map-webzen', {
    center: new naver.maps.LatLng(37.402531, 127.101574),
    zoom: 10
});

// 지도 위에 마커 추가
var marker_webzen = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.402531, 127.101574),
    map: map_webzen
});

/* 비욘드마케팅그룹 지도 추가 */

var map_beyond = new naver.maps.Map('map-beyond', {
    center: new naver.maps.LatLng(37.511745, 127.031293),
    zoom: 10
});

// 지도 위에 마커 추가
var marker_beyond = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.511745, 127.031293),
    map: map_beyond
});