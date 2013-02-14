document.addEventListener('mouseup', function (event) {
    var selection = window.getSelection().toString();
    if (event.ctrlKey && selection.length) {

        var data = {};
        data.url = window.location;
        data.scrollPosition = getScrollPosition();
        data.selectionText = selection;
        chrome.extension.sendRequest({'message':'setText', 'data':data},
            function (response) {
            })
    }
})

function getScrollPosition() {
    var pos = {}

    var doc = document.documentElement, body = document.body;
    pos.left = (doc && doc.scrollLeft || body && body.scrollLeft || 0);
    pos.top = (doc && doc.scrollTop || body && body.scrollTop || 0);
    return pos;

}