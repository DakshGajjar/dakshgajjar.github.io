let about_btn = document.getElementById("about")
let about_div = document.getElementById("about_div")
let about_td = document.getElementById("about_td")

let projects_btn = document.getElementById("projects")
let projects_div = document.getElementById("projects_div")
let projects_td = document.getElementById("projects_td")

let exp_btn = document.getElementById("experience")
let exp_div = document.getElementById('exp_div')
let exp_td = document.getElementById('exp_td')


about_btn.onclick = function about_txt(){
    about_div.style.display = "block"
    projects_div.style.display = "none" 
    exp_div.style.display = "none"

    about_td.style.borderBottom = "none"
    about_btn.style.pointerEvents = "none"

    projects_td.style.borderBottom="2px solid"
    projects_btn.style.pointerEvents = "auto"
    exp_td.style.borderBottom="2px solid"
    exp_btn.style.pointerEvents = "auto"
}

projects_btn.onclick = function project_txt(){
    about_div.style.display = "none"
    projects_div.style.display = "block" 
    exp_div.style.display = "none" 

    projects_td.style.borderBottom = "none"
    projects_btn.style.pointerEvents = "none"

    about_td.style.borderBottom="2px solid"
    about_btn.style.pointerEvents = "auto"
    exp_td.style.borderBottom="2px solid"
    exp_btn.style.pointerEvents = "auto"
}

exp_btn.onclick = function exp_text(){
    about_div.style.display = "none"
    projects_div.style.display = "none" 
    exp_div.style.display = "block" 

    exp_td.style.borderBottom = "none"
    exp_btn.style.pointerEvents = "none"

    projects_td.style.borderBottom="2px solid"
    projects_btn.style.pointerEvents = "auto"
    about_td.style.borderBottom="2px solid"
    about_btn.style.pointerEvents = "auto"
}


