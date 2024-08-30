// Importa las funciones necesarias de Firebase 9.x.x
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAlMUmQQMCkcv3SZ9U5Sx8ZzJRCwTowINg",
    authDomain: "proyecto-a72c0.firebaseapp.com",
    projectId: "proyecto-a72c0",
    storageBucket: "proyecto-a72c0.appspot.com",
    messagingSenderId: "234879818973",
    appId: "1:234879818973:web:1278eb5a828c552ff30f34",
    measurementId: "G-X95WKRN7QW"
};

// Inicializa Firebase correctamente usando Firebase 9.x.x
const app = initializeApp(firebaseConfig);

// Obtén la instancia de autenticación
const auth = getAuth(app);

console.log("Firebase inicializado: ", app);
const profesorDomain = "@rac.edu.ec";

// Eventos para los botones
document.getElementById('enviar').addEventListener('click', function(event) {
    event.preventDefault();

    // Obtén los valores de email y password dentro del evento
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
     

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            if (email.endsWith(profesorDomain) ) {
                const user = userCredential.user;
            
            window.location.href = 'home.html';
            } else{
                const user = userCredential.user;
                window.location.href = 'homeVe.html';
            }

           
        })
        .catch((error) => {
            alert("Credenciales incorrectas: "  );
        });
});
document.getElementById('botonRecuperar').addEventListener('click', function() {
  
    window.location.href = 'recuperar.html';
});