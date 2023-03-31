//window.screen.width --> window.screen.availWidth
//window.screen.height --> window.screen.availHeight
var mn = 14
var w = Math.floor(window.screen.availWidth/mn)*mn;
var h = window.screen.availHeight;
var dis=w/mn;
if(window.screen.availWidth<window.screen.availHeight){
    var mn = 6
    var w = Math.floor(window.screen.availWidth/mn)*mn-6;
    var h = window.screen.availHeight;
    var dis = w/mn
}
var lim = h/dis
var cb = document.getElementById('cb')
cb.style.width  = w; 
cb.style.height = h;

var raw = document.getElementsByClassName('raw')
r = raw[0]
r.style.width  = w; 
r.style.height = dis;

//var main = document.getElementById('main')
clmn = "<div class='clmn' style='width:"+dis+"px;height:"+dis+"px'></div>"
//raw = "<div class='raw' style='height:"+dis+"px'></div>"

function squares(){
    clmns = ""
    for(i=0;i<mn;i++){
        clmns = clmns + clmn;
    }
    return clmns
}

function mkraws(){
    raws = ""
    raw.innerHTML = "<div class='raw' style='height:"+dis+"px'>"+squares()+"</div>"
    for(i=0;i<lim;i++){
        raws = raws+raw.innerHTML
    }
    //console.log(raws)
    return raws
}

cb.innerHTML = "<div id='cb'>"+mkraws()+"</div>"

var about = document.getElementById('about')
var abtn = document.getElementById('abt')
var projects = document.getElementById('projects')
var pbtn = document.getElementById('prj')
var experience = document.getElementById('experience')
var ebtn = document.getElementById('exp')

function show_fun(div,btn){
    console.log(div.style.display)
    if(div.style.display=='none' || div.style.display==''){
        div.style.display='block'
        btn.style.backgroundColor='#363636'
        btn.style.borderBottom = "3px solid white"
    }
    else{
        div.style.display='none'
        btn.style.borderBottom = "none"
        btn.style.backgroundColor='#252525'
    }
}

function af(){
    show_fun(about,abtn)
}

function pf(){
    show_fun(projects,pbtn)
}

function ef(){
    show_fun(experience,ebtn)
}


function close(div,btn){
    div.style.display="none"
    btn.style.borderBottom = "none"
    btn.style.backgroundColor='#252525'
}

function ac(){
    close(about,abtn)
}

function pc(){
    close(projects,pbtn)
}

function ec(){
    close(experience,ebtn)
}

if(window.screen.availHeight > window.screen.availWidth){
//if (ifIsMobile.any()){   
    banner = document.getElementById('banner')
    //added-s
    document.body.style.overflow = "auto";
    //added-f
    
    function bans(div){
        if(banner.style.top=="15%" && div.style.display=="block"){
            banner.style.top="50%"
        }else{
            banner.style.setProperty('top','15%')
        } 
    }

    function nbans(){
        banner.style.setProperty('top','50%')
    }

    function af(){
        bans(about)
        show_fun(about,abtn)
        close(projects,pbtn)
        close(experience,ebtn)
    }
    function pf(){
        bans(projects)
        show_fun(projects,pbtn)
        close(about,abtn)
        close(experience,ebtn)
    }
    function ef(){
        bans(experience)
        show_fun(experience,ebtn)
        close(projects,pbtn)
        close(about,abtn)
    }

    function ac(){
        nbans()
        close(about,abtn)
    }
    
    function pc(){
        nbans()
        close(projects,pbtn)
    }
    
    function ec(){
        nbans()
        close(experience,ebtn)
    }
}
//console.log(menu.style)
