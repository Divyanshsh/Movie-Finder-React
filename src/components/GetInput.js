import React from 'react';
import ShowResult from './ShowResult';
import axios from 'axios';

class GetInput extends React.Component {

    state = { input: '', takenResponse: {}, onSubmitInputVal: false}

    onSubmitInput = e => {
        e.preventDefault();
            axios.get(`http://www.omdbapi.com/?apikey=191f19e6&t=${this.state.input}`)
                .then(response => {
                    this.setState({takenResponse: response});
                })
                .catch(error => {
                    console.log(error);
                });
        this.setState({onSubmitInputVal: true});
    };

    render() {
        return (
            <div className="container">
                <h3 className="text-center">Movie Information</h3>
                <form onSubmit={this.onSubmitInput} className="d-flex mt-5">
                    <label className="m-2 font-weight-bold">Title</label>
                    <input
                        className="form-control input"
                        type="text" placeholder="Enter movie"
                        onChange={e => this.setState({ input: e.target.value })}
                    />
                </form>
                {
                  this.state.onSubmitInputVal ? <ShowResult value={this.state.takenResponse.data} /> : null
                }
            </div>
        );
    };
}

export default GetInput;