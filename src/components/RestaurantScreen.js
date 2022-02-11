import { Card, CardContent, Typography } from "@material-ui/core"
import RestaurantList from "./RestaurantList"

const RestaurantScreen = () => (
  <Card>
    <CardContent>
      <Typography variant="h5">Restaurants</Typography>
      <RestaurantList />
    </CardContent>
  </Card>
)

export default RestaurantScreen
