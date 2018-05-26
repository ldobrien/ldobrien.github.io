var countDownDate = new Date("Dec 18, 2019 21:00:00").getTime();

setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7))/ (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("countdown").innerHTML = "Countdown to Graduation:<br>" + weeks + 
    " Weeks<br>" + days + " Days<br>" + hours + " Hours<br>"
    + minutes + " Minutes <br>" + seconds + " Seconds ";
     
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "GRADUATED";
    }
}, 1000);

