export async function getClientesAPI() {
    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()

    return resultado
}

export async function addClientes(data){
    const form_data = data;

    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(form_data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json();
        
    } catch(error) {
        console.log(error)
    }
}

export async function readClient(id){
    const id_client = id;
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id_client}`)
        const resultado = await respuesta.json()
        return resultado
    } catch (error) {
        console.log(error)
    }
}


export async function putClient(id_client, data_client){
    const form_data = data_client;

    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id_client}`, {
            method: 'PUT',
            body: JSON.stringify(form_data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json();
        
    } catch(error) {
        console.log(error)
    }
}

export async function deleteClient(id_client){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id_client}`, {
            method: 'DELETE',
        })
        await respuesta.json();
        
    } catch(error) {
        console.log(error)
    }
}