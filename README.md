# socket three game

A simple game made with sockets, built as an excuse to play with Next.js. Two players connect and pass a number back and forth. The first player who gets a number sends that number to the server. The server either +1, -1, or +0 to the number to make it divisible by 3. Then it divides the number by 3 and sends it to the other player. This lobbying continues until one of the player receives the number 1. That player is the winner.

# getting started

First, clone the repo:

`git clone https://github.com/ivana94/next-socket-game.git`

Then, install your dependencies:

`npm install`

Lastly, run the server:

`npm run dev`
