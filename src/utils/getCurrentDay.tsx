

export const  getCurrentDay = () : string=>{
    const date = new Date();
    const day = date.getDay();
    let days ='';
    switch(day){
        case 1:{
            days='Monday';
            break;
        }
        case 2:{
            days='Tuesday';
            break;
        }
        case 3:{
            days='Wednesday';
            break;
        }
        case 4:{
            days='Thuesday';
            break;
        }
        case 5:{
            days='Friday';
            break;
        }
        case 6:{
            days='Saturday';
            break;
        }
        case 0:{
            days='Sunday';
            break;
        }
        default:
            days="Not available"
    }
    return days;
}