export const initialState = {
    usersInfo : [{
        userName: "Name",
        userNumber: "Number",
    }]
}
function reducerone(state = initialState , action) {
    switch (action.type) {
    case 'SET_INFO':
        return {        
        usersInfo: [...state.usersInfo , action.payload]
        };
    default:
        return state;
    }
}
export default reducerone;