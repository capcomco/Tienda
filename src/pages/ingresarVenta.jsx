import React from 'react'

const ingresarVenta = () => {
    return (
        <div>
            <main>
                <form class="bd-example">
                    <fieldset>
                        <legend >Gestor de Ventas</legend>

                        <p>
                            <label for="input" class="botonGenerico secondaryButton"
                            >ID Venta</label
                            >
                            <input type="text" id="input" placeholder="ID Venta" />
                        </p>

                        <p>
                            <label for="input" class="botonGenerico secondaryButton"
                            >Valor Venta</label
                            >
                            <input type="number" id="input" placeholder="Valor Venta" />
                        </p>

                        <p>
                            <label for="input" class="botonGenerico secondaryButton"
                            >Cantidad</label
                            >
                            <input type="number" id="input" placeholder="Cantidad" />
                        </p>

                        <p>
                            <label for="input" class="botonGenerico secondaryButton"
                            >Precio Unitario</label
                            >
                            <input type="number" id="input" placeholder="Precio Unitario" />
                        </p>

                        <p>
                            <label for="date" class="botonGenerico secondaryButton"
                            >Fecha de Venta</label
                            >
                            <input type="date" id="date" />
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

                        <p>
                            <input
                                type="submit"
                                class="botonGenerico mainButton"
                                onclick="return confirm('Venta agregada correctamente')"
                            />
                        </p>
                    </fieldset>
                </form>
            </main>
        </div>
    )
}

export default ingresarVenta
