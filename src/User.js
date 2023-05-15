class User {
  // User code here
  #loggedIn = false;
  #password;
  constructor(username, password, age) {
    this.username = username
    this.#password = password
    this.age = age
  }

  login(password) {
    if (password === this.#password) {
      this.loggedIn = true
    }
    else {
      throw new Error("incorrect")
    }
  }

  logout() {
    this.loggedIn = false
  }
}

module.exports = User
