fullmenu = false;
function togglemenu(){
  if(fullmenu){
    document.getElementById('header').style.animation = "slideout 0.1s ease-out normal forwards";
    fullmenu = false;
  }
  else{
    document.getElementById('header').style.animation = "slidein 0.1s ease-out normal forwards";
    fullmenu = true;
  }
  console.log('toggled menu');
}
function gotofb(){
  location.href = 'https://www.facebook.com/bsaiitm/';
}
function gotoinsta(){
  location.href = 'https://www.instagram.com/bsaiitm/';
}
