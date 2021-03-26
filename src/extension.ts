// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
const init = `
<!DOCTYPE html>
<html>

<head>
    <title>Hello World</title>
    <script type="text/javascript" src="https://unpkg.com/dwt/dist/dynamsoft.webtwain.min.js"></script>
</head>

<body>
    <div id="dwtcontrolContainer"></div>
    <input type="button" value="Acquire" onclick="AcquireImage();" />
    <script type="text/javascript">
		window.onload = function(){
			Dynamsoft.WebTwainEnv.Containers = [{ContainerId:'dwtcontrolContainer', Width:270, Height:350}];
			Dynamsoft.WebTwainEnv.ResourcesPath = "https://unpkg.com/dwt/dist/";
			Dynamsoft.WebTwainEnv.ProductKey = 'LICENSE-KEY';
			Dynamsoft.WebTwainEnv.Load();
		}
        function AcquireImage() {
			var DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
            if (DWObject) {
                if(DWObject.UseLocalService) {
					DWObject.SelectSource(function () {
							var OnAcquireImageSuccess, OnAcquireImageFailure;
							OnAcquireImageSuccess = OnAcquireImageFailure = function () {
								DWObject.CloseSource();
							};
							DWObject.OpenSource();
							DWObject.IfDisableSourceAfterAcquire = true;
							DWObject.AcquireImage(OnAcquireImageSuccess, OnAcquireImageFailure);
						}, function () {
							console.log('SelectSource failed!');
						});
				} else {
					DWObject.LoadImageEx("", -1);
				}
            }
        }
    </script>
</body>

</html>
`
;

export function activate(context: vscode.ExtensionContext) {

	function quickStart() {
		
		let folder = vscode.workspace.rootPath; 
		if (!folder) {
			vscode.window.showWarningMessage('No folder opened!');
			return;
		}

		const htmlFile = path.join(folder, 'index.html');

		fs.writeFile(htmlFile, init, 'utf-8', (err) => {
			if (err) {
				console.log(err);
			}
			else {
				vscode.window.showInformationMessage('Created index.html');
			}
		});
	}

	context.subscriptions.push(...[
		vscode.commands.registerCommand('dwt.create', quickStart),
	]);
}


// this method is called when your extension is deactivated
export function deactivate() {}
