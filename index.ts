import buffer from "@turf/buffer";
import booleanIntersects from "@turf/boolean-intersects";

export type User = GeoJSON.Feature<
  GeoJSON.Point,
  {
    id: string;
    name: string;
  }
>;

export type Car = GeoJSON.Feature<
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
 * the search radius in meters, a list of available cars,
 * the car model optionally and returns a list of available cars within
 * the search radius from the user.
 *
 * @param user User
 * @param cars Car[]
 * @param radius number (in meters)
 * @param model number (optional)
 * @return Car[]
 */
export const searchForNearbyCars = (
  user: User,
  cars: Car[],
  radius: number,
  model?: string
): Car[] => {
  if (radius <= 0) throw Error("radius to be greater then 0");

  const search = buffer(user, radius / 2, { units: "meters" });

  return cars.filter((car) => {
    const {
      properties: { model: carModel },
    } = car;

    return booleanIntersects(search, car) && (!model || model === carModel);
  });
};
