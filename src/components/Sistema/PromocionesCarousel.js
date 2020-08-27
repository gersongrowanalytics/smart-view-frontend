import React, {Component} from 'react';
import './estilos/PromocionCarousel.scss'
import ImagenHover from 'components/Sistema/ImagenHover'
import config from 'config'
import {Col, Row, Card, Button, InputNumber, Modal} from "antd";

// =========================
// Slide
// =========================
const confirm = Modal.confirm;

class Slide extends React.Component {
  constructor(props) {
    super(props)

    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleSlideClick = this.handleSlideClick.bind(this)
    this.imageLoaded = this.imageLoaded.bind(this)
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

  render() {
    const { 
        guardando, productos, productosbonificados, index } = this.props.slide

    const posicionPromocion = this.props.posicion
    const editarPromocion = this.props.editarPromocion

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
            <Card style={{borderRadius:'20px', border:'1px solid #2ABEE0', }}>
                <div style={{ 
                    position:'absolute', 
                    right:0, 
                    top:0,
                    marginRight:'20px', 
                    marginTop:'10px', 
                    background:'#FBB03B', 
                    paddingTop:'3px', 
                    paddingBottom:'3px', 
                    paddingLeft:'15px', 
                    paddingRight:'15px', 
                    borderRadius:'20px', 
                    color:'white', 
                    fontFamily:'roboto',
                    fontStyle:'normal',
                    fontWeight:'900',
                    lineHeight:'20px',
                    fontSize: '17px'
                  }}>
                  Completado
                  <img alt="" src={require("assets/images/estrellaCompletado.png")} width="30px" height="30px"/>
                </div>
                <Row>
                    <Col xl={24} md={24} sm={24} xs={24} className="gx-text-center" style={{marginBottom:'20px', marginTop:'25px'}} >
                        <span 
                          style={{
                            color:'#2ABEE0', 
                            fontFamily:'Roboto',
                            fontWeight:'900',
                            fontStyle:'normal',
                            fontSize:'47px',
                            lineHeight:'55px'
                          }}>
                              50 Combos
                              <br/>
                        </span>
                        <span 
                          style={{
                            color:'#FDA019',
                            fontFamily:'Roboto',
                            fontWeight:'900',
                            fontSize:'17px',
                            lineHeight:'20px',
                            fontStyle:'normal'
                          }}>
                        Sell In Bonificación</span>
                    </Col>
                    {
                        productos.map((producto, posicion) => {
                            return (
                                <Col xl={6} md={6}>
                                    <Row>
                                        <Col xl={24} md={24}>
                                          <br/>
                                          <img src={producto.proimagen} width="90%" height="100px"/>
                                          
                                        </Col>
                                        <Col xl={24} md={24} className="gx-text-center">
                                            <span id="txtProducto" >11 HAF x120</span>
                                        </Col>
                                    </Row>
                                </Col>
                            )
                        })
                    }
                    <Col xl={2} md={2} sm={2} xs={2} />
                    <Col xl={16} md={16}>
                        <Row>
                            {
                                productosbonificados.map((productoBonificado, posicion) => {
                                    return(
                                        <Col xl={8} md={8} className="gx-text-center">
                                            <span 
                                              className="txtGratis">
                                                Gratis</span>
                                            <div 
                                                style={{width:"90%", height:"100px", backgroundImage: "url("+productoBonificado.proimagen+")", backgroundSize: '100% 100%', backgroundRepeat:'no-repeat', backgroundPosition:'center'}} 
                                            />
                                            <span id="txtProducto">{productoBonificado.pronombre}</span>
                                        </Col>           
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
                <Row>
                <Col xl={6} md={6} className="gx-text-center" style={{marginTop:'10px'}}>      
                  <span  id="txtPlanchas">Planchas</span>
                  <InputNumber 
                      style={{border:'none', borderBottom:'1px solid #000',   background: 'transparent', textAlign:'center'}}
                      className="gx-mb-3" 
                      size="small" 
                      min={1} max={100000} defaultValue={0}/>
                </Col>
                <Col xl={2} md={2} sm={2} xs={2} />
                <Col xl={16} md={16} className="gx-text-center">
                  <p style={{marginTop:'10px'}} id="tituloValorizado">Valorizado<br/><b id="precioValorizado">S/35</b></p>
                </Col>
                <Col xl={24} md={24} sm={24} xs={24} className="gx-text-center" style={{marginTop:'10px'}}>
                  <Button 
                    id="txtBtnEditar"
                    onClick={() => editarPromocion(posicionPromocion)}
                  >
                    Editar
                  </Button>
                </Col>
                </Row>
                {
                  guardando == true
                  ?<div style={{background:'rgba(102,102,102,0.7)', width:'100%', height:'100%', position:'absolute', left:0, top:0, borderRadius:'20px'}}>
                    <div style={{background:'transparent', width:'100%', height:'100%', position:'absolute', left:0, top:0, borderRadius:'20px'}} onClick={() => editarPromocion(posicionPromocion)} />
                    <Row style={{alignItems:'center', width:'105%', height:'100%', justifyContent:'center'}}>
                      <Card style={{  background:'#2BBEE0', border:'none', width:'45%', borderRadius:'20px', textAlign:'center' }}>
                        <span id="tituloConfirmacion" >¿Desea guardar los cambios?<br/></span>
                        <div style={{marginTop:'15px'}} />
                        <span style={{color:'white', fontSize:'14px'}} id="descripcionConfirmacion">Esta opción se activará al cierre del mes<br/></span>
                        <Button 
                          style={{border:'1px solid #fff', color:'white', borderRadius:'25px', background:'transparent', marginTop:'15px'}} 
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
        cambiando : false
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

  render() {
    const { current, direction } = this.state
    const { slides, heading, editarPromocion } = this.props 
    const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`
    const wrapperTransform = {
      'transform': `translateX(-${current * (100 / slides.length)}%)`
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
                        this.setState({
                            cambiando : true
                        })

                        if(posicion == 0 && posicion == current){
                            setTimeout(() => {
                                this.setState({
                                    cambiando : false
                                })
                            }, 500);
                        }else if(posicion == current+1  ){
                            this.seleccionarEspecifico(current)
                            setTimeout(() => {
                                this.setState({
                                    cambiando : false
                                })
                            }, 500);
                        }else if(posicion > current){
                            setTimeout(() => {
                                this.handleNextClick();
                                this.setState({
                                    cambiando : false
                                })
                            }, 500);
                        }else if(posicion < current){
                            setTimeout(() => {
                                this.handlePreviousClick();
                                this.setState({
                                    cambiando : false
                                })
                            }, 500);
                        }else{
                            setTimeout(() => {
                                this.setState({
                                    cambiando : false
                                })
                            }, 500);
                        }
                    }
                }}
              >
                <Slide
                    key={posicion}
                    posicion = {posicion}
                    slide={slide}
                    current={current}
                    handleSlideClick={this.handleSlideClick}
                    seleccionado    = {slide.seleccionado}
                    editarPromocion = {editarPromocion}
                />
              </div>
            )
          })}


          {/* ----------------------------------- */}
          
          <div
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
                      widows:'100%',
                      height:'77%'
                    }}>
                      <Row className="gx-text-center" style={{width:'100%', height:'100%', marginTop:'5%'}}>
                        <Col xl={18} md={18}>
                          <span id="felicidades">¡Felicidades!</span>
                        </Col><Col xl={6} md={6} />
                        <Col xl={18} md={18}>
                          <img alt="" src={require("assets/images/estrellas.png")} />
                        </Col><Col xl={6} md={6} />
                        <Col xl={2} md={2} />
                        <Col xl={15} md={15}>
                          <span id="decripcionFelicidades">100%</span>
                        </Col><Col xl={7} md={7} />
                        <Col xl={1} md={1} />
                        <Col xl={15} md={15}>
                          <span id="decripcionFelicidades">Terminaste con éxito registrar tu cierre de mes</span>
                        </Col><Col xl={7} md={7} />
                      </Row>
                  </Card>
              </div>
            </li>        
          </div>

          {/* <div
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
                      widows:'100%',
                      height:'77%'
                    }}>
                      <Row className="gx-text-center" style={{width:'100%', height:'100%', marginTop:'20%'}}>
                        <Col xl={18} md={18}>
                          <span style={{color:'white', fontWeight:'500', fontSize:'38px'}}>¡Ups!</span>
                        </Col><Col xl={6} md={6} />
                        <Col xl={1} md={1} />
                        <Col xl={14} md={14}>
                          <span style={{color:'white', fontWeight:'500', fontSize:'24px'}}>Tu cierre está a un 70% al parecer no has terminado de registrar todo.</span>
                        </Col><Col xl={7} md={7} />
                      </Row>
                  </Card>
              </div>
            </li>        
          </div> */}
        </ul>
        
    
      </div>
    )
  }
}

export default PromocionesCarousel
// ReactDOM.render(<Slider heading="Example Slider" slides={slideData} />, document.getElementById('app'));