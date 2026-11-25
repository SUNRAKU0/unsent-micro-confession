// Unsent entry: writes a two-part micro-confession to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// Some passwords are kept like keepsakes: never used, never forgotten, never sent.
const line = 'To: my first love\nI still remember your wifi password. I never use it. I just like knowing I could.';

mkdirSync(outDir, { recursive: true });
// The draft stays in one drawer, so it can sit there unsent for as long as it needs to.
const entryPath = join(outDir, 'entry.txt');
writeFileSync(entryPath, line + '\n', 'utf8');
