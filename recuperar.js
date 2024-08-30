document.getElementById('recuperar').addEventListener('click', function() {
    const email = document.getElementById('inputEmail').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@rac\.edu\.ec$/;

    
    function validateEmail(email) {
        return emailPattern.test(email);
    }
 
    
    if (validateEmail(email)==true) {
        alert('¡Se ha enviado un correo para recuperar tu cuenta!');
        
    }else{
        alert('Email inválido, vuelve a intentar');
    } 
        
    
});
