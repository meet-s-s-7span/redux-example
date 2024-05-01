import { DECREMENT, INCREMENT } from "./constant";

// INCREMENT

export function incrementValue(count){
    return{
        type: INCREMENT,
        data:count
    }
}

export function decrementValue(count){
    return{
        type: DECREMENT,
        data:count
    }
}