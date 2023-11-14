const { exec } = require('child_process');
exec('wtc-lms token', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  try {
    const regex = /Active token: ({[\s\S]*?})/;
    const user_details_string = stdout.match(regex);
    const parsed_user = user_details_string[1];
  } catch (err) { console.log("Not logged!")};
  console.log(`Output: ${JSON.parse(parsed_user).email}`);
});

