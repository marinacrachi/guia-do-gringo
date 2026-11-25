type SectionId = "frases" | "cultura" | "transporte";

type Section = {
  id: SectionId;
  title: string;
};

const SECTIONS: Section[] = [
  { id: "frases", title: "Frases" },
  { id: "cultura", title: "Cultura" },
  { id: "transporte", title: "Transporte" },
];

function App() {
  return (
    <>
      <h1>Olá, Nick! 🇧🇷</h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        {SECTIONS.map(({ id, title }) => (
          <div
            key={id}
            style={{
              border: "solid 1px black",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <span>{title}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
