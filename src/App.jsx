// Import
import { useState } from "react";
import languages from "./data/languages";
import Header from "./components/Header";

function App() {
  const [selectedLang, setSelectedLang] = useState(0);

  const buttons = languages.map((lang) => (
    <button
      className={
        selectedLang.id === lang.id ? "btn btn-warning" : "btn btn-primary"
      }
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
            <h5 className="card-title">
              {selectedLang
                ? selectedLang.title
                : "Nessun linguaggio selezionato"}
            </h5>
            <p className="card-text">
              {selectedLang ? selectedLang.description : ""}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
