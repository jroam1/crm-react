import { createBrowserRouter} from 'react-router-dom'
import Layout from './pages/Layout'
import NewClient from './pages/NewClient'
import Index from './pages/Index'
import { loader as loaderCLientes } from './Loaders/LoaderClient'
import { action as actionClient } from './actions/ActionClients'
import ErrorPage from './components/ErrorPage'
import UpdateClient from './pages/UpdateClient'
import { loader as loaderUpdate } from './Loaders/LoaderUpdate'
import { action as actionUpdate } from './actions/ActionUpdate'
import { action as actionRemove } from './actions/ActionRemove'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
        {
            index: true,
            element: <Index />,
            loader: loaderCLientes,
            errorElement: <ErrorPage />
        },
        {
            path: '/clientes/nuevo',
            element: <NewClient />,
            action: actionClient,
            errorElement: <ErrorPage />
        },
        {
          path: '/clientes/:clienteId/', // El nombre asignado a la parte dinámica de la URL corresponde al nombre de la variable con la que se busca en params
          element: <UpdateClient />,
          loader: loaderUpdate,
          action: actionUpdate,
          errorElement: <ErrorPage />
        },
        {
          path: '/clientes/:removeId/eliminar',
          action: actionRemove 
        }
    ]
  }
])

export default router