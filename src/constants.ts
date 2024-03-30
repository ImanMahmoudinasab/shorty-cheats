import spaces from "./spaces.json";

export const SPACES = (spaces as Space[]).filter((space) => !space.meta.hidden);

export type Space = {
  id: string;
  name: string;
  meta: Record<string, string | boolean>;
  areas: Area[];
};

export type Area = {
  name: string;
  meta: Record<string, string | boolean>;
  commands: Command[];
};

export type Command = {
  name: string;
  meta: Record<string, string | boolean>;
  shortcut: string[];
};
