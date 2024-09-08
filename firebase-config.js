// Importer les fonctions nécessaires depuis SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA_o5fz_3ELok5uTDgJfIhL7hzqv4-US6I",
    authDomain: "manuelsseconde.firebaseapp.com",
    databaseURL: "https://manuelsseconde.firebaseio.com",
    projectId: "manuelsseconde",
    storageBucket : "manuelsseconde.appspot.com" ,
    messagingSenderId: "369461165606",
    appId: "1:369461165606:web:6bd9186ee95e3701d3f0e7"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Fonction pour l'inscription
async function signup(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert("Inscription réussie !");
    } catch (error) {
        alert(error.message);
    }
}

// Fonction pour la connexion
async function login(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Connexion réussie !");
    } catch (error) {
        alert(error.message);
    }
}

// Fonction pour sauvegarder l'agenda
function saveAgenda(userId, agendaText) {
    set(ref(database, 'users/' + userId + '/agenda'), {
        text: agendaText
    }).then(() => {
        alert('Agenda sauvegardé !');
    }).catch((error) => {
        alert(error.message);
    });
}

// Fonction pour charger l'agenda
function loadAgenda(userId) {
    get(ref(database, 'users/' + userId + '/agenda')).then((snapshot) => {
        if (snapshot.exists()) {
            document.getElementById('agenda-text').value = snapshot.val().text;
        } else {
            alert('Aucune donnée trouvée.');
        }
    }).catch((error) => {
        alert(error.message);
    });
}

// Gérer l'état de l'utilisateur
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('logged-in').style.display = 'block';
        document.getElementById('logged-out').style.display = 'none';
    } else {
        document.getElementById('logged-in').style.display = 'none';
        document.getElementById('logged-out').style.display = 'block';
    }
});

function signOutUser() {
    signOut(auth).then(() => {
        alert("Déconnexion réussie !");
    }).catch((error) => {
        alert(error.message);
    });
}
