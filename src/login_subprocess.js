const { spawn } = require('child_process');

const command = 'wtc-lms';
const args = ['login'];

const proc = spawn(
  command, // the command you want to run, in my case `op`
  args, // arguments you want to use with the above cmd `signin`, etc.
  { stdio: ['pipe', 'pipe', 'inherit'] }
 );




