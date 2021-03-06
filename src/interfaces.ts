export type Preset = 'angular' | 'atom' | 'eslint' | 'ember';

export interface LogLevels {
  [severity: string]: {
    color: string;
  };
}

export interface Presets {
  [preset: string]: {
    validate(message: string): boolean;
    ignorePattern?: RegExp;
  };
}

export interface Opts {
  preset?: Preset;
}
