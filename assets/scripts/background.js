// PLANS:
//-----------------------------------------------
// ALL ajax will be done via the background page.
//----
// First run will get json and save it somewhere.
//----
// Next runs will check the first notification to see if it is new, or if it's "seen" status has changed
//   *If true, re-save the full json, and create a notification for new.
//----
// When popout is opened it will send a message to the background page, requesting the json file.
//    *This will force the background page to check the api again for update.
//        *If no change send saved json
//        *If change then update json file, then send file.
//----
// Popout page will build notifications/messages base off of json file
//----
localStorage['connected'] = (!localStorage['connected'])? "false":localStorage['connected'];
localStorage['connecting'] = "false";

setInterval(usrConnect, 3000);


// Send/Recieve instructions from init.js
chrome.runtime.onMessage.addListener(function(request, sender, send){
    if(request.noti){ // Send JSON to build the notification and message lists.
        var noti = getNoti();
        var mess = getMess();
        send({
            notifications: noti,
            messages: mess
        });
    } if (request.connect) { // Send JSON or object with connection info
        var connect = usrConnect();
        send({user: connect}); // "Connected"  or "Failed"
    }
});

function getNoti(){ // Get/Store Notiifications json

}

function getMess(){ // Get/Store Messages JSON

}

function usrConnect(){ // Get/Store user connection information
    if(localStorage['connected'] == "false" && localStorage['connecting'] == "false"){
        localStorage['connecting'] = "true"; // To prevent attempt of another connection before ajax complete
        console.debug("Attempting User Connection");
        //ajax
        localStorage['connecting'] = "false"; // Set to false when ajax complete
    }
}
