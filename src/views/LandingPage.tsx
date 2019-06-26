import * as React from 'react';
import './LandingPage.css';
import axios from 'axios';
type Props={}
  
  type State = {
    file: File | null;
  }
  

export default class LandingPage extends React.Component<Props, State> {

    imageUrl = './images/background.jpg';
    drumImageUrl = './images/drums.png';
    vocalImageUrl = './images/vocals.png';
    
    public constructor(props: Props) {
        super(props);
        this.state = {file: null};

        this.handleChange = this.handleChange.bind(this);
        //this.fileInput = React.createRef();
        this.getDrum = this.getDrum.bind(this);
        this.getVocal = this.getVocal.bind(this);
    }

    handleChange(selectorFiles: FileList | null) {
        if(selectorFiles != null)
      this.setState({file: selectorFiles.item(0)});
    }

    getDrum(event: any){
        
        event.preventDefault();
        let file = this.state.file;
        const formData = new FormData();

        const blob = file as Blob;
        formData.append("file", blob);

        axios
        .post("http://localhost:5000/drums", formData, {
            responseType: 'blob'
        })
        .then((res: any) => {
                console.log(res);
                const url = window.URL.createObjectURL(res.data);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'drum.wav'); //or any other extension
                document.body.appendChild(link);
                link.click();
            })
        .catch((err: any) => console.warn(err));
    }

    getVocal(event: any){
        event.preventDefault();
        let file = this.state.file;
        const formData = new FormData();

        const blob = file as Blob;
        formData.append("file", blob);

        axios
        .post("http://localhost:5000/vocals", formData, {
            responseType: 'blob'
        })
        .then((res: any) => {
                console.log(res);
                const url = window.URL.createObjectURL(res.data);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'vocal.wav'); //or any other extension
                document.body.appendChild(link);
                link.click();
            })
        .catch((err: any) => console.warn(err));
    }

    public render() {

        return (
            <div className='landing-page'>
                <div className="cover" style={{backgroundImage: `url(${this.imageUrl})` }}/>
                <div className='container'>
                    
                    <form>
                    <div className='input-file-container'>  
                        <label className='input-file-trigger'>
                        <input className='input-file' type='file' name='inputfile' /*ref={this.fileInput}*/ onChange={ (e) => this.handleChange(e.target.files) }>
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

