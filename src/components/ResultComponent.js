import React, {Component} from 'react';
class ResultComponent extends Component {
    render() {
        let {result} = this.props;
        let {input}=this.props;
        return (
            <div className="result">
              <p>{input}</p>
              <p className="output">{result}</p>
            </div>
    )
        ;
    }
}
export default ResultComponent;

