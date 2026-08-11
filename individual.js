export function homeCalc(location, outlayOption, energyBill) {
  const sunExposure = {
    hertfordshire: 1.0,
    london: 0.8,
    northampton: 1.2,
  };

  const options = {
    option1: { cost: 5000, baseSavings: 50 },
    option2: { cost: 14000, baseSavings: 180 },
    option3: { cost: 20000, baseSavings: 300 },
  };

  const locationKey = location.toLowerCase();
  const exposureMultiplier = sunExposure[locationKey];
  if (!exposureMultiplier) return "Location not supported";

  const selectedOption = options[outlayOption];

  if (!selectedOption) {
    return "Invalid outlay option selected";
  } else if (selectedOption > baseSavings) {
    return "House not applicable";
  }

  const finalMonthlySavings = selectedOption.baseSavings * exposureMultiplier;

  const annualSavings = finalMonthlySavings * 12;
  const paybackYears = (selectedOption.cost / annualSavings).toFixed(1);
  const overallSavings = energyBill - finalMonthlySavings;

  return (
    `Location: ${location} (${exposureMultiplier * 100}% sun exposure). ` +
    `Outlay: £${selectedOption.cost}. ` +
    `You're now Spending: £${overallSavings}. a month on energy ` +
    `You are Saving: £${finalMonthlySavings.toFixed(2)}/ a month. ` +
    `Payback Period: ${paybackYears} years.`
  );
}
