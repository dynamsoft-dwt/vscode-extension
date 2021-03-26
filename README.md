# Dynamic Web TWAIN: Cross-platform JavaScript Document Scanning SDK
[Dynamic Web TWAIN](https://www.dynamsoft.com/web-twain/overview/) is a browser-based document scanning SDK specifically designed for web applications. With just a few lines of JavaScript code, you can develop robust applications to scan documents from TWAIN and SANE compatible scanners, edit the scanned images and save them to a local/server file system or document repository.

## Online Demo
Try it [here](https://demo.dynamsoft.com/web-twain/).

![document scanning on Ubuntu](https://www.codepool.biz/wp-content/uploads/2016/11/dwt-document-scanning-linux.PNG)

## Features
- Support **Windows**, **Linux**, **macOS**, **Raspberry Pi**, and **Jetson Nano**
- Easy integration and end-user distribution
- Empower your web applications with imaging **add-ons**
    * Barcode Reader: Read linear barcodes, QRcode, PDF417, and DataMatrix
    * Webcam Capture: Capture images from USB webcams
    * PDF Rasterizer: Covert text PDF files to images
    * OCR Professional: Extract text (Western and Arabic) from images

## API Documentation
https://www.dynamsoft.com/web-twain/docs/about/index.html

## How to Use the Extension
- Press **F1** and type in **dwt** to quickly create a "Hello World" program.
- Use the prefix **dwt** to show code snippets in **HTML** files.

![dwt vscode extension](https://www.codepool.biz/wp-content/uploads/2016/12/dwt-vscode-extension.PNG)

## Quick Start

```HTML
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
			Dynamsoft.WebTwainEnv.ProductKey = 'PRODUCT-KEYS';
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
```

## License Key
Please visit https://www.dynamsoft.com/customer/license/trialLicense to get a valid license and update `LICENSE-KEY`:

```js
Dynamsoft.WebTwainEnv.ProductKey = 'LICENSE-KEY';
```