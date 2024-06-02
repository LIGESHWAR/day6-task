class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
    }
    calculatePrice(distanceInMiles, timeInMinutes) {
      const distanceCost = this.costPerMile * distanceInMiles;  
      const timeCost = this.costPerMinute * timeInMinutes;  
      const totalCost = this.baseFare + distanceCost + timeCost;  
      return totalCost;
    }
  }
  
 
  const uberCalculator = new UberPriceCalculator(30,23,12);
  const price = uberCalculator.calculatePrice(10, 20);
  console.log(`Total Uber price: ${price.toFixed(2)}`);
  