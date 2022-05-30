const button = document.querySelector("button");
const repairList = document.querySelector(".need-repair");

const createVehicle = function (type, numWheels, color) {
  const vehicle = {
    type: type,
    numWheels: numWheels,
    color: color
  };
  return vehicle;
};

const car = createVehicle("car", 4, "blue");
const bicycle = createVehicle("bicycle", 2, "red");
const skateboard = createVehicle("skateboard", 8, "grey");

const myVehicles = [car, bicycle, skateboard];

for (let vehicle of myVehicles) {
  for (let key in vehicle) {
    console.log(key, vehicle[key]);
  }
}

bicycle.needsRepair = true;
skateboard.needsRepair = true;

const showRepairables = function () {
  repairList.innerHTML = "";
  for (let vehicle of myVehicles) {
    if (vehicle.needsRepair === true) {
      let li = document.createElement("li");
      li.innerHTML = `<li> My <span>${vehicle.type}</span> needs to be repaired <3 </li>`;
      repairList.append(li);
    }
  }
};

button.addEventListener("click", showRepairables);
