import { homeCalc } from "./individual.js";

document.getElementById("calcBtn").addEventListener("click", () => {
  const location = document.getElementById("location").value;
  const energyBill = document.getElementById("energyBill").value;
  const checkedRadio = document.querySelector(
    'input[name="outlayOption"]:checked',
  );

  if (!checkedRadio) {
    document.getElementById("result").textContent = "Please select a plan";
    return;
  }

  const outlayOption = checkedRadio.value;
  const output = homeCalc(location, outlayOption, energyBill);
  document.getElementById("result").textContent = output;
});
