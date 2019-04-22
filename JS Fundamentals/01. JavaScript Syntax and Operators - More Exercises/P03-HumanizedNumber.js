function solve(text){
    text = text.split(/\s+/);

    for (let i = 0; i < text.length; i++) {
        if (!isNaN(text[i])){
            let number = text[i];

            switch (number[number.length - 1]) {
                case "1":
                    console.log(`${number}st`);
                    break;

                case "2":
                    console.log(`${number}nd`);
                    break;

                case "3":
                    console.log(`${number}rd`);
                    break;

                default:
                    console.log(`${number}th`);
                    break;
            }
        }
    }
}
