import React, {Component} from 'react';
import './estilos/PromocionCarousel.scss'
import ImagenHover from 'components/Sistema/ImagenHover'
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
        productos, productosbonificados, index } = this.props.slide
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
            <Card style={{borderRadius:'20px', border:'1px solid #2ABEE0'}}>
                <Row>
                    <Col xl={24} md={24} sm={24} xs={24} >
                        <h1 className="gx-text-center" style={{color:'#2ABEE0'}}>50 Combos</h1>
                    </Col>
                    {
                        productos.map((producto, posicion) => {
                            return (
                                <Col xl={6} md={6}>
                                    <Row>
                                        <Col xl={24} md={24}>
                                            <br/>
                                        <div 
                                            style={{width:"90%", height:"100px", backgroundImage: "url("+producto.proimagen+")", backgroundSize: '100% 100%', backgroundRepeat:'no-repeat', backgroundPosition:'center'}} 
                                        />
                                        </Col>
                                        <Col xl={24} md={24} className="gx-text-center">
                                            <strong >11 HAF x120</strong>
                                            <br/><br/>
                                            <span>Planchas</span>
                                            <InputNumber 
                                                style={{border:'none', borderBottom:'1px solid #000',   background: 'transparent', textAlign:'center'}}
                                                className="gx-mb-3" 
                                                size="small" 
                                                min={1} max={100000} defaultValue={0}/>
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
                                            <span style={{color:'#F93258'}}>Gratis</span>
                                            <div 
                                                style={{width:"90%", height:"100px", backgroundImage: "url("+productoBonificado.proimagen+")", backgroundSize: '100% 100%', backgroundRepeat:'no-repeat', backgroundPosition:'center'}} 
                                            />
                                            <strong>{productoBonificado.pronombre}</strong>
                                        </Col>           
                                    )
                                })
                            }
                            <Col xl={24} md={24} sm={24} xs={24} className="gx-text-center">
                              <p style={{marginTop:'10px'}}>Valorizado<br/><b>S/35</b></p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={24} md={24} sm={24} xs={24} className="gx-text-center">
                      <Button 
                        style={{border:'1px solid #2ABEE0', color:'#2ABEE0', borderRadius:'25px'}} 
                        onClick={this.showConfirm}
                      >
                        Guardar
                      </Button>
                    </Col>
                </Row>
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
    const { slides, heading, seleccionarCategoria } = this.props 
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
                onClick={() => seleccionarCategoria(slide.scaid, posicion)}
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
                    slide={slide}
                    current={current}
                    handleSlideClick={this.handleSlideClick}
                    
                    seleccionado  = {slide.seleccionado}
                    nombre        = {slide.catnombre}
                    fondo         = {slide.catimagenfondo}
                    icono         = {slide.caticono}
                    colorhover    = {slide.catcolorhover}
                />
              </div>
            )
          })}
        </ul>
        
    
      </div>
    )
  }
}

export default PromocionesCarousel
// ReactDOM.render(<Slider heading="Example Slider" slides={slideData} />, document.getElementById('app'));