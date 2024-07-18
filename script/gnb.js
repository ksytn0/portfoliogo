$(document).ready(function(){

    /*** gnb메뉴 클리시 해당 위치로 이동***/
    let gnb = $('.gnb ul li');
    let i;

    gnb.click(function(){
        i = $(this).index();
        console.log(i);

        //클릭된 li의 형제 요소 중 a 태그의 active 클래스 제거
        $(this).siblings().find('a').removeClass('active');
        //클릭된 li의 하위 a 태그의 after에 스타일 적용
        $(this).children('a').addClass('active');

        //li클릭시 section의 top:0으로 이동
        $('html, body').stop().animate({scrollTop:$('main section').eq(i).offset().top},1500, 'easeOutQuint');
        return false; //새로고침 방지
    });

    $(window).scroll(function() {
        //현재 화면 상단 좌표 구함
        var scrollTop = $(this).scrollTop();

        // 각 section의 상단에 도달했을 때 클릭서식 적용
        $('main section').each(function() {
            var sectionTop = $(this).offset().top;
            var sectionBottom = sectionTop + $(this).outerHeight();

            if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
                var index = $(this).index();
                $('.gnb ul li').eq(index).find('a').addClass('active');
            } else {
                var index = $(this).index();
                $('.gnb ul li').eq(index).find('a').removeClass('active');
            }
        });
    });
});
