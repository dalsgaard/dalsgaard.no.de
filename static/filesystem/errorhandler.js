
function errorHandler(e) {
  var msg = "";
  switch (e.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      msg = "Quota Exceeded Error"
      break;
    case FileError.NOT_FOUND_ERR:
      msg = "Not Found Error";
      break;
    case FileError.SECURITY_ERR:
      msg = "Security Error";
      break;
    case FileError.INVALID_MODIFICATION_ERR:
      msg = "Invalid Modification Error";
      break;
    case FileError.INVALID_STATE_ERR:
      msg = "Invalid State Error"
      break;
    default:
      msg = 'Unknown Error';
      break;
  };
  console.log('Error: ' + msg);
}
