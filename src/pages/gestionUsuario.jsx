import React, { useEffect, useState, useRef } from 'react';


const usuariosBackend = [
    {
        cedula: 10000,
        nombre: 'Juan Pablo Deossa',
        email: 'Juan@c.com',
        rol: '',
        estado: '',
    },
    {
        cedula: 10001,
        nombre: 'Luz Estela Gómez',
        email: 'Luz@c.com',
        rol: '',
        estado: '',
    },
    {
        cedula: 10002,
        nombre: 'Omar Ricardo Gelves',
        email: 'Omar@c.com',
        rol: '',
        estado: '',
    },
    {
        cedula: 10003,
        nombre: 'Angie Catalina Quintero',
        email: 'Angie@c.com',
        rol: '',
        estado: '',
    },
    {
        cedula: 10004,
        nombre: 'Carlos Alfredo Piedrahita',
        email: 'Luz@c.com',
        rol: '',
        estado: '',
    },
];

const Usuario = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [usuarios, setUsuarios] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Crear Nuevo Producto');
    const [colorBoton, setColorBoton] = useState('mainButton');

    useEffect(() => {
        //obtener lista de usuarios desde el backend
        setUsuarios(usuariosBackend);
    }, []);

    useEffect(() => {
        if (mostrarTabla) {
            setTextoBoton('Crear Nuevo Usuario');
            setColorBoton('mainButton');
        } else {
            setTextoBoton('Mostrar Todos los usuarios');
            setColorBoton('secondaryButton');
        }
    }, [mostrarTabla]);
    return (
        <div >
            <div className="container">
                
                <button
                    onClick={() => {
                        setMostrarTabla(!mostrarTabla);
                    }}
                    className={`${colorBoton}`}>
                    {textoBoton}
                </button>
            </div>
            {mostrarTabla ? (
                <TablaUsuarios listaUsuarios={usuarios} />
            ) : (
                <FormularioCreacionUsuarios
                    setMostrarTabla={setMostrarTabla}
                    listaUsuarios={usuarios}
                    setUsuarios={setUsuarios}
                />
            )}

        </div>
    );
};

const TablaUsuarios = ({ listaUsuarios }) => {
    useEffect(() => {
        console.log('este es el listado de usuarios en el componente de tabla', listaUsuarios);
    }, [listaUsuarios]);
    return (
        <div >
            <div class="container">
                <center><h1>Listado de Usuarios</h1></center>
            </div>
            

            <div class="container">
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
                        {listaUsuarios.map((usuario) => {
                            return (
                                <tr>
                                    <td>{usuario.cedula}</td>
                                    <td>{usuario.nombre}</td>
                                    <td>{usuario.email}</td>
                                    <td><select
                                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                                        name='estado'
                                        required
                                        defaultValue={0}
                                    >
                                        <option disabled value={0}>
                                            Seleccione una opción
                                        </option>
                                        <option>Administrador</option>
                                        <option>Vendedor</option>
                                        <option>Otro</option>
                                    </select></td>
                                    <td><select
                                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                                        name='estado'
                                        required
                                        defaultValue={0}
                                    >
                                        <option disabled value={0}>
                                            Seleccione una opción
                                        </option>
                                        <option>Pendiente</option>
                                        <option>No autorizado</option>
                                        <option>Autorizado</option>
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

const FormularioCreacionUsuarios = ({ setMostrarTabla, listaUsuarios, setUsuarios }) => {
    const form = useRef(null);

    const submitForm = (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevoUsuario = {};
        fd.forEach((value, key) => {
            nuevoUsuario[key] = value;
        });

        setMostrarTabla(true);
        setUsuarios([...listaUsuarios, nuevoUsuario]);
        
    };

    return (
        <div ><br /><br /><br /><div class="container">
            <h2 >Crear nuevo Usuario</h2></div>
            <form ref={form} onSubmit={submitForm} className='flex flex-col'><br /><br />
                <label  htmlFor='cedula'>
                    <h5 className='container'> Cédula del usuario</h5>
                    <input
                        name='cedula'
                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                        type='text'
                        placeholder='cedula'
                        required
                    />
                </label>
                <label className='flex flex-col' htmlFor='nombre'>
                    <h5 className='container'> Nombre</h5>
                    <input
                        name='nombre'
                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                        type='text'
                        placeholder='nombre completo'
                        required
                    />
                </label>
                <label className='flex flex-col' htmlFor='email'>
                    <h5 className='container'> Correo electrónico</h5>
                    <input
                        name='email'
                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                        type='email'
                        placeholder='correo electronico'
                        required
                    />
                </label>
                
                

                <button
                    type='submit'
                    className='mainButton'
                >
                    Guardar usuario
                </button>
            </form>
        </div>
    );
};

export default Usuario;
