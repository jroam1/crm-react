import { redirect } from "react-router-dom";
import { addClientes } from "../data/clientes";

export async function action({request}) {
    console.log('Submit al formulario', request);
    const formData = await request.formData();
    // Una buena forma de acceder a los datos del formData
    const dataClient = Object.fromEntries(formData);
    const errores = []
    // Validación
    if (Object.values(dataClient).includes('')){
        errores.push('Todos los campos son obligatorios!')
    }

    if (Object.keys(errores).length){
        return errores
    } 

    // POST para enviar la información
    await addClientes(dataClient);

    return redirect('/');
}