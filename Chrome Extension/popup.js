// Popup scripts
// ------------------------------------------------------------------
_THIS_SCRIPT = "popup";
show_logs = true;

// Data store
storage = chrome.storage.local;

// Tracked Data:
var some_data = {};
var more_data = [];
var a_setting = true;

// On Receive Message:
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.to === "popup") {
      log("Received message: " + request.message);

      switch (request.message) {

        case "message_type_1":
          // Do stuff
          break;

        case "message_type_2":
          // Do stuff
          break;

        case "etc":
          // Do stuff
          break;

      }
    }
  }
);

// Actions on Load:
document.addEventListener('DOMContentLoaded', function() {
  // Do stuff related to setting up the HTML elements you display
});

send_message("background", {"message": "get_saved_data_or_settings"});
