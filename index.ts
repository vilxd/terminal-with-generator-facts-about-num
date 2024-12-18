import { input } from '@inquirer/prompts';
import chalk from "chalk"
import chalkAnimation from 'chalk-animation';


const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome(){
        const title = chalkAnimation.rainbow("Welcome to Math Facts Generator")
        await sleep()
        title.stop()
    
}
async function askNum(){
    const answer = await input({ message: 'Enter your number' });
    const url = `http://numbersapi.com/${answer}/math`

    const req = await fetch(url)

    const res = await req.text()

    console.log(`\n${chalk.bold("Received fact:")}\n`, chalk.bgGray(chalk.bold(res)))
}


await welcome()
await askNum()
