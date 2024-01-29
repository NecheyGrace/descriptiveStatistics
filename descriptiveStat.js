class DescriptiveStatistics {
  constructor(data) {
    if (!Array.isArray(data)) {
      throw new Error("Data must be an array of numbers");
    }
    this.data = data;
  }

  // Measures of central tendency
  getMean() {
    return this.data.reduce((sum, value) => sum + value, 0) / this.data.length;
  }

  getMedian() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedData.length / 2);
    return sortedData.length % 2 === 0
      ? (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2
      : sortedData[middleIndex];
  }

  getMode() {
    const counts = {};
    this.data.forEach((value) => (counts[value] = (counts[value] || 0) + 1));
    const maxCount = Math.max(...Object.values(counts));
    const modes = [];
    for (const value in counts) {
      if (counts[value] === maxCount) {
        modes.push(Number(value));
      }
    }
    return modes;
  }

  // Measures of dispersion
  getRange() {
    return Math.max(...this.data) - Math.min(...this.data);
  }

  getVariance() {
    const mean = this.getMean();
    return (
      this.data.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) /
      this.data.length
    );
  }

  getStandardDeviation() {
    return Math.sqrt(this.getVariance());
  }

  getInterquartileRange() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const q1Index = Math.floor(sortedData.length / 4);
    const q3Index = Math.floor((3 * sortedData.length) / 4);
    return sortedData[q3Index] - sortedData[q1Index];
  }
}

// Example usage:
const numbers = [5, 2, 8, 1, 9, 3, 7];
const stats = new DescriptiveStatistics(numbers);
console.log("Mean:", stats.getMean());
console.log("Median:", stats.getMedian());
console.log("Mode:", stats.getMode());
console.log("Range:", stats.getRange());
console.log("Variance:", stats.getVariance());
console.log("Standard Deviation:", stats.getStandardDeviation());
console.log("Interquartile Range:", stats.getInterquartileRange());
