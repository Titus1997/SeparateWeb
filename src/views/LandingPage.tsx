import * as React from 'react';
import './LandingPage.css';

interface LandingPageProps {
    
  }
  
  interface LandingPageState {
    value: string
  }
  

export default class LandingPage extends React.Component<LandingPageProps, LandingPageState> {

    imageUrl = './images/background.jpg';
    drumImageUrl = './images/drums.png';
    vocalImageUrl = './images/vocals.png';
    
    public constructor(props: Readonly<{}>) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        //this.fileInput = React.createRef();
        this.getDrum = this.getDrum.bind(this);
        this.getVocal = this.getVocal.bind(this);
    }

    handleChange(event: any) {
      this.setState({value: event.target.files[0]});
    }

    getDrum(event: any){
        fetch('localhost:5000/uploader', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            file: this.state.value
        })
        })
    }

    getVocal(event: any){
        fetch('localhost:5000/uploader', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            file: this.state.value
        })
        })
    }

    public render() {

        return (
            <div className='landing-page'>
                <div className="cover" style={{backgroundImage: `url(${this.imageUrl})` }}/>
                <div className='container'>
                    
                    <form>
                    <div className='input-file-container'>  
                        <label className='input-file-trigger'>
                        <input className='input-file' id='my-file' type='file' name='inputfile' /*ref={this.fileInput}*/ value={this.state.value} onChange={this.handleChange}>
                        </input>
                        Select a file...</label>
                    </div>
                    <p className='file-return'></p>
                    <div className="frameContainer">

                    <div className="frame" id="Drums">
                        <button className="button" id="buttonDrums" onClick={this.getDrum}>
                            <span>Get Drums</span>
                            <svg>
                            <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                            <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                        </svg>
                        </button>
                        
                    </div>

                    <div className="frame" id="Vocals">
                        <button className="button" id="buttonVocals"  onClick={this.getVocal}>
                            <span>Get Vocals</span>
                            <svg>
                            <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                            <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                        </svg>
                        </button>
                        
                    </div>

                    </div>
                    </form>
                </div>
            </div>
        );
    }

}

