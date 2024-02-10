import { Nav } from "./components/nav/nav";
import NavContent from "./components/nav/nav-content";
import Space from "./components/space/space";
import { SPACES } from "./constants";
import "./theme/theme.css";

function App() {
  return (
    <>
      <div className="pt-3 max-w-[1250px] mx-auto">
        <Nav spaces={SPACES} defaultValue="apps">
          {SPACES.map((space) => (
            <NavContent key={space.name} value={space.name}>
              <Space areas={space.areas} />
            </NavContent>
          ))}
        </Nav>
      </div>
    </>
  );
}

export default App;
