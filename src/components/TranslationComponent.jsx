import React, { Component } from 'react';

class TranslationComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            videoUrl: "https://www.youtube.com/embed/TjjEZh00B_k?autoplay=0",
        }
    }

    render() {
        return(        
            <div className="translation">
                {/* <iframe class="translation__iframe" src={this.props.videoUrl}> */}
                <iframe width="1218" height="310" className="translation__iframe" src={this.state.videoUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        )
    }
}

export default TranslationComponent;