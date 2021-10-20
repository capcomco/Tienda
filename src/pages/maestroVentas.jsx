import React from 'react'


const maestroVentas = () => {
    return<div>
            <div class="container">
                <center><h1>Estados de Venta</h1></center>
            </div>
            <div class="container">
                <form action="">
                <label for="busqueda">Buscar por:</label
                    ><br />

                <select class="form-select form-select-sm form">
                        <option>ID Ventas</option>
                        <option>No Doc. Cliente</option>
                        <option>Nombre Cliente</option>
                        <option>Fecha</option>
                    </select>

                    <br />
                <label for="dato">Digite el valor a buscar:</label
                    ><br />
                    <input type="text" name="dato" id="dato" />
                    <input type="button" value="Buscar" />
                </form>
                <br />
            </div>

            <div class="container">
                <div class="container">
                    <a class="btn btn-primary" href="ingresarVenta">Nueva Venta</a>
                </div>

                <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Doc Cliente</th>
                            <th>Cliente</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1010</td>
                            <td>Mercancía Primera Calidad</td>
                            <td>100.000</td>
                            <td>52.021.634</td>
                            <td>Juan Torres</td>
                            <td>05/02/2021</td>
                            <td>
                                <select class="form-control">
                                    <option>En Proceso</option>
                                    <option>Entregada</option>
                                    <option>Cancelada</option>
                                </select>
                            </td>
                            <td><button>Actualizar</button></td>
                        </tr>
                        <tr>
                            <td>1020</td>
                            <td>Mercancía Uno</td>
                            <td>100.000</td>
                            <td>52.021.634</td>
                            <td>Patricia Fuentes</td>
                            <td>15/05/2021</td>
                            <td>
                                <select class="form-control">
                                    <option>En Proceso</option>
                                    <option>Entregada</option>
                                    <option>Cancelada</option>
                                </select>
                            </td>
                            <td><button disabled="disabled">Actualizar</button></td>
                        </tr>
                        <tr>
                            <td>1030</td>
                            <td>Mercancía Dos</td>
                            <td>100.000</td>
                            <td>52.021.634</td>
                            <td>Valentin Sierra</td>
                            <td>07/03/2021</td>
                            <td>
                                <select class="form-control">
                                    <option>En Proceso</option>
                                    <option>Entregada</option>
                                    <option>Cancelada</option>
                                </select>
                            </td>
                            <td><button disabled="disabled">Actualizar</button></td>
                        </tr>
                        <tr>
                            <td>1040</td>
                            <td>Mercancía Tres</td>
                            <td>100.000</td>
                            <td>52.021.634</td>
                            <td>Juan Torres</td>
                            <td>08/08/2021</td>
                            <td>
                                <select class="form-control">
                                    <option>En Proceso</option>
                                    <option>Entregada</option>
                                    <option>Cancelada</option>
                                </select>
                            </td>
                            <td><button disabled="disabled">Actualizar</button></td>
                        </tr>
                        <tr>
                            <td>1050</td>
                            <td>Mercancía Cuatro</td>
                            <td>100.000</td>
                            <td>52.021.634</td>
                            <td>Valentin Sierra</td>
                            <td>20/09/2021</td>
                            <td>
                                <select class="form-control">
                                    <option>En Proceso</option>
                                    <option>Entregada</option>
                                    <option>Cancelada</option>
                                </select>
                            </td>
                            <td><button disabled="disabled">Actualizar</button></td>
                        </tr>
                        <tr>
                            <td>1060</td>
                            <td>Mercancía Cinco</td>
                            <td>100.000</td>
                            <td>52.021.634</td>
                            <td>Viviana Gómez</td>
                            <td>15/05/2021</td>
                            <td>
                                <select class="form-control">
                                    <option>En Proceso</option>
                                    <option>Entregada</option>
                                    <option>Cancelada</option>
                                </select>
                            </td>
                            <td><button disabled="disabled">Actualizar</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    
    
};

export default maestroVentas;
