import React, {useEffect} from 'react'
import {Card, Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {obtenerEjecutivosReducer} from 'appRedux/actions/Configuracion/Usuarios'

const columns = [
    {title: 'Tipo de Usuario', dataIndex: 'tipoUsuario', key: 'tipoUsuario'},
    {title: 'Nombre Completo', dataIndex: 'nombre', key: 'nombre'},
    {title: 'Usuario', dataIndex: 'usuario', key: 'usuario'},
    {title: 'Contraseña', dataIndex: 'contrasena', key: 'contrasena'},
    {title: 'Correo', dataIndex: 'correo', key: 'correo'},
    {title: 'Acciones', dataIndex: '', key: 'x', render: () => <span className="gx-link">Editar</span>},
];
  
const data = [
    {
        key: 1,
        tipoUsuario : "Ejecutivo",
        nombre: 'LEONEL PALACIOS',
        age: 32,
        correo: '',
        description: <ul><li>DISTRIBUCIONES Y REPRESENTACIONES K</li><li>DESPENSA PERUANA S.A</li></ul>
    },
];

const TablaEjecutivos = () => {

    const dispatch = useDispatch();
    const {} = useSelector(({configuracionUsuario}) => configuracionUsuario);

    useEffect(() => {
        dispatch(obtenerEjecutivosReducer());
    }, [])

    return (
        <>
            <Card title="Lista de Ejecutivos">
                <Table className="gx-table-responsive"
                    columns={columns}
                    expandedRowRender={record => <div style={{margin: 0}}>{record.description}</div>}
                    dataSource={data}
                />
            </Card>
        </>
    )
}

export default TablaEjecutivos
