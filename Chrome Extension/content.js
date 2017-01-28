// content.js
// ------------------------------------------------------------------
_THIS_SCRIPT = "content";
TESTING_MODE = false;
show_logs = true;

// Loading Veil
var some_variables = "";
var another_variable_to_track = 5;

var html_to_insert_onto_page = `
  <div id="my_extension">
    This is my extension. Insert more HTML here.
  </div>
`;

// Listen for messages
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
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
);

// Actions on Load:

// Do stuff
send_message("background", {"message": "get_saved_data_or_settings"});
