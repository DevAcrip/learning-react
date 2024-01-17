import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Angel Duran",
    isFollowing: true,
  },
  {
    userName: "DevAcrip",
    name: "Jorge Andres Zapata",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo Hernandez",
    isFollowing: false,
  },
  {
    userName: "vizapata",
    name: "Victor Alfonso Zapata",
    isFollowing: true,
  },
];

export function App() {
  return (
    <section className="App">
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  );
}
