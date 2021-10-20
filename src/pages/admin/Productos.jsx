import React from 'react'

const Productos = () => {
    return <div>
            <div>
        <section>
                <form className= 'formProducto'>
                <label for="identificador">identificador del producto:</label><br />
                <input type="text" id="identificador" name="identificador" /><br />
                <label for="descripcion">descripción del producto:</label><br />
                <textarea
                    name="descripcion"
                    id="descripcion"
                    cols="30"
                    rows="10"
                ></textarea
                ><br />
                <label for="Vunitario">valor unitario:</label><br />
                <input type="number" id="Vunitario" name="Vunitario" /><br />
                <label for="estado">estado:</label><br />
                <select name="estado" id="estado">
                    <option value="disponible">disponible</option>
                    <option value="no disponible">no disponible</option>
                </select>
                <br /><br />
                <input type="submit" value="Registrar" id="boton" />
                <br />
            </form>
        </section>
    </div>
        </div>;
    
};

export default Productos;
