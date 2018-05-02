import {receiveMessage} from "./index";

export function triggerSearch(query) {
  return (dispatch, getState) => {
    console.log('triggerSearch', query);
    if (query.toLowerCase() === 'hello') {
      setTimeout(() => {
        dispatch(receiveMessage({text: 'Hi! How are you doing?', author: 'computer'}))
      }, 1000);
    }
    // dispatch(setLoader(true));
    // axios.get(`${Config.productsApiUrl}/bins/17p5d5`)
    //   .then((response) => {
    //     dispatch(receiveProducts(response.data, true));
    //     dispatch(setLoader(false));
    //   })
    //   .catch((error) => {
    //     dispatch(setLoader(false));
    //     console.error(error);
    //   });
  };
}
