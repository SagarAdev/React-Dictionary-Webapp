import './DictionaryContent.css'

function DictionaryContent({ wordData, word404Error }) {
    if (!word404Error) {
        return (
            <section style={wordData.word !== "" ? { display: "block" } : { display: "none" }}>
                <div className="word-desc">
                    <div className='word-with-phonetic'>
                        <h2>
                            {wordData.word}
                        </h2>
                        <div className="phonetic"
                            style={wordData.phonetic !== "" ? { display: "block" } : { display: "none" }}>
                            {wordData.phonetic}
                        </div>
                    </div>
                    <div className="play-button">
                        <div></div>
                    </div>
                </div>

                <div className="gen-desc noun-desc">
                    <div className="heading">
                        <h3>noun</h3>
                        <div className="horizontal-line"></div>
                    </div>

                    <div className="meaning">
                        <h4>Meaning</h4>
                        <ul className="meaning-list"
                            style={wordData.nounMeaning.length > 0 ? { display: "block" } : { display: "none" }}>
                            {wordData.nounMeaning.map((meaning, index) => (
                                <li key={index}><span>{meaning.definition}</span></li>
                            ))}
                        </ul>
                        <div className="synonym"
                            style={wordData.nounSynonyms.length > 0 ? { display: "flex" } : { display: "none" }}>
                            Synonyms
                            <div className="synonym-list">{wordData.nounSynonyms.map((synonym, index) => (
                                <span key={index}>{synonym}</span>
                            ))}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="gen-desc verb-desc">
                    <div className="heading">
                        <h3>verb</h3>
                        <div className="horizontal-line"></div>
                    </div>

                    <div className="meaning">
                        <h4>Meaning</h4>
                        <ul className="meaning-list"
                            style={wordData.verbMeaning.length > 0 ? { display: "block" } : { display: "none" }}>
                            {wordData.verbMeaning.map((meaning, index) => (
                                <li key={index}><span>{meaning.definition}</span>
                                    <div className="example"
                                        style={meaning.example ? { display: "block" } : { display: "none" }}>
                                        "{meaning.example}"
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="synonym"
                            style={wordData.verbSynonyms.length > 0 ? { display: "flex" } : { display: "none" }}>
                            Synonyms
                            <div className="synonym-list">
                                {wordData.verbSynonyms.map((synonym, index) => (
                                    <span key={index}>{synonym}</span>
                                ))}</div>
                        </div>
                    </div>
                </div>

                <div className='source'>Source <a href='https://dictionaryapi.dev'>https://dictionaryapi.dev</a></div>
            </section>
        )
    }

    return (
        <section>
            <div className='error-404-message'>Hmm, we couldn't locate that word. Want to try again?</div>
        </section>
    )
}

export default DictionaryContent;