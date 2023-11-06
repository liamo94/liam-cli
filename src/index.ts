#!/usr/bin/env node

import { Command } from "commander";
import { parseUrl } from "./urlParser";

const program = new Command();

program
  .name("Liam cli")
  .description("A cli of utility functions useful for Liam")
  .version("1.0.0");

program
  .command("url")
  .description("Parse url")
  .argument("<url>", "url string")
  .action((url) => {
    parseUrl(url);
  });

program.parse();
