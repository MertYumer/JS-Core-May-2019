function solve(day, service, time){
    let price;

    switch(service){
        case `Fitness`:
            switch(day){
                case `Monday`:
                case `Tuesday`:
                case `Wednesday`:
                case `Thursday`:
                case `Friday`:
                    if (time >= 8 && time <= 15){
                        price = 5;
                    }

                    else{
                        price = 7.5;
                    }

                    break;

                case `Saturday`:
                case `Sunday`:
                    price = 8;
                    break;
            }
            break;

        case `Sauna`:
            switch(day){
                case `Monday`:
                case `Tuesday`:
                case `Wednesday`:
                case `Thursday`:
                case `Friday`:
                    if (time >= 8 && time <= 15){
                        price = 4;
                    }

                    else{
                        price = 6.5;
                    }

                    break;

                case `Saturday`:
                case `Sunday`:
                    price = 7;
                    break;
            }
            break;

        case `Instructor`:
            switch(day){
                case `Monday`:
                case `Tuesday`:
                case `Wednesday`:
                case `Thursday`:
                case `Friday`:
                    if (time >= 8 && time <= 15){
                        price = 10;
                    }

                    else{
                        price = 12.5;
                    }

                    break;

                case `Saturday`:
                case `Sunday`:
                    price = 15;
                    break;
            }
            break;
    }

    console.log(price);
}
