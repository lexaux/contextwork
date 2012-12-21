var bgConsole = chrome.extension.getBackgroundPage().console;

chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    switch (request.message) {
        case 'setText':
            if (!window.dataStorage) {
                window.dataStorage = [];
            }

            window.dataStorage.push(request.data);
            bgConsole.log("Pushed new piece of data. Current size is " + dataStorage.length);
            sendResponse({data:'OK'});
            break;

        default:
            sendResponse({data:'Invalid arguments'});
            break;
    }
});
                                                                                                                               s