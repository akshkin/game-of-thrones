import React from "react"
import { render, screen, waitFor } from "@testing-library/react";
import Quote from "./quote.component"
import user from "@testing-library/user-event";

describe('Quote', () => {
    test("expect to render Quote correctly", () => {      
        expect(render(<Quote />)).toMatchSnapshot()
    })

    test.only("should generate new quote on clicking the button", async () => {
        render(<Quote />)
        const button = screen.getByRole("button")
        user.click(button)
        await waitFor(async() => {
            const blockquote = await screen.findByTestId("blockquote")
            expect(blockquote).toHaveTextContent("It's better to be cruel than weak.")
        })
        await waitFor(async() => {
            const cite = await screen.findByTestId("cite")
            expect(cite).toHaveTextContent(/Theon Greyjoy/)
        })
    })
});