// Request the notification and messages json
chrome.runtime.sendMessage({noti:true}, function(response) {
    if(response.notifications){
        console.debug("Notifications Loaded"); // Build Notifications JSON
    } if(response.messages) {
        console.debug("Messages Loaded"); // Build with Messages JSON
    }
});

// Request User connection info if nothing is saved.
chrome.runtime.sendMessage({connect:true}, function(response) {
    console.debug("User Connection: "+response.user); // Build Notifications JSON
});
