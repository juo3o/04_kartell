$(document).ready(function(){
    let w_width;
    w_width = $(window).innerWidth();
    console.log(w_width);
    //브라우저 크기가 변하면 함수내용을 실행
    $(window).resize(function(){
    w_width = $(window).innerWidth();
    console.log(w_width);
    if(w_width>=1281){   
    //*********************************pc버전해상도일경우      

    //서브내비게이션 block
    $('nav > ul > li').mouseenter(function(){
        $('header').stop().animate({'height':'532px'},300);  //stop() : 한번만 동작하게
        $('.sub').css('display','block');
        $('header').addClass('h_b');
        $('header hr').css('opacity','1');
    });
    $('nav > ul > li').mouseleave(function(){
        $('header').stop().animate({'height':'120px'},300);
        $('.sub').css('display','none');
        $('header').removeClass('h_b');
        $('header hr').css('opacity','0');
    });    

    //탭메뉴서식
    const tav_nav = $('.tab_con_wrap > li > a');
    tav_nav.click(function(){
        $(this).addClass('act').parent().siblings().find('a').removeClass('act');
        $('.tab').hide();
        $(this).next().css('display','flex');
        return false;
    });
    
    //1) 아웃도어 왼쪽 슬라이드
    $('.outdoor_left ul li:last-child').insertBefore('.outdoor_left ul li:first-child');
    $('.outdoor_left ul').css('margin-left','-485px');
    function moveLeft1(){
        $('.outdoor_left ul').animate({'margin-left':'-970px'},500,function(){
            $('.outdoor_left ul li:first-child').insertAfter('.outdoor_left ul li:last-child');
            $('.outdoor_left ul').css('margin-left','-485px');
        });
    }
    let Timer2 = setInterval(moveLeft1, 5000);
    function moveRight1(){
        $('.outdoor_left ul').animate({'margin-left':'0px'},500,function(){
            $('.outdoor_left ul li:last-child').insertBefore('.outdoor_left ul li:first-child');
            $('.outdoor_left ul').css('margin-left','-485px');
        });
    }

    //2) 아웃도어 오른쪽 슬라이드
    const out_slide = $('.outdoor_right ul');
    const out_lbtn = $('.outdoor div .btn .outleftbtn');
    const out_rbtn = $('.outdoor div .btn .outrightbtn');
        //1번슬라이드 앞에 4번배치
    $('.outdoor_right ul li:last-child').insertBefore('.outdoor_right ul li:first-child');
        //왼쪽으로 100% 이동
    out_slide.css('margin-left','-542px');
        //moveleft
    function moveLeft2(){
        out_slide.animate({'margin-left':'-1084px'},500,function(){
            $('.outdoor_right ul li:first-child').insertAfter('.outdoor_right ul li:last-child');
            out_slide.css('margin-left','-542px');
        });
    }
    let Timer3 = setInterval(moveLeft2, 5000);
        ///moveRight
    function moveRight2(){
        out_slide.animate({'margin-left':'0px'},500,function(){
            $('.outdoor_right ul li:last-child').insertBefore('.outdoor_right ul li:first-child');
            out_slide.css('margin-left','-542px');
        });
    }
    out_lbtn.click(function(){
        clearInterval(Timer2);
        moveLeft1();
        clearInterval(Timer3);
        moveLeft2();
    });
    out_rbtn.click(function(){
        clearInterval(Timer2);
        moveRight1();
        clearInterval(Timer3);
        moveRight2();
    });

    $('.outdoor div .btn').mouseleave(function(){
        clearInterval(Timer2);
        Timer2 = setInterval(moveLeft1, 5000);
        clearInterval(Timer3);
        Timer3 = setInterval(moveLeft2, 5000);
    });

    // 탑버튼 스크롤
    $(window).scroll(function(){
    let scroll_posiiton = $(this).scrollTop(); //현재 스크롤 위치
    console.log(scroll_posiiton); //1093

    if(scroll_posiiton>=1093){
        $('.top_btn').fadeIn();
    }else{
        $('.top_btn').fadeOut();
    }
    });

    }else if((w_width>768)&&(w_width<1280)){//***************************************tablet버전해상도일경우
    // 타블렛 토글버튼 모양 변경 + 서브 block
    $('.toggle').click(function(){
        $('.toggle span:nth-child(2)').toggle();
        $('.toggle span:first-child').toggleClass('rotate1');
        $('.toggle span:last-child').toggleClass('rotate2');
        $('nav').toggle(300);
        $('.sub').toggle(300);
        $('header').toggleClass('act1');
        $('header .h_inner').toggleClass('act2');
    }); 
    
    // 탑버튼 스크롤
    $(window).scroll(function(){
    let scroll_posiiton = $(this).scrollTop(); //현재 스크롤 위치
    console.log(scroll_posiiton); //1093

    if(scroll_posiiton>=1093){
        $('.top_btn').fadeIn();
    }else{
        $('.top_btn').fadeOut();
    }
    });

    //탭메뉴서식
    const tav_nav = $('.tab_con_wrap > li > a');
    tav_nav.click(function(){
        $(this).addClass('act').parent().siblings().find('a').removeClass('act');
        $('.tab').hide();
        $(this).next().css('display','flex');
        return false;
    });

    //1) 아웃도어 왼쪽 슬라이드
    $('.outdoor_left ul li:last-child').insertBefore('.outdoor_left ul li:first-child');
    $('.outdoor_left ul').css('margin-left','-273px');
    function moveLeft1(){
        $('.outdoor_left ul').animate({'margin-left':'-546'},500,function(){
            $('.outdoor_left ul li:first-child').insertAfter('.outdoor_left ul li:last-child');
            $('.outdoor_left ul').css('margin-left','-273px');
        });
    }
    let Timer2 = setInterval(moveLeft1, 5000);
    function moveRight1(){
        $('.outdoor_left ul').animate({'margin-left':'0px'},500,function(){
            $('.outdoor_left ul li:last-child').insertBefore('.outdoor_left ul li:first-child');
            $('.outdoor_left ul').css('margin-left','-273px');
        });
    }

    //2) 아웃도어 오른쪽 슬라이드
    const out_slide = $('.outdoor_right ul');
    const out_lbtn = $('.outdoor div .btn .outleftbtn');
    const out_rbtn = $('.outdoor div .btn .outrightbtn');
        //1번슬라이드 앞에 4번배치
    $('.outdoor_right ul li:last-child').insertBefore('.outdoor_right ul li:first-child');
        //왼쪽으로 100% 이동
    out_slide.css('margin-left','-285px');
        //moveleft
    function moveLeft2(){
        out_slide.animate({'margin-left':'-570'},500,function(){
            $('.outdoor_right ul li:first-child').insertAfter('.outdoor_right ul li:last-child');
            out_slide.css('margin-left','-285px');
        });
    }
    let Timer3 = setInterval(moveLeft2, 5000);
        ///moveRight
    function moveRight2(){
        out_slide.animate({'margin-left':'0px'},500,function(){
            $('.outdoor_right ul li:last-child').insertBefore('.outdoor_right ul li:first-child');
            out_slide.css('margin-left','-285px');
        });
    }
    out_lbtn.click(function(){
        clearInterval(Timer2);
        moveLeft1();
        clearInterval(Timer3);
        moveLeft2();
    });
    out_rbtn.click(function(){
        clearInterval(Timer2);
        moveRight1();
        clearInterval(Timer3);
        moveRight2();
    });
    $('.outdoor div .btn').mouseleave(function(){
        clearInterval(Timer2);
        Timer2 = setInterval(moveLeft1, 5000);
        clearInterval(Timer3);
        Timer3 = setInterval(moveLeft2, 5000);
    });

    }else{//***************************************mobile버전해상도일경우 
    // 서브내비게이션
    $('nav > ul > li > a').click(function(){
        $(this).next().slideToggle().parent().siblings().find('.sub').hide();
    });

    // 모바일 토글버튼 모양 변경
    $('.toggle').click(function(){
        $('.toggle span:nth-child(2)').toggle();
        $('.toggle span:first-child').toggleClass('rotate1');
        $('.toggle span:last-child').toggleClass('rotate2');
        $('header .h_wrap').toggle();
        $('toggle').css('positon','fixed');
    }); 
        
    //탭메뉴서식
    const tab_nav = $('.tab_con_wrap > li > a');
    tab_nav.click(function(){
        $(this).addClass('act').parent().siblings().find('a').removeClass('act');
        $('.tab').hide();
        const gridAreas = '"tab1 tab2" "tab3 tab4"';
        $(this).next().css(
                {
                    'display': 'grid',
                    'grid-template-areas': gridAreas
                }
            );
        return false;
    });

    //2) 아웃도어 오른쪽 슬라이드
    const out_slide = $('.outdoor_right ul');
    const out_lbtn = $('.outdoor div .btn .outleftbtn');
    const out_rbtn = $('.outdoor div .btn .outrightbtn');
        //1번슬라이드 앞에 4번배치
    $('.outdoor_right ul li:last-child').insertBefore('.outdoor_right ul li:first-child');
        //왼쪽으로 100% 이동
    out_slide.css('margin-left','-390px');
        //moveleft
    function moveLeft2(){
        out_slide.animate({'margin-left':'-780px'},500,function(){
            $('.outdoor_right ul li:first-child').insertAfter('.outdoor_right ul li:last-child');
            out_slide.css('margin-left','-390px');
        });
    }
    let Timer3 = setInterval(moveLeft2, 5000);
        ///moveRight
    function moveRight2(){
        out_slide.animate({'margin-left':'0px'},500,function(){
            $('.outdoor_right ul li:last-child').insertBefore('.outdoor_right ul li:first-child');
            out_slide.css('margin-left','-390px');
        });
    }
    out_lbtn.click(function(){
        clearInterval(Timer3);
        moveLeft2();
    });
    out_rbtn.click(function(){
        clearInterval(Timer3);
        moveRight2();
    });
    $('.outdoor div .btn').mouseleave(function(){
        clearInterval(Timer3);
        Timer3 = setInterval(moveLeft2, 5000);
    });
    }
    }).resize();

    //헤더_팝업창
    let popup = `
        <div class="p_modal">
            <div class="pop">
                <img src="./images/pop_image.png" alt="팝업이미지">
                <div>
                    <input type="checkbox" id="close">
                    <label for="close">오늘하루 이 창을 열지 않음</label>
                    <i class="fa fa-close"></i>
                </div>
            </div>
        </div>
    `
    $('body').append(popup); //body 맨끝에 popup추가
    if($.cookie('popup')=='none'){  //닫기버튼(쿠키저장x)
        $('.p_modal').hide();
    }
    let $ex = $('.p_modal #close'); //체크박스변수
    function closePopup(){          //체크박스 체크 유무 확인 함수
        if($ex.is(':checked')){     //체크되면
            $.cookie('popup','none',{expires:1, path:'/'});
        }
        $('.p_modal').hide();       //쿠키생성하고 모달창 종료
    }
    $('.p_modal .fa-close').click(function(){  //닫기버튼(쿠키저장O)
        closePopup();
    });

    //메인슬라이드
    const visual_l_btn = $('.banner_btn li:first-child');
    const visual_r_btn = $('.banner_btn li:last-child');
    const ctrl_btn = $('.ctrl_btn li');
    let visual_img = $('.visual > div');
    let i = $('.visual .ctrl_btn li').index(); //컨트롤버튼 인덱스값
    function fade(){
        visual_img.eq(i).fadeOut();  //eq에 i=0 담기
        $('.visual .ctrl_btn > li').removeClass('on'); //on서식제거
        if(i==5){
            i=0;
        }else{
            i++;
        }
        $('.visual .ctrl_btn > li').eq(i).addClass('on'); //on서식넣기
        visual_img.eq(i).stop().fadeIn(); //이미지보이게
    }
    let Timer = setInterval(fade,5000);
    function fade2(){
        visual_img.eq(i).fadeOut();
        if(i==0){
            i=5;
        }else{
            i--;
        }
        visual_img.eq(i).stop().fadeIn();
    }
    visual_l_btn.click(function(){
        fade2();
    });
    visual_r_btn.click(function(){
        fade();
    });
    $('.banner_btn li').mouseover(function(){
        console.log('멈춤');
        clearInterval(Timer);
    });
    $('.banner_btn li').mouseleave(function(){
        console.log('다시진행');
        Timer = setInterval(fade,5000);
    });
    //컨트롤버튼
    ctrl_btn.click(function(){
        clearInterval(Timer);

        let idx = $(this).index();
        console.log(idx);
        visual_img.stop().fadeOut();
        $('.visual .ctrl_btn > li').removeClass('on');
        $('.visual .ctrl_btn > li').eq(idx).addClass('on');
        visual_img.eq(idx).stop().fadeIn();

        i = idx; //원래i값에 idx값을 일치시켜 다음순서 나오게
    });
    
    //아이웨어 랜덤슬라이드
    let b_num = ['1', '2', '3'];
    let b_ran = Math.ceil(Math.random()*3-1);
    document.getElementById('eyeimg').src='./images/eyebanner'+ b_num[b_ran] + '.jpg';

});
