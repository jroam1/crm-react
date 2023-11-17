import { useLoaderData, Form, useNavigate, useActionData  } from "react-router-dom"
import FormClient from "../components/FormClient";
import Error from "../components/Error";

function UpdateClient() {

    const navigate_client = useNavigate();
    const data_update_client = useLoaderData();
    const errorClient = useActionData();
    console.log(data_update_client);
    return(
        <>
            <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
            <p className="mt-3">A continuación podrás modificar los datos de un cliente</p>

            <div className="flex justify-end">
                <button className="bg-blue-800 text-white px-3 py-1 font-bold uppercase" onClick={()=>navigate_client(-1)}>
                    Volver
                </button>
            </div>

            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
                {errorClient?.length && errorClient.map((error, i) => <Error key={i}>{error}</Error>)}
                <Form method="POST">
                    <FormClient client={data_update_client}/>
                    <input type="submit" className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
                        value="Guardar cambios"/>
                </Form>
            </div>
    
        </>
    )
}

export default UpdateClient