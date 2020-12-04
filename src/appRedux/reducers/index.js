import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import Settings from "./Settings";
import Auth from "./Auth";
import Notes from "./Notes";
import Contact from "./Contact";
import Common from "./Common";
import EstadoRequest from "./EstadoRequest";
import Sucursales from "./Sucursales";
import Zonas from "./Zonas";
import Fechas from "./Fechas";
import VentasTpr from "./VentasTpr";
import Promociones from "./Promociones";
import CargaArchivos from "./CargaArchivos";
import Tutorial from "./Tutorial";
import ConfiguracionUsuarios from "./Configuracion/Usuarios";
import ConfiguracionRebate from "./Configuracion/Rebate";
import ConfiguracionTiposUsuarios from "./Configuracion/TiposUsuarios";
import MostrarTdis from "./Mostrar/Tdis";
import MostrarTpus from "./Mostrar/Tpus";
import MostrarZons from "./Mostrar/Zons";
import controlCargaArchivos from "./controlCargaArchivos/controlCargaArchivos";
import controlVentas from "./controlVentas/controlVentas";
import MostrarSucs from "./Mostrar/Sucs";
import MostrarCats from "./Mostrar/Cats";
import ControlPromociones from "./controlPromociones/controlPromociones";

const createRootReducer = (history) => combineReducers({
  router                     : connectRouter(history),
  settings                   : Settings,
  auth                       : Auth,
  notes                      : Notes,
  contact                    : Contact,
  common                     : Common,
  estadoRequest              : EstadoRequest,
  sucursales                 : Sucursales,
  zonas                      : Zonas,
  fechas                     : Fechas,
  ventasTpr                  : VentasTpr,
  promociones                : Promociones,
  cargaArchivos              : CargaArchivos,
  tutorial                   : Tutorial,
  configuracionUsuario       : ConfiguracionUsuarios,
  configuracionRebate        : ConfiguracionRebate,
  configuracionTiposUsuarios : ConfiguracionTiposUsuarios,
  mostrarTdis                : MostrarTdis,
  mostrarTpus                : MostrarTpus,
  mostrarZons                : MostrarZons,
  controlCargaArchivos       : controlCargaArchivos,
  controlVentas              : controlVentas,
  mostrarSucs                : MostrarSucs,
  controlPromociones         : ControlPromociones,
  mostrarCats                : MostrarCats,
});

export default createRootReducer
