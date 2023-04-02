const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let squareSize = window.innerWidth / 14;

if (window.innerWidth < 768) {
    squareSize = window.innerWidth / 5;
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const squares = [];

for (let i = 0; i < Math.ceil(window.innerHeight / squareSize); i++) {
    for (let j = 0; j < Math.ceil(window.innerWidth / squareSize); j++) {
    squares.push({
        x: j * squareSize,
        y: i * squareSize,
        size: squareSize,
        color: '#252525',
        hoverColor: '#ffffff',
        isHovered: false
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    squares.forEach(square => {
        ctx.fillStyle = square.isHovered ? square.hoverColor : square.color;
        ctx.fillRect(square.x, square.y, square.size, square.size);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#ffffff';
        ctx.strokeRect(square.x, square.y, square.size, square.size);
    });
}

function update() {
    squares.forEach(square => {
        if (square.isHovered) {
            return;
        }

        square.color = '#252525';
        });
}

function onMouseMove(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    squares.forEach(square => {
        if (x >= square.x && x <= square.x + square.size && y >= square.y && y <= square.y + square.size) {
            if (!square.isHovered) {
                update();
                square.isHovered = true;
                square.color = '#ffffff';
            }
        } else {
            if (square.isHovered) {
                update();
                square.isHovered = false;
            }
        }
    });

    draw();
}

window.addEventListener('resize', () => {
    let newSquareSize = window.innerWidth / 10;

    if (window.innerWidth < 768) {
        newSquareSize = window.innerWidth / 5;
    }

    squares.forEach(square => {
        square.x *= newSquareSize / squareSize;
        square.y *= newSquareSize / squareSize;
        square.size *= newSquareSize / squareSize;
    });

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < Math.ceil(window.innerHeight / newSquareSize); i++) {
        for (let j = 0; j < Math.ceil(window.innerWidth / newSquareSize); j++) {
            if (!squares[i * Math.ceil(window.innerWidth / newSquareSize) + j]) {
                squares.push({
                    x: j * newSquareSize,
                    y: i * newSquareSize,
                    size: newSquareSize,
                    color: '#252525',
                    hoverColor: '#ffffff',
                    isHovered: false
                    });
            } else {
                squares[i * Math.ceil(window.innerWidth / newSquareSize) + j].x = j * newSquareSize;
                squares[i * Math.ceil(window.innerWidth / newSquareSize) + j].y = i * newSquareSize;
                squares[i * Math.ceil(window.innerWidth / newSquareSize) + j].size = newSquareSize;
            }
        }
    }

    squareSize = newSquareSize;

    draw();
});

draw();

canvas.addEventListener('mousemove', onMouseMove);

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
    //var cb = document.getElementById('cb')
    banner = document.getElementById('banner')
    banner.style.width = '150px'
    
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
