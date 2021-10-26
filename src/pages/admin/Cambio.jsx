import React, { useEffect, useState, useRef } from 'react';


const ventasBackend = [
    {
        idventa: 1010,
        descripcion: 'Mercancía Primera Calidad',
        valor: '100.000',
        docliente: '52.021.634',
        nomcliente: 'Juan Torres',
        fecha: '05/02/2021',
    },
    {
        idventa: 1020,
        descripcion: 'Mercancía Uno',
        valor: '100.000',
        docliente: '52.021.634',
        nomcliente: 'Patricia Fuentes',
        fecha: '15/02/2021',
    },
    {
        idventa: 1030,
        descripcion: 'Mercancía Dos',
        valor: '100.000',
        docliente: '52.021.634',
        nomcliente: 'Valentin Sierra',
        fecha: '07/03/2021',
    },
    {
        idventa: 1040,
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
            setTextoBoton('Crear Nuevo Producto');
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
                <TablaVentas listaVentas={ventas} />
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
                <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Descripción</th>
                            <th>Precio U</th>
                            <th>Doc Cliente</th>
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
                                    <td>{venta.precio}</td>
                                    <td><select
                                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                                        name='estado'
                                        required
                                        defaultValue={0}
                                    >
                                        <option disabled value={0}>
                                            Seleccione una opción
                                        </option>
                                        <option>Disponible</option>
                                        <option>No disponible</option>

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

        const nuevoProducto = {};
        fd.forEach((value, key) => {
            nuevoProducto[key] = value;
        });

        setMostrarTabla(true);
        setVentas([...listaVentas, nuevoProducto]);

    };

    return (
        <div><br /><br />
            <h2 >Crear nuevo venta</h2>
            <form ref={form} onSubmit={submitForm} ><br /><br />
                <label className='flex flex-col' htmlFor='nombre'>
                    <h5 className='container'>ID del producto</h5>
                    <input
                        name='id'
                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                        type='text'
                        placeholder='Id'
                        required
                    />
                </label>
                <label className='flex flex-col' htmlFor='nombre'>
                    <h5 className='container'>Descripcion</h5>
                    <input
                        name='descripcion'
                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                        type='text'
                        placeholder='Descripcion'
                        required
                    />
                </label>
                <label className='flex flex-col' htmlFor='nombre'>
                    <h5 className='container'>Precio</h5>
                    <input
                        name='precio'
                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                        type='text'
                        placeholder='precio'
                        required
                    />
                </label>
                <label className='flex flex-col' htmlFor='estado'>
                    <h5 className='container'>Estado</h5>
                    <select
                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                        name='estado'
                        required
                        defaultValue={0}
                    >
                        <option disabled value={0}>
                            Seleccione una opción
                        </option>
                        <option>Disponible</option>
                        <option>No disponible</option>

                    </select>
                </label>


                <button
                    type='submit'
                    className='mainButton'
                >
                    Guardar venta
                </button>
            </form>
        </div>
    );
};

export default Ventas;