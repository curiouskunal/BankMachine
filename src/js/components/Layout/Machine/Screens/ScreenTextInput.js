import React from "react";
import Title from "../Title";
import JButton from "../JButton";

var $ = require('jquery');

export default class ScreenTextInput extends React.Component {
    constructor(){
     super();
        this.state={active: null,
                    shift: false,
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
        this.state.active=e.target;
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
    
  render() {
      console.log(this.props);
    return (
    <div id="screen-textinput">
      
        <div class="buttons-main">
        
              
         
          <div class="col-md-3">
              <p class="inputDiv1">ACCOUNT NUMBER</p>
          </div>
          <div class="col-md-9">
             <input class="numericInput inputDiv1 active" type="number" onClick={this.inputHandle.bind(this)} min="0"/>
          </div>
 

          <div class="col-md-3">
              <p class="inputDiv2">PASSWORD</p>
          </div>
          <div class="col-md-9">
             <input class="numericInput inputDiv2" type="text" onClick={this.inputHandle.bind(this)} min="0"/>
          </div>
   

       
       
       
       
       
       
        <div class="col-md-12">
           <div class="col-md-1 col-md-offset-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="0" click={this.enterDigit.bind(this)} args={[0]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="1" click={this.enterDigit.bind(this)} args={[1]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="2" click={this.enterDigit.bind(this)} args={[2]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="3" click={this.enterDigit.bind(this)} args={[3]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="4" click={this.enterDigit.bind(this)} args={[4]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="5" click={this.enterDigit.bind(this)} args={[5]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="6" click={this.enterDigit.bind(this)} args={[6]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="7" click={this.enterDigit.bind(this)} args={[7]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="8" click={this.enterDigit.bind(this)} args={[8]} {...this.props}/>
            </div>
        </div>
        <div class="col-md-1">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="9" click={this.enterDigit.bind(this)} args={[9]} {...this.props}/>
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
                <JButton buttonclass="boutton enterKey" text="enter" nav={this.props.redirects[0]} {...this.props}/>
            </div>
        </div>        
       </div>
      
       </div>
        
         
    </div>
    );
  }
}