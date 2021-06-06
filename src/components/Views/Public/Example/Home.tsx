import { useEffect, useState } from 'react';
import { RequestReturn } from '../../../../Request/Request.i';
import { InitialState } from '../../../../Request/getRequest';
import { ComidaType } from '../../../Interfaces/Comida.i';
import { getComida } from './Home.c';

function Home()
{
  const [ Comida , setComida] = useState<RequestReturn<ComidaType[]>>(InitialState);

  useEffect(() => {

    getComida().then(result => setComida(result))

  }, [setComida])

  if(Comida?.isLoading) {
    return <h1>Loading ....</h1>
  }

  if(Comida?.isFailed) {
    console.log(Comida.error);
    return <h1>Error fetching data..!</h1>
  }


  return (
    <>
      <h1>Comidas Type</h1>
      <ul>
        {Comida.data?.map((elm, i) => (
          <li key={i}>{elm.nombre} + {elm.descripcion}</li>
        ))}
      </ul>
    </>
  )
}

export default Home;