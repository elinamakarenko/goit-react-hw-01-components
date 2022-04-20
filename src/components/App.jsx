import Profile from "./Profile";
import Statistics from "./Statistics";
import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

export const App = () => {
  return (
    <div>
        <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
   <Statistics title="Upload stats" stats={data} />
   <Statistics stats={data} />
   </div>
  );
};
