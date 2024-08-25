const themeToggle = document.getElementById("theme-input");
const themeToggle1 = document.getElementById("theme-input1");
const theme = localStorage.getItem('theme');
const sunDark = document.getElementById("imgSunDark");
const moonDark= document.getElementById("imgMoonDark");
const sunDark1 = document.getElementById("imgSunDark1");
const moonDark1= document.getElementById("imgMoonDark1");

if (theme == 'dark-mode') {
    document.body.classList.add("dark-mode");
    document.body.classList.add("backgroundImgDark");
    sunDark.classList.add("filterSunDark");
    sunDark1.classList.add("filterSunDark");
    moonDark.classList.toggle("filterMoonDark");
    moonDark1.classList.toggle("filterMoonDark");
    themeToggle.classList.add("checked1");
    themeToggle1.classList.add("checked1");

}
if(theme == null) {
    themeToggle.classList.remove("checked1");
    themeToggle1.classList.remove("checked1");
}

themeToggle.addEventListener('change', function() {
    themeToggle.classList.toggle("checked1");
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("backgroundImgDark");
    moonDark.classList.toggle("filterMoonDark");
    moonDark1.classList.toggle("filterMoonDark");
    sunDark.classList.toggle("filterSunDark");
    sunDark1.classList.toggle("filterSunDark");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem('theme', 'dark-mode');
    } else{
        localStorage.removeItem('theme', 'dark-mode');
    }
});

themeToggle1.addEventListener('change', function() {
    themeToggle1.classList.toggle("checked1");
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("backgroundImgDark");
    moonDark.classList.toggle("filterMoonDark");
    moonDark1.classList.toggle("filterMoonDark");
    sunDark.classList.toggle("filterSunDark");
    sunDark1.classList.toggle("filterSunDark");


    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem('theme', 'dark-mode');
    } else{
        localStorage.removeItem('theme', 'dark-mode');
    }
});