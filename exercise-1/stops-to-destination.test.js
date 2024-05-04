const calculateStopsToDestination = require("./stops-to-destination")

// https://jestjs.io/docs/getting-started
// https://jestjs.io/docs/expect

// Run tests with: npm test -- stops-to-destination.test.js

describe("stops to destination", () => {

    test("should throw error if start or end parameters are missing", () => {
        expect(() => calculateStopsToDestination()).toThrow()
    })
	
    test("should return 0 if the start is the same as the end", () => {
        expect(calculateStopsToDestination("Oval", "Oval")).toBe(0)
    })

    test("should throw an error if start station is not in list", () => {
        expect(() => calculateStopsToDestination("Paddington", "Oval")).toThrow()
    })

    test("should throw an error if end station is not in list", () => {
        expect(() => calculateStopsToDestination("Oval", "Paddington")).toThrow()
    })

    test("should return number of stops to the destination", () => {
        expect(calculateStopsToDestination("Morden", "Balham")).toBe(5)
    })

    test("should return number of stops to the destination when the destination is before the start", () => {
        expect(calculateStopsToDestination("Balham", "Morden")).toBe(5)
    })
})
