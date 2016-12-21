# Dynamic Web TWAIN: Cross-platform JavaScript Document Scanning SDK
[Dynamic Web TWAIN][1] is a browser-based document scanning SDK specifically designed for web applications. With just a few lines of JavaScript code, you can develop robust applications to scan documents from TWAIN and SANE compatible scanners, edit the scanned images and save them to a local/server file system or document repository.

## Screenshot

![document scanning on Ubuntu](http://www.codepool.biz/wp-content/uploads/2016/11/dwt-document-scanning-linux.PNG)

## Features
### Support mainstream browsers on **Windows**, **Linux** and **macOS**
Your end users will have the most flexibility on browsers: **Internet Explorer** version 6 and above, **Edge**, **Firefox**, **Chrome**, and **Safari**. Users can scan from **Windows**, **Linux** and **macOS** machines.

### Easy integration and end-user distribution
* JavaScript TWAIN and SANE scanner APIs.
* Supports cookie & session integration for HTTP image uploading.
* MSI installer available for IT managers to easily do batch installations to their entire network.

### Empower your web applications with imaging **add-ons**
* Barcode Reader: Read linear barcodes, QRcode, PDF417 and DataMatrix
* Webcam Capture: Capture images from DirectShow compatible webcams
* PDF Rasterizer: Covert text PDF files to images
* OCR Professional: Extract text (Western and Arabic) from images

[More][2]

## Resources
* [Sample Code][3]
* [Release Notes][4]
* [Developer Center][5]

## How to Use the Extension
Use the prefix **dwt** to list the code snippets in **HTML** files.

![dwt vscode extension](http://www.codepool.biz/wp-content/uploads/2016/12/dwt-vscode-extension.PNG)

## Sample Code: Hello World

```HTML
<!DOCTYPE html>
<head>
    <title>Hello World</title>
    <script type="text/javascript" src="https://www.dynamsoft.com/Demo/DWT/Resources/dynamsoft.webtwain.min.js"> </script>
</head>

<body>
    <input type="button" value="Scan" onclick="AcquireImage();" />
    <div id="dwtcontrolContainer"></div>

    <script type="text/javascript">
    function AcquireImage() {
        var DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
        DWObject.IfDisableSourceAfterAcquire = true;
        var bSelected = DWObject.SelectSource(); 

        if(bSelected) {
            var OnAcquireImageSuccess, OnAcquireImageFailure;
            OnAcquireImageSuccess = OnAcquireImageFailure = function () {
            DWObject.CloseSource();
        };

        DWObject.OpenSource();
        DWObject.AcquireImage(OnAcquireImageSuccess, OnAcquireImageFailure);  
        }
    }
    </script>
</body>
</html>
```

## Blog
[HTML Snippet Extension for Visual Studio Code][6]

[1]:http://www.dynamsoft.com/Products/WebTWAIN_Overview.aspx
[2]:http://www.dynamsoft.com/Products/WebTWAIN_Features.aspx
[3]:http://www.dynamsoft.com/Downloads/WebTWAIN-Sample-Download.aspx
[4]:http://www.dynamsoft.com/Products/WebTWAIN_News.aspx
[5]:http://developer.dynamsoft.com/dwt/
[6]:http://www.codepool.biz/snippet-extension-visual-studio-code.html
