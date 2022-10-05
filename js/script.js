function slide1(){
    document.getElementById("slide").style.backgroundImage= "url('/img/slide/slide1.png')";
    setTimeout("slide2()", 5000)
}
function slide2(){
    document.getElementById("slide").style.backgroundImage= "url('/img/slide/slide2.jpg')";
    setTimeout("slide3()", 5000)
}
function slide3(){
    document.getElementById("slide").style.backgroundImage= "url('/img/slide/slide3.jpg')";
    setTimeout("slide1()", 5000)
}