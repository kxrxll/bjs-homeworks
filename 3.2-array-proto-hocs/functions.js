const weapons = [new Knife (), new Staff (), new Axe (), new StormStaff (), new LongBow (), new Bow ()];

getNames = () => {
    return weapons.map(item => {return item.name});
}

getCountReliableWeapons = (requiredDurability) => {
    return weapons.filter(item => {return item.durability > requiredDurability}).length;
}

hasReliableWeapons = (requiredDurability) => {
    return weapons.some(item => {return item.durability > requiredDurability});
}

getReliableWeaponsNames = (requiredDurability) => {
    return weapons.filter(item => {return item.durability > requiredDurability}).map(item => {return item.name});
}

getTotalDamage = () => {
    return weapons.reduce((previousValue, currentValue) => {return previousValue + currentValue.attack}, 0);
}

getValuestCountToSumValues = (arr, sum) => {
    return arr.reduce((previousValue, currentValue) => {
        if (previousValue.sum < sum) {
            previousValue.counter ++;
            previousValue.sum += currentValue;
            return previousValue
        } else { return previousValue }
    }, { sum: 0, counter: 0}).counter}