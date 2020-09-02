import React, {Component} from 'react';
import './car.scss'
import ImagenHover from 'components/Sistema/ImagenHover'


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
        seleccionado,
        catnombre,
        catimagenfondo,
        caticono,
        catcolorhover, 
        caticonoseleccionado,
        catcolor,
        catimagenfondoseleccionado,
        index } = this.props.slide
    const current = this.props.current
    const seleccionoPromocion  = this.props.seleccionoPromocion

    let classNames
    if(seleccionoPromocion == true){
      classNames = 'slidePequeno'
    }else{
      classNames = 'slide'
    }
    
    if (current === index) classNames += ' slide--current'
    else if (current - 1 === index) classNames += ' slide--previous'
    else if (current + 1 === index) classNames += ' slide--next'
        
    return (
      <li 
        ref={this.slide}
        className={classNames} 
        // onClick={this.handleSlideClick}
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
        style={
          this.props.posicion == 0 && seleccionoPromocion == true
          ?{marginLeft:'44px'}
          :null
        }
      >
        <div className="slide__image-wrapper">
            <ImagenHover 
                seleccionado  = {seleccionado}
                nombre        = {catnombre}
                fondo         = {catimagenfondo}
                icono         = {caticono}
                iconoSeleccionado = {caticonoseleccionado}
                color         = {catcolor}
                colorhover    = {catcolorhover}
                catimagenfondoseleccionado = {catimagenfondoseleccionado}
            />
        </div>
      </li>
    )
  }
}



// =========================
// Slider
// =========================

class Slider extends React.Component {
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
    const { slides, heading, seleccionarCategoria, seleccionoPromocion } = this.props 
    const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`
    const wrapperTransform = {
      'transform': `translateX(-${current * (100 / slides.length)}%)`
    }
    
    return (
      <div 
        className={
          seleccionoPromocion == true
          ?'sliderPequeno'
          :'slider'
        } 
        aria-labelledby={headingId}
      >
        <ul className="slider__wrapper" style={wrapperTransform}>
          <h3 id={headingId} class="visuallyhidden">{heading}</h3>
          
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
                            }, 800);
                        }else if(posicion == current+1 || posicion == current+2 || posicion == current+3 ){
                            this.seleccionarEspecifico(current)
                            setTimeout(() => {
                                this.setState({
                                    cambiando : false
                                })
                            }, 800);
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
                            }, 800);
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
                    
                    seleccionado  = {slide.seleccionado}
                    nombre        = {slide.catnombre}
                    fondo         = {slide.catimagenfondo}
                    icono         = {slide.caticono}
                    caticonoseleccionado = {slide.caticonoseleccionado}
                    catcolor      = {slide.catcolor}
                    colorhover    = {slide.catcolorhover}
                    seleccionoPromocion = {seleccionoPromocion}
                    catimagenfondoseleccionado = {slide.catimagenfondoseleccionado}
                />
              </div>
            )
          })}
        </ul>
        
    
      </div>
    )
  }
}

export default Slider
// ReactDOM.render(<Slider heading="Example Slider" slides={slideData} />, document.getElementById('app'));