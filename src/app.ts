
import { program } from 'commander';
import chalk from 'chalk';
import ora, { type Ora } from 'ora';
import { confirm } from '@inquirer/prompts';
import terminalImage from 'terminal-image';

program
    .version('1.0.0')
    .description('shows random cute cat images')
    .action(async () => {
        const answer: boolean = await confirm({ message: `are you sure? ${chalk.yellow('(its so cute!) 🥹')} `, default: true });

        if (!answer) {
            console.log(chalk.bgMagenta("I figured you weren't ready. 🗿"));
            process.exit(0);
        }

        const spinner: Ora = ora('searching a cute cat image... 🐱').start();

        const response = await fetch('https://cataas.com/cat');
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        spinner.succeed('finished!');

        console.log(await terminalImage.buffer(buffer))
    });

program.parse(process.argv);
