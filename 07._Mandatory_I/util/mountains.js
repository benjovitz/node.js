const mountains = [
  {
    id: 1,
    name: 'Mount Fuji',
    elevation_meters: 3776,
  },
  {
    id: 2,
    name: 'Mount Everest',
    elevation_meters: 8848,
  },
  {
    id: 3,
    name: 'Kilimanjaro',
    elevation_meters: 5895,
  },
  {
    id: 4,
    name: 'Matterhorn',
    elevation_meters: 4478,
  },
  {
    id: 5,
    name: 'Denali',
    elevation_meters: 6190,
  },
];

function findMountain(id) {
  if (!isNaN(id)) {
    const mountain = mountains.find((mountain) => mountain.id === id);

    return mountain;
  }
  return null;
}

function checkFullBody(body) {
  if (
    body.name
  && body.elevation_meters
  ) {
    return true;
  }
  return false;
}

export { mountains, checkFullBody, findMountain };
