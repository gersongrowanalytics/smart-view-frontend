import React from "react";
import Auxiliary from "util/Auxiliary";
import { Form, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {CambiarValorInputReducer} from "appRedux/actions/Perfil/Perfil";

const AcercaDeItem = ({data}) => {
  const {title, icon, desc, userList, editarPerfil, name} = data;
  const dispatch = useDispatch();

  return (
    <Auxiliary>
      <div className="gx-media gx-flex-nowrap gx-mt-3 gx-mt-lg-4 gx-mb-2">
        <div className="gx-mr-3">
          <i className={`icon icon-${icon} gx-fs-xlxl gx-text-orange`}/>
        </div>
        <div className="gx-media-body">
          <h6 className="gx-mb-1 gx-text-grey">{title}</h6>
          {userList === '' ? null : userList}
          {
            editarPerfil == true
            ? name == "usucontrasena"
              ?<Input.Password placeholder="" autoComplete={"off"} style={{marginLeft:'0px', width:'200px'}} onChange={(valor) => {dispatch(CambiarValorInputReducer(name, valor.target.value))}} />
              :<Input placeholder={name == "perfechanacimiento"? "YYYY/MM/DD" : ""} defaultValue={name === "perfechanacimiento"? "YYYY/MM/DD" : desc} autoComplete={"off"} style={{marginLeft:'0px', width:'200px'}} onChange={(valor) => {dispatch(CambiarValorInputReducer(name, valor.target.value))}} />
            :desc === '' ? null : <p className="gx-mb-0">{desc}</p>
          }
        </div>
      </div>
    </Auxiliary>
  );
};

export default AcercaDeItem;

