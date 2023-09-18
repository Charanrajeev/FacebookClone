var settingsmenu = document.querySelector('.setting-menu')
function settingmenutoggle(){
   
    settingsmenu.classList.toggle("setting-menu-onclick")
}
var darkbtn = document.getElementById('darkbtn')
function darkThemeToggle(){
   
    document.body.classList.toggle('dark-theme')
    darkbtn.classList.toggle("dark-btn-onoff")
    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme","dark")
    }else{
        localStorage.setItem("theme","light")
    }
}
if(localStorage.getItem("theme")=="light"){
    document.body.classList.remove('dark-theme')
    darkbtn.classList.remove("dark-btn-onoff")
}else if(localStorage.getItem("theme")=="dark"){
    document.body.classList.add('dark-theme')
    darkbtn.classList.add("dark-btn-onoff")
}else{
    localStorage.setItem("theme","light")
}