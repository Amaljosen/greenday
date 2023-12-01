//Selecting Side Navbar, MenuIcon

var sidenav = document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav = document.getElementById("closenav")
var year=new Date().getFullYear()
var para=document.getElementById("year")


para.innerHTML=`@${year}greenday.com`

menuicon.addEventListener("click",function()
{
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
