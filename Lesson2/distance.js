//distance.js

function showDistance(speed, time) {
  console.log(speed * time);
}
showDistance(10, 9);
showDistance(100, 20);
showDistance(-56, 25);

function showSpeed(distance, time) {
  console.log(distance / time);
}

showSpeed(100, 6.0);
showSpeed(1000, 4.5);
