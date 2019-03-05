import requestHandler from './utils/request-handler';
import * as CONSTANT from './constant';
import { browserHistory } from './App';

export const fetchUsers = () => {
  return dispatch => {
    const options = {
      type: 'get',
      url: '/users',
    };

    dispatch({ type: CONSTANT.LOADING, payload: true });

    requestHandler(options)
      .then(({ data }) => {
        dispatch({ type: CONSTANT.USERS, payload: data });
        dispatch({ type: CONSTANT.IS_LOADED, payload: true });
        dispatch({ type: CONSTANT.LOADING, payload: false });
      }).catch(() => {
        dispatch({ type: CONSTANT.LOADING, payload: false });
      });
  };
};

export const fetchUser = (id) => {
  return dispatch => {
    const options = {
      type: 'get',
      url: `/users/${id}`,
    };

    dispatch({ type: CONSTANT.LOADING, payload: true });

    requestHandler(options)
      .then(({ data }) => {
        dispatch({ type: CONSTANT.USER, payload: data || {} });
        dispatch({ type: CONSTANT.LOADING, payload: false });
      }).catch(() => {
        dispatch({ type: CONSTANT.LOADING, payload: false });
      });
  };
};


export const saveUser = (data) => {
  return (dispatch, getState) => {
    const options = {
      type: 'put',
      url: '/',
      data
    };

    dispatch({ type: CONSTANT.LOADING, payload: true });

    requestHandler(options)
      .then(() => {
        const mockResponse = getState()[CONSTANT.USERS].map(item => {
          if (+item.id === +data.id) {
            return {
              ...item,
              name: data.name,
            };
          }
          return item;
        });
        dispatch({ type: CONSTANT.USERS, payload: mockResponse });
        dispatch({ type: CONSTANT.LOADING, payload: false });
        browserHistory.push('/');
      }).catch(() => {
        dispatch({ type: CONSTANT.LOADING, payload: false });
      });
  };
};

export const deleteUser = (id) => {
  return (dispatch, getState) => {
    const options = {
      type: 'delete',
      url: '/',
      data: {
        id
      }
    };

    dispatch({ type: CONSTANT.LOADING, payload: true });

    requestHandler(options)
      .then(() => {
        const mockResponse = getState()[CONSTANT.USERS].filter(item => +item.id !== +id);
        dispatch({ type: CONSTANT.USERS, payload: mockResponse });
        dispatch({ type: CONSTANT.LOADING, payload: false });
      }).catch(() => {
        dispatch({ type: CONSTANT.LOADING, payload: false });
      });
  };
};
