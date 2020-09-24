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
                <h1 id="txt_tituloModal">PROMOCIONES</h1><br/>
                <div id="txt_contenidoModal">
                    Por el presente correo, cumplo con informarle las tácticas promocionales para este mes con el número de combos/soles a reconocer por actividad y monto máximo de reconocimiento en valor por actividad respectivos por cada mecánica. Dichos montos no podrán excederse de no recibir una aprobación formal del área de Trade copiando al buzón _KC, Cuida tu negocio (Cuidatunegocio.kc@kcc.com), dejando claro que yo como ejecutivo no podré aprobar acciones adicionales sin antes pasar por las aprobaciones respectivas.<br/><br/>
                    Recordar que estos pagos serán vía notas de crédito, una vez compartido su cierre de ventas hasta el día 5 hábil del siguiente mes y se pagarán vía Notas de Crédito en el mismo siguiente mes. Si no envía el cierre dentro del plazo establecido, no se le pagará las tácticas promocionales dentro del próximo mes, sino un mes después de esto.<br/><br/>
                    De acuerdo a la nueva política de KC pongo en copia al correo interno _KC, Cuida tu negocio (Cuidatunegocio.kc@kcc.com), y estas acciones entran en validez desde la fecha 01 de Septiembre hasta fin de mes.
                </div>
            </div>
        </Modal>
    )
}

export default ModalInformativo
