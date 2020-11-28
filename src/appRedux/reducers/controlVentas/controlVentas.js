import {
    OBTENER_ESTADISTICA_XZONA
} from "constants/SistemaTypes";

const INIT_STATE = {
    listaControlArchivos : [],
    columnasTablaControlArchivo  : [],
    controlventas_estadistica_xzona : {
        "type": "serial",
        "addClassNames": true,
        "theme": "light",
        "autoMargins": false,
        "marginLeft": 30,
        "marginRight": 8,
        "marginTop": 10,
        "marginBottom": 26,
        "balloon": {
            "adjustBorderColor": false,
            "horizontalPadding": 10,
            "verticalPadding": 8,
            "color": "#ffffff"
        },

        "dataProvider": [
            {zona: "zona", real: "10", objetivo: "20"},
            {zona: "zona2", real: "10", objetivo: "20"},
            {zona: "zona3", real: "10", objetivo: "20"},
            {zona: "zona4", real: "10", objetivo: "20"},
            {zona: "zona5", real: "10", objetivo: "20"},
            {zona: "zona6", real: "10", objetivo: "20"},
            {zona: "zona7", real: "10", objetivo: "20"},
            {zona: "zona8", real: "10", objetivo: "20"},
            {zona: "zona9", real: "10", objetivo: "20"},
            {zona: "zona10", real: "10", objetivo: "20"},
            {zona: "zona11", real: "10", objetivo: "20"},
            {zona: "zona12", real: "10", objetivo: "20"},
            {zona: "zona13", real: "10", objetivo: "20"},
            {zona: "zona14", real: "10", objetivo: "20"},
            {zona: "zona15", real: "10", objetivo: "20"},
            {zona: "zona16", real: "10", objetivo: "20"},
            {zona: "zona", real: "10", objetivo: "20"},
            {zona: "zona", real: "10", objetivo: "20"},
            {zona: "zona", real: "10", objetivo: "20"},
            {zona: "zona", real: "10", objetivo: "20"},
            {zona: "zona", real: "10", objetivo: "20"},
            {zona: "zona", real: "10", objetivo: "20"},
            {zona: "zona", real: "10", objetivo: "20"},
            {zona: "zona", real: "10", objetivo: "20"},
        ],
        "valueAxes": [{
            "axisAlpha": 0,
            "position": "left"
        }],
        "startDuration": 1,
        "graphs": [{
            "alphaField": "alpha",
            "balloonText": "<span style='font-size:12px;'>REAL:<br/>[[value]]</span>",
            "fillAlphas": 1,
            "title": "REAL",
            "type": "column",
            "valueField": "real",
            "dashLengthField": "dashLengthColumn"
        }, {
            "id": "graph2",
            "balloonText": "<span style='font-size:12px;'>OBJETIVO: <br/>[[value]]</span>",
            "bullet": "round",
            "lineThickness": 3,
            "bulletSize": 7,
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "useLineColorForBulletBorder": true,
            "bulletBorderThickness": 3,
            "fillAlphas": 0,
            "lineAlpha": 1,
            "title": "OBJETIVO",
            "valueField": "objetivo",
            "dashLengthField": "dashLengthLine"
        }],
        "categoryField": "zona",
        "categoryAxis": {
            "gridPosition": "start",
            "axisAlpha": 0,
            "tickLength": 0
        },
        "export": {
            "enabled": false
        }
    }
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case OBTENER_ESTADISTICA_XZONA: {
            return {
                ...state,
                controlventas_estadistica_xzona : action.payload
            }
        }
    default:
        return state;
    }
}