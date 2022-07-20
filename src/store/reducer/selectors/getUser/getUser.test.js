import {getUser} from "./getUser";

describe("getUser", () => {
    test("work with empty state", () => {
        expect(getUser({})).toBeUndefined()
    })
})