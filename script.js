document.getElementById("zone").addEventListener("click", function() {
    if (document.getElementById("zone_el").style.display == "none") {
        document.getElementById("zone_el").style.display = "block";
    }
    else {
        document.getElementById("zone_el").style.display = "none";
    }
});
document.getElementById("Logo").addEventListener("click", function() {
    if (document.getElementById("Sidebar").style.display == "none") {
        document.getElementById("Sidebar").style.display = "block";
    }
    else {
        document.getElementById("Sidebar").style.display = "none";
    }
});
document.getElementById("zone").addEventListener("click", function(){
    document.getElementById("zone_screen").style.display = "block";
});
document.getElementById("zone1").addEventListener("click", function(){
    document.getElementById("zone_1_screen").style.display = "block";
    document.getElementById("zone_2_screen").style.display = "none";
    document.getElementById("zone_3_screen").style.display = "none";
});
document.getElementById("zone2").addEventListener("click", function(){
    document.getElementById("zone_2_screen").style.display = "block";
    document.getElementById("zone_1_screen").style.display = "none";
    document.getElementById("zone_3_screen").style.display = "none";
});
document.getElementById("zone3").addEventListener("click", function(){
    document.getElementById("zone_3_screen").style.display = "block";
    document.getElementById("zone_1_screen").style.display = "none";
    document.getElementById("zone_2_screen").style.display = "none";
});

let displayValues = document.querySelectorAll(".zone_1_text");
let timePeriod = 3000;

setTimeout(function() {
    displayValues.forEach((displayValue) => {
        
        let startValue = 0;
        let endValue = parseInt(displayValue.getAttribute("data-val"));
        let duration = Math.floor(timePeriod / endValue);
        console.log(displayValue.style.display);
        
        let count = setInterval(function(){
            startValue = startValue + 1
            displayValue.textContent = startValue;
        if(startValue == endValue){
            clearInterval(count);
        }
        }, duration);
    });
}, 2000)
