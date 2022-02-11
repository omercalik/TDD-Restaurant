import { render } from "@testing-library/react"
import { RestaurantList } from "../RestaurantList"

describe("RestaurantList", () => {
  it("loads restaurants on first render", () => {
    const loadRestaurants = jest.fn().mockName("loadRestaurants")
    const restaurants = []
    render(
      <RestaurantList
        restaurants={restaurants}
        loadRestaurants={loadRestaurants}
      />
    )

    expect(loadRestaurants).toHaveBeenCalled()
  })

  it("displays the restaurans", () => {
    const noop = () => {}
    const restaurants = [
      { id: 1, name: "Sushi Place" },
      { id: 2, name: "Pizza Place" },
    ]

    const { queryByText } = render(
      <RestaurantList loadRestaurants={noop} restaurants={restaurants} />
    )

    expect(queryByText("Sushi Place")).not.toBeNull()
    expect(queryByText("Pizza Place")).not.toBeNull()
  })
})
