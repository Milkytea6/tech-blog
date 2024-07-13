function logoutTimer() {
    console.log("LogoutTimer finction runs")
    let sec = 900;
    let timer = setInterval(

        function(){
        document.getElementById('logoutTimer').innerHTML = `${sec}`;
        sec--;
        if (sec < 0 ) {
            clearInterval(timer);
            // Perform logout action here
            alert("Session timed out due to inactivity.");
            // Optionally, redirect to logout URL or perform AJAX logout
            window.location.href = '/api/logout'; // Example logout URL
        }
    }, 1000)
}
window.onload = function() {
    logoutTimer();
  };