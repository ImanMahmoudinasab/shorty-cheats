import * as fs from "fs";
import type { Space, Area } from "../src/constants";
const especialCharactersMap = {
  spacebar: "˽",
  space: "˽",
  semicolon: ";",
  backslash: "\\",
  slash: "/",
  quote: "'",
  comma: ",",
  period: ".",
  open_bracket: "[",
  tab: "⇆",
  caps_lock: "⇪",
} as Record<string, string>;

function Main() {
  const pathToKarabinerFile =
    "/Users/imanMahmoudinasab/Projects/configs/keyboard/karabiner.edn";

  const karabinerFileContent = fs.readFileSync(pathToKarabinerFile, "utf-8");

  let lines = karabinerFileContent
    .trim()
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => !line.startsWith(";"));

  const spaces = [] as Space[];
  let space = null as Space | null;
  let area = null as Area | null;
  let modeKey = "";
  let mainSectionStarted = false;

  for (let line of lines) {
    // find main section start line:
    if (!mainSectionStarted && !line.startsWith(":main")) {
      continue;
    }
    mainSectionStarted = true;

    // when reaches to profile section we are done
    if (line.startsWith(":profiles")) {
      break;
    }

    // when reached :des create a new space
    if (line.startsWith("{:des")) {
      // get space name and label
      const spaceLabel = line.match(/"([^"]*)"/)?.[1] || "";
      const spaceMeta = getMetaData(line);

      space = {
        id: spaceLabel.toLocaleLowerCase().replaceAll(" ", "-"),
        name: spaceLabel,
        meta: spaceMeta,
        areas: [],
      };
      spaces.push(space);
      area = null;
    }

    // skip rules start line:
    if (line.startsWith(":rules")) {
      continue;
    }

    // get area name using condition line
    if (line.startsWith("[:cond")) {
      let condition = line.match(/\[:condi\s*(:.*)\]/)?.[1];
      if (!condition) {
        throw new Error("no condition name found. line: " + line);
      }
      modeKey = condition.match(/:([^\s]*)-mode/)?.[1] || "";
      modeKey =
        modeKey in especialCharactersMap
          ? especialCharactersMap[modeKey]
          : modeKey;

      const areaName = condition.match(/(:app-[^\s]*\s*)?:(.*)\s*/)?.[2] || "";

      const areaMeta = getMetaData(line);
      area = {
        name: areaName,
        meta: areaMeta,
        commands: [],
      };

      space?.areas.push(area);
      continue;
    }

    // skip end of :rules and :main lines
    if (line.startsWith("]")) {
      continue;
    }

    // get commands
    if (line.startsWith("[:")) {
      const shortcut = line.match(/^\[\{?:[#]*([^\s]*)/)?.[1] || "";
      const commandName = line.match(/;\s*(.*)/)?.[1] || "";

      if (!commandName) {
        console.info("command without name. line: ", line);
        continue;
      }

      const shortcutKeys = [modeKey, ...getShortcutKeys(shortcut)];

      const commandMeta = getMetaData(line);
      if (area === null) {
        area = {
          name: "default",
          meta: commandMeta,
          commands: [],
        };
      }
      area.commands.push({
        name:
          typeof commandMeta.command === "string"
            ? commandMeta.command
            : commandName,
        shortcut: shortcutKeys,
        meta: commandMeta,
      });
    }
  }

  fs.writeFileSync("./src/spaces.json", JSON.stringify(spaces, null, 2));
}

function capitalizeFirstLetter(input: string) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

function toModifierKeyName(letter: string) {
  const map = {
    C: "⌘",
    T: "⌃",
    O: "⌥",
    S: "⇧",
    Q: "⌘",
    W: "⌃",
    E: "⌥",
    R: "⇧",
    F: "fn",
  };

  return map[letter as keyof typeof map] || letter;
}

function getShortcutKeys(shortcut: string) {
  const isSpecialChar = shortcut in especialCharactersMap;
  if (isSpecialChar) {
    return especialCharactersMap[shortcut];
  }
  if (!shortcut.match(/^[!#]+/)) {
    return capitalizeFirstLetter(shortcut);
  }
  const tokens = shortcut.split("");
  const shortcutKeys = tokens.reduce((acc, token, index) => {
    if (/[!#]+/.test(token)) {
      return acc;
    }
    if (index === tokens.length - 1) {
      return [...acc, capitalizeFirstLetter(token)];
    }

    return [...acc, toModifierKeyName(token)];
  }, [] as string[]);

  return shortcutKeys;
}

function getMetaData(line: string) {
  const metaString = line.match(/;META:\s*(.*)/)?.[1] || "";
  const metaItems = metaString.split("|");
  const meta = metaItems.reduce(
    (acc, item) => {
      if (!item.split(":")[0].trim()) {
        return acc;
      }
      acc[item.split(":")[0].trim()] = item.split(":")[1]?.trim() || true;
      return acc;
    },
    {} as Record<string, string | boolean>,
  );

  return meta;
}

Main();
