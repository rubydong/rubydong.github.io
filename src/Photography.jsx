import React, { Component } from 'react';
import photography from './photography.json';

export class Photography extends Component {
	render() {
        let photographyContent = [];
        photography.forEach((photo, i) => {
            let styleOne = {'backgroundColor': photo.color1};
            let styleTwo = {'backgroundColor': photo.color2};

            let images = [];
            for (let i = 0; i < photo.images.length; i++) {
                images.push(<img key={i} src={photo.images[i]} alt={photo.place1}/>);
            }
            photographyContent.push(
                <div key={i} className= {i % 2 === 0 ? "location" : "location float-right"}>
                    <div className="place" style={styleOne}><h2>{photo.place1}</h2> </div>
                    <br/>
                    <div className="place place2" style={styleTwo}><h2>{photo.place2}</h2></div>
                </div>        
            );
            photographyContent.push(images);  
            photographyContent.push(<div style={{marginBottom: "40px"}}></div>)
        });

    	return (
			<div className="landing">
		        <div id="photography">
                    <h1> My Photography </h1> 
                    <hr/>
                    {photographyContent}
		        </div>
		</div>
    	);
  	}
}
