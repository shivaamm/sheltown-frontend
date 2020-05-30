///*every document where we write our jquery code should start like this*/$(document).ready/*this ensures the code only run afer the document been loaded*/(function()

   /*$is like a selector*///$('h1').click(function()/*click method is like a function  so when we click the h1 element this is the function that will happen */{
     //$(this/*means h1 element*/).css(/*in this we can change the css properties*///'background-color','#ff0000');  
  // })
//});/*so when we click on h1 element then its background color changes to red*/


/*---------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------STICKY NAVIGATION-----------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------*/
$(document).ready(function(){
$('.js--section-features').waypoint(function(direction)/*this is where waypoint plugin comes in*//*meaning of direction is tht we can detect if the user is scrolling down the webpage or scrolling up and we will take a decision based on this parameter*/{
    if(direction=="down")
        {
            $('nav').addClass('sticky');/*when user scrolls down then sticky class will be added to nav*/
        }
    else{
        $('nav').removeClass('sticky');
    }
    
},{
    offset:'60px;'/*this means this sticky will appear 60px before section-feature*/
});

/*---------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------SCROLL ON BUTTONS-----------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------*/
$('.js--scroll-to-plans').click/*this defnes what happens when we click on button*/(function(){
   $('html,body')/*in order to make animated scroll,we need to select html and body*/.animate({scrollTop:$('.js--section-plans').offset().top},1000);/*so what happens is that when we select the scroll to plans class and when click on it then this happens:-we have animation which scrolls to the top of the js--section-plans section with the speed of 1sec*/
});
    $('.js--scroll-to-start').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-features').offset().top},1000);
    });
/*---------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------NAVIGATION SCROLL-----------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------*/
/*$(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            },1000);
            return false;
          }
        }
      });
    });*/
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
/*---------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------NAVIGATION SCROLL-----------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------*/
$('.js--wp-1').waypoint(function(){
    $('.js--wp-1').addClass('animated fadeIn');
},{offset:'50%;'}/*before animation was appearing when we reach the row part but we want to happen it before so this means that animation will happen before half of the page*/);
    $('.js--wp-2').waypoint(function(){
    $('.js--wp-2').addClass('animated fadeInUp');
},{offset:'50%;'}/*before animation was appearing when we reach the row part but we want to happen it before so this means that animation will happen before half of the page*/);
    $('.js--wp-3').waypoint(function(){
    $('.js--wp-3').addClass('animated fadeIn');
},{offset:'50%;'}/*before animation was appearing when we reach the row part but we want to happen it before so this means that animation will happen before half of the page*/);

$('.js--wp-4').waypoint(function(){
    $('.js--wp-4').addClass('animated pulse');
},{offset:'50%;'}/*before animation was appearing when we reach the row part but we want to happen it before so this means that animation will happen before half of the page*/);
/*---------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------MOBILE NAVIGATION-----------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------*/
$('.js--nav-icon').click(function(){
    var nav=$('.js--main-nav');/*variable will be the result of selecting navigation*/
   var icon=$('.js--nav-icon i'/*we are selecting the class which has the class with the icon and in css it means we are selecting i of js--nav-icon class*/);
    nav.slideToggle(/*in this method we will have to say how many times the animation shall take*/200);/*all this does is to open and close the box*/
   {
       if(icon.hasClass('ion-navicon-round')){
        icon.addClass('ion-close-round');
           icon.removeClass('ion-navicon-round');/*so we want that if .js--nav-icon i has class ion-navicon-round in it thn remove it and add another icon*/
       }
       else{
           icon.addClass('ion-navicon-round');
           icon.removeClass('ion-close-round');
           
           
       }
   }
   
});
    /*now we want is that when we click on the icon the icon changes to cross and we do this by changing class when we hit the icon*/
});