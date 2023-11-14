import * as vscode from "vscode";
import { topics } from './test_data';



export function handleModules(){
    const modules: Array<{ label: string, detail: string, command: string, iconPath: vscode.ThemeIcon }> = [
		{
			label: "Fundamentals",
			detail: "In Progress",
			command: "wtc-lms topics giant-green-cycle",
			iconPath: new vscode.ThemeIcon('pass-filled', new vscode.ThemeColor("#008000"))
		},
		{
			label: "Object Orientation",
			detail: "Not Started",
			command: "wtc-lms topics black-like-funny",
			iconPath: new vscode.ThemeIcon('pass-filled')
		},
		{
			label: "Web Development",
			detail: "Not Started",
			command: "wtc-lms topics oval-angry-white",
			iconPath: new vscode.ThemeIcon('pass-filled')
		}
	];

	const problems: { [key: string]: Array<{ label: string, detail: string, command: string }> } = {
		"getting_started": [
			{
				label: "Hello World",
				detail: "In Progress",
				command: "wtc-lms problems silly-naive-earth"
			}
		]
	};


	console.log('Congratulations, your extension "wtc-lms" is now active!');
	console.log(modules);

	let disposable = vscode.commands.registerCommand('wtc-lms.modules', async () => {

		vscode.window.showInformationMessage('Hello World from wtc-lms!');
		const module = await vscode.window.showQuickPick(modules, { matchOnDetail: true });
		console.log("Module Clicked", module);
		vscode.window.showInformationMessage(`Selected Module: ${module?.label}`);
		const selected: string = module ? module?.label.toLowerCase().replace(" ", "_") : "";

		try {
			const topic = await vscode.window.showQuickPick(topics[selected], { matchOnDetail: true });
			const selected_topic : string = topic?topic?.label.toLowerCase().replace(" ", "_"):"";
			const problem = await vscode.window.showQuickPick(problems[selected_topic]);
			
		} catch (err) {
			const topic = await vscode.window.showQuickPick([], { matchOnDetail: true });
		}

	

	});
    return disposable;
}

