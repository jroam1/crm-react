import { redirect } from "react-router-dom";
import { deleteClient } from "../data/clientes";

export async function action({params}) {
    // DELETE el registro
    await deleteClient(params.removeId);
    return redirect('/');
}