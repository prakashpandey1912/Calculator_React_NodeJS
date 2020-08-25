import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyComponent from "./components/KeyComponent";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result:0 ,
            input:""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
            this.setState({
                input: ""
            }) 
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: ""
            })
            this.setState({
                input: this.state.input + button
            })
        }
    };

    async resultFromDatabase(checkResult)
    {
      //  const numbers = checkResult.split(/\D/g);
       // const op = checkResult.split(/\d/g).filter(Boolean);
       console.log(checkResult);
       var checkResultEquation;
       for(var i=0;i<checkResult.length;i++)
       {
        checkResultEquation = checkResult.replace("/", "@");
       }
       const url = "http://localhost:8080/result/"+checkResultEquation+"";
        console.log(url);
        const responce = await fetch(url);
        const data= await responce.text();
        console.log(data);
        this.setState({
         result:data
        }) 
    }


    calculate = () => {
        var checkResult = ''
        if(this.state.input.includes('--')){
            checkResult = this.state.input.replace('--','+')
        }

        else {
            checkResult = this.state.input
        }
        this.resultFromDatabase(checkResult);
    };

    reset = () => {
        this.setState({
            result: 0,
            input: ""
        })
    };

    backspace = () => {
        var output=0;
        if(this.state.result!=0) output=this.state.result.slice(0, -1);
        this.setState({
            input: this.state.input.slice(0, -1),
            result: output
       
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <br/><br/>
                    <center><h1>Calculator</h1>
                    </center><br/>
                    <ResultComponent result={this.state.result} input={this.state.input} />
                    <KeyComponent onClick={this.onClick}/>
                    <center><h1>Created by Prakash Pandey</h1>
                    <h1>Thank You</h1>
                    </center>
                </div>
            </div>
        );
    }
}

export default App;
