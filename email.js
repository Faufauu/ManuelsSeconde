function sendMail() {
     let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
     }

     emailjs.send("service_8lehz4x","template_xxgdgj3",parms).then(alert("Email sent."))
}