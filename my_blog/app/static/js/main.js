
// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
    var MQL = 768;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('#mainNav').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
                        $('#mainNav').addClass('is-visible');
                        $('#to_top').addClass('is-unvisible');
                    } else {
                        $('#mainNav').removeClass('is-visible is-fixed');
                        
                    }
                } else if (currentTop > this.previousTop) {
                    //if scrolling down...
                    $('#mainNav').removeClass('is-visible');
                    $('#to_top').removeClass('is-unvisible');
                    if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')){
                        $('#mainNav').addClass('is-fixed');
                        
                    }
                }
                this.previousTop = currentTop;
            });
    };
    $("#to_top").click(function() {
        $("html,body").animate({"scrollTop":0}, 200);
    });

});

NProgress.configure({ showSpinner: false });

$(document).ready(function(){
    NProgress.start();
});
$(window).on('load', function(){   // jQuery1.8后移除了load，要用on
    NProgress.done();
});  
