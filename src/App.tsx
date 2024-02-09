import { Nav } from "./components/nav/nav";
import NavContent from "./components/nav/nav-content";
import { Spaces } from "./constants";
import "./theme/theme.css";

const contents = [
  {
    name: "apps",
    content: "App switch Shortcuts",
  },
  {
    name: "emojis",
    content: "Emojis Shortcuts",
  },
  {
    name: "global",
    content: "Global Shortcuts",
  },
  {
    name: "chrome",
    content: "Chrome Shortcuts",
  },
  {
    name: "vscode",
    content: "VS Code Shortcuts",
  },
  {
    name: "elmedia",
    content: "Elmedia Player Shortcuts",
  },
  {
    name: "slack",
    content: "Slack Shortcuts",
  },
  {
    name: "finder",
    content: "Finder Shortcuts",
  },
];

function App() {
  return (
    <>
      <header className="pt-3">
        <Nav spaces={Spaces} defaultValue="apps">
          {contents.map((content) => (
            <NavContent key={content.name} value={content.name}>
              {content.content}
            </NavContent>
          ))}
        </Nav>
      </header>
    </>
  );
}

export default App;
