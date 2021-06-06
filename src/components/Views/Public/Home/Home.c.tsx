import { RequestReturn } from '../../../../Request/Request.i';
import { getRequest } from '../../../../Request/getRequest';
import { ComidaType } from '../../../Interfaces/Comida.i';

const Comida: ComidaType = {
  id: 0,
  nombre: "",
  descripcion: "",
  imagen: ""
}

function getComida(): Promise<RequestReturn<ComidaType[]>>
{
  return getRequest<ComidaType[]>({
    event: 'GET',
    config: {
      uri: 'Blog'
    }
  });
}

function addComida(comida:ComidaType): Promise<RequestReturn<ComidaType>> {
  return getRequest<ComidaType>({
    event: 'POST',
    config: {
      method: 'POST',
      uri: 'Blog',
      data: comida
    }
  });
}

export  {
  Comida,
  getComida,
  addComida
}