import "./App.css";
import React, { useState } from "react";
import TOB from "./Components/TOB";
import Maiden from "./Components/Maiden";
import Bloat from "./Components/Bloat";
import Nylocas from "./Components/Nylocas";
import Sotetseg from "./Components/Sotetseg";
import Xarpus from "./Components/Xarpus";
import Verzik from "./Components/Verzik";
import Equipment from "./Components/Equipment";

function App() {
  const maiden = () => setView(<Maiden tob={tob} />);
  const bloat = () => setView(<Bloat tob={tob} />);
  const nylocas = () => setView(<Nylocas tob={tob} />);
  const sotetseg = () => setView(<Sotetseg tob={tob} />);
  const xarpus = () => setView(<Xarpus tob={tob} />);
  const verzik = () => setView(<Verzik tob={tob} />);
  const equipment = () => setView(<Equipment tob={tob} />);
  const tob = () =>
    setView(
      <TOB
        maiden={maiden}
        bloat={bloat}
        nylocas={nylocas}
        sotetseg={sotetseg}
        xarpus={xarpus}
        verzik={verzik}
        equipment={equipment}
      />
    );
  const [view, setView] = useState(
    <TOB
      maiden={maiden}
      bloat={bloat}
      nylocas={nylocas}
      sotetseg={sotetseg}
      xarpus={xarpus}
      verzik={verzik}
      equipment={equipment}
    />
  );

  return <div>{view}</div>;
}

export default App;
