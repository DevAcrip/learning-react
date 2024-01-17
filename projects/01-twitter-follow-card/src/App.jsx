import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard initialIsFollowing userName="DevAcrip">
        Jorge Andrés Zapata
      </TwitterFollowCard>

      <TwitterFollowCard initialIsFollowing={false} userName="Midudev">
      Miguel Angel Duran
      </TwitterFollowCard>

      <TwitterFollowCard initialIsFollowing userName="Vizapata">
      Victor Alfonso Zapata
      </TwitterFollowCard>
      
    </section>
  );
}
