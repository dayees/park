$(document).ready(function(){

	$(".section1 ul li").hover(function(){
		var num=$(this).index()+1; 
		$(this).find("a img").attr({"src":"img/iconover-"+num+".png"});
	},function(){
		var num=$(this).index()+1; 
		$(this).find("a img").attr({"src":"img/icon-"+num+".png"});
	});	



	//푸터 패밀리 사이트

	chk=true;

	$(".language dl dt").click(function(){

		if(chk){
			$(".arrow").html("<span class='material-icons icon2'>arrow_drop_down</span>")
			$(".language dd ul").slideDown();
			chk=false;
		}else{
			$(".arrow").html("<span class='material-icons icon2'>arrow_drop_up</span>")
			$(".language dd ul").slideUp();
			chk=true;
		}
	})

	//모바일 햄버거메뉴	

	$(".menu_toggle_btn").click(function(){
		$(this).toggleClass("menu-open");
		$(".top_menu, .top_util").slideToggle("fast");
	});

	//데스크 탑-롤링 이미지
	old=0;
	eld=0;

	function paper(){
		eld++;
		if(eld>2){
			eld=0;
		}

		$(".section4 ul li").eq(old).stop(true,true).fadeOut(1000);
		$(".section4 ul li").eq(eld).stop(true,true).fadeIn(1000,function(){
			old=eld;
		});
	}

	setInterval(paper,3000);

});