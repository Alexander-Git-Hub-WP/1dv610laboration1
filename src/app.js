import readline from 'node:readline'

/**
 * @file A simple greeting application with a ASCII frame.
 * @author Alexander Skogberg <as229kz@student.lnu.se>
 * @version 1.0.0
 */

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

terminal.question('What is your name? ', (namn) => {

    const welcomeMessage = `*  WELCOME BACK FROM THE SUMMER BREAK, ${namn.toUpperCase()}!  *`
    const rowWithStars = '*'.repeat(welcomeMessage.length)

    console.log('\n' + rowWithStars)
    console.log(welcomeMessage)
    console.log(rowWithStars + '\n')

    terminal.close()
})