process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name) {
    console.log(`Your name is: ${name}`);
  }
});

process.stdin.on('close', () => {
  console.log('This important software is now closing\n');
});
