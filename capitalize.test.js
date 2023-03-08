const capitalize = require("./capitalize")
test("it should be capitalized in the first letter", () => {
    expect(capitalize("car")).toBe("Car")
})