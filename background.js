// background.js
// ------------------------------------------------------------------
_THIS_SCRIPT = "background";
show_logs = true;

// Tracked Data:
var some_data = {};
var more_data = [];
var a_setting = true;

chrome.storage.local.get({"data_or_settings": "default_if_no_saved_value"}, function(data) {
  some_data = data["data_or_settings"];
  // Do stuff
});

// Listen for messages
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.to === "background") {
      log("Received message: " + request.message);

      switch (request.message) {

        case "get_saved_data_or_settings":
          send_message(request.from, {"message": "data_or_settings", "data_or_settings": ["some stuff"]});
          break;

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
