import React from "react";
import Title from "../Title";
import JButton from "../JButton";
const queryString = require('query-string');

var $ = require('jquery');

export default class ScreenTextInput extends React.Component {
    constructor(){
     super();
        this.state={active: null,
                    shift: false,
                    one: '1',
                    two: '2',
                    three: '3',
                    four: '4',
                    five: '5',
                    six: '6',
                    seven: '7',
                    eight: '8',
                    nine: '9',
                    zero: '0',
                    q: 'q',
                    w: 'w',
                    e: 'e',
                    r: 'r',
                    t: 't',
                    y: 'y',
                    u: 'u',
                    i: 'i',
                    o: 'o',
                    p: 'p',
                    a: 'a',
                    s: 's',
                    d: 'd',
                    f: 'f',
                    g: 'g',
                    h: 'h',
                    j: 'j',
                    k: 'k',
                    l: 'l',
                    z: 'z',
                    x: 'x',
                    c: 'c',
                    v: 'v',
                    b: 'b',
                    n: 'n',
                    m: 'm'
                   };
    }
    
    
    
    componentDidMount(){
        this.state.active=$('#screen-textinput input').get(0);
    }
    inputHandle(e){
        $('#screen-textinput input').removeClass('active');
        this.state.active=e.target;
        $(e.target).addClass('active');
    }
    
    shiftMod(e){
        var i;
        for(i in this.state)
            if(this.state.hasOwnProperty(i) && i!='active' && i!='shift')
            {
                console.log (i + " - " + this.state[i]);
            }
        this.state.shift=!this.state.shift;
        var lcase = {active: this.state.active,
                    shift: this.state.shift,
                    one: '1',
                    two: '2',
                    three: '3',
                    four: '4',
                    five: '5',
                    six: '6',
                    seven: '7',
                    eight: '8',
                    nine: '9',
                    zero: '0',
                    q: 'q',
                    w: 'w',
                    e: 'e',
                    r: 'r',
                    t: 't',
                    y: 'y',
                    u: 'u',
                    i: 'i',
                    o: 'o',
                    p: 'p',
                    a: 'a',
                    s: 's',
                    d: 'd',
                    f: 'f',
                    g: 'g',
                    h: 'h',
                    j: 'j',
                    k: 'k',
                    l: 'l',
                    z: 'z',
                    x: 'x',
                    c: 'c',
                    v: 'v',
                    b: 'b',
                    n: 'n',
                    m: 'm'
                   };
        var ucase = {active: this.state.active,
                    shift: this.state.shift,
                    one: '!',
                    two: '_',
                    three: '#',
                    four: '$',
                    five: '%',
                    six: '^',
                    seven: '&',
                    eight: '*',
                    nine: '(',
                    zero: ')',
                    q: 'Q',
                    w: 'W',
                    e: 'E',
                    r: 'R',
                    t: 'T',
                    y: 'Y',
                    u: 'U',
                    i: 'I',
                    o: 'O',
                    p: 'P',
                    a: 'A',
                    s: 'S',
                    d: 'D',
                    f: 'F',
                    g: 'G',
                    h: 'H',
                    j: 'J',
                    k: 'K',
                    l: 'L',
                    z: 'Z',
                    x: 'X',
                    c: 'C',
                    v: 'V',
                    b: 'B',
                    n: 'N',
                    m: 'M'
                   };
        
        this.setState(this.state.shift ? ucase : lcase);
        console.log(!this.state.shift);
    }
    
    removeDigit(){
        $(this.state.active).val($(this.state.active).val().substr(0,$(this.state.active).val().toString().length-1));
    }
    
    clearDigit(){
        $(this.state.active).val(null);
    }
    
    enterDigit(digit){
        $(this.state.active).val($(this.state.active).val() + digit);
    }
    
    submit(digit){
        $(this.state.active).val($(this.state.active).val() + digit);
    }
    
    readInput1Val(){
        return $('#screen-textinput input')[0].value;
    }
    
    readInput2Val(){
        return $('#screen-textinput input')[1].value;
    }
    
    buildQuery(){
        console.log($('#screen-textinput input')[1].value == "");
        return $.extend(queryString.parse(this.props.location.search), { input1: this.readInput1Val.bind(this), input2: this.readInput2Val.bind(this) } );
    }
    
  render() {
      console.log(this.props);
    return (
    <div id="screen-textinput">
      <div>
          <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="EXIT" icon="fa-times-circle" nav="/" {...this.props}/>
          </div>
        </div>
      
          <Title title="Account Number Sign In" />
        <div class="buttons-main">
         <div class={this.props.input1==null? 'invis' : null }>
              <div class="col-md-3">
                  <p class="inputDiv1">{this.props.input1==null? '' : this.props.input1.text}</p>
              </div>
              <div class="col-md-9">
                 <input class="numericInput inputDiv1 active" type={this.props.input1==null? 'text' : this.props.input1.type} onClick={this.inputHandle.bind(this)} min="0"/>
              </div>
         </div>
         
            <div class={this.props.input2==null? 'invis' : null }>
              <div class="col-md-3">
                  <p class="inputDiv2">{this.props.input2==null? '' : this.props.input2.text}</p>
              </div>
              <div class="col-md-9">
                 <input class="numericInput inputDiv2" type={this.props.input2==null? '' : this.props.input2.type} onClick={this.inputHandle.bind(this)} min="0"/>
              </div>
            </div>
   

       
       
       
       
       
       
        <div class="col-md-12">
           <div class="col-md-1 col-md-offset-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.one} click={this.enterDigit.bind(this)} args={[this.state.one]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.two} click={this.enterDigit.bind(this)} args={[this.state.two]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.three} click={this.enterDigit.bind(this)} args={[this.state.three]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.four} click={this.enterDigit.bind(this)} args={[this.state.four]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.five} click={this.enterDigit.bind(this)} args={[this.state.five]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.six} click={this.enterDigit.bind(this)} args={[this.state.six]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.seven} click={this.enterDigit.bind(this)} args={[this.state.seven]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.eight} click={this.enterDigit.bind(this)} args={[this.state.eight]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.nine} click={this.enterDigit.bind(this)} args={[this.state.nine]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.zero} click={this.enterDigit.bind(this)} args={[this.state.ten]} {...this.props}/>
            </div>
        </div>
       </div>
      
      
      
      
      
      
      
      
       <div class="col-md-12">
           <div class="col-md-1 col-md-offset-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.q} click={this.enterDigit.bind(this)} args={[this.state.q]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.w} click={this.enterDigit.bind(this)} args={[this.state.w]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.e} click={this.enterDigit.bind(this)} args={[this.state.e]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.r} click={this.enterDigit.bind(this)} args={[this.state.r]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.t} click={this.enterDigit.bind(this)} args={[this.state.t]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.y} click={this.enterDigit.bind(this)} args={[this.state.y]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.u} click={this.enterDigit.bind(this)} args={[this.state.u]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.i} click={this.enterDigit.bind(this)} args={[this.state.i]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.o} click={this.enterDigit.bind(this)} args={[this.state.o]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.p} click={this.enterDigit.bind(this)} args={[this.state.p]} {...this.props}/>
            </div>
        </div>
       </div>
        
        
        
        <div class="col-md-12 secondRow">
           <div class="col-md-1 col-md-offset-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.a} click={this.enterDigit.bind(this)} args={[this.state.a]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.s} click={this.enterDigit.bind(this)} args={[this.state.s]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.d} click={this.enterDigit.bind(this)} args={[this.state.d]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.f} click={this.enterDigit.bind(this)} args={[this.state.f]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.g} click={this.enterDigit.bind(this)} args={[this.state.g]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.h} click={this.enterDigit.bind(this)} args={[this.state.h]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.j} click={this.enterDigit.bind(this)} args={[this.state.j]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.k} click={this.enterDigit.bind(this)} args={[this.state.k]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text={this.state.l} click={this.enterDigit.bind(this)} args={[this.state.l]} {...this.props}/>
            </div>
        </div>
       </div>
        
        
        
        
        
        <div class="col-md-12 ">
           <div class="col-md-1 col-md-offset-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton shiftKey" text="shift" click={this.shiftMod.bind(this)} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton thirdRow" text={this.state.z} click={this.enterDigit.bind(this)} args={[this.state.z]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton thirdRow" text={this.state.x} click={this.enterDigit.bind(this)} args={[this.state.x]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton thirdRow" text={this.state.c} click={this.enterDigit.bind(this)} args={[this.state.c]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton thirdRow" text={this.state.v} click={this.enterDigit.bind(this)} args={[this.state.v]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton thirdRow" text={this.state.b} click={this.enterDigit.bind(this)} args={[this.state.b]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton thirdRow" text={this.state.n} click={this.enterDigit.bind(this)} args={[this.state.n]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton thirdRow" text={this.state.m} click={this.enterDigit.bind(this)} args={[this.state.m]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton thirdRow backspaceKey" text="delete" click={this.removeDigit.bind(this)} {...this.props}/>
            </div>
        </div>
        
       </div>
        
        
        
        
        
        
        
        <div class="col-md-12 ">
           <div class="col-md-1 col-md-offset-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="@" click={this.enterDigit.bind(this)} args={['@']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="." click={this.enterDigit.bind(this)} args={['.']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-6">
             <div class='bouttons'>
                <JButton buttonclass="boutton space" text="" click={this.enterDigit.bind(this)} args={[' ']} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton enterKey" text="enter" nav={this.props.redirects[0]} query={this.buildQuery.bind(this)} {...this.props}/>
            </div>
        </div>        
       </div>
      
       </div>
        
         
    </div>
    );
  }
}