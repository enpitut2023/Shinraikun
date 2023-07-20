document.getElementById("submit").addEventListener("click",function(event) {
    event.preventDefault();

    var selectedTime = document.getElementById("selectedTime").value;

    document.getElementById("output").innerText = selectedTime;
})