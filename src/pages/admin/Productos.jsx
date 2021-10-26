import React, { useEffect, useState, useRef } from 'react';


const productosBackend = [
    {
        id: 5010,
        descripcion: 'Mesa Sala Blanca',
        precio: '250.000',
        estado: 'Disponible',
    },
    {
        id: 5020,
        descripcion: 'Biblioteca 2 X 1',
        precio: '500.000',
        estado: 'Disponible',
    },
    {
        id: 5030,
        descripcion: 'sofa estelar',
        precio: '1.000.000',
        estado: 'No disponible',
    },
    {
        id: 5040,
        descripcion: 'Silla Otomana Blanca',
        precio: '1.500.000',
        estado: 'Disponible',
    },
    {
        id: 5050,
        descripcion: 'Gabinete Cocina Imperial',
        precio: '700.000',
        estado: 'Disponible',
    },
];

const Productos = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [productos, setProductos] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Crear Nuevo Producto');
    const [colorBoton, setColorBoton] = useState('mainButton');

   useEffect(() => {
        //obtener lista de productos desde el backend
        setProductos(productosBackend);
    }, []);

    useEffect(() => {
        if (mostrarTabla) {
            setTextoBoton('Mostrar Todos los productos');
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
                <FormularioCreacionProductos
                    setMostrarTabla={setMostrarTabla}
                    listaProductos={productos}
                    setProductos={setProductos}
                />               
            ) : (
                    <TablaProductos listaProductos={productos} />
            )}

        </div>
    );
};

const TablaProductos = ({ listaProductos }) => {
    useEffect(() => {
        console.log('este es el listado de productos en el componente de tabla', listaProductos);
    }, [listaProductos]);
    return (
        <div >
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
                    {listaProductos.map((producto) => {
                        return (
                            


                            <tr>                            
                                <td>{producto.id}</td>
                                <td>{producto.descripcion}</td>
                                <td>{producto.precio}</td>
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

const FormularioCreacionProductos = ({ setMostrarTabla, listaProductos, setProductos }) => {
    const form = useRef(null);

    const submitForm = (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevoProducto = {};
        fd.forEach((value, key) => {
            nuevoProducto[key] = value;
        });

        setMostrarTabla(false);
        setProductos([...listaProductos, nuevoProducto]);
        
    };

    return (
        <div><br /><br />
            <h2 >Crear nuevo producto</h2>
            <form className='formProducto' ref={form} onSubmit={submitForm} ><br /><br />
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
                    Guardar producto
                </button>
            </form>
        </div>
    );
};

export default Productos;
