import React from 'react'
import {Modal, Button} from "antd"
import { CloseOutlined } from '@ant-design/icons';
import './ModalInformativo.css'
import {
    abrirCerrarModalInformativoPromociones} from 'appRedux/actions/Promociones'
import {useDispatch, useSelector} from "react-redux";
import config from 'config'

const ModalInformativo = () => {

    const dispatch = useDispatch();
    const {mostrarModalInformativo} = useSelector(({promociones}) => promociones);


    return (
        <Modal
            width={850}
            height = {406}
            title={null}
            visible={mostrarModalInformativo}
            footer = {null}
            closeIcon = {
                <Button
                    style={{background:'#30BEEB', border:'none', marginTop:'10px', marginRight:'5px'}}
                    shape="circle" 
                    icon={<CloseOutlined style={{"color" : 'white'}} />} 
                    onClick={() => dispatch(abrirCerrarModalInformativoPromociones(!mostrarModalInformativo))}
                >
                </Button>
            }
            bodyStyle   = {{backgroundImage: `url(${config.api}Sistema/abs/img/importantev2.png)`, backgroundSize: '100% 100%', backgroundRepeat:'no-repeat', borderRadius:'20px'}}
        >
            <div id="contenedorModal">
                <h1 id="txt_tituloModal">IMPORTANTE</h1><br/>
                <div id="txt_contenidoModal">
                    Estimado Cliente,<br/><br/>
                    Les informamos que a través de este portal se les comunicará de manera mensual las tácticas promocionales con el número de combos e inversión dineraria que ha sido aprobada por actividad y monto máximo para cada mecánica. Dichos montos,  no podrán ser excedidos de no recibir una aprobación formal del área de Trade y posterior actualización en este portal; . Bajo ningún supuesto o circunstancia, el ejecutivo comercial podrá ofrecer y mucho menos aprobar acciones adicionales<br/><br/>
                    Finalmente, les recordamos que los pagos se realizarán a través de notas de crédito, las mismas que será aprobadas una vez compartido el cierre de sus ventas hasta el quinto día hábil del siguiente mes y pagadas el siguiente mes. el cierre de ventas no es enviado dentro del plazo establecido, Kimberly- Clark Perú se encontrará facultado postergar el pago hasta dos meses posteriores a la ejecución de  las tácticas promocionales.<br/><br/>
                    Saludos,
                </div>
            </div>
        </Modal>
    )
}

export default ModalInformativo
