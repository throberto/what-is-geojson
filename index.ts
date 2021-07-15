type User = GeoJSON.Feature<
  GeoJSON.Point,
  {
    id: string;
    name: string;
  }
>;

type Car = GeoJSON.Feature<
  GeoJSON.Point,
  {
    id: string;
    driver: string;
    identifier: string;
    model: string;
  }
>;

/**
 * Function that receives a position from a user,
 * the search radius in meters, a list of available cars and returns a
 * list of available cars within the search radius from the user.
 *
 * @param user User
 * @param cars Car[]
 * @param radius number
 * @return Car[]
 */
export const searchForNearbyCars = (
  _user: GeoJSON.Feature,
  _cars: GeoJSON.Feature[],
  _radius: number
): GeoJSON.Feature[] => [];
