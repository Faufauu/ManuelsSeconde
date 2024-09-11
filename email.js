function sendMail() {
     let parms = {
        email : document.getElementById("user_email").value,
        message : document.getElementById("user_text").value,
     }

     emailjs.send("service_8lehz4x","template_xxgdgj3",parms).then(alert("Email sent."))
}
