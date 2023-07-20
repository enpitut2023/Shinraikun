document.getElementById("submit").addEventListener("click",function(event) {
    event.preventDefault();

    var selectedTime = document.getElementById("time").value;

    document.getElementById("output").innerText = selectedTime;
})