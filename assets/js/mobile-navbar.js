mobile_navbar_open = false
function toggle_mobile_navbar(){
    mobile_navbar = document.getElementById("items-list");
    mobile_navbar_open = !mobile_navbar_open;
    if(mobile_navbar_open){
        mobile_navbar.style.display = "flex";
        mobile_navbar.style.flexDirection = "column-reverse";
    } else {
        mobile_navbar.style.display = "none";
        mobile_navbar.style.flexDirection = "row";
    }
}

window.onresize = function(event) {
    var new_screen_width = window.innerWidth;
    respond(new_screen_width);
};

function respond(screen_width){
    mobile_navbar = document.getElementById("items-list");
    if (screen_width >= 920){
        mobile_navbar_open = false;
        mobile_navbar.style.display = "block";
        mobile_navbar.style.flexDirection = "row";
    } else if(!mobile_navbar_open){
        mobile_navbar.style.display = "none";
    }
}

var current_screen_width = window.innerWidth;
respond(current_screen_width);