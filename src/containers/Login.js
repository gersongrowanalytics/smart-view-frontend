import React from "react";
import './CarouselLogin.scss'
import config from 'config'
import ReactCSSTransitionGroup from 'react-transition-group'; // ES6
// var ReactCSSTransitionGroup = require('react-transition-group'); // ES5 with npm
// var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
import ImagenPortada from 'assets/images/portada/sfondoLogin.png';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [
        // config.api+'Sistema/abs/img/sfondoLogin.png',
        // config.api+'Sistema/abs/img/sfondoLogin.png',
        ImagenPortada,
        ImagenPortada
      ], 
      current: 0, 
      isNext: true 
    };
    
    this.handlerPrev = this.handlerPrev.bind(this);
    this.handlerNext = this.handlerNext.bind(this);
    this.goToHistoryClick = this.goToHistoryClick.bind(this);
  }
  
  handlerPrev() {
    let index = this.state.current,
        length = this.state.items.length;
    
    if( index < 1 ) {
      index = length;
    }
    
    index = index - 1;
  
    this.setState({
      current: index,
      isNext: false
    });
  }
  
  handlerNext() {
    let index = this.state.current,
        length = this.state.items.length - 1;
    
    if( index == length ) {
      index = -1;
    }
    
    index = index + 1;
    
    this.setState({
      current: index,
      isNext: true
    });
  }
  
  goToHistoryClick( curIndex, index ) {
    let next = (curIndex < index);
    this.setState({
      current: index,
      isNext: next
    });                 
  }
  
  render(){
    let index = this.state.current,
        isnext = this.state.isNext,
        src = this.state.items[index];
  
    return (
      <div className="app">
        <div className="carousel">
          <div id="contenedorTextoCarousel">
            {/* <span id="textoCarousel">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis</span> */}
          </div>
         {/* <ReactCSSTransitionGroup
            transitionName={{
            enter: isnext ? 'enter-next' : 'enter-prev',
            enterActive: 'enter-active',
            leave: 'leave',
            leaveActive: isnext ? 'leave-active-next' : 'leave-active-prev'
          }}
           > */}
             <div className="carousel_slide" key={index}>
               <img src={src} />
             </div>
           {/* </ReactCSSTransitionGroup> */}
           <button className="carousel_control carousel_control__prev" onClick={this.handlerPrev}><span></span></button>
           <button className="carousel_control carousel_control__next" onClick={this.handlerNext}><span></span></button>
          <div className="carousel_history">
            <History 
              current={this.state.current} 
              items={this.state.items}
              changeSilde={this.goToHistoryClick}
            />
          </div>
          </div>
      </div>
    )
  }
}

export default Login

class History extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let current = this.props.current;
    let items = this.props.items.map( (el, index) => {
      let name = (index == current) ? 'active' : '';
      return (
        <li key={index}>
          <button 
            className={name} 
            onClick={ () => this.props.changeSilde(current, index) }
          ></button>
        </li>
      )
    });
    
    return (
      <ul>{items}</ul>
    )
  }
}
// ReactDOM.render( <App />, document.getElementById("root"));