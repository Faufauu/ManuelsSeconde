// Fonction pour envoyer le texte par email
function sendMail() {
    const user = firebase.auth().currentUser; // Utilisation de firebase.auth() pour obtenir l'utilisateur connecté
    if (!user) {
        alert('Vous devez être connecté pour envoyer un email.');
        return;
    }

    const userEmail = user.email;
    const userText = document.getElementById('user-text').value;

    const templateParams = {
        user_email: userEmail,
        user_text: userText
    };

    emailjs.send('service_8lehz4x', 'template_xxgdgj3', templateParams)
        .then((response) => {
            console.log('Succès de l\'envoi de l\'email:', response);
            alert('Texte envoyé par email !');
        }, (error) => {
            console.error('Erreur lors de l\'envoi de l\'email:', error);
            alert('Erreur lors de l\'envoi de l\'email : ' + error.text);
        });
}

// Exposer la fonction pour être accessible depuis index.html
window.sendMail = sendMail;
