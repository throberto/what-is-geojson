import { searchForNearbyCars, Car, User } from "../index";

describe("sample", () => {
  const user: User = {
    type: "Feature",
    properties: { id: "1", name: "Du" },
    geometry: {
      type: "Point",
      coordinates: [-46.795763075351715, -21.970133678633424],
    },
  };

  const cars: Car[] = [
    {
      type: "Feature",
      properties: {
        id: "1",
        model: "Fiat Uno",
        driver: "Gustavo",
        identifier: "A",
      },
      geometry: {
        type: "Point",
        coordinates: [-46.79624319076538, -21.970392370525975],
      },
    },
    {
      type: "Feature",
      properties: {
        id: "2",
        model: "BMW",
        driver: "Pedro",
        identifier: "VB",
      },
      geometry: {
        type: "Point",
        coordinates: [-46.79493695497513, -21.970571464637082],
      },
    },
    {
      type: "Feature",
      properties: {
        id: "3",
        model: "Chevrolet Corsa",
        driver: "Renan",
        identifier: "S",
      },
      geometry: {
        type: "Point",
        coordinates: [-46.794676780700684, -21.96885513678386],
      },
    },
  ];
  test("", () => {
    expect(searchForNearbyCars(user, cars, 200).length).toBe(2);
  });

  test("", () => {
    expect(searchForNearbyCars(user, cars, 200, "Fiat Uno").length).toBe(1);
  });

  test("", () => {
    expect(searchForNearbyCars(user, cars, 200, "Ford").length).toBe(0);
  });

  test("", () => {
    expect(() => searchForNearbyCars(user, cars, 0)).toThrow(
      new Error("radius to be greater then 0")
    );
  });
});
