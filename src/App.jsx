// Import
import { useState } from "react";
import languages from "./data/languages";
import Header from "./components/Header";

function App() {
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  const buttons = languages.map((lang) => (
    <button
      className="btn btn-primary"
      key={lang.id}
      onClick={() => setSelectedLang(lang)}
    >
      {lang.title}
    </button>
  ));
  return (
    <>
      <Header />
      <div className="container">
        {buttons}

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{selectedLang.title}</h5>
            <p className="card-text">{selectedLang.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
