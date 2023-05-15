const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(stations, registeredUsers) {
    this.stations = []
    this.registeredUsers = []
  }

  registerUser(username, password, age) {
    if (age < 18) {
      console.log(`user is too young to register`)
      return false
    } 
    else if (this.registeredUsers.find(user => user.username === username)) {
      console.log("user is already registered")
      return false
    } 
    else {
      const newUser = new User(username, password, age)
      this.registeredUsers.push(newUser)
      console.log("new user registred!")
      return newUser
    }
  } 

  loginUser(username, password) {
    if (this.registeredUsers.find(user => user.username === username)) {
      this.login(username, password)
      return `user has been logged in.`
    }
  }
  logoutUser() {
    if (this.registeredUsers.find(user => user.username === username)) {
      this.logout()
      return `user has been logged out.`
      } 
      else {
        throw new Error("no such user is logged in")
      }
  }
  
  createScooter(station) {
    newScooter = new Scooter(station, {})
    this.stations.push(newScooter)
  }

}

module.exports = ScooterApp
