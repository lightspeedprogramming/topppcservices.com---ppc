/* ===============  WoW Animations ========================== */

  wow = new WOW();
  wow.init();

/* ===============  window Load ========================== */

$(window).on('load',function() {

	"use strict";

  /*----- loader ---------*/
  $('.loader').fadeOut();

	/* ================= sliders =================  */
			/* =================  Owl Carousel Gallery =============  */

			$("#screenshots_slider").owlCarousel({
				loop: true,
				nav: true,
				animateOut: 'fadeOutLeft',
    		animateIn: 'bounceInRight',
				dots: true,
				autoplay: false,
		    autoplayTimeout: 4000,
				autoplayHoverPause:false,
		    smartSpeed:1000,
				center:true,
				margin : 0,
				responsiveClass: true,
				responsive: {
					0: {
							items: 1,
					},
					575: {
							items: 2,
					},
					767:{
						items: 2,
					}
				}
			});

			/* ============  Owl Carousel For clients ============== */

			$("#clients_slider").owlCarousel({
				autoplay: true,
				autoplayTimeout: 5000,
				items: 2,
				loop: true,
				margin: 30,
				nav: false,
				smartSpeed:1000,
				pagination: false,
				dots: true,
				responsiveClass: true,
				responsive: {
					0: {
							items: 1,
					},
					767: {
							items: 2,
					}
				}
			});

			/* ============  Owl Carousel For Team  ============== */

			$("#team_slider").owlCarousel({
				autoplay: true,
				autoplayTimeout: 5000,
				loop: true,
				margin: 18,
				nav: false,
				pagination: false,
				dots: true,
				smartSpeed:1000,
				responsiveClass: true,
				responsive: {
					0: {
							items: 1,
					},
					575: {
							items: 2,
					},
					767: {
							items: 3,
					},
					1199: {
							items: 4,
					}
		  	}
		  });

			// ============== counter ==================== //

			$(".counter-value").countimator();

			/* =================  mailChimp  =================  */

			var form = $('#subscribe_form');

					if (form.length) {
						form.ajaxChimp({
							callback: mailchimpCallback,
							// Replace the URL above with your mailchimp URL (put your URL inside '').
							url: 'https://ah-theme.us17.list-manage.com/subscribe/post?u=1deb8f74c591046810c8ac1ec&amp;id=ebe56afd26'
						});
					}

					// callback function when the form submitted, show the notification box
					function mailchimpCallback(resp) {

						if (resp.result === 'success') {
							$('.subscription_success').html(resp.msg).slideDown().addClass('active-message');
							$('.subscription_error').slideUp().removeClass('active-message');
						} else {
							$('.subscription_error').html(resp.msg).slideDown().addClass('active-message');
							$('.subscription_success').slideUp().removeClass('active-message');
						}
						setTimeout(function () {
							$('.active-message').slideUp('slow', 'swing');
						}, 4000);
					}

      /* =================  menu click animate =================  */

      	$('.nav-item .nav-link').on('click',function(){
      		var $target = $(this).attr('href');
      		$('body , html').animate({
      			scrollTop: $($target).position().top
      		},1000);
      		$('.navbar-collapse').removeClass('show');
      		$('.navbar-toggler svg').toggleClass('fa-times').toggleClass('fa-align-right');
      	});
      	$('.navbar-toggler').on('click',function(){
      		$('.navbar-toggler svg').toggleClass('fa-times').toggleClass('fa-align-right');
      	});
      	/* =================  play video popup =================  */

      	$('#video_icon').on('click',function(e){
      		e.preventDefault();
      		$('.video_popup').css('display','flex');
      		setTimeout(function () {
      			$('.video_popup').css({
      				'transform':'scale(1,1)',
      				'opacity':'1'
      			});
      		}, 50);
      	});
      	$('.video_popup').on('click',function(e){
      		var $target = e.target.nodeName;
      		var video_src = $(this).find('iframe').attr('src');
      		if($target != 'IFRAME'){
      			$('.video_popup').css({
      				'transform':'scale(1.5,1.5)',
      				'opacity':'0'
      			});
      			setTimeout(function () {
      				$('.video_popup').css('display','none');
      			}, 150);
      			$('.video_popup iframe').attr('src'," ");
      			$('.video_popup iframe').attr('src',video_src);
      		}
      	});
});

/* =================  window Scroll =================  */

$(window).on('scroll , load',function(){
  
  "use strict";

    var window_top = $(window).scrollTop();
    /*---------- menu fixed ----------*/

    if(window_top > 20){
      $('.main_header').addClass('header-scroll_bg_light');
      $('.navbar-brand img').css('max-height','40px');
    }
    else {
      $('.main_header').removeClass('header-scroll_bg_light');
      $('.navbar-brand img').css('max-height','50px');
    }

    /*---------- menu active item ----------*/

    $('#home , #home section').each(function () {
      var currLink = $(this);
      var refElement = $(currLink).attr("id");
      if ($(this).position().top -100 <= window_top) {
        if($('.nav-item .nav-link[href*='+refElement+']').length>0){
          $('.nav-item.active').removeClass('active');
          $('.nav-item .nav-link[href*='+refElement+']').parent().addClass('active');
        }
      }
   });

});
// =================  contact form  =================  //

	$("#contact_form").on('submit',function(t){
		t.preventDefault();
		$('#contact_submit .fa-spin').removeClass('hidden');
		submitForm();
	});

	  function submitForm(){
	    var name=$("#your_name").val(),
	        email=$("#email").val(),
	        phone=$("#phone").val(),
	        message=$("#message").val();
	      $.ajax({type:"POST",url:"contact.php",
	      data:"&name="+name+"&email="+email+"&phone="+phone+"&message="+message,
	      success:function(s){
	        "success"==s&&formSuccess()}})}
	    function formSuccess(){
				$('#contact_submit .fa-spin').addClass('hidden');
	      $("#msgSubmit").removeClass("hidden"),setTimeout(function(){$("#msgSubmit").addClass("hidden");
	    },2e3)
		}
