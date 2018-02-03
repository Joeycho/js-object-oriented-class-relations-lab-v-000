let driverId=0
let passengerId =100
let tripId=500
let store = {trips: [], drivers: [], passengers:[]}

class Driver{
  constructor(name){
    this.name = name
    this.id = driverId++
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter(trip =>{
      return trip.driverId === this.id
    })
  }

  passengers(){
    return store.passengers
  }


}

class Passenger{
  constructor(name){
    this.name = name
    this.id = passengerId++

    store.passengers.push(this)
  }

  trips(){
    return store.trips.filter(trip =>{
      return trip.passengerId === this.id
    })
  }

  drivers(){
   return store.drivers
  }
}

class Trip{
  constructor(driver, passenger){
    this.driver = driver
    this.passenger = passenger

    this.driverId = driver.id
    this.passengerId = passenger.id
    this.id = tripId++

    store.trips.push(this)

  }

  driver(){
    return store.drivers.find(driver =>{
      return driver.id === this.driverId
    })
  }


  passenger(){
    this.passenger = passenger
    return this.passenger
  }


}
