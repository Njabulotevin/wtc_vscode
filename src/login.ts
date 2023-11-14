import * as vscode from 'vscode';

export function handleLogin() {
    const disposable = vscode.commands.registerCommand("wtc-lms.login", () => {
        const input: vscode.InputBox = vscode.window.createInputBox();
        input.title = "Logging in as nmkhwanazi023@student.wethinkcode.co.za to https://keycloak.wethinkcode.co.za/wtc";
        input.password = true;
        input.show();

        input.onDidAccept(() => {
            vscode.window.showInformationMessage("Login successful. Token expires in 0 days 3 hours 59 minutes at 2023-10-23 17:13:22 +02:00");
            input.hide();
        });
    });
    // onDidWriteTerminalData((event) => {
    //     // Check if the event is from your terminal (by comparing the name)
    //     if (event.terminal.name === 'My New Terminal') {
    //       const output = event.data;
    //       // Do something with the output, such as logging it
    //       console.log('Terminal Output:', output);
    //     }
    //   });
    // const disposable = vscode.commands.registerCommand("wtc-lms.login", ()=>{
    //    const terminal = vscode.window.createTerminal("wtc-lms-login");
    //    const onDidWriteData = vscode.window.onDidChangeTerminalState((event)=>{
    //     console.log("terminal event: ", event);
    //    });
      
    //    terminal.sendText("wtc-lms login");
    //    terminal.show();
       
    // });

    return disposable;
}