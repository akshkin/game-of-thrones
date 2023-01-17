import React from "react"
import Quote from "./quote.component"
import { render } from "@testing-library/react"


describe("Quote", () => {
    it("should render Quote correctly", () => {
        expect(render(<Quote />)).toMatchSnapshot()
    })
})