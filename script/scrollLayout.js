//자바스크립트

//전체 스크롤 동작(세로>가로>세로)
window.addEventListener("DOMContentLoaded",()=>{
    //console.log("로딩완료");

    //1.대상선정:
    //(1)타겟박스: .tpg
    const tpg = document.querySelector(".tpg");
    //(2)sticky박스: .slidePg
    const spg = document.querySelector(".slidePg");
        //console.log(tpg,spg);
    //(3)가로이동박스: .slidePg ul
    const mvbx = spg.querySelector("ul");
        //console.log(tpg,spg,mvbx);

    /***************************
        스크롤시 스티키구간에서
        가로방향 이동 구현하기
    ***************************/
    //대상: mvbx
    //이벤트: scroll
    //스크롤이벤트 설정
    window.addEventListener("scroll",movePage);

    /***************************
        함수명: retVal
        기능: getBoundingClientRect()값 리턴
    ***************************/
    const retVal = x => x.getBoundingClientRect().top;

    /***************************
        함수명: movePage
        기능: 가로방향 이동
    ***************************/
    function movePage(){
        //console.log(window.scrollY);

        //1.타겟박스의 바운딩위치값 찍기
        //타겟박스 -> 스티키박스의 부모박스(멈추는 구간)
        let tgpos = retVal(tpg);
        //console.log("바운딩값:",tgpos);

        //2.가로이동박스(mvbx)의 left값 변경하기
        //타겟박스의 바운딩값을 left값으로 넣어줌
        //이유: 바운딩수치 == left값 수치 === -3000px
        // ->최대이동값이 마이너스로 한계값이 일치함
        //대상: mvbx
        //적용구간설정: 0이하 -3000px이상
        if(tgpos <= 0 && tgpos >= -3160){
            mvbx.style.left = tgpos + "px";
        }else if(tgpos > 0){ //위쪽(0초과)일때 처음위치 재설정하기
            mvbx.style.left = "0";
        }
    }

});