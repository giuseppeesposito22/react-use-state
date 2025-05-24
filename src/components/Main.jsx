import Button from "./Button";

export default function Main({ languages, selectedLang, setSelectedLang }) {
  const buttons = languages.map((lang) => (
    <Button
      currentLang={lang}
      handleClick={() => setSelectedLang(lang)}
      isSelected={selectedLang.id === lang.id}
    />
  ));

  return <div className="container">{buttons}</div>;
}
