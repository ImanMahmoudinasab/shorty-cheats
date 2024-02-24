export const SPACES = [
  {
    name: "apps",
    label: "App switch",
    areas: [
      {
        name: "Applications",
        commands: [
          {
            name: "VS Code",
            shortcut: [";", "V"],
          },
          {
            name: "Finder",
            shortcut: [";", "F"],
          },
          {
            name: "Chrome",
            shortcut: [";", "G"],
          },
          {
            name: "Slack",
            shortcut: ["a", "K"],
          },
          {
            name: "Elmedia",
            shortcut: [";", "E"],
          },
        ],
      },
      {
        name: "Navigation",
        commands: [
          {
            name: "Go to Previous App",
            shortcut: ["a", "Space"],
          },
        ],
      },
    ],
  },
  {
    name: "global",
    label: "Global",
    areas: [
      {
        name: "d-mode , k-mode",
        commands: [
          {
            name: "screenshot",
            shortcut: ["k", "1"],
          },
          {
            name: "screenshot & annotate",
            shortcut: ["k", "2"],
          },
          {
            name: "show clipboard",
            shortcut: ["k", "3"],
          },
          {
            name: "screen record",
            shortcut: ["k", "4"],
          },
          {
            name: "copy",
            shortcut: ["d", "C"],
          },
          {
            name: "cut",
            shortcut: ["d", "X"],
          },
          {
            name: "paste",
            shortcut: ["d", "V"],
          },
          {
            name: "clipboard",
            shortcut: ["d", "P"],
          },
          {
            name: "select all",
            shortcut: ["d", "Y"],
          },
          {
            name: "undo",
            shortcut: ["d", "H"],
          },
          {
            name: "left desktop",
            shortcut: ["d", "J"],
          },
          {
            name: "mission control",
            shortcut: ["d", "K"],
          },
          {
            name: "right desktop",
            shortcut: ["d", "L"],
          },
          {
            name: "alfred / Spotlight",
            shortcut: ["d", "N"],
          },
          {
            name: "quit",
            shortcut: ["d", "M"],
          },
          {
            name: "escape",
            shortcut: ["d", "/"],
          },
          {
            name: "backspace",
            shortcut: ["d", "<"],
          },
          {
            name: "delete",
            shortcut: ["d", ">"],
          },
        ],
      },
      {
        name: "f-mode , j-mode",
        commands: [
          {
            name: "Arrow Left",
            shortcut: ["f", "J"],
          },
          {
            name: "Arrow Right",
            shortcut: ["f", "L"],
          },
          {
            name: "Arrow Up",
            shortcut: ["f", "I"],
          },
          {
            name: "Arrow Down",
            shortcut: ["f", "K"],
          },
          {
            name: "Backspace",
            shortcut: ["f", ","],
          },
          {
            name: "Delete",
            shortcut: ["f", "."],
          },
          {
            name: "Page Up",
            shortcut: ["f", "P"],
          },
          {
            name: "Page Down",
            shortcut: ["f", ";"],
          },
          {
            name: "Home",
            shortcut: ["f", "Y"],
          },
          {
            name: "End",
            shortcut: ["f", "H"],
          },
          {
            name: "Screenshot",
            shortcut: ["f", "Q"],
          },
          {
            name: "Screenshot & Annotate",
            shortcut: ["f", "W"],
          },
          {
            name: "Show Clipboard",
            shortcut: ["f", "E"],
          },
          {
            name: "Copy",
            shortcut: ["f", "A"],
          },
          {
            name: "Cut",
            shortcut: ["f", "S"],
          },
          {
            name: "Paste",
            shortcut: ["f", "D"],
          },
          {
            name: "Escape",
            shortcut: ["j", "CapsLock"],
          },
        ],
      },
      {
        name: "Spacebar mode",
        commands: [
          {
            name: "[",
            shortcut: ["˽", "a"],
          },
          {
            name: "]",
            shortcut: ["˽", "s"],
          },
          {
            name: "(",
            shortcut: ["˽", "d"],
          },
          {
            name: ")",
            shortcut: ["˽", "f"],
          },
          {
            name: "{",
            shortcut: ["˽", "j"],
          },
          {
            name: "}",
            shortcut: ["˽", "k"],
          },
          {
            name: "<",
            shortcut: ["˽", "l"],
          },
          {
            name: ">",
            shortcut: ["˽", ";"],
          },
          {
            name: "=",
            shortcut: ["˽", "w"],
          },
          {
            name: "===",
            shortcut: ["˽", "e"],
          },
          {
            name: "!==",
            shortcut: ["˽", "r"],
          },
          {
            name: "()=>",
            shortcut: ["˽", "t"],
          },
        ],
      },
      {
        name: "Emojis",
        commands: [
          {
            name: "Emoji Picker",
            shortcut: ["z", "N"],
          },
          {
            name: "😐",
            shortcut: ["z", "/"],
          },
          {
            name: "😂",
            shortcut: ["z", "J"],
          },
          {
            name: "👍",
            shortcut: ["z", "L"],
          },
          {
            name: "😄",
            shortcut: ["z", "H"],
          },
          {
            name: "😜",
            shortcut: ["z", "P"],
          },
          {
            name: "☺️",
            shortcut: ["z", "Y"],
          },
          {
            name: "⚠️",
            shortcut: ["/", "1"],
          },
          {
            name: "😤",
            shortcut: ["/", "A"],
          },
          {
            name: "🙇🏻‍♂️",
            shortcut: ["/", "B"],
          },
          {
            name: "😢",
            shortcut: ["/", "C"],
          },
          {
            name: "😁",
            shortcut: ["/", "D"],
          },
          {
            name: "🤝",
            shortcut: ["/", "S"],
          },
          {
            name: "🤔",
            shortcut: ["/", "T"],
          },
          {
            name: "✅",
            shortcut: ["/", "Q"],
          },
          {
            name: "😉",
            shortcut: ["/", "W"],
          },
          {
            name: "🤨",
            shortcut: ["/", "R"],
          },
          {
            name: "😬",
            shortcut: ["/", "X"],
          },
        ],
      },
    ],
  },
  { name: "chrome", label: "Chrome" },
  { name: "vscode", label: "VS Code" },
  { name: "elmedia", label: "Elmedia Player" },
  { name: "slack", label: "Slack" },
  { name: "finder", label: "Finder" },
] as Space[];

type Command = {
  name: string;
  shortcut: string[];
};

export type Area = {
  name: string;
  commands: Command[];
};

export type Space = {
  name: string;
  label: string;
  areas: Area[];
};
