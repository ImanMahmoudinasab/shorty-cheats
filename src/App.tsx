import { Nav } from "./components/nav/nav";
import NavContent from "./components/nav/nav-content";
import Space from "./components/space/space";
import { SPACES } from "./constants";
import "./theme/theme.css";

function App() {
  return (
    <>
      <div className="pt-3 ">
        <Nav spaces={SPACES} defaultValue={SPACES[0].id}>
          {SPACES.map((space) => (
            <NavContent
              key={space.id}
              value={space.id}
              className="mb-10 max-w-[1250px] mx-auto"
            >
              <Space areas={space.areas} />
            </NavContent>
          ))}
        </Nav>
      </div>
    </>
  );
}

export default App;
