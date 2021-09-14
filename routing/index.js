const earthRadius = 6371;

const degreesToRadians = degress => degress * (Math.PI / 180);
const radiansToDegrees = radians => radians * (180 / Math.PI);

const centralAngle = (locationX, locationY) => {
  const locationXRadians = degreesToRadians(locationX.latitude);
  const locationYRadians = degreesToRadians(locationY.latitude);
  return radiansToDegrees(
    Math.acos(
      Math.sin(locationXRadians) * Math.sin(locationYRadians) +
      Math.cos(locationXRadians) *
      Math.cos(locationYRadians) *
      Math.cos(
        degreesToRadians(
          Math.abs(locationX.longitude - locationY.longitude)
        )
      )
    )
  );
}

const greatCircleDistance = angle => 2 * Math.PI * earthRadius * (angle / 360);

const distance = (locationX, locationY) => {
  return greatCircleDistance(centralAngle(locationX, locationY));
}

exports.distance = distance;


