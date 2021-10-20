import React from 'react'
import '../styles/estilos.css';
import '../imagenes/avatar.png';
import '../imagenes/google.png';
import {LoginButton} from '../components/Login';
import {LogoutButton} from '../components/Logout';

const Login = () => {
    return <div>
        { /*
        
        <script>
            let i = 1;
            function comprobar() {
                let x = document.forms["forma"]["usuario"].value;
            let y = document.forms["forma"]["password"].value;
            if (x == "USUARIO" && y == "CLAVE123") {
                window.location.href = "menu";
          } else if (i < 3) {
                alert("Datos incorrectos, intente nuevamente");
            i++;
          } else {
                alert("Número Máximo de Intentos");
          }
        }
        </script>*/}

        <div class="contenedor">
            <div class="avatar"><img src="../imagenes/avatar.png" width="150px" alt = 'avatar'/></div>
            <div class="login-container">
                {/* <div class="register">
                    <h1>Registrarse</h1>
                    <form action="">
                        <input type="text" placeholder="Nombre" class="nombre" required="true" />
                        <input type="text" placeholder="Correo" class="correo" required="true" />
                        <input type="password" placeholder="Contraseña" class="pass" required="true" />
                        <input type="password" placeholder="Confirmar Contraseña" class="repass" required="true" />
                        <input type="submit" class="submit" value="REGISTRARSE" />
                        <button class="Correo"><img src="imagenes/google.png" width="100px" /></button>
                    </form>
                </div> */}

                <div class="login">
                    <h1>Ingresar</h1>
                    <form id="forma" name="forma" >
                    {/* <div class ="elemento">
                    <br/>
                    <br/>
                    <input type ="text" id="usuario" name="usuario" required="true" placeholder="Usuario"/>
                    </div>
                    <div class ="elemento">
                    <br/>
                    <input type ="password" id="password" name="password" required="true" placeholder="Contraseña"/>
                    <br/>
                    <br/>
                    <a href="#">¿Olvidaste tu contraseña?</a>
                    </div> */}
                    <div class ="elemento">
                    <br/>
                    <LoginButton />
                    {/* <input class ="btn " onclick="comprobar()" type ="button" value="Entrar" /> */}
                    
                            {/* <button class="Correo" ><img src="imagenes/google.png" width="100px" alt = 'imagen google'/></button> */}
                    </div>
                    </form>
                    </div>
                    </div>
                    </div>

        
                    </div>
           
    
    
    
};

export default Login;
