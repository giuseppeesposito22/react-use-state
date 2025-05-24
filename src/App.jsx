import { useState } from "react";
import languages from "./data/languages";

function App() {
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  const buttons = languages.map((lang) => (
    <button key={lang.id} onClick={() => setSelectedLang(lang)}>
      {lang.title}
    </button>
  ));
  return (
    <>
      {buttons}

      <div>
        <h2>{selectedLang.title}</h2>
        <p>{selectedLang.description}</p>
      </div>
    </>
  );
}

export default App;
