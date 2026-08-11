export function businessCalc(location, outlayOption, energyBill) {
  const sunExposure = {
    hertfordshire: 1.0,
    london: 0.8,
    northampton: 1.2,
  };

  const options = {
    option1: { cost: 50000, baseSavings: 500 },
    option2: { cost: 140000, baseSavings: 1800 },
    option3: { cost: 200000, baseSavings: 3000 },
  };

  const locationKey = location.toLowerCase();
  const exposureMultiplier = sunExposure[locationKey];
  if (!exposureMultiplier) return "Location not supported";

  const selectedOption = options[outlayOption];
  if (!selectedOption) return "Invalid outlay option selected";

  const finalMonthlySavings = selectedOption.baseSavings * exposureMultiplier;

  const annualSavings = finalMonthlySavings * 12;
  const paybackYears = (selectedOption.cost / annualSavings).toFixed(1);

  return (
    `Location: ${location} (${exposureMultiplier * 100}% sun exposure). ` +
    `Outlay: £${selectedOption.cost}. ` +
    `Adjusted Savings: £${finalMonthlySavings.toFixed(2)}/month. ` +
    `Payback Period: ${paybackYears} years.`
  );
}

console.log(businessCalc("Hertfordshire", "option1", 500));

module.exports = { businessCalc };