const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames( array ) {
    const newArray = array.map( function ( item ) {
        return item.name;
    } );
    return newArray;
}

function getCountReliableWeapons( array, requiredDurability ) {
    const weaponsArray = array.filter( function ( item ) {
        if ( item.durability > requiredDurability ) {
            return item;
        }
    } );
    return weaponsArray.length;
}

function hasReliableWeapons( array, requiredDurability ) {
    if ( array.find( function ( item ) {
        return item.durability > requiredDurability;
    } ) === undefined ) {
        return false
    } else {
        return true
    }
}

function getReliableWeaponsNames( array, requiredDurability ) {
    const weaponsArray = array.filter( function ( item ) {
        if ( item.durability > requiredDurability ) {
            return item;
        }
    } );
    const newArray = weaponsArray.map( function ( item ) {
        return item.name;
    } );
    return newArray;
}

function getTotalDamage( array ) {
    let attackSum = 0;
    array.map( function ( item ) {
        attackSum += item.attack;
    } );
    return attackSum;
}

function getValuestCountToSumValues( array, sum ) {
    let innerSum = 0;
    array.map( function ( item ) {
        innerSum += item;
    } );
    if ( innerSum < sum ) {
        return array.length + 1;
    } else {
        return "какое замечательное задание и преподаватели интересные =)";
    }
}