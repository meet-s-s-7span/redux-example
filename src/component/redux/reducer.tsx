import { DECREMENT, INCREMENT } from "./constant";

const initialState = { count: 0 };
//   state = { count: 0 }   
// INCREMENT
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return {
              
              count: state.count + 1,
            };
          }
        case DECREMENT:{
            return{
              count: state.count - 1,
            }
        }
        default:
            return state;
    }
} 