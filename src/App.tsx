import { useState, useEffect, useRef } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { Sub } from "./types";

interface AppState {
  subs: Array<Sub>;
  newSubsNumber: number;
}

const INITIAL_STATE = [
  {
    nick: "nick1",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=nick1",
    description: "Lorem impusm dolor sit amet consectetur adipisicing elit.",
  },
  {
    nick: "nick2",
    subMonths: 8,
    avatar: "https://i.pravatar.cc/150?u=nick2",
  },
];

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
  };

  return (
    <div className="App" ref={divRef}>
      <h1>Midu practice</h1>
      <h2>React + TypeScript</h2>
      <List subs={subs} />
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}
export default App;
