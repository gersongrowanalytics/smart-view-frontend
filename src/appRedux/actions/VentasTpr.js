import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"
import {
    OBTENER_VENTAS_TPR_EXITO,
    OBTENER_VENTAS_TPR_FAIL,
    SELECCIONAR_VISTA_VENTAS,
    REINICIAR_VENTASTPR,
    ACTUALIZAR_ESTADO_CARGA_SUCURSAL_VENTAS,
    ACTUALIZAR_ESTADO_CARGA_ZONA_VENTAS,
    OBTENER_SUCURSALES_USUARIO,
    SELECCIONAR_FILTRO_XZONA,
    CAMBIAR_TAMANIO_CARDAVANCE_VENTAS,
    ACTIVAR_MODAL_DESCARGAS_VENTAS,
    CARGANDO_DESCARGA_SI,
    CARGANDO_DESCARGA_SO,
    OBTENER_PROMOCIONES_EXCEL_ESPECIFICO,
    OBTENER_VENTAS_SI_DESCARGA_ESPECIFICA,
    OBTENER_VENTAS_SI_REBATE_BONUS_DESCARGA_ESPECIFICA,
    OBTENER_VENTAS_SO_DESCARGA_ESPECIFICA,
    CAMBIAR_NUMERO_DESCARGA_SI_SO
} from "constants/SistemaTypes";
import config from 'config'
import {ObtenerPromocionesDescargaEspecifica} from 'appRedux/actions/Promociones'

export const reiniciarVentasTprReducer = () => {
  return {
    type: REINICIAR_VENTASTPR
  }
}

export const obtenerVentasTprReducer = (nombreSucursal) =>async (dispatch, getState) => {
    
    dispatch({
        type    : SELECCIONAR_FILTRO_XZONA,
        payload : false
    })

    const {
        diaFiltroSelec,
        mesFiltroSelec,
        anoFiltroSelec
    } = getState().fechas

    const {
        idSucursalUsuarioSelec,
    } = getState().sucursales


    dispatch({
        type: ACTUALIZAR_ESTADO_CARGA_SUCURSAL_VENTAS,
        payload: {
            "cargoSucursal" : false,
            "cargoZona"     : true,
            "nombreSucuSel" : nombreSucursal
        }
    })

    await fetch(config.api+'ventas/mostrar',
        {
            mode:'cors',
            method: 'POST',
            body: JSON.stringify({
                usutoken : localStorage.getItem('usutoken'),
                sucid    : idSucursalUsuarioSelec,
                // dia      : diaFiltroSelec,
                dia      : "01",
                mes      : mesFiltroSelec,
                ano      : anoFiltroSelec,
            }),
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json',
                'api_token': localStorage.getItem('usutoken'),
                'api-token': localStorage.getItem('usutoken'),
            }
        }
    )
    .then( async res => {
        await dispatch(estadoRequestReducer(res.status))
        return res.json()
    })
    .then(data => {
        const estadoRequest = getState().estadoRequest.init_request
        const {cargoSucursal, cargoZona} = getState().ventasTpr
        if(estadoRequest == true){
            const idSucursalSeleccionado = getState().sucursales.idSucursalUsuarioSelec
            if(idSucursalSeleccionado == idSucursalUsuarioSelec){
                if(cargoSucursal == false){
                    dispatch({
                        type: ACTUALIZAR_ESTADO_CARGA_SUCURSAL_VENTAS,
                        payload: {
                            "cargoSucursal" : true,
                            "cargoZona"     : cargoZona,
                            "nombreSucuSel" : nombreSucursal
                        }
                    })
    
                    if(data.respuesta == true){
                        dispatch({
                            type: OBTENER_VENTAS_TPR_EXITO,
                            payload: {
                            "datos" : data.datos,
                            "rebatebonus" : data.rebatebonus
                            }
                        })
                    }else{
                        dispatch({
                            type: OBTENER_VENTAS_TPR_FAIL,
                            payload: data.datos
                        })
                    }
                }else{
                    dispatch({
                        type: ACTUALIZAR_ESTADO_CARGA_SUCURSAL_VENTAS,
                        payload: {
                            "cargoSucursal" : true,
                            "cargoZona"     : cargoZona,
                            "nombreSucuSel" : nombreSucursal
                        }
                    })
                }
            }
      }
    }).catch((error)=> {
        dispatch({
            type: OBTENER_VENTAS_TPR_FAIL,
            payload: []
        })
    });

    let sucursalesUsuario = getState().sucursales.sucursalesUsuario
    let zonas = getState().sucursales.zonas

    await sucursalesUsuario.map((sucursal, posicion) => {
        if(sucursal.sucid == idSucursalUsuarioSelec){
            sucursalesUsuario[posicion]['sucpromociondescarga'] = true
        }else{
            sucursalesUsuario[posicion]['sucpromociondescarga'] = false
        }
    })

    await dispatch({
        type    : OBTENER_SUCURSALES_USUARIO,
        payload : {
            sucursalesUsuario : sucursalesUsuario,
            zonas : zonas
        }
    })

    dispatch(ObtenerPromocionesDescargaEspecifica())
    dispatch(CambiarTamanioCardAvanceReducer())
    return true

}

export const seleccionarVistaVentasReducer = (accion) => {
  return {
      type: SELECCIONAR_VISTA_VENTAS,
      payload: accion
  }
}

export const obtenerVentasTprXZonaReducer = (nombreZonaSel) => async (dispatch, getState) => {
    const {
        diaFiltroSelec,
        mesFiltroSelec,
        anoFiltroSelec
    } = getState().fechas

    const {
        zonaidseleccionado,
        gsuidSeleccionado,
        casidSeleccionado
    } = getState().zonas

    await dispatch({
        type: ACTUALIZAR_ESTADO_CARGA_ZONA_VENTAS,
        payload: {
            "cargoZona"     : false,
            "nombreZonaSel" : nombreZonaSel,
            "cargoSucursal" : true
        }
    })

    //  -----------------
    let sucursales = getState().sucursales.sucursalesUsuario
    let zonas      = getState().sucursales.zonas

    await sucursales.map((sucursal, posicion) => {
        sucursales[posicion]['sucpromociondescarga'] = false
    })

    await sucursales.map((sucursal, posicion) => {
        if(sucursal.casid == casidSeleccionado){
            sucursales[posicion]['sucpromociondescarga'] = true
        }else{
            // sucursales[posicion]['sucpromociondescarga'] = false
        }
    })

    await sucursales.map((sucursal, posicion) => {
        if(sucursal.gsuid == gsuidSeleccionado){
            sucursales[posicion]['sucpromociondescarga'] = true
        }else{
            // sucursales[posicion]['sucpromociondescarga'] = false
        }
    })

    await zonas.map((zona, posicionZona) => {
        if(zona.zonid == zonaidseleccionado){
            zonas[posicionZona]['zonpromociondescarga'] = true
        }else{
            // zonas[posicionZona]['zonpromociondescarga'] = false
        }
    })

    await dispatch({
        type    : OBTENER_SUCURSALES_USUARIO,
        payload : {
            sucursalesUsuario : sucursales,
            zonas : zonas
        }
    })

    await dispatch(ObtenerPromocionesDescargaEspecifica())
    //  -----------------

    await fetch(config.api+'ventas/mostrar/porzona',
    // await fetch(config.api+'ventas/mostrar/porzona/prueba',
        {
            mode:'cors',
            method: 'POST',
            body: JSON.stringify({
                usutoken : localStorage.getItem('usutoken'),
                zonid    : zonaidseleccionado,
                gsuid    : gsuidSeleccionado,
                dia      : "01",
                mes      : mesFiltroSelec,
                ano      : anoFiltroSelec,
                casid    : casidSeleccionado
            }),
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json',
                'api_token': localStorage.getItem('usutoken'),
                'api-token': localStorage.getItem('usutoken'),
            }
        }
    )
    .then( async res => {
        await dispatch(estadoRequestReducer(res.status))
        return res.json()
    })
    .then(data => {
        const estadoRequest = getState().estadoRequest.init_request
        const {
            cargoSucursal,
            cargoZona
        } = getState().ventasTpr

        const idZonaActual = getState().zonas.zonaidseleccionado
        const idGsuActual = getState().zonas.gsuidSeleccionado
        const idCasActual = getState().zonas.casidSeleccionado


        if(estadoRequest == true){
            if(idZonaActual == zonaidseleccionado && gsuidSeleccionado == idGsuActual && casidSeleccionado == idCasActual ){
                if(cargoZona == false){
                    dispatch({
                        type: ACTUALIZAR_ESTADO_CARGA_ZONA_VENTAS,
                        payload: {
                            "cargoZona"     : true,
                            "nombreZonaSel" : nombreZonaSel,
                            "cargoSucursal" : cargoSucursal
                        }
                    })
                    if(data.respuesta == true){
                        dispatch({
                            type: OBTENER_VENTAS_TPR_EXITO,
                            payload: {
                                "datos" : data.datos,
                                "rebatebonus" : data.rebatebonus
                            }
                        })
                    }else{
                        // dispatch({
                        //     type: OBTENER_VENTAS_TPR_FAIL,
                        //     payload: data.datos
                        // })
                    }
                }else{
                    dispatch({
                        type: ACTUALIZAR_ESTADO_CARGA_ZONA_VENTAS,
                        payload: {
                            "cargoZona"     : true,
                            "nombreZonaSel" : nombreZonaSel,
                            "cargoSucursal" : cargoSucursal
                        }
                    })
                }
            }
        }

    }).catch((error)=> {
        console.log(error)
        dispatch({
            type: OBTENER_VENTAS_TPR_FAIL,
            payload: []
        })
    });

    dispatch(CambiarTamanioCardAvanceReducer())
}

export const CambiarTamanioCardAvanceReducer = () => (dispatch) => {
    let tamanioAjustarSI = document.getElementById("Cont-CardRebate-SI");
    let tamanioAjustarSO = document.getElementById("Cont-CardRebate-SO");

    let tamanioSI = 0
    let tamanioSO = 0

    if(tamanioAjustarSI != null){
        tamanioSI = tamanioAjustarSI.clientHeight
    }

    if(tamanioAjustarSO != null){
        tamanioSO = tamanioAjustarSO.clientHeight
    }

    dispatch({
        type: CAMBIAR_TAMANIO_CARDAVANCE_VENTAS,
        payload : {
            "tamanioAvanceSI" : tamanioSI,
            "tamanioAvanceSO" : tamanioSO
        }
    })

}

export const ActivarModalDescargas = (estado) => (dispatch) => {

    dispatch({
        type : ACTIVAR_MODAL_DESCARGAS_VENTAS,
        payload: estado
    })  
}

export const CargandoDescargaSISOReducer = (loadingSI, loadingSO) => (dispatch) => {
    dispatch({
        type : CARGANDO_DESCARGA_SI,
        payload: loadingSI
    })

    dispatch({
        type : CARGANDO_DESCARGA_SO,
        payload: loadingSO
    })

    if(loadingSI == true){
        dispatch(ObtenerVentasSIDescargaEspecifica())
    }else if(loadingSO == true){
        dispatch(ObtenerVentasSODescargaEspecifica())
    }
}

export const ObtenerVentasSIDescargaEspecifica = () => async (dispatch, getState) => {

    // alert('descargarinfo')
    const {
        diaFiltroSelec,
        mesFiltroSelec,
        anoFiltroSelec
    } = getState().fechas
  
    const {
        sucursalesUsuario,
    } = getState().sucursales

    const {
        zonaidseleccionado,
        gsuidSeleccionado,
        casidSeleccionado
    } = getState().zonas

    const numeroDescargaSiSo = getState().ventasTpr.numeroDescargaSiSo
    let numeroDescargaSiSoAsignada = numeroDescargaSiSo + 1
    let buscarSo = true
    await dispatch({
        type: CAMBIAR_NUMERO_DESCARGA_SI_SO,
        payload: numeroDescargaSiSoAsignada
    })
  
    let objetoArray = [];
    let rebateBonus = [];
  
    await fetch(config.api+'ventas/descargar/especificos/si',
        {
            mode:'cors',
            method: 'POST',
            body: JSON.stringify({
                usutoken : localStorage.getItem('usutoken'),
                sucs     : sucursalesUsuario,
                dia      : diaFiltroSelec,
                mes      : mesFiltroSelec,
                ano      : anoFiltroSelec,

                zonid    : zonaidseleccionado,
                gsuid    : gsuidSeleccionado,
                casid    : casidSeleccionado
            }),
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json',
                'api_token': localStorage.getItem('usutoken'),
                'api-token': localStorage.getItem('usutoken'),
            }
        }
    )
    .then( async res => {
        await dispatch(estadoRequestReducer(res.status))
        return res.json()
    })
    .then(data => {
        const estadoRequest = getState().estadoRequest.init_request
        if(estadoRequest === true){
            if(data.respuesta === true){
                objetoArray = data.datos
                rebateBonus = data.rebateBonus

                const numeroDescargaSiSoActual = getState().ventasTpr.numeroDescargaSiSo
                if(numeroDescargaSiSoActual == numeroDescargaSiSoAsignada){
                    dispatch({
                        type: OBTENER_VENTAS_SI_DESCARGA_ESPECIFICA,
                        payload: objetoArray
                    })
    
                    dispatch({
                        type: OBTENER_VENTAS_SI_REBATE_BONUS_DESCARGA_ESPECIFICA,
                        payload: rebateBonus
                    })
                }else{
                    buscarSo = false
                }
            }else{
                
            }
        }
    }).catch((error)=> {
        console.log(error)    
    })

    if(buscarSo == true){
        dispatch(CargandoDescargaSISOReducer(false, true))
    }
}

export const ObtenerVentasSODescargaEspecifica = () => async (dispatch, getState) => {

    // alert('descargarinfo')
    const {
        diaFiltroSelec,
        mesFiltroSelec,
        anoFiltroSelec
    } = getState().fechas
  
    const {
        sucursalesUsuario,
    } = getState().sucursales
  
    let objetoArray = [];
  
    await fetch(config.api+'ventas/descargar/especificos/so',
        {
            mode:'cors',
            method: 'POST',
            body: JSON.stringify({
                usutoken : localStorage.getItem('usutoken'),
                sucs     : sucursalesUsuario,
                dia      : diaFiltroSelec,
                mes      : mesFiltroSelec,
                ano      : anoFiltroSelec,
            }),
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json',
                'api_token': localStorage.getItem('usutoken'),
                'api-token': localStorage.getItem('usutoken'),
            }
        }
    )
    .then( async res => {
        await dispatch(estadoRequestReducer(res.status))
        return res.json()
    })
    .then(data => {
        const estadoRequest = getState().estadoRequest.init_request
        if(estadoRequest === true){
            if(data.respuesta === true){
                objetoArray = data.datos
                dispatch({
                    type: OBTENER_VENTAS_SO_DESCARGA_ESPECIFICA,
                    payload: objetoArray
                })
            }else{
                dispatch({
                    type: OBTENER_VENTAS_SO_DESCARGA_ESPECIFICA,
                    payload: []
                })
            }
        }
    }).catch((error)=> {
        console.log(error)    
    })

    dispatch(CargandoDescargaSISOReducer(false, false))
}