function getShortMessages(messages) {
   const text = messages.map(word =>word.message)
   return text.filter(text =>text.length<50)
  }
  module.exports = getShortMessages

  