function solve(budget, neededConcrete, discount) {
    let totalPrice = 0;
    let priceWithDiscount = 0;
    let usedDiscount = false;

    const gravelPriceForKg = 0.5;
    const sandPriceForKg = 0.2;
    const cementPriceForKg = 1.1;

    const neededGravel = neededConcrete * 1200;
    const neededSand = neededConcrete * 750;
    const neededCement = neededConcrete * 300;

    const gravelPrice = neededGravel * gravelPriceForKg;
    const sandPrice = neededSand * sandPriceForKg;
    const cementPrice = neededCement * cementPriceForKg;

    totalPrice += gravelPrice;
    totalPrice += sandPrice;
    totalPrice += cementPrice;

    if (totalPrice > 1000) {
        usedDiscount = true;
        priceWithDiscount = totalPrice - (totalPrice * (discount / 100));
    }

    if (budget < priceWithDiscount) {
        console.log(`You can't buy all these things! You need ${(priceWithDiscount - budget).toFixed(2)} BGN more`);
    } else {
        console.log(`The price without discount is ${totalPrice.toFixed(2)} BGN`);
        console.log(`Gravel: ${gravelPrice.toFixed(2)} BGN`);
        console.log(`Sand: ${sandPrice.toFixed(2)} BGN`);
        console.log(`Cement: ${cementPrice.toFixed(2)} BGN`);
        
        if (usedDiscount) {
            console.log(`The price with discount is ${priceWithDiscount.toFixed(2)} BGN`);
        }
    }
}

