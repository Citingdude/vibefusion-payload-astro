import * as migration_20260821_082802 from './20260821_082802';

export const migrations = [
  {
    up: migration_20260821_082802.up,
    down: migration_20260821_082802.down,
    name: '20260821_082802'
  },
];
