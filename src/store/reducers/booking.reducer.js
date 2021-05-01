import { GET_BOOKING_FAILED, GET_BOOKING_SUCCESS } from "../constanct/booking.constanct";
import { LOGIN_SUCCESS } from "../constanct/user.constanct";

const initialState = {
    listChair: [],
    user: null,
    err: "",
}

const getBookingReducer = (state = initialState, action) => {
    const {type, payload} = action
  switch (type) {
    case GET_BOOKING_SUCCESS: {
      return { ...state, listChair: payload }
    };
    case GET_BOOKING_FAILED: {
      return { ...state, err: payload };
    };
    case "DANG_CHON": {
      const { listChair} = state;
      const index = listChair.danhSachGhe.findIndex(
        (chair) => chair.maGhe === payload.maGhe
      );
      if (index !== -1) {
        const oldChair = listChair.danhSachGhe[index];
        oldChair.dangChon = !oldChair.dangChon;

        listChair[index] = oldChair;
      }
      return { ...state };
    }
    case LOGIN_SUCCESS: {
      return {...state, user: payload}
    }
    
    default:
      return state;
  }
} 

export default getBookingReducer;