import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="DevAcrip" name="Jorge Andrés Zapata" />
      <TwitterFollowCard userName="Midudev" name="Miguel Angel Duran" />
      <TwitterFollowCard userName="Vizapata" name="Victor Alfonso Zapata" />
      <TwitterFollowCard userName="pheralb" name="Pablo Hernan Gonzales" />
    </section>
  );
}
