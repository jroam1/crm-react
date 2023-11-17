import { useNavigate, Form } from "react-router-dom";

function Clients(cliente) {

    const navigate_add_client = useNavigate();
    const {nombre, empresa, email, telefono, id} = cliente.cliente;
    
    return (
        <tr className="border-b">
            <td className="p-6">
                <p className="text-2xl text-gray-800">{nombre}</p>
                <p>{empresa}</p>
            </td>
            <td className="p-6">
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Teléfono: </span>{telefono}</p>
            </td>
            <td className="p-6 flex gap-3">
                <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold" 
                    onClick={() => navigate_add_client(`/clientes/${id}`)}
                >Editar</button>
                <Form method="POST"
                      action={`/clientes/${id}/eliminar`} 
                      onSubmit={(e) => {
                            if(!confirm('¿Desas eliminar este registro')){
                                e.preventDefault()
                            }
                        }}
                >
                    <button
                        type="submit"
                        className="text-red-600 hover:text-blue-700 uppercase font-bold" 
                    >Eliminar</button>
                </Form>
            </td>
        </tr>
    )
}

export default Clients