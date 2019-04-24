import Axios from 'axios';
import React from 'react';
import './index.css';
export class App extends React.PureComponent {

    state = {
        pdfText: ''
    }

    handleInputChange = async (e) => {
        const file = e.target.files[0];
        const data = new FormData();
        data.append('pdfFile', file);
        try {
            const response = await Axios.post('http://localhost:3001/pdfToText', data);
            this.setState({ pdfText: response.data.jsonData })
        } catch (error) {
            this.setState({
                error
            })
            throw error
        }
    }

    render() {
        return <div className="container" >
            <h1>PDF to Text</h1>
            <br />
            <div className="form-group">
                <label htmlFor="pdfFile">PDF File:</label>
                <input onChange={this.handleInputChange} type="file" className="form-control" id="pdfFile" />
            </div>
            {this.state.pdfText && <div className="pdf-text" >
                <div>{this.state.pdfText}</div>
            </div>}
        </div>
    }

}