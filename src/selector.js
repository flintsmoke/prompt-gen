import React from "react";


export default class Selector extends React.Component{
    constructor(props){
        super(props)
        this.handleChange =this.handleChange.bind(this);

    }

    handleChange(e){
        
        let item = e.target.value;
        this.props.onChange(item)
    }

    render(){

        let genre = this.props.genre;
        let plot = this.props.plot;
        let personality = this.props.personality;
        let character = this.props.character;
        let arc = this.props.arc;
        let theme = this.props.theme;



        return(
            <div>
                <fieldset className="selector">
                    <legend>Choose your Story Elements</legend>
                    <div>
                        <input type="checkbox" id="genre" name="genre" 
                            value="genre" checked={genre} onChange={this.handleChange} />
                        <label for="genre">genre</label>
                    </div>
                    <div>
                        <input type="checkbox" id="plot" name="plot" 
                            value="plot" checked={plot} onChange={this.handleChange}/>
                        <label for="plot">plot</label>
                    </div>
                    <div>
                        <input type="checkbox" id="personality" name="personality" 
                            value="personality" checked={personality} onChange={this.handleChange}/>
                        <label for="personality">personality</label>
                    </div>
                    <div>
                        <input type="checkbox" id="character" name="character" 
                            value="character" checked={character} onChange={this.handleChange}/>
                        <label for="character">character</label>
                    </div>
                    <div>
                        <input type="checkbox" id="arc" name="arc" 
                            value="arc" checked={arc} onChange={this.handleChange}/>
                        <label for="arc">arc</label>
                    </div>
                    <div>
                        <input type="checkbox" id="theme" name="theme" 
                            value="theme" checked={theme} onChange={this.handleChange}/>
                        <label for="theme">theme</label>
                    </div>
                    
                </fieldset>
            </div>
        )
    }
}