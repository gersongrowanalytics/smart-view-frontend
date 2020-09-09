import React from 'react';
import './estilos/PromocionCarousel.scss'
import {Col, Row, Card, Button, Modal} from "antd";
import funFomratoDecimal from '../../funciones/funFormatoDecimal.js'


// =========================
// Slide
// =========================
const confirm = Modal.confirm;

class Slide extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editando : false,
      inputPlanchas : this.props.slide.cspplanchas,
      txtValorizado : this.props.slide.cspvalorizado
    }
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleSlideClick = this.handleSlideClick.bind(this)
    this.imageLoaded = this.imageLoaded.bind(this)
    this.obtenerValorizado = this.obtenerValorizado.bind(this)
    this.slide = React.createRef()
  }
  
  handleMouseMove(event) {
    const el = this.slide.current
    const r = el.getBoundingClientRect()

    el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)))
    el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)))
  }
  
  handleMouseLeave(event) {    
    this.slide.current.style.setProperty('--x', 0)
    this.slide.current.style.setProperty('--y', 0)
  }
  
  handleSlideClick(event) {
    this.props.handleSlideClick(this.props.slide.index)
  }
  
  imageLoaded(event) {
    event.target.style.opacity = 1
  }



  // MODAL

  showConfirm() {
    confirm({
      title: '¿Desea guardar los cambios?',
      content: 'Esta opción se activará al cierre del mes',
      onCancelar() {
        console.log('Cancelar');
      },
      onAceptar(){

      }
    });
  }

  obtenerValorizado(e){
    let nuevoValor = parseInt(e.target.value)
    this.setState({
      inputPlanchas : nuevoValor
    })

    if(nuevoValor <= this.props.slide.cspcantidadplancha){
      let nuevoValorizado = nuevoValor*this.props.slide.csptotalplancha
      this.setState({
        txtValorizado : nuevoValorizado
      })
    }else{
      let nuevoValorizado = this.props.slide.cspcantidadplancha*this.props.slide.csptotalplancha
      this.setState({
        txtValorizado : nuevoValorizado
      })
    }

  }

  render() {
    const { 
      guardando, productos, productosbonificados, index,
      cspcantidadcombo,
      cspcompletado,
      cspplanchas,
      cspvalorizado
    } = this.props.slide

    const posicionPromocion = this.props.posicion
    const editarPromocion = this.props.editarPromocion
    const colorSeleciconadoPromo = this.props.colorSeleciconadoPromo
    const current = this.props.current
    let classNames = 'slidePromocion'
    
    if (current === index) classNames += ' slide--currentPromocion'
    else if (current - 1 === index) classNames += ' slide--previous'
    else if (current + 1 === index) classNames += ' slide--next'
        
    return (
      <li 
        ref={this.slide}
        className={classNames} 
        // onClick={this.handleSlideClick}
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="slide__image-wrapperPromocion">
            <Card style={{
              borderRadius:'20px',
              width:'385px',
              height: '250px',
              border:'1px solid '+colorSeleciconadoPromo, 
            }}>
              {
                cspcompletado == true
                ?<div id="insigniaCompletado">
                  Completado
                  <img alt="" src={require("assets/images/estrellaCompletado.png")} width="25px" height="25px"/>
                </div>
                :null
              }
                <Row>
                    <Col xl={24} md={24} sm={24} xs={24} className="gx-text-center" style={{marginBottom:'20px', marginTop:'0px'}} >
                        <span 
                          id="tituloCombos"
                          style={{
                            color:colorSeleciconadoPromo, 
                          }}>
                            {funFomratoDecimal(cspcantidadcombo, 0)} Combos
                              <br/>
                        </span>
                        <span 
                          id="tituloVenta">
                        Sell In Bonificación</span>
                    </Col>
                    {
                        productos.map((producto, posicion) => {
                            return (
                                posicion == 0
                                ?<Col xl={11} md={11} sm={11} xs={11}>
                                    <Row className="gx-text-center">
                                        <Col xl={24} md={24}>
                                          <img src={producto.proimagen} width="105px" height="59px"/>
                                          
                                        </Col>
                                        <Col xl={24} md={24} className="gx-text-center">
                                            <div id="txtProducto" >{producto.prpproductoppt}<br/></div>
                                            <div id="txtSubProducto" title={producto.prpcomprappt}>
                                              {
                                                producto.prpcomprappt.substr(0, 25)
                                              }
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                :null
                            )
                        })
                    }
                    <Col xl={2} md={2} sm={2} xs={2} />
                    <Col xl={11} md={11} sm={11} xs={11}>
                        <Row>
                            {
                                productosbonificados.map((productoBonificado, posicion) => {
                                    return(
                                      posicion == 0
                                        ?<Col xl={24} md={24} className="gx-text-center" style={{marginTop:'-20px'}}>
                                            <span 
                                              className="txtGratis">
                                                Gratis</span><br/>
                                            <img src={productoBonificado.proimagen} width="105px" height="59px"/>
                                            {/* <div 
                                                style={{'width':"105px", 'height':"59px", backgroundImage: "url("+productoBonificado.proimagen+")", backgroundSize: '100% 100%', backgroundRepeat:'no-repeat', backgroundPosition:'center'}} 
                                            /> */}
                                            <div id="txtProducto" >{productoBonificado.prbproductoppt}<br/></div>
                                            <div id="txtSubProducto" title={productoBonificado.prbcomprappt}>
                                              {productoBonificado.prbcomprappt.substr(0, 25)}
                                            </div>
                                          </Col>           
                                        :null
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
                <Row>
                <Col xl={11} md={11} sm={11} xs={11} className="gx-text-center" >
                  <p 
                    id="txtPlanchas"
                  >
                    Planchas<br/>
                    {
                      this.state.editando == true
                      ?<input 
                        id="inputPlanchas" 
                        type="number"
                        value={this.state.inputPlanchas}
                        onChange={this.obtenerValorizado}
                      />
                      :<div id="inputPlanchasBloqueado">
                        {cspplanchas}
                      </div>
                    }
                  </p>
                  {/* <InputNumber 
                      style={{border:'none', borderBottom:'1px solid #000',   background: 'transparent', textAlign:'center'}}
                      className="gx-mb-3" 
                      size="small" 
                      min={1} max={100000} defaultValue={0}/> */}
                </Col>
                <Col xl={2} md={2} sm={2} xs={2} />
                <Col xl={11} md={11} sm={11} xs={11} className="gx-text-center">
                  <p  id="tituloValorizado">Valorizado<br/>
                  <b id="precioValorizado">S/{funFomratoDecimal(this.state.txtValorizado, 2)}</b></p>
                </Col>
                <Col xl={24} md={24} sm={24} xs={24} className="gx-text-center" style={{marginTop:'0'}}>
                  <Button 
                    id="txtBtnEditar"
                    style={{background: colorSeleciconadoPromo}}
                    onClick={() => {
                      if(this.state.editando == false){
                        this.setState({
                          editando : true
                        })
                      }else{
                        editarPromocion(posicionPromocion)
                      }
                    }}
                  >
                    Calcular
                  </Button>
                </Col>
                </Row>
                {
                  guardando == true
                  ?<div style={{background:'rgba(102,102,102,0.7)', width:'100%', height:'100%', position:'absolute', left:0, top:0, borderRadius:'20px'}}>
                    <div style={{background:'transparent', width:'100%', height:'100%', position:'absolute', left:0, top:0, borderRadius:'20px'}} onClick={() => editarPromocion(posicionPromocion)} />
                    <Row style={{alignItems:'center', width:'105%', height:'100%', justifyContent:'center'}}>
                      <Card style={{  background:'#2BBEE0', border:'none', width:'170px', height:'150px', borderRadius:'20px', textAlign:'center' }}>
                        <span id="tituloConfirmacion" >¿Desea guardar los cambios?</span>
                        <div style={{marginTop:'3px'}} />
                        <span style={{color:'white'}} id="descripcionConfirmacion">Esta opción se activará al cierre del mes<br/></span>
                        <Button 
                          id="btnEditar"
                          style={{border:'1px solid #fff', color:'white', borderRadius:'25px', background:'transparent'}} 
                          onClick={() => editarPromocion(posicionPromocion)}
                        >
                          Aceptar
                        </Button>
                      </Card>
                    </Row>
                  </div>
                  :null
                }

                {/* <div style={{alignContent:'center', alignItems:'center', justifyItems:'center', }}>
                    <div style={{ width:'100px', height:'100px', background:'blue',}} >
                      <div style={{}} />
                    </div>
                  </div> */}
                <div id="ultimaColumnaCarouselPromocion"></div>
            </Card> 
        </div>
      </li>
    )
  }
}



// =========================
// Slider
// =========================

class PromocionesCarousel extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = { 
        current: 0,
        cambiando : false,

        activarCarouselAvanzar : false,
        activarCarouselRetroceder : false,
        actualizarPosicionCarouselPequeno : false
    }
    this.handlePreviousClick = this.handlePreviousClick.bind(this)
    this.handleNextClick = this.handleNextClick.bind(this)
    this.handleSlideClick = this.handleSlideClick.bind(this)
    this.seleccionarEspecifico = this.seleccionarEspecifico.bind(this)
  }
  
  handlePreviousClick() {
    const previous = this.state.current - 1
        
    this.setState({ 
      current: (previous < 0) 
        ? this.props.slides.length - 1
        : previous
    })
  }

  seleccionarEspecifico(nuevo) {
    
    this.setState({ 
      current : nuevo
    })
  }
  
  handleNextClick() {
    const next = this.state.current + 1;
    
    this.setState({ 
      current: (next === this.props.slides.length) 
        ? 0
        : next
    })
  }
  
  handleSlideClick(index) {
    if (this.state.current !== index) {
      this.setState({
        current: index
      })
    }
  }

  funActivarCarouselAvanzar(){
    if(this.state.activarCarouselAvanzar == false){
      this.setState({
        activarCarouselAvanzar : true
      })
    }
  }

  funActicarCarouselRetroceder(){
    if(this.state.activarCarouselRetroceder == false){
      this.setState({
        activarCarouselRetroceder : true
      })
    }
  }

  funDesactivarCarousel(){
    if(this.state.activarCarouselAvanzar == true){
      this.setState({
        activarCarouselAvanzar : false
      })
    }

    if(this.state.activarCarouselRetroceder == true){
      this.setState({
        activarCarouselRetroceder : false
      })
    }
  }

  render() {
    const { current, direction, seleccionoPromocion } = this.state
    const { slides, heading, editarPromocion, colorSeleciconadoPromo, porcentaje } = this.props 
    const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`
    const wrapperTransform = {
      'transform': `translateX(-${current * (100 / slides.length)}%)`
    }
    

    if(this.state.activarCarouselAvanzar == true){
      if(slides.length > 3){
        setTimeout(() => {
          if(this.state.activarCarouselAvanzar == true){
            if(this.state.current <= slides.length - 3){
              this.setState({
                current: this.state.current+0.1
              })
            }
          }
        }, 105);
      }
    }

    if(this.state.activarCarouselRetroceder == true){
      if(this.state.current < 0){
        this.setState({
          current: 0,
          activarCarouselRetroceder : false
        })
      }
      setTimeout(() => {
        if(this.state.activarCarouselRetroceder == true){
          if(this.state.current >= 0){
            this.setState({
              current: this.state.current-0.1
            })
          }else{
            this.setState({
              current: 0
            })
          }
        }
      }, 105);
    }

    return (
      <div className='sliderPromocion' aria-labelledby={headingId}>
        <ul className="slider__wrapper_promocion" style={wrapperTransform}>
          <h3 id={headingId} class="visuallyhiddenPromocion">{heading}</h3>
          
          {slides.map((slide, posicion) => {
            return (
              <div
                // onClick={() => seleccionarCategoria(slide.scaid, posicion)}
                // style={{marginTop:'20px'}}
                onMouseEnter={() => {
                    if(this.state.cambiando == true){

                    }else{
                        // this.setState({
                        //     cambiando : true
                        // })

                        // if(posicion == 0 && posicion == current){
                        //     setTimeout(() => {
                        //         this.setState({
                        //             cambiando : false
                        //         })
                        //     }, 500);
                        // }else if(posicion == current+1  ){
                        //     this.seleccionarEspecifico(current)
                        //     setTimeout(() => {
                        //         this.setState({
                        //             cambiando : false
                        //         })
                        //     }, 500);
                        // }else if(posicion > current){
                        //     setTimeout(() => {
                        //         this.handleNextClick();
                        //         this.setState({
                        //             cambiando : false
                        //         })
                        //     }, 500);
                        // }else if(posicion < current){
                        //     setTimeout(() => {
                        //         this.handlePreviousClick();
                        //         this.setState({
                        //             cambiando : false
                        //         })
                        //     }, 500);
                        // }else{
                        //     setTimeout(() => {
                        //         this.setState({
                        //             cambiando : false
                        //         })
                        //     }, 500);
                        // }
                    }
                }}
              >
                <Slide
                    key                    = {posicion}
                    posicion               = {posicion}
                    slide                  = {slide}
                    current                = {current}
                    handleSlideClick       = {this.handleSlideClick}
                    seleccionado           = {slide.seleccionado}
                    editarPromocion        = {editarPromocion}
                    colorSeleciconadoPromo = {colorSeleciconadoPromo}
                />
              </div>
            )
          })}


          {/* ----------------------------------- */}
          {/* {
            porcentaje == 100
            ?<div
              onMouseEnter={() => {
              }}
            >
              <li 
                className={"slidePromocion"} 
              >
                <div className="slide__image-wrapperPromocion">
                    <Card 
                      style={{
                        borderRadius:'20px', 
                        backgroundImage: "url("+config.api+"Sistema/abs/img/cierreCompleto.png"+")", 
                        backgroundSize: '100% 100%', 
                        backgroundRepeat:'no-repeat', backgroundPosition:'center',
                        width:'385px',
                        height:'250px'
                      }}>
                        <Row className="gx-text-center" style={{width:'100%', height:'100%', marginTop:'5%'}}>
                          <Col xl={18} md={18}>
                            <span id="felicidades">¡Felicidades!</span>
                          </Col><Col xl={6} md={6} />
                          <Col xl={2} md={2} />
                          <Col xl={15} md={15}>
                            <span id="decripcionFelicidades">{porcentaje}%</span>
                          </Col><Col xl={7} md={7} />
                          <Col xl={18} md={18}>
                            <img alt="" src={require("assets/images/estrellas.png")} />
                          </Col><Col xl={6} md={6} />
                          <Col xl={1} md={1} />
                          <Col xl={15} md={15}>
                            <span id="decripcionFelicidades">Terminaste con éxito registrar tu cierre de mes</span>
                          </Col><Col xl={7} md={7} />
                        </Row>
                    </Card>
                </div>
              </li>
            </div>
            :<div
              onMouseEnter={() => {
              }}
            >
              <li 
                className={"slidePromocion"} 
              >
                <div className="slide__image-wrapperPromocion">
                    <Card 
                      style={{
                        borderRadius:'20px', 
                        backgroundImage: "url("+config.api+"Sistema/abs/img/cierreIncompleto.png"+")", 
                        backgroundSize: '100% 100%', 
                        backgroundRepeat:'no-repeat', backgroundPosition:'center',
                        width:'385px',
                        height:'250px'
                      }}>
                        <Row className="gx-text-center" style={{width:'100%', height:'100%', marginTop:'18%'}}>
                          <Col xl={15} md={15}>
                            <span id="upsPromocionHover" >¡Ups!</span>
                          </Col><Col xl={9} md={9} />
                          <Col xl={14} md={14} style={{marginTop:'10px'}}>
                            <span id="tuCierrePromocionHover">Tu cierre está a un {porcentaje}% al parecer no has terminado de registrar todo.</span>
                          </Col><Col xl={7} md={7} />
                        </Row>
                    </Card>
                </div>
              </li>
            </div>
          } */}
        </ul>
        <div 
          className   = "minorista"
          style       = {{ 
            background: colorSeleciconadoPromo, 
          }}
        >
          <div id="txtcanal"> {this.props.nombreCanal} </div>
            
        </div>
        <div className='contenedorSliderPromocion'>
            <div 
              onMouseLeave={() =>{
                this.funDesactivarCarousel()
              }}
              onMouseEnter={() => {
                this.funActicarCarouselRetroceder()
              }} 
              id="primeraMitadSliderPromocion" ></div>
            <div
              onMouseLeave={() =>{
                this.funDesactivarCarousel()
              }}
              onMouseEnter={() => {
                this.funActivarCarouselAvanzar()
              }} 
              id="segundaMitadSliderPromocion" >

              </div>
          </div>
    
      </div>
    )
  }
}

export default PromocionesCarousel
// ReactDOM.render(<Slider heading="Example Slider" slides={slideData} />, document.getElementById('app'));