import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import Settings from "./Settings";
import Auth from "./Auth";
import Notes from "./Notes";
import Contact from "./Contact";
import Common from "./Common";
import EstadoRequest from "./EstadoRequest";
import Sucursales from "./Sucursales";
import Fechas from "./Fechas";
import VentasTpr from "./VentasTpr";
import Promociones from "./Promociones";
import CargaArchivos from "./CargaArchivos";
import Tutorial from "./Tutorial";
import ConfiguracionUsuarios from "./Configuracion/Usuarios";
import ConfiguracionRebate from "./Configuracion/Rebate";

const createRootReducer = (history) => combineReducers({
  router                : connectRouter(history),
  settings              : Settings,
  auth                  : Auth,
  notes                 : Notes,
  contact               : Contact,
  common                : Common,
  estadoRequest         : EstadoRequest,
  sucursales            : Sucursales,
  fechas                : Fechas,
  ventasTpr             : VentasTpr,
  promociones           : Promociones,
  cargaArchivos         : CargaArchivos,
  tutorial              : Tutorial,
  configuracionUsuario  : ConfiguracionUsuarios,
  configuracionRebate   : ConfiguracionRebate
});

export default createRootReducer
