function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
    return submittedUsers.every(submittedUsers===goodUsers)
    };
  }

  module.exports = checkUsersValid