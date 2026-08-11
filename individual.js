export function homeCalc(location, outlayOption, energyBill) {
  const sunExposure = {
    hertfordshire: 175,
    london: 150,
    northampton: 200,
  };

  const options = {
    option1: { cost: 5000, baseSavings: 50 },
    option2: { cost: 14000, baseSavings: 180 },
    option3: { cost: 20000, baseSavings: 300 },
  };

  const locationKey = location.toLowerCase();
  const exposureDays = sunExposure[locationKey];
  if (!exposureDays) return "Location not supported";

  const selectedOption = options[outlayOption];
  if (!selectedOption) return "Invalid outlay option selected";

  const yearlyExposure = exposureDays / 365;

  const finalMonthlySavings = selectedOption.baseSavings * yearlyExposure;
  const annualSavings = finalMonthlySavings * 12;
  const paybackYears = (selectedOption.cost / annualSavings).toFixed(1);
  const years = Math.floor(paybackYears);
  const months = (paybackYears - years) * 12;
  const overallSavings = energyBill - finalMonthlySavings;

  return (
    `Location: ${location} (${yearlyExposure.toFixed(2) * 100}% sun this borough gets ). ` +
    `Outlay: £${selectedOption.cost}. ` +
    `You're now Spending: £${overallSavings.toFixed(2)}. a month on energy ` +
    `You are Saving: £${finalMonthlySavings.toFixed(2)}/ a month. ` +
    `Payback Period: ${years.toFixed()} years and ${months.toFixed()} months.`
  );
}
