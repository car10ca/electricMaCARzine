/* code adapted from https://www.w3schools.com/howto/howto_js_topnav_responsive.asp */


function mobileNav() 
  {
    var x = document.getElementById("responsiveTopnav");
    if (x.className === "topnav") 
    {
      x.className += " responsive";
    } 
    else 
    {
      x.className = "topnav";
    }
  }