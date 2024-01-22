import { useEffect, useState } from "react";

function App() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    console.log("Efecto");
  });

  return (
    <>
      <h1>Proyecto 3</h1>
      <button onClick={() => setEnabled(!enabled)}>{enabled ? "Desactivar" : "Activar"} seguir puntero</button>
    </>
  );
}
export default App;
