const User = require('../src/User')

describe("user object", () => {
    const userTest = new User("testUser", "testpass", 20);
test("creates instance of user", () => {
    expect(userTest instanceof User).toBe(true);
    // User tests here
})
    // testing username, password and age
test("returns instance with correct props", () => {
    expect(userTest).toHaveProperty("username")
    expect(userTest).toHaveProperty("password")
    expect(userTest).toHaveProperty("age")
})

// test login

// test logout

})