import React from 'react'
import {Card, Table} from "antd";

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
    // {
    //     key: 2,
    //     name: 'Jim Green',
    //     age: 42,
    //     address: 'London No. 1 Lake Park',
    //     description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
    // },
    // {
    //     key: 3,
    //     name: 'Joe Black',
    //     age: 32,
    //     address: 'Sidney No. 1 Lake Park',
    //     description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
    // },
];

const TablaEjecutivos = () => {
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
