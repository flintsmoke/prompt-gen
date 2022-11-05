import React from 'react';
import './App.css';
import Selector from './selector';
import Prompt from './prompt';
import Button from './button';

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      visible: false, genre: '', character: '', personality: '', plot: '', theme: '', arc: '',
      gen: true, char: true, pers: true, plo: true, th: true, ar: true
    
    
    }
    this.storyPrompt = this.storyPrompt.bind(this);
    this.selectElements = this.selectElements.bind(this);
  }

  storyPrompt(){

    this.setState({visible: true})
    const random0 = Math.floor(Math.random() * 12);
    const random1 = Math.floor(Math.random() * 12);
    const random2 = Math.floor(Math.random() * 16);
    const random3 = Math.floor(Math.random() * 8);
    const random4 = Math.floor(Math.random() * 20);
    const random5 = Math.floor(Math.random() * 5);

    let story = {
        genres: ['sci-fi','fantasy','mystery','thriller','dystopian','steampunk','romance','historical fiction','post-apocalyptic','adventure','horror','literary fiction'],
        characters: [' innocent',' everyman',' hero',' caregiver',' explorer',' rebel',' lover',' creator',' jester',' sage',' magician',' ruler'],
        personalities: ['n architect',' logician',' commander',' debater','n advocate',' mediator',' protagonist',' campaigner',' logistician',' defender','n executive',' consul',' virtuoso','n adventurer','n entrepreneur','n entertainer'],
        plots: ['overcoming the monster','rags to riches','voyage and return','quest','comedy','tragedy','rebirth','rebellion against the one'],
        themes: ['self sacrifice','the evils of technology/false idols','death and dying','revolution','faith','the fear of failure','the nature of the universe','overcoming obstacles','love','power and corruption','justice and mercy','heartbreak','the wisdom of experience','self reliance','greed','fate and free will','believing in yourself','injustice and inequality','an identity crisis','grief'],
        arcs: ['positive change','flat','corruption','disillusionment','fall']
        };
    
        this.setState({genre: story.genres[random0]});
        this.setState({character: story.characters[random1]});
        this.setState({personality: story.personalities[random2]}) ;
        this.setState({plot: story.plots[random3]});
        this.setState({theme: story.themes[random4]});
        this.setState({arc: story.arcs[random5]})
}

selectElements(element){

  if(element==='genre'){
    this.state.gen ? this.setState({gen: false}) : this.setState({gen: true})
  }
 
  if(element==='character'){
      this.state.char? this.setState({char: false}): this.setState({char: true})
  }
  if(element==='personality'){
      this.state.pers? this.setState({pers: false}): this.setState({pers: true})
  }
  if(element==='plot'){
      this.state.plo? this.setState({plo: false}): this.setState({plo: true})
  }
  if(element==='theme'){
      this.state.th? this.setState({th: false}): this.setState({th: true})
  }
  if(element==='arc'){
      this.state.ar? this.setState({ar: false}): this.setState({ar: true})
  }

}


  render(){

    let genre = this.state.genre;
    let plot = this.state.plot;
    let personality = this.state.personality;
    let character = this.state.character;
    let arc = this.state.arc;
    let theme = this.state.theme;

    let gen = this.state.gen;
    let plo = this.state.plo;
    let pers = this.state.pers;
    let char = this.state.char;
    let ar = this.state.ar;
    let th = this.state.th;

  


    return (
      <div className="App">

        <header className="App-header">
          Super Random Story Prompt Generator
        </header>

        <nav>
          <ul>
            <li>Full Plot Prompt</li>
            <li>Character</li>
            <li>Setting</li>
            <li>Random Story Elements</li>
          </ul>
        </nav>

        <main className="main">
          <div className='selector'>
            <Selector onChange={this.selectElements}
            genre={gen}
            plot={plo}
            personality={pers}
            character={char}
            arc={ar}
            theme={th}/>
          </div>
          <div className='button'>
            <Button onClick={this.storyPrompt}/>
          </div>
          {this.state.visible && <div className='prompt'>
              <Prompt 
              genre={genre}
              plot={plot}
              personality={personality}
              character={character}
              arc={arc}
              theme={theme}

              gen={gen}
              plo={plo}
              pers={pers}
              char={char}
              ar={ar}
              th={th}/>
              
          </div>}
         
        </main>
      </div>
    );

  } 

}

export default App;
