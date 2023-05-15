class Scooter{
  // scooter code here
  static nextSerial = 1;
  constructor(station, user = {}) {
    this.station = station
    this.user = {...user}
    this.serial = Scooter.nextSerial++
    this.charge = 100
    this.isBroken = false
  }

  rent(user) {
    if (this.charge < 20 && this.isBroken === false) {
      this.user = user;
      this.station = null
      return `this bike has been checked out by ${this.user}`
    } 
    else if (this.isBroken) {
      throw new Error("scooter needs repair.")
    } 
    else if (this.charge < 20) {
      throw new Error("scooter needs to charge.")
    } 
    else {
      throw new Error("Error.")
    }
  }

  dock(station) {
    this.user = null
    this.station = station
  }

  recharge(charge) {
    this.charge = charge
    const updateChargingState = (charge) => {
      this.charge += 10;
      console.log(`Scooter is at ${this.charge}%`);
      if (this.charge === 100) {
        clearInterval(intervalId);
        console.log('Fully charged!');
      }
    }
    const intervalId = setInterval(updateChargingState, 5000, charge)
  }


}
const testUser = new Scooter("green park", {})
console.log(testUser.recharge(60))

module.exports = Scooter
