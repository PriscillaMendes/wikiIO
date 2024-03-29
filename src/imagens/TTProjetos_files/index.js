<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="theme-color" content="#000000" />

    <link rel="manifest" href="/manifest.json" />
    <link rel="stylesheet" href="https://use.typekit.net/jdv5cuy.css">



    <title>TTProjetos</title>

  
  
    <link rel="stylesheet" type="text/css" href="css/bootstrap-theme.min.css">
   <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">


  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
   


   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>



     <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>


   <script  src="js/index.js"></script>
   <script async defer crossorigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v3.3"></script>
 

 <script type="text/javascript" src="jQuery.js"></script>

    <script type="text/javascript">
      $(document).ready(function() {
      $(window).load(medidas);
      $(window).resize(medidas);

      });

      function medidas() {

        var altura = document.body.clientHeight;
          $(".mygrid").show().css({'height': altura+"px"});
        
       } 
    </script>



<script type="text/javascript">
  
  $(function(){   
    var nav = $('#menuHeader');

    $(window).scroll(function () { 
      if ($(this).scrollTop() > 40) { 
        nav.addClass("menu-fixo");

        $('body').css('padding-top', 10);
      } else { 
        nav.removeClass("menu-fixo");
        nav.addClass("menu-init");     

        $('body').css('padding-top', 0);
      } 
    });  
  });
</script>



  <script src="/static/js/bundle.js"></script><script src="/static/js/1.chunk.js"></script><script src="/static/js/main.chunk.js"></script><script src="/main.f660e8de442bfba141a4.hot-update.js"></script></body>
</html>
