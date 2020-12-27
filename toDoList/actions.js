// export const setUserName = (data) => {
//     return({
//         type: 'SET_USER_NAME',
//         payload: data,
//     })
// };
// export const setUserPhoneNumber = (data) => {
//     return({
//         type: 'SET_USER_PHONE_NUMBER',
//         payload: data,
//     })
// }
export const setUserInfo = (nameU , numberU) => ({

    type: 'SET_INFO',
        payload: {
            userName : nameU ,
            userNumber : numberU,
        }
});