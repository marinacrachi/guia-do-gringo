import { Card } from "./components/Card";
import type { Section } from "./types";

const SECTIONS: Section[] = [
  { id: "essential-phrases", title: "Frases" },
  { id: "culture", title: "Cultura" },
  { id: "transit", title: "Transporte" },
];

function App() {
  return (
    <main>
      <h1>Olá, Nick! 🇧🇷</h1>
      <ul
        role="list"
        style={{
          display: "flex",
          gap: "10px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {SECTIONS.map(({ id, title }) => (
          <Card key={id} title={title} />
        ))}
      </ul>
    </main>
  );
}

export default App;
