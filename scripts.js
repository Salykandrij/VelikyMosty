$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 20) 
        $(".navbar").addClass("sticky");
      else
        $(".navbar").removeClass("sticky");
    });
    $('.menu-toggler').click(function(){
      $(this).toggleClass("active");
      $(".navbar-menu").toggleClass("active");
    });

    $('.block-toggler').click(function(){
      $(this).toggleClass("active");
      $(".navbar-menu").toggleClass("active");
    });
  });


function load() {
  $(document).ready(function(){
    $(".loader-container").addClass("trans");
  });

  $(document).ready(function(){
    $(".loader").addClass("trans");
  });
}



// active class of menu items onscroll

function sayHi() {
  $(document).ready(function(){
    $(".hdtxt").addClass("visible");
  });
}


function sayHii() {
  $(document).ready(function(){
    $(".ltx").addClass("visible");
  });
}


setTimeout(sayHi, 200);



setTimeout(sayHii, 500);