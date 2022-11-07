import React from "react";
import { genres } from "./descriptions";
import { plots } from "./descriptions";
import { personalities } from "./descriptions";
import { characters } from "./descriptions";
import { arcs } from "./descriptions";

export default class Prompt extends React.Component{
    constructor(props){
        super(props)
        this.showGenre = this.showGenre.bind(this)
        this.showPlot = this.showPlot.bind(this);
        this.showPers = this.showPers.bind(this);
        this.showArc = this.showArc.bind(this);
        this.showChar = this.showChar.bind(this);
    }


    showGenre(){
        let genre = this.props.genre;
        let description;

            if(genre==='sci-fi'){
                description = genres.scifi
            }
            if(genre==='fantasy'){
                description = genres.fantasy
            }
            if(genre==='mystery'){
                description = genres.mystery
            }
            if(genre==='thriller'){
                description = genres.thriller
            }
            if(genre==='dystopian'){
                description = genres.dystopian
            }
            if(genre==='steampunk'){
                description = genres.steampunk
            }
            if(genre==='romance'){
                description = genres.romance
            }
            if(genre==='historical fiction'){
                description = genres.historicalFiction
            }
            if(genre==='post-apocalyptic'){
                description = genres.postApocalyptic
            }
            if(genre==='adventure'){
                description = genres.adventure
            }
            if(genre==='horror'){
                description = genres.horror
            }
            if(genre==='literary fiction'){
                description = genres.literaryFiction
            }
            return description;        

            
        } 

        showPlot(){
            let plot = this.props.plot;
            let description;


            if(plot==='overcoming the monster'){
                description = plots.overcoming
                }
                if(plot==='rags to riches'){
                    description = plots.rags
                }
                if(plot==='voyage and return'){
                    description = plots.voyage
                }
                if(plot==='quest'){
                    description = plots.quest
                }
                if(plot==='comedy'){
                    description = plots.comedy
                }
                if(plot==='tragedy'){
                    description = plots.tragedy
                }
                if(plot==='rebirth'){
                    description = plots.rebirth
                }
                if(plot==='rebellion against the one'){
                    description = plots.rebellion
                }
                return description;        


        }

        showPers(){

            let personality = this.props.personality;
            let description;

            if(personality==='n architect'){
                description=personalities.architect
            }
            if(personality===' logician'){
                description=personalities.logician
            }
            if(personality===' commander'){
                description=personalities.commander
            }

            if(personality===' debater'){
                description=personalities.debater
            }

            if(personality==='n advocate'){
                description=personalities.advocate
            }

            if(personality===' mediator'){
                description=personalities.mediator
            }

            if(personality===' protagonist'){
                description=personalities.protagonist
            }

            if(personality===' campaigner'){
                description=personalities.campaigner
            }

            if(personality===' logistician'){
                description=personalities.logistician
            }

            if(personality===' defender'){
                description=personalities.defender
            }

            if(personality==='n executive'){
                description=personalities.executive
            }

            if(personality===' consul'){
                description=personalities.consul
            }
            if(personality===' virtuoso'){
                description=personalities.virtuoso
            }
            if(personality==='n adventurer'){
                description=personalities.adventurer
            }
            if(personality==='n entrepreneur'){
                description=personalities.entrepreneur
            }
            if(personality==='n entertainer'){
                description=personalities.entertainer
            }
            return description;        
        }

        showChar(){
            let character = this.props.character
            let description;

            if(character===' lover'){
                description=characters.lover
            }
            if(character===' jester'){
                description=characters.jester
            }
            if(character===' hero'){
                description=characters.hero
            }
            if(character===' sage'){
                description=characters.sage
            }
            if(character===' ruler'){
                description=characters.ruler
            }
            if(character===' magician'){
                description=characters.magician
            }
            if(character===' everyman'){
                description=characters.everyman
            }
            if(character===' caregiver'){
                description=characters.caregiver
            }
            if(character===' rebel'){
                description=characters.rebel
            }
            if(character===' innocent'){
                description=characters.innocent
            }
            if(character===' explorer'){
                description=characters.explorer
            }
            if(character===' creator'){
                description=characters.creator
            }
            return description;        
        }

        showArc(){

            let arc = this.props.arc
            let description;

            if(arc==='positive change'){
                description =arcs.positive
            }
            if(arc==='flat'){
                description =arcs.flat
            }
            if(arc==='corruption'){
                description =arcs.corruption
            }
            if(arc==='disillusionment'){
                description =arcs.disillusionment
            }
            if(arc==='fall'){
                description =arcs.fall
            }
            
            return description;        


        }


    text(){

        
        let gen = this.props.gen;
        let plo = this.props.plo;
        let pers = this.props.pers;
        let char = this.props.char;
        let ar = this.props.ar;
        let th = this.props.th;

        let genre = this.props.genre;
        let plot = this.props.plot;
        let personality = this.props.personality;
        let character = this.props.character
        let arc = this.props.arc
        let theme = this.props.theme;

        let fill1 = pers || char ? ' about a' : '';
        let fill2 = ar? ' with a ' : '';
        let fill3 = ar? ' character arc' : '';
        let fill4 = th? ' about ' : '';

        return (<p className ='text'>Write a {gen &&<a>{genre}<span>{this.showGenre()}</span></a>} {plo && <a>{plot}<span>{this.showPlot()}</span></a>} story{fill1}{pers && <a>{personality}<span>{this.showPers()}</span></a>}{char && <a>{character}<span>{this.showChar()}</span></a>}{fill2}{ar && <a>{arc}<span>{this.showArc()}</span></a>}{fill3}{fill4}{th && <c>{theme}</c>}.</p>)


    }


    render(){
        

        return(
            <div>
                {this.text()}
            </div>
        )
    }
}


