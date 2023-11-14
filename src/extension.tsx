// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { handleLogin } from './login';
import { handleModules } from './modules';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';

class MySidebar extends React.Component {
    render() {
        return <h1>Hello, World!</h1>;
    }
}


export function activate(context: vscode.ExtensionContext) {
	// context.subscriptions.push(handleLogin());
	// context.subscriptions.push(handleModules());
	const panel = vscode.window.createWebviewPanel(
        'sidebar',
        'My Sidebar',
        vscode.ViewColumn.One,
        {}
    );

    const sidebarContent: string = ReactDOMServer.renderToString(<MySidebar />);

    panel.webview.html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Sidebar</title>
        </head>
        <body>
            <div id="root">${sidebarContent}</div>
        </body>
        </html>`;
}



// This method is called when your extension is deactivated
export function deactivate() { }
