import "./App.css";
import { Profile } from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import user from "./components/Profile/user.json";
import statisticalData from "./components/Statistics/statistical-data.json";

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
    </div>
  );
}

export default App;
