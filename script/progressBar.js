$(document).ready(function() {
    // 스크롤 이벤트를 감지하여 처리합니다.
    $(window).scroll(function() {
        // 현재 스크롤 위치를 가져옵니다.
        var scrollPosition = $(window).scrollTop();

        // 만약 스크롤 위치가 1100 이상이면
        if (scrollPosition >= 1100) {
            // 각 프로그레스 바 요소에 대해 반복
            $('.skillBar ul li').each(function() {
                // 프로그레스 바의 진행 상태를 나타내는 너비를 가져옵니다.
                var progressWidth = $(this).find('.frontBar span').attr('data-width');
                // 프로그레스 바의 너비를 설정하고 애니메이션을 적용합니다.
                $(this).find('.frontBar').animate({width: progressWidth}, 1000);
            });
        }
    });
});