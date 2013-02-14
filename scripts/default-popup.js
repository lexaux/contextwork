//chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
//    chrome.extension.getBackgroundPage().console.log('triggered event in popup.');
//    switch (request.message) {
//        case 'setText':
//            var dataPiecesStored = 0;
//            if (chrome.extension.getBackgroundPage().dataStorage) {
//                dataPiecesStored = chrome.extension.getBackgroundPage().dataStorage.length;
//            }
//            console.log('Received setText in a popup! currently stored data pieces:' + dataPiecesStored);
//            break;
//
//        default:
//            sendResponse({data:'Invalid arguments'});
//            break;
//    }
//});
