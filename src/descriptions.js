

            let scifi = (
                <div className="genre">
                    <h3>Science Fiction</h3>
                    <p>A genre of speculative fiction which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life. It has been called the "literature of ideas", and it often explores the potential consequences of scientific, social, and technological innovations.</p>
                </div> )


            let fantasy = (
                <div className="genre">
                    <h3>Fantasy</h3>
                    <p>A genre of speculative fiction involving magical elements, typically set in a fictional universe and sometimes inspired by mythology and folklore. Most fantasy uses magic or other supernatural elements as a main plot element, theme, or setting. Magic, magic practitioners (sorcerers, witches and so on) and magical creatures are common in many of these worlds.</p>
                </div>)


            let mystery = (
                <div className="genre">
                    <h3>Mystery</h3>
                    <p>A fiction genre where the nature of an event, usually a murder or other crime, remains mysterious until the end of the story. Often within a closed circle of suspects, each suspect is usually provided with a credible motive and a reasonable opportunity for committing the crime. The central character is often a detective (such as Sherlock Holmes), who eventually solves the mystery by logical deduction from facts presented to the reader.</p>
                </div>
            )

            let thriller = (
                <div className="genre">
                    <h3>Thriller</h3>
                    <p>A genre of fiction, having numerous, often overlapping subgenres. Thrillers are characterized and defined by the moods they elicit, giving viewers heightened feelings of suspense, excitement, surprise, anticipation and anxiety.</p>
                </div>
            )
                
            let dystopian = (
                <div className="genre">
                    <h3>Dystopian</h3>
                    <p>A genre of speculative fiction which imagines worlds or societies where life is extremely bad because of deprivation or oppression or terror, and human society is characterized by human misery, such as squalor, oppression, disease, overcrowding, environmental destruction, or war.</p>
                </div>
            )
                
            let steampunk = (
                <div className="genre">
                    <h3>Steampunk</h3>
                    <p>A subgenre of science fiction that incorporates retrofuturistic technology and aesthetics inspired by 19th-century industrial steam-powered machinery. Steampunk works are often set in an alternative history of the Victorian era or the American "Wild West", where steam power remains in mainstream use, or in a fantasy world that similarly employs steam power.</p>
                </div>
            )
                
            let romance = (
                <div className="genre">
                    <h3>Romance</h3>
                    <p>Romantic fiction centers around love stories between two people. They're lighthearted, optimistic, and have an emotionally satisfying ending. Romance novels do contain conflict, but it doesn't overshadow the romantic relationship, which always prevails in the end.</p>
                </div>
            )
                
            let historicalFiction = (
                <div className="genre">
                    <h3>Historical Fiction</h3>
                    <p>Historical fiction novels take place in the past. Written with a careful balance of research and creativity, they transport readers to another time and place—which can be real, imagined, or a combination of both. Many historical novels tell stories that involve actual historical figures or historical events within historical settings.</p>
                </div>
            )
                
            let postApocalyptic = (
                <div className="genre">
                    <h3>Post-Apocalyptic</h3>
                    <p>a subgenre of science fiction, science fantasy, dystopia or horror in which the Earth's (or another planet's) civilization is collapsing or has collapsed. The apocalypse event may be climatic, such as runaway climate change; astronomical, such as an impact event; destructive, such as nuclear holocaust or resource depletion; medical, such as a pandemic, whether natural or human-caused; end time, such as the Last Judgment, Second Coming or Ragnarök; or more imaginative, such as a zombie apocalypse, cybernetic revolt, technological singularity, dysgenics or alien invasion.</p>
                </div>
            )

            let adventure = (
                <div className="genre">
                    <h3>Adventure</h3>
                    <p>Adventure stories make the element of danger the focus. An adventure is an event or series of events that happens outside the course of the protagonist's ordinary life, usually accompanied by danger, often by physical action. Adventure stories almost always move quickly, and the pace of the plot is at least as important as characterization, setting and other elements of a creative work.</p>
                </div>
            )
                
                let horror = (
                    <div className="genre">
                    <h3>Horror</h3>
                    <p>Horror novels are meant to scare, startle, shock, and even repulse readers. Generally focusing on themes of death, demons, evil spirits, and the afterlife, they prey on fears with scary beings like ghosts, vampires, werewolves, witches, and monsters. In horror fiction, plot and characters are tools used to elicit a terrifying sense of dread</p>
                </div>
                )

                let literaryFiction = (
                    <div class="genre">
                    <h3>Literary Fiction</h3>
                    <p>Considered works with artistic value and literary merit. They often include political criticism, social commentary, and reflections on humanity. Literary fiction novels are typically character-driven, as opposed to being plot-driven, and follow a character's inner story. </p>
                </div>
                );
                
                export const genres = {
                        scifi,
                        fantasy,
                        mystery,
                        thriller,
                        dystopian,
                        steampunk,
                        romance,
                        historicalFiction,
                        postApocalyptic,
                        adventure,
                        horror,
                        literaryFiction
                    }


                    let overcoming = (
                        <div class="plot">
                            <h3>Overcoming the Monster</h3>
                            <p>The protagonist sets out to defeat an antagonistic force (often evil) which threatens the protagonist and/or protagonist's homeland.</p>
                        </div>
                    );
                    let rags = (
                        <div class="plot">
                            <h3>Rags to Riches</h3>
                            <p>The poor protagonist acquires power, wealth, and/or a mate, loses it all and gains it back, growing as a person as a result.</p>
                        </div>
                    );
                    let quest =(
                        <div class="plot">
                            <h3>The Quest</h3>
                            <p>The protagonist and companions set out to acquire an important object or to get to a location. They face temptations and other obstacles along the way.</p>
                        </div>
                    );
                    let voyage =(
                        <div class="plot">
                            <h3>Voyage and Return</h3>
                            <p>The protagonist goes to a strange land and, after overcoming the threats it poses or learning important lessons unique to that location, they return with experience.</p>
                        </div>
                    );
                    let comedy =(
                        <div class="plot">
                            <h3>Comedy</h3>
                            <p>Light and humorous character with a happy or cheerful ending; a dramatic work in which the central motif is the triumph over adverse circumstance, resulting in a successful or happy conclusion.</p>
                        </div>
                    );
                    let tragedy = (
                        <div class="plot">
                            <h3>Tragedy</h3>
                            <p>The protagonist is a hero with a major character flaw or great mistake which is ultimately their undoing. Their unfortunate end evokes pity at their folly and the fall of a fundamentally good character.</p>
                        </div>
                    );
                    let rebirth = (
                        <div class="plot">
                            <h3>Rebirth</h3>
                            <p>An event forces the main character to change their ways and often become a better individual.</p>
                        </div>
                    );
                    let rebellion =(
                        <div class="plot">
                            <h3>Rebellion Against 'The One'</h3>
                            <p>Concerns a hero who rebels against the all-powerful entity that controls the world until he is forced to surrender to that power.</p>
                        </div>
                    );


                    export const plots = {
                        overcoming,
                        rags,
                        voyage,
                        comedy,
                        tragedy,
                        quest,
                        rebellion,
                        rebirth
                    };

    
    let architect = (<div>
                    <h3>Architect</h3>
                    <h5>Most independent</h5>
                    <ul>
                        <li>Theoretical</li>
                        <li>Skeptical</li>
                        <li>Needs to be competent</li>
                        <li>Sees world as chessboard</li>
                        <li>Needs things 'my way'</li>
                        <li>Imaginative and strategic thinkers, with a plan for everything.</li>
                    </ul>
                </div>);

        let logician = (
                <div className='pers'>
                    <h3>Logician</h3>
                    <h5>Most conceptual</h5>
                    <ul>
                        <li>Challenges others to think</li>
                        <li>High need for competency</li>
                        <li>Socially cautious</li>
                        <li>Independent</li>
                        <li>Innovative inventors with an unquenchable thirst for knowledge</li>
                    </ul>
                </div>

        );

        let commander = (
            <div>
                    <h3>Commander</h3>
                    <h5>Most commanding</h5>
                    <ul>
                        <li>Visionary</li>
                        <li>Gregarious</li>
                        <li>Argumentative</li>
                        <li>Planner</li>
                        <li>Impatient with incompetence</li>
                        <li>Bold, imaginative and strong willed leaders, always finding a way, or making one</li>
                    </ul>
                </div>
        );
                

        let debater = (
        <div>
            <h3>Debater</h3>
            <h5>Most inventive</h5>
            <ul>
                
                <li>Given to brinksmanship</li>
                <li>Tests limits</li>
                <li>Enthusiastic</li>
                <li>Innovative</li>
                <li>Enjoys arguing both sides</li>
                <li>Likes challenges</li>
                <li>Smart and curious thinkers who cannot resist an intellectual challenge</li>
            </ul>
        </div>
        );

        let advocate = (
                <div>
                    <h3>Advocate</h3>
                    <h5>Most reflective</h5>
                    <ul>
                        <li>Introspective</li>
                        <li>Quietly caring</li>
                        <li>Creative</li>
                        <li>Eloquent speaker/writer</li>
                        <li>Visionary</li>
                        <li>Quiet and mystical, yet very inspiring and tireless idealists</li>
                    </ul>
                </div>
        );

        let mediator = (
                <div>
                    <h3>Mediator</h3>
                    <h5>Most idealistic</h5>
                    <ul>
                        <li>Has strong personal values</li>
                        <li>Seeks inner order and peace</li>
                        <li>Creative</li>
                        <li>Non-directive</li>
                        <li>Reserved with people</li>
                        <li>Poetic, kind, and altruistic people, always eager to help a good cause</li>
                    </ul>
                </div>
        );


        export const personalities = {architect, logician, commander, debater, advocate, mediator}

    /*
      
                
               
                
                
                <div class="diplomat personality">
                    <h3>Protagonists</h3>
                    <h5>Most persuasive</h5>
                    <ul>
                        <li>Charismatic</li>
                        <li>Idealistic</li>
                        <li>Ignores unpleasantness</li>
                        <li>Sees the potential in others</li>
                        <li>Compassionate</li>
                        <li>Charismatic and inspiring leaders, able to mesmerize their listeners</li>
                    </ul>
                </div>
                <div class="diplomat personality">
                    <h3>Campaigners</h3>
                    <h5>Most optimistic</h5>
                    <ul>
                        <li>People oriented</li>
                        <li>Creative</li>
                        <li>Seeks harmony with others</li>
                        <li>Life of the party</li>
                        <li>Better at starting than finishing</li>
                        <li>Enthusiastic, creative, sociable, free spirits, can always find a reason to smile</li>
                    </ul>
                </div>
                <div class="sentinel personality">
                    <h3>Logistician</h3>
                    <h5>Most reliable</h5>
                    <ul>
                        <li>Organized</li>
                        <li>Compulsive</li>
                        <li>Private</li>
                        <li>Trustworthy</li>
                        <li>Follows rules</li>
                        <li>Practical and fact minded individuals, who reliability cannot be doubted</li>
                    </ul>
                </div>
                <div class="sentinel personality">
                    <h3>Defender</h3>
                    <h5>Most loyal</h5>
                    <ul>
                        <li>Easy to collaborate with</li>
                        <li>Works behind the scenes</li>
                        <li>Sacrifices readily</li>
                        <li>Accountable</li>
                        <li>Very dedicated and warm protectors, ready to defend loved ones</li>
                    </ul>
                </div>
                <div class="sentinel personality">
                    <h3>Executive</h3>
                    <h5>Most forceful</h5>
                    <ul>
                        <li>Orderly and structured</li>
                        <li>Sociable</li>
                        <li>Opinionated</li>
                        <li>Results-oriented</li>
                        <li>Productive</li>
                        <li>Traditional</li>
                        <li>Excellent administrators, unsurpassed at managing things or people</li>
                    </ul>
                </div>
                <div class="sentinel personality">
                    <h3>Consul</h3>
                    <h5>Most harmonious</h5>
                    <ul>
                        <li>Gracious</li>
                        <li>Thoughtful</li>
                        <li>Lives to please</li>
                        <li>Has strong interpersonal skills</li>
                        <li>Accomplished host/hostess </li>
                        <li>Extraordinarily caring, social and popular people, eager to help</li>
                    </ul>
                </div>
                <div class="explorer personality">
                    <h3>Virtuoso</h3>
                    <h5>Most pragmatic</h5>
                    <ul>
                        <li>Observant</li>
                        <li>Often seen as cool and aloof</li>
                        <li>Practical</li>
                        <li>Unpretentious</li>
                        <li>Ready for anything</li>
                        <li>Bold and practical experimenters, masters of all kinds of tools</li>
                    </ul>
                </div>
                <div class="explorer personality">
                    <h3>Adventurer</h3>
                    <h5>Most artistic</h5>
                    <ul>
                        <li>Warm</li>
                        <li>Sensitive</li>
                        <li>Unassuming</li>
                        <li>Team player</li>
                        <li>In touch with self and nature</li>
                        <li>Flexible and charming artists, always ready to explore and experience something new</li>
                    </ul>
                </div>
                <div class="explorer personality">
                    <h3>Entrepreneur</h3>
                    <h5>Most fun</h5>
                    <ul>
                        <li>Unconventional</li>
                        <li>Fun</li>
                        <li>Gregarious</li>
                        <li>Lives for the here and now</li>
                        <li>Problem solver</li>
                        <li>Smart, energetic, and very perceptive, enjoy living on the edge</li>
                    </ul>
                </div>
                <div class="explorer personality">
                    <h3>Entertainer</h3>
                    <h5>Most generous</h5>
                    <ul>
                        <li>Sociable</li>
                        <li>Spontaneous</li>
                        <li>Loves surprises</li>
                        <li>Cuts red tape</li>
                        <li>Juggles many projects</li>
                        <li>Shares readily</li>
                        <li>Spontaneous, energetic, enthusiastic, life is never boring around them</li>
                    </ul>
                </div>
                
            </div>

            <div class="page-title" id="characters">           
                <h1>Character Archetypes</h1>
           </div>

            <div class="characters">
                <div class="character">
                    <h3>The Lover</h3>
                    <h5>The romantic lead who's guided by the heart.</h5>
                    <ul>
                        <li>Strengths: humanism, passion, conviction</li>
                        <li>Weaknesses: naivete, irrationality</li>
                        <li>Goal: Connection</li>
                        <li>Fear: Isolation</li>
                    </ul>
                </div>
                <div class="character">
                    <h3>The Hero</h3>
                    <h5>The protagonist who rises to meet a challenge and saves the day.</h5>
                    <ul>
                        <li>Strengths: courage, perseverance, honor</li>
                        <li>Weaknesses: overconfidence, hubris</li>
                        <li>Goal: Change the world</li>
                        <li>Fear: Weakness</li>
                    </ul>
                </div>
                <div class="character">
                    <h3>The Magician</h3>
                    <h5>A powerful figure who has harnessed the ways of the universe to achieve key goals.</h5>
                    <ul>
                        <li>Strengths: omniscience, omnipotence, discipline</li>
                        <li>Weaknesses: corruptibility, arrogance</li>
                        <li>Goal: Alter reality </li>
                        <li>Fear: Unintended results</li>
                    </ul>
                </div>
                <div class="character">
                    <h3>The Rebel</h3>
                    <h5>The outlaw who won't abide by society's demands.</h5>
                    <ul>
                        <li>Strengths: independent thinking, virtue, owes no favors</li>
                        <li>Weaknesses: self-involved, potentially criminal</li>
                        <li>Goal: Revolution </li>
                        <li>Fear: No power</li>
                    </ul>
                </div>
                <div class="character">
                    <h3>The Explorer</h3>
                    <h5>A character naturally driven to push the boundaries of the status quo and explore the unknown.</h5>
                    <ul>
                        <li>Strengths: curious, driven, motivated by self-improvement</li>
                        <li>Weaknesses: restless, unreliable, never satisfied</li>
                        <li>Goal: Freedom</li>
                        <li>Fear: Entrapment</li>
                    </ul>
                </div>
                <div class="character">
                    <h3>The Sage</h3>
                    <h5>A wise figure with knowledge for those who inquire. The mother figure or mentor is often based on this archetype.</h5>
                    <ul>
                        <li>Strengths: wisdom, experience, insight</li>
                        <li>Weaknesses: cautious, hesitant to actually join the action</li>
                        <li>Goal: Knowledge</li>
                        <li>Fear: Deception</li>
                    </ul>
                </div>
                <div class="character">
                    <h3>The Innocent</h3>
                    <h5>morally pure character, often a child, whose only intentions are good.</h5>
                    <ul>
                        <li>Strengths: morality, kindness, sincerity</li>
                        <li>Weaknesses: vulnerable, naive, rarely skilled</li>
                        <li>Goal: Happiness</li>
                        <li>Fear: Punishment</li>
                    </ul>
                </div>
                <div class="character">
                    <h3>The Creator</h3>
                    <h5>A motivated visionary who creates art or structures during the narrative.</h5>
                    <ul>
                        <li>Strengths: creativity, willpower, conviction</li>
                        <li>Weaknesses: self-involvement, single-mindedness, lack of practical skills</li>
                        <li>Goal: Realize vision</li>
                        <li>Fear: Mediocrity</li>
                    </ul>
                </div>
                <div class="character">
                    <h3>The Ruler</h3>
                    <h5>A character with legal or emotional power over others.</h5>
                    <ul>
                        <li>Strengths: omnipotence, status, resources</li>
                        <li>Weaknesses: aloofness, disliked by others, out of touch</li>
                        <li>Goal: Prosperity </li>
                        <li>Fear: Overthrown</li>
                    </ul>
                </div>
                <div class="character">
                    <h3>The Caregiver</h3>
                    <h5>A character who continually supports others and makes sacrifices on their behalf.</h5>
                    <ul>
                        <li>Strengths: honorable, selfless, loyal</li>
                        <li>Weaknesses: lacking personal ambition or leadership</li>
                        <li>Goal: Help others</li>
                        <li>Fear: Selfishness</li>
                    </ul>
                </div>
                <div class="character">
                    <h3>The Everyman</h3>
                    <h5>A relatable character who feels recognizable from daily life.</h5>
                    <ul>
                        <li>Strengths: grounded, salt-of-the-earth, relatable</li>
                        <li>Weaknesses: lacking special powers, often unprepared for what’s to come</li>
                        <li>Goal: Belonging</li>
                        <li>Fear: Exclusion</li>
                    </ul>
                </div>
                <div class="character">
                    <h3>The Jester</h3>
                    <h5>A funny character or trickster who provides comic relief, but may also speak important truths.</h5>
                    <ul>
                        <li>Strengths: funny, disarming, insightful</li>
                        <li>Weaknesses: can be obnoxious and superficial</li>
                        <li>Goal: Levity and fun</li>
                        <li>Fear: Boredom</li>
                    </ul>
                </div>
            </div>

            <div class="page-title" id="arcs">           
                <h1>Character Arcs</h1>
           </div>


            <div class="arcs">
                <div class="arc">
                    <h3>Positive Arc</h3>
                    <h5>Character believes lie, overcomes lie, new truth is liberating.</h5>
                </div>
                <div class="arc">
                    <h3>Flat Arc</h3>
                    <h5>Character believes Truth, maintains Truth, uses Truth to overcome world's Lie.</h5>
                </div>
                <div class="arc">
                    <h3>Corruption Arc</h3>
                    <h5>Character sees Truth, rejects Truth, embraces Lie.</h5>
                </div>
                <div class="arc">
                    <h3>Disillusionment Arc</h3>
                    <h5>Character believes Lie, overcomes Lie, new Truth is tragic.</h5>
                </div>
                <div class="arc">
                    <h3>The Fall</h3>
                    <h5>Character believes Lie, clings to Lie, rejects new Truth, believes worse Lie.</h5>
                </div>
            </div>

            */