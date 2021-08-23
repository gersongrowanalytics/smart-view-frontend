import {
    CARGANDO_TABLA_CONTROL_PRODUCTOS,
    OBTENER_PRODUCTOS_CONTROL_PRODUCTOS
} from "constants/SistemaTypes";

const INIT_STATE = {
    cargando_productos_ControlProductos : false,
    prosSinImagenes_ControlProductos: [],
    prosConImagenes_ControlProductos: [],

};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case CARGANDO_TABLA_CONTROL_PRODUCTOS: {
            return {
                ...state,
                cargando_productos_ControlProductos : action.payload
            }
        }
        case OBTENER_PRODUCTOS_CONTROL_PRODUCTOS: {
            return {
                ...state,
                prosSinImagenes_ControlProductos : action.payload.prosSinImagenes,
                prosConImagenes_ControlProductos : action.payload.prosConImagenes,
            }
        }
    default:
        return state;
    }
}