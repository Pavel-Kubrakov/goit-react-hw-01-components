import {ProfileCard} from "./components/ProfileCard";
import user from "./user.json"

export default App;

function App() {
  return (
    <ProfileCard user={user}>
    </ProfileCard>
  );
}