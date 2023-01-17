import React from "react"
import { render } from "@testing-library/react";
import Quote from "./quote.component"

describe('Quote', () => {
    it("expect to render Quote correctly", () => {      
        expect(render(<Quote />)).toMatchSnapshot()
    })
});