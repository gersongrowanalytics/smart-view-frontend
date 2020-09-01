import React, {Component} from 'react';
import './CategoriasCarousel.scss'
import {Col, Row, Card, Button, InputNumber} from "antd";
import CardImagen from 'components/Sistema/CardImagen'

// =========================
// Slide
// =========================

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
  
  render() {
    const { 
        catnombre,
        caticono,
        catimagenfondo,
        scavalorizadoobjetivo,
        scavalorizadoreal,
        scavalorizadotogo,
        index
    } = this.props.slide
    const current = this.props.current
    let classNames = 'slideCategoria'
    
    if (current === index) classNames += ' slide--currentCategoria'
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
        <div className="slide__image-wrapperCategoria">
            {/* <Col xl={6} md={8} sm={12} xs={24}> */}
            <CardImagen 
                nombreCategoria     = {catnombre}
                iconoCategoria      = {caticono}
                fondoCategoria      = {catimagenfondo}
                objetivoCategoria   = {scavalorizadoobjetivo}
                realCategoria       = {scavalorizadoreal}
                togoCategoria       = {scavalorizadotogo}
                tprcolorbarra       = {this.props.tprcolorbarra}
                tprcolortooltip     = {this.props.tprcolortooltip}
            />
            {/* </Col> */}
        </div>
      </li>
    )
  }
}



// =========================
// Slider
// =========================

class CategoriasCaoursel extends React.Component {
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
    const { slides, heading, seleccionarCategoria, tprcolorbarra, tprcolortooltip } = this.props 
    const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`
    const wrapperTransform = {
      'transform': `translateX(-${current * (100 / slides.length)}%)`
    }
    
    return (
      <div className='sliderCategoria' aria-labelledby={headingId} style={{marginBottom:'150px'}}>
        <ul className="slider__wrapper_Categoria" style={wrapperTransform}>
          <h3 id={headingId} className="visuallyhiddenCategoria">{heading}</h3>
          
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
                        }else if(posicion == current+1 || posicion == current+2 || posicion == current+3 ){
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
                    tprcolorbarra = {tprcolorbarra}
                    tprcolortooltip = {tprcolortooltip}
                />
              </div>
            )
          })}
        </ul>
        
    
      </div>
    )
  }
}

export default CategoriasCaoursel
// ReactDOM.render(<Slider heading="Example Slider" slides={slideData} />, document.getElementById('app'));