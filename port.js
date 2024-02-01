var skill = document.getElementById('skills');
var education = document.getElementById('education');
function skills() {
    // Remove "active" class from all elements
    document.querySelectorAll('.links').forEach(function(element) {
        element.classList.remove('active');
        skill.style.display = 'block';
        education.style.display = 'none';
    });

    // Add "active" class to the clicked element
    event.currentTarget.classList.add('active');
}

function edu() {
    // Remove "active" class from all elements
    document.querySelectorAll('.links').forEach(function(element) {
        element.classList.remove('active');
        skill.style.display = 'none';
        education.style.display = 'block';
    });

    // Add "active" class to the clicked element
    event.currentTarget.classList.add('active');
}
var mobmenu = document.getElementById('menu');
var menu_bar = document.getElementById('menubar');
function openMenu(){
    mobmenu.style.display = "block";
    menu_bar.style.display = "none";
}
function closeMenu(){
    mobmenu.style.display = "none";
    menu_bar.style.display = "block";
}
function hide(){
    mobmenu.style.display = "none";
    menu_bar.style.display = "block";
}