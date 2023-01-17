import React from "react"
import Card from "./card.component"
import { render } from "@testing-library/react"


describe("Card", () => {
    it("should render Card correctly", () => {
        const mockCharacter = {
            id: 1,
            fullName: "Jon Snow",
            family: "House Stark",
            title: "King of the North",
            imageUrl: "/src/test-img.jpg"
        }
        expect(render(<Card character={mockCharacter}/>)).toMatchSnapshot()
    })
})