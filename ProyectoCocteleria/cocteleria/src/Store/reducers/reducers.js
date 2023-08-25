import '../actions/actions';

const initialState = {
  loading: false,
  nameCoctel: '',
  error: null,
};

const coctelReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COCTEL_NAME_START': {
      console.log("estoy en el reducer");
      return {
        ...state,
        loading: true,
        nameCoctel: action.payload.nameCoctel,
      };
    }
    case 'FETCH_COCTEL_NAME_SUCCESS': {
      console.log("activo success del reducer",action.payload.data);
      return {
        ...state,
        loading: false,
        nameCoctel: action.payload.data,
      };
    }
    case 'FETCH_COCTEL_NAME_FAILED': {
      console.log("activo failed del reducer");
      return {
        ...state,
        loading: false,
        nameCoctel: action.payload.error,
      };
    }
    default:
      return state;
  }
};

export default coctelReducer;
