// ----------------------------------------------------------------------------
// Selected functions from helper.js (https://github.com/sosier/helper.js)
// ----------------------------------------------------------------------------

// Console Logging Function
var log = function(text) {
  /*
  Logs message to the console
  Looks for a global show_logs (boolean) constant before printing
    - If show_logs not declared will log text
  Saves the time writing "console."

  IN:
    text = String to log to javascript console
  */

  if (typeof show_logs == "undefined" || show_logs) {
    console.log(text);
  }
};

// Chrome Extension Messaging Function
var send_message = function(to, message) {
  if (to == "background") {
    message.to = to;
    message.from = _THIS_SCRIPT;
    chrome.runtime.sendMessage(message);
    log("Sent message: " + message.message);
  }
  else if (to == "popup") {
    message.to = to;
    message.from = _THIS_SCRIPT;
    chrome.runtime.sendMessage(message);
    log("Sent message: " + message.message);
  }
  else {
    message.to = to;
    message.from = _THIS_SCRIPT;
    chrome.tabs.sendMessage(to, message);
    log("Sent message: " + message.message);
  }
};
