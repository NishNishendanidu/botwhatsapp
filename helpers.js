function successfullMessage(msg) {
    return "✅ *kingamda-x*:  ```" + msg + "```"
}
function errorMessage(msg) {
    
  return "🛑 *kingamda-x

                    *:  ```" + msg + "```"

function infoMessage(msg) {
    return "• * kingamda-x:*  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
