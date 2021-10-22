import React from 'react'

const gestionUsuario = () => {
    return (
        <div class="container">
            <div class="container">
                <center><h1>Formulario de Gestion de Usuarios</h1></center>
            <br /><br /><br />
                <center><h2>Listado de usuarios</h2></center></div>

            
                <table class="table table-success table-striped">
                     <thead>
                    <tr>
                        <th>Cedula</th>
                        <th>Nombre</th>
                        <th>Correo Electronico</th>
                        <th>Rol Usuario</th>
                        <th>Estado</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>79401078</td>
                        <td>Omar Ricardo Gelves</td>
                        <td>omargelves@yahoo.com</td>
                        <td>
                            <select class="buscar" name="usu">
                                <option value="">-Seleccione Rol</option>
                                <option value="Administrador">Administrador</option>
                                <option value="Vendedor">Vendedor</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </td>
                        <td>
                            <select class="buscar" name="rol">
                                <option value="">-Seleccione Estado</option>
                                <option value="Pendiente">Pendiente</option>
                                <option value="No autorizado">No autorizado</option>
                                <option value="Autorizado">Autorizado</option>
                            </select>
                        </td>
                        <td><button class="button">Actualizar</button></td>
                    </tr>
                    <tr>
                        <td>11990778</td>
                        <td>Marina Barahona</td>
                        <td>marinab@gmail.com</td>
                        <td>
                            <select class="buscar" name="usu">
                                <option value="">-Seleccione Rol</option>
                                <option value="Administrador">Administrador</option>
                                <option value="Vendedor">Vendedor</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </td>
                        <td>
                            <select class="buscar" name="rol">
                                <option value="">-Seleccione Estado</option>
                                <option value="Pendiente">Pendiente</option>
                                <option value="No autorizado">No autorizado</option>
                                <option value="Autorizado">Autorizado</option>
                            </select>
                        </td>
                        <td><button class="button">Actualizar</button></td>
                    </tr>
                    <tr>
                        <td>130255555</td>
                        <td>Juan Rodriguez</td>
                        <td>Juanro@yahoo.com</td>
                        <td>
                            <select class="buscar" name="usu">
                                <option value="">-Seleccione Rol</option>
                                <option value="Administrador">Administrador</option>
                                <option value="Vendedor">Vendedor</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </td>
                        <td>
                            <select class="buscar" name="rol">
                                <option value="">-Seleccione Estado</option>
                                <option value="Pendiente">Pendiente</option>
                                <option value="No autorizado">No autorizado</option>
                                <option value="Autorizado">Autorizado</option>
                            </select>
                        </td>
                        <td><button class="button">Actualizar</button></td>
                    </tr>
                    <tr>
                        <td>130249555</td>
                        <td>Luisa Guzman</td>
                        <td>Luisa@yahoo.com</td>
                        <td>
                            <select class="buscar" name="usu">
                                <option value="">-Seleccione Rol</option>
                                <option value="Administrador">Administrador</option>
                                <option value="Vendedor">Vendedor</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </td>
                        <td>
                            <select class="buscar" name="rol">
                                <option value="">-Seleccione Estado</option>
                                <option value="Pendiente">Pendiente</option>
                                <option value="No autorizado">No autorizado</option>
                                <option value="Autorizado">Autorizado</option>
                            </select>
                        </td>
                        <td><button class="button">Actualizar</button></td>
                    </tr>
                    <tr>
                        <td>101256755</td>
                        <td>Ana Lpez</td>
                        <td>ana@yahoo.com</td>
                        <td>
                            <select class="buscar" name="usu">
                                <option value="">-Seleccione Rol</option>
                                <option value="Administrador">Administrador</option>
                                <option value="Vendedor">Vendedor</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </td>
                        <td>
                            <select class="buscar" name="rol">
                                <option value="">-Seleccione Estado</option>
                                <option value="Pendiente">Pendiente</option>
                                <option value="No autorizado">No autorizado</option>
                                <option value="Autorizado">Autorizado</option>
                            </select>
                        </td>
                        <td><button class="button">Actualizar</button></td>
                    </tr>
                    </tbody>
                </table>
            
            <br />
            <div class="container">
                <button class="mainButton button">Ver lista actualizada</button>
            </div>
        </div>
    )
}

export default gestionUsuario;
