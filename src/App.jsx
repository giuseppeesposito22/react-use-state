// Import
import { useState } from "react";
import languages from "./data/languages";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [selectedLang, setSelectedLang] = useState(0);

  return (
    <>
      <Header />
      <Main
        languages={languages}
        selectedLang={selectedLang}
        setSelectedLang={setSelectedLang}
      />

      <div className="container">
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
