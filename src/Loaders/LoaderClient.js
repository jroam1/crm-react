import { getClientesAPI } from "../data/clientes";

export function loader() {
    // Pasando los datos directamente
    // const clientes = [
    //     {
    //         id: 1,
    //         nombre: 'Juan',
    //         telefono: 102013313,
    //         email: "juan@juan.com",
    //         empresa: 'Codigo Con Juan'
    //     },
    //     {
    //         id: 2,
    //         nombre: 'Karen',
    //         telefono: 138198313,
    //         email: "karen@juan.com",
    //         empresa: 'Codigo Con Juan'
    //     },
    //     {
    //         id: 3,
    //         nombre: 'Josue',
    //         telefono: 31983913,
    //         email: "josue@juan.com",
    //         empresa: 'Codigo Con Juan'
    //     },
    //     {
    //         id: 4,
    //         nombre: 'Miguel',
    //         telefono: 319381983,
    //         email: "miguel@juan.com",
    //         empresa: 'Codigo Con Juan'
    //     },
    //     {
    //         id: 5,
    //         nombre: 'Pedro',
    //         telefono: 1398198938,
    //         email: "pedro@juan.com",
    //         empresa: 'Codigo Con Juan'
    //     },
    // ];
    // return clientes;

    // Llamandolos desde una API
    const clientes = getClientesAPI();
    return clientes

}