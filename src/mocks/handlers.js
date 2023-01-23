import { rest } from "msw";

export const handlers= [
    rest.get("https://thronesapi.com/api/v2/Characters", (req, res, ctx) => {
        return res(
            ctx.json([
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
            ])
        )
    }),
]