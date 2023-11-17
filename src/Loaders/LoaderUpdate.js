import { readClient } from "../data/clientes"

export async function loader({params}) {
    console.log(params);
    const data_client = await readClient(params.clienteId);

    if(Object.values(data_client).length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'Cliente no encontrado'
        })
    }
    return data_client
}