import React from 'react'
import axios from 'axios'

import './App.css';

// const options = {
//     method: 'GET',
//     url: 'https://cricket-live-data.p.rapidapi.com/match/2432999',
//     headers: {
//       'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com',
//       'X-RapidAPI-Key': 'e360e404d7mshbdab97809908aaep1d57dcjsn926674f837bf'
//     }
//   };
class App extends React.Component{
    state = {
        advice: '',
    }

    componentDidMount(){
        this.fetchAdvice();
    }

    
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const { advice } = response.data.slip;
            this.setState({ advice });
        })
        .catch((error) => {
            console.log(error);
        });
        // axios.request(options)
        // .then((response) => {
        //     const { match_title } = response.data.results.fixture ;
        //     this.setState({match_title});
        //     console.log(match_title);
        // })
        // .catch(function (error) {
        //     console.error(error);
        // });
    }

    render(){
        return(
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{ this.state.advice }</h1>
                    <button className='button' onClick={this.fetchAdvice}>
                        <span>NEW ADVICE</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default App;