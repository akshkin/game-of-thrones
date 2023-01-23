import React from "react"
import CardList from "./card-list.component"
import { render } from "@testing-library/react"


describe("CardList", () => {
    test("should render CardList correctly", () => {
        const mockCharacters = [
            {
                id: 1,
                fullName: "Jon Snow",
                family: "House Stark",
                title: "King of the North",
                imageUrl: "/src/test-img.jpg"
            },
            {
                id: 2,
                fullName: "Samwell Tarly",
                family: "House Tarly",
                title: "Maester",
                imageUrl: "/src/test-img.jpg"
            }
        ]
        expect(render(<CardList characters={mockCharacters}/>)).toMatchSnapshot()
    })
})