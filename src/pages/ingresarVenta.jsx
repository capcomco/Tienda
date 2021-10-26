import React, { useEffect, useState, useRef } from 'react';


const ventasBackend = [
    {
        id: 1010,
        descripcion: 'Mercancía Primera Calidad',
        valor: '100.000',
        docliente: '52.021.634',
        nomcliente: 'Juan Torres',
        fecha: '05/02/2021',
    },
    {
        id: 1020,
        descripcion: 'Mercancía Uno',
        valor: '100.000',
        docliente: '52.021.634',
        nomcliente: 'Patricia Fuentes',
        fecha: '15/02/2021',
    },
    {
        id: 1030,
        descripcion: 'Mercancía Dos',
        valor: '100.000',
        docliente: '52.021.634',
        nomcliente: 'Valentin Sierra',
        fecha: '07/03/2021',
    },
    {
        id: 1040,
        descripcion: 'Mercancía Tres',
        valor: '100.000',
        docliente: '52.021.634',
        nomcliente: 'Juan Torres',
        fecha: '08/08/2021',
    },

];

const Ventas = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [ventas, setVentas] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Crear Nueva Venta');
    const [colorBoton, setColorBoton] = useState('mainButton');

    useEffect(() => {
        //obtener lista de ventas desde el backend
        setVentas(ventasBackend);
    }, []);

    useEffect(() => {
        if (mostrarTabla) {
            setTextoBoton('Mostrar Todas los ventas');
            setColorBoton('secondaryButton');
        } else {
            setTextoBoton('Ingresar nueva venta');
            setColorBoton('mainButton');
        }
    }, [mostrarTabla]);
    return (
        <div >
            <div className="container">

                <button
                    onClick={() => {
                        setMostrarTabla(!mostrarTabla);
                    }}
                    className={`${colorBoton}`}
                >
                    {textoBoton}
                </button>
            </div>
            {mostrarTabla ? (
                <FormularioCreacionVentas
                    setMostrarTabla={setMostrarTabla}
                    listaVentas={ventas}
                    setVentas={setVentas}
                />
            ) : (
                    <TablaVentas listaVentas={ventas}
                        
                    />
                    

            )}

        </div>
    );
};

const TablaVentas = ({ listaVentas }) => {
    useEffect(() => {
        console.log('este es el listado de ventas en el componente de tabla', listaVentas);
    }, [listaVentas]);
    return (
        <div >
            <div class="container">
                <center><h1>Listado de Ventas</h1></center>
            </div>
            <div class="container">
                <form action="">
                    <label for="busqueda" >Buscar por:</label
                    ><br />
                    <select class="form-select form-select-sm form" >
                        <option>ID Venta</option>
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
                <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Documento Cliente</th>
                            <th>Cliente</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaVentas.map((venta) => {
                            return (                              
                                <tr>
                                    <td>{venta.id}</td>
                                    <td>{venta.descripcion}</td>
                                    <td>{venta.valor}</td>
                                    <td>{venta.docliente}</td>
                                    <td>{venta.nomcliente}</td>
                                    <td>{venta.fecha}</td>
                                    <td><select
                                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                                        name='estado'
                                        required
                                        defaultValue={0}
                                    >
                                        <option disabled value={0}>
                                            En proceso
                                        </option>
                                        <option>Entregada</option>
                                        <option>Cancelada</option>

                                    </select></td>
                                    <td><button>Actualizar</button></td>
                                </tr>

                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const FormularioCreacionVentas = ({ setMostrarTabla, listaVentas, setVentas }) => {
    const form = useRef(null);

    const submitForm = (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevaVenta = {};
        fd.forEach((value, key) => {
            nuevaVenta[key] = value;
        });

        setMostrarTabla(false);
        setVentas([...listaVentas, nuevaVenta]);

    };

    return (
        <div><main>

            <h2 >Ingresar nueva venta</h2>
            <form class="bd-example" ref={form} onSubmit={submitForm} >
                <fieldset>
                    <p>
                        <label for="input" class="botonGenerico secondaryButton"
                        >ID Venta</label>
                        <input name='id' type="text" id="input" placeholder="ID Venta" />
                    </p>
                    <p>
                        <label className="botonGenerico secondaryButton" htmlFor='nombre'>
                            Descripcion</label>
                        <input name='descripcion' type='text'
                            placeholder='Descripcion'
                            required/>                    
                    </p>
                    <p>
                        <label for="input" class="botonGenerico secondaryButton"
                        >Valor Venta</label>
                        <input name='valor' type="number" id="input" placeholder="Valor Venta" />
                    </p>
                    <p>
                        <label className="botonGenerico secondaryButton" htmlFor='nombre'>
                            Documento cliente</label>
                        <input name='docliente' type='text'
                            placeholder='Documento'
                            required />

                    </p>
                        <p>
                            <label for="input" class="botonGenerico secondaryButton"
                            >Nombre del Cliente</label>
                        <input name='nomcliente' type="text" id="input" placeholder="Cliente" />
                        </p>
                    <p>
                        <label for="input" class="botonGenerico secondaryButton"
                        >Fecha de Venta</label>
                        <input name='fecha' type="date" id="input" placeholder="Fecha" />
                    </p>
                        
                        
                        <p>
                            <label for="time" class="botonGenerico secondaryButton"
                            >Hora de Venta</label
                            >
                            <input type="time" id="time" />
                        </p>

                        <p>
                            <label for="select" class="botonGenerico secondaryButton"
                            >Encargado</label
                            >
                            <select id="select">
                                <option value="">Seleccionar...</option>
                                <optgroup label="Vendedores">
                                    <option value="">Vendedor 1</option>
                                    <option value="">Vendedor 2</option>
                                    <option value="">Vendedor 3</option>
                                </optgroup>
                            </select>
                        </p>


                <button
                    type='submit'
                    className='mainButton'>
                    Guardar venta
                </button>
            </fieldset>
            </form>
            </main>
        </div>
    );
};

export default Ventas;