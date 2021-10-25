import React from 'react'


const maestroProductos = () => {
    return (<div>
        <div class="container">
            <center><h1>Listado de Productos</h1></center>
        </div>
        <div class="container">
            <form action="">
                <label for="busqueda" >Buscar por:</label
                ><br />
                <select class="form-select form-select-sm form" >
                    <option>ID Producto</option>
                    <option>Descripción</option>
                </select>
                <label for="dato"
                >Digite el valor a buscar:</label
                ><br />
                <input type="text" name="dato" id="dato" />
                <input type="button" value="Buscar" />
            </form>
            <br />
        </div>

        <div class="container">
            <div class="container">
                <a class="btn btn-primary" href="admin/productos">Crear Producto</a>
            </div>

            <table class="table table-success table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descripción</th>
                        <th>Precio U</th>
                        <th>Estado</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>5010</td>
                        <td>Mesa Sala Blanca</td>
                        <td>250.000</td>
                        <td>
                            <input list="estado" name="estado" />
                            <datalist id="estado">
                                <option value="Disponible"></option>
                                <option value="No Disponible"></option>
                            </datalist>
                        </td>
                        <td><button>Actualizar</button></td>
                    </tr>

                    <tr>
                        <td>5020</td>
                        <td>Biblioteca 2 X 1</td>
                        <td>500.000</td>
                        <td>
                            <input list="estado" name="estado" />
                            <datalist id="estado0">
                                <option value="Disponible"></option>
                                <option value="No Disponible"></option>
                            </datalist>
                        </td>
                        <td><button>Actualizar</button></td>
                    </tr>

                    <tr>
                        <td>5030</td>
                        <td>Sofa Stelar</td>
                        <td>1.000.000</td>
                        <td>
                            <input list="estado" name="estado" />
                            <datalist id="estado1">
                                <option value="Disponible"></option>
                                <option value="No Disponible"></option>
                            </datalist>
                        </td>
                        <td><button>Actualizar</button></td>
                    </tr>

                    <tr>
                        <td>5040</td>
                        <td>Silla Otomana Blanca</td>
                        <td>1.500.000</td>
                        <td>
                            <input list="estado" name="estado" />
                            <datalist id="estado2">
                                <option value="Disponible"></option>
                                <option value="No Disponible"></option>
                            </datalist>
                        </td>
                        <td><button>Actualizar</button></td>
                    </tr>

                    <tr>
                        <td>5050</td>
                        <td>Gabinete Cocina Imperial</td>
                        <td>700.000</td>
                        <td>
                            <input list="estado" name="estado" />
                            <datalist id="estado3">
                                <option value="Disponible"></option>
                                <option value="No Disponible"></option>
                            </datalist>
                        </td>
                        <td><button>Actualizar</button></td>
                    </tr>

                    <tr>
                        <td>5060</td>
                        <td>Comedor Completo 6 Puestos</td>
                        <td>1.700.000</td>
                        <td>
                            <input list="estado" name="estado" />
                            <datalist id="estado4">
                                <option value="Disponible"></option>
                                <option value="No Disponible"></option>
                            </datalist>
                        </td>
                        <td><button>Actualizar</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    )
}

export default maestroProductos
