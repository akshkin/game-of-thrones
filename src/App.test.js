import React from "react"
import App from "./App"
import { render, screen, waitFor } from "@testing-library/react"
import user from "@testing-library/user-event"
import SearchBar from "./components/search-bar/search-bar.component"

describe("App", () => {

    it("should render App correctly", () => {
        expect(render(<App />)).toMatchSnapshot()
    })
    
    it("SearchBar should set searchField to the typed input on pressing Enter", async() => {
        const mockSetSearch = jest.fn()
        render(<SearchBar setSearchField={mockSetSearch} />)


        //find searchbar
        const search = screen.getByRole("search")

        //simulate events
        user.click(search)
        user.keyboard("Jo")
        user.keyboard("{Enter}")

        //assertions
        expect(mockSetSearch).toHaveBeenCalled()
        expect(search.value).toEqual("Jo")
    })
    
    test("should get characters from server", async() => {
        render(<App />)
        const headings = await screen.findAllByRole("heading")
        expect(headings).toHaveLength(2)
        
        
    })
    
    test("should filter characters based on search term", async() => {
        render(<App />)
        const search = screen.getByRole("search")
        
        user.click(search)
        user.keyboard("Jo")
        user.keyboard("{Enter}")
        await waitFor(async () => {
            const headings = await screen.findAllByRole("heading")
            expect(headings).toHaveLength(1)
    
        })
    })



    // test("should filter characters based on searchTerm", () => {
    //     render(<App />)
    //     const search = screen.getByRole("search")

    // })
})