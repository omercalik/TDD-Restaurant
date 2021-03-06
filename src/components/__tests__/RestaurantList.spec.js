import { render } from "@testing-library/react"
import { RestaurantList } from "../RestaurantList"

describe("RestaurantList", () => {
  const restaurants = [
    { id: 1, name: "Sushi Place" },
    { id: 2, name: "Pizza Place" },
  ]

  let loadRestaurants
  let context

  beforeEach(() => {
    loadRestaurants = jest.fn().mockName("loadRestaurants")
    context = render(
      <RestaurantList
        restaurants={restaurants}
        loadRestaurants={loadRestaurants}
      />
    )
  })
  it("loads restaurants on first render", () => {
    expect(loadRestaurants).toHaveBeenCalled()
  })

  it("displays the restaurans", () => {
    const { queryByText } = context

    expect(queryByText("Sushi Place")).not.toBeNull()
    expect(queryByText("Pizza Place")).not.toBeNull()
  })
})
