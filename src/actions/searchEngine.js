// import Config from './../config'
import axios from 'axios';

export const TRIGGER_SEARCH = 'TRIGGER_SEARCH';
export function receiveProducts(items, setDefault) {
  const st = {
    type: TRIGGER_SEARCH,
    items,
  };
  if (setDefault) {
    st.defaultItems = items;
  }
  return st;
}

export function triggerSearch(query) {
  return (dispatch) => {
    console.log('triggerSearch');
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
