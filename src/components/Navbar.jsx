import React from 'react'

const Navbar = () => {
    return <div >        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Muebles</a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                
                
                <a class="nav-link" href="/admin/productos">Crear Producto</a>
                
                    
                    
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/MaestroProductos"
                    >Lista Productos</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/ingresarVenta">Crear Venta</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/maestroVentas">Lista Ventas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/gestionUsuario">Usuarios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Salir</a>
                </li>
            </ul>
        </div>
    </nav> </div>;
    
};

export default Navbar;

