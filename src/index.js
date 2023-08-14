module.exports = function toReadable(number) {
    const one = [
 '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
];

    const single = [
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

    const ten = [
 '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

    let result = '';
      if (number === 0) return 'zero';
      if (number >= 100) {
        result += one[Math.floor(number / 100)] + ' hundred ';
        number %= 100;
      }
      if (number >= 10 && number <= 19) {
        result += single[number - 10];
        number = 0;
      } else if (number >= 20) {
        result += ten[Math.floor(number / 10)];
        number %= 10;
        if (number > 0) result += ' ';
      }
      if (number > 0) {
        result += one[number];
      }
      return result.trim();
  };