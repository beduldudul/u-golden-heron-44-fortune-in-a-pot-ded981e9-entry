import { mkdirSync, writeFileSync } from "node:fs";

// A kind fortune for the houseplant on the windowsill: sun lingers, a new leaf shows off.
const fortune = "This week, sunlight will linger on your leaves a little longer, and you will sprout a new one just to show off.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune);
