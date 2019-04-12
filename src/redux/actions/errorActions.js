import {MOSTRAR_ERROR} from './types';

export const mostratError = (estado) =>{
    return{
        type:MOSTRAR_ERROR,
        payload: estado
    }
}