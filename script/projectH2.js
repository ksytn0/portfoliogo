$(document).ready(function(){
    var projectSectionOffset = $('.pg_project').offset().top;

    // 스크롤 이벤트 감지
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();

        if (scrollPosition >= projectSectionOffset) {
            $('.pg_project h2').css('display', 'block');
        } else {
            $('.pg_project h2').css('display', 'none');
        }

        if (scrollPosition >= 5300) {
            $('.pg_project h2').css('display', 'none');
        }
    });
});