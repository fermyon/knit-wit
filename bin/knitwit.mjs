#!/usr/bin/env node

import { knitWit } from "../dist/index.js";
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';


// Parse command line arguments using yargs
const argv = yargs(hideBin(process.argv))
    .option('out-dir', {
        type: 'string',
        describe: 'Path to combined wit',
        default: 'combined-wit'
    })
    .option('out-package', {
        type: 'string',
        describe: 'The name of the package to be created of the format <namespace>:<name>@<version>',
    }
    )
    .option('out-world', {
        type: 'string',
        describe: 'name of world in combined wit',
        default: 'combined'
    })
    .argv;

knitWit({ outDir: argv['out-dir'], outputWorld: argv['out-world'] });