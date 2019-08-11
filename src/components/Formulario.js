import React, { useState } from 'react';

function Formulario({ datosConsulta }) {

    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    })
    const handlesChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })

    }

    const consultarClima = e => {
        e.preventDefault();
        datosConsulta(busqueda);
    }
    return (
        <form
            onSubmit={consultarClima}
        >
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handlesChange} />
                <label htmlFor="ciudad">Ciudad</label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    onChange={handlesChange}>
                    <option value="">Seleccione un pais</option>
                    <option value="US">Estados Unidos</option>
                    <option value="CL">Chile</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PR">Peru</option>
                </select>

            </div>
            <div className="input-field col s12">
                <input type="submit" value="Buscar clima" className="waves-effect waves-light btn-large btn-block yellow accent-4" />
            </div>
        </form>
    );

}

export default Formulario;