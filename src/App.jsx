import React, { useState } from 'react';
import SearchBox from './SearchBox/SearchBox.jsx'
import Header from './Header/Header.jsx'
import DictionaryContent from './DictionaryContent/DictionaryContent.jsx';
import axios from 'axios';
import './App.css'

function App() {
  const [wordData, setWordData] = useState({
    word: "",
    phonetic: "",
    nounMeaning: [],
    nounSynonyms: [],
    verbMeaning: [],
    verbSynonyms: []
  });
  const [darkMode, setDarkMode] = useState(false);
  const [font, setFont] = useState("Sans Serif");
  const [word404Error, setWord404Error] = useState(false);

  function handleFontChange(selectedFont) {
    setFont(selectedFont);
    document.body.style.fontFamily = getFontFamily(selectedFont);
  }

  function getFontFamily(fontName) {
    switch (fontName) {
      case 'Sans Serif':
        return `"Rubik", sans-serif`;
      case 'Serif':
        return `"EB Garamond", serif`;
      case 'Monospace':
        return `"Space Mono", monospace`;
      default:
        return `"Rubik", sans-serif`;
    }
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  }


  function handleWordChange(word) {
    wordRequest(word);
  }

  const wordRequest = async (word) => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = response.data[0];

      setWordData({
        word: data.word || "",
        phonetic: data.phonetics[0].text || data.phonetics[1].text || "",
        nounMeaning: data.meanings[0]?.definitions || [],
        nounSynonyms: data.meanings[0]?.synonyms || [],
        verbMeaning: data.meanings[1]?.definitions || [],
        verbSynonyms: data.meanings[1]?.synonyms || []
      })

      setWord404Error(false);
    } catch (e) {
      if (e.status === 404) {
        setWord404Error(true);
      }
      console.error("Error fetching word data:", e);
      setWordData({
        word: "",
        phonetic: "",
        nounMeaning: [],
        nounSynonyms: [],
        verbMeaning: [],
        verbSynonyms: [],
      });
    }
  }
  return (
    <>
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        font={font}
        handleFontChange={handleFontChange}
        getFontFamily={getFontFamily}
      />

      <SearchBox handleWordChange={handleWordChange}
        font={font}
        getFontFamily={getFontFamily}
      />

      <DictionaryContent
        wordData={wordData}
        word404Error={word404Error}
      />
    </>
  )
}

export default App;