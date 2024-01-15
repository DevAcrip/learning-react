import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing userName="DevAcrip">
        Jorge Andrés Zapata
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing userName="Midudev">
      Miguel Angel Duran
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing userName="Vizapata">
      Victor Alfonso Zapata
      </TwitterFollowCard>
      
    </section>
  );
}
