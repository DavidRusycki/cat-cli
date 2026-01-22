#!/usr/bin/env bun

import { program } from 'commander';

program
    .version('1.0.0')
    .description('shows random cute cat images')
    .action(() => {
        console.log("test cli");
    });

program.parse(process.argv);
