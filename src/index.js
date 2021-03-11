module.exports = function toReadable(number) {
    let units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    if (number === 0) {
        return 'zero'
    }

    else if (number > 0 && number < 20) {
        return units[number - 1]
    }

    else if (number >= 20 && number < 100) {
        let ten = +number.toString().split('')[0]
        let unit = +number.toString().split('')[1]

        if (unit != 0) {
            return tens[ten - 2] + " " + units[unit - 1]
        } else {
            return tens[ten - 2]
        }
    }

    else {
        let hundred = +number.toString().split('')[0]
        let ten = +number.toString().split('')[1]
        let unit = +number.toString().split('')[2]
        let combined = parseInt(ten.toString() + unit.toString())

        if (unit === 0) {
            if (ten === 0 && unit === 0) {
                return units[hundred - 1] + " hundred"
            }
            else if (ten === 1 && unit === 0) {
                return units[hundred - 1] + " hundred" + " ten"
            }
            else {
                return units[hundred - 1] + " hundred " + tens[ten - 2]
            }
        }
        else if (ten === 0) {
            return units[hundred - 1] + " hundred " + units[unit - 1]
        }
        else if (ten === 1) {
            return units[hundred - 1] + " hundred " + units[combined - 1]
        }
        else {
            return units[hundred - 1] + " hundred " + tens[ten - 2] + " " + units[unit - 1]
        }
    }
}
