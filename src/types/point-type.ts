export type PointType = {
  id: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

export type PointsType = PointType[];
