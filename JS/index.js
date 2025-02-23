    document.addEventListener("DOMContentLoaded", function () {
        // Verifica si el usuario está logueado
        if (!sessionStorage.getItem("loggedIn")) {
            // Muestra una alerta indicando que debe loguearse
            alert("Por favor, inicia sesión para acceder a esta página");
    
            // Redirige a login.html
            window.location.href = "login.html";
        }
    });
    //Desarrolla las funcionalidades necesarias para que se verifique si el usuario esta logueado, en el caso de no estarlo se debe redirigir a login.html. 

    // 1. Verifica si el estado de inicio de sesión está almacenado en sessionStorage utilizando sessionStorage.getItem.
  
    // 2. Si no hay un estado de inicio de sesión (el usuario no ha iniciado sesión):
    //    - Redirige al usuario de vuelta a la página de inicio de sesión (login.html) usando window.location.href.

    // 3. Si el usuario ha iniciado sesión, permite que accedan a la página normalmente.


