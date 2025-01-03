import {
    ApiDelete,
    ApiGet,
    ApiPost,
    ApiPut,
} from '../../helper/axios';
import { GET_TEXT_LINE, GET_SERVICE, GET_WHY_CHOOSE_US, ADD_ACHIEVEMENT, ADD_SERVICE, UPDATE_SERVICE, UPDATE_ACHIEVEMENT, DELETE_SERVICE, GET_ACHIEVEMENT, DELETE_ACHIEVEMENT, GET_ABOUT_US, ADD_TEXT_LINE, ADD_WHY_CHOOSE_US, ADD_ABOUT_US, UPDATE_TEXT_LINE, UPDATE_WHY_CHOOSE_US, DELETE_TEXT_LINE, DELETE_WHY_CHOOSE_US} from '../type';


export const getHeroTextSliderAction = () => {
    return (dispatch) => {
        return ApiGet(`/admin/text-line`)
      .then((res) => {
        console.log('res', res);
        if (res.data) {
          dispatch({
            type: GET_TEXT_LINE,
            payload: res.data,
          });
          return res.data;
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_TEXT_LINE,
          payload: error,
        });
      });
  };
};

export const getAboutUsAction = () => {
  return (dispatch) => {
      return ApiGet(`/admin/about-us`)
    .then((res) => {
      console.log('res', res);
      if (res.AboutUs) {
        dispatch({
          type: GET_ABOUT_US,
          payload: res.AboutUs,
        });
        return res.AboutUs;
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_ABOUT_US,
        payload: error,
      });
    });
};
};

export const getWhyChoosUsAction = () => {
  return (dispatch) => {
      return ApiGet(`/admin/why-choose-us`)
    .then((res) => {
      console.log('res', res)
      if (res.data) {
        dispatch({
          type: GET_WHY_CHOOSE_US,
          payload: res.data,
        });
        return res.data;
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_WHY_CHOOSE_US,
        payload: error,
      });
    });
};
};

export const getServiceAction = () => {
    return (dispatch) => {
        return ApiGet(`/admin/service`)
      .then((res) => {
        console.log('ressadvfb', res);
        if (res.data) {
          dispatch({
            type: GET_SERVICE,
            payload: res.data,
          });
          return res.data;
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_SERVICE,
          payload: error,
        });
      });
  };
};


export const getAchievementAction = () => {
  return (dispatch) => {
      return ApiGet(`/admin/achievement`)
    .then((res) => {
      console.log('resasdf', res);
      if (res.data) {
        dispatch({
          type: GET_ACHIEVEMENT,
          payload: res.data,
        });
        return res.data;
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_ACHIEVEMENT,
        payload: error,
      });
    });
};
};
export const addHeroTextSliderAction = (formData) => {
  return (dispatch) => {
      return ApiPost(`/admin/text-line`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.data) {
        dispatch({
          type: ADD_TEXT_LINE,
          payload: res.data,
        });
        return res.data;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_TEXT_LINE,
        payload: error,
      });
    });
};
};


export const addAboutUsAction = (formData) => {
    return (dispatch) => {
        return ApiPost(`/admin/about-us`, formData)
      .then((res) => {
        console.log('resasdfghjk', res);
        if (res.data.AboutUs) {
          dispatch({
            type: ADD_ABOUT_US,
            payload: res.data.AboutUs,
          });
          return res.data.AboutUs;
        }
      })
      .catch((error) => {
        dispatch({
          type: ADD_ABOUT_US,
          payload: error,
        });
      });
  };
};

export const addWhyChooseUsAction = (formData) => {
    return (dispatch) => {
        return ApiPost(`/admin/why-choose-us`,formData)
      .then((res) => {
        console.log('ressss', res);
        if (res.data.data) {
          dispatch({
            type: ADD_WHY_CHOOSE_US,
            payload: res.data.data,
          });
          return res.data.data;
        }
      })
      .catch((error) => {
        dispatch({
          type: ADD_WHY_CHOOSE_US,
          payload: error,
        });
      });
  };
};

export const addServiceAction = (formData) => {
  return (dispatch) => {
      return ApiPost(`/admin/service`,formData)
    .then((res) => {
      console.log('ressss', res);
      if (res.data.data) {
        dispatch({
          type: ADD_SERVICE,
          payload: res.data.data,
        });
        return res.data.data;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_SERVICE,
        payload: error,
      });
    });
};
};

export const addAchievementAction = (formData) => {
  return (dispatch) => {
      return ApiPost(`/admin/achievement`,formData)
    .then((res) => {
      console.log('ressss', res);
      if (res.data.data) {
        dispatch({
          type: ADD_ACHIEVEMENT,
          payload: res.data.data,
        });
        return res.data.data;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_ACHIEVEMENT,
        payload: error,
      });
    });
};
};

export const updateHeroTextLineAction = (textId, formData) => {
    return (dispatch) => {
        return ApiPut(`/admin/text-line/${textId}`, formData)
      .then((res) => {
        console.log('res', res);
        if (res.DATA) {
          dispatch({
            type: UPDATE_TEXT_LINE,
            payload: res.DATA,
          });
          return res.DATA;
        }
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_TEXT_LINE,
          payload: error,
        });
      });
  };
};

export const updateWhyChooseUsAction = (id,formData) => {
    return (dispatch) => {
        return ApiPut(`/admin/why-choose-us/${id}`, formData)
      .then((res) => {
        console.log('res', res);
        if (res.data) {
          dispatch({
            type: UPDATE_WHY_CHOOSE_US,
            payload: res.data,
          });
          return res.data;
        }
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_WHY_CHOOSE_US,
          payload: error,
        });
      });
  };
};

export const updateServiceAction = (id,formData) => {
  return (dispatch) => {
      return ApiPut(`/admin/service/${id}`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.data) {
        dispatch({
          type: UPDATE_SERVICE,
          payload: res.data,
        });
        return res.data;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_SERVICE,
        payload: error,
      });
    });
};
};

export const updateAchievementAction = (id,formData) => {
  return (dispatch) => {
      return ApiPut(`/admin/service/${id}`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.data) {
        dispatch({
          type: UPDATE_ACHIEVEMENT,
          payload: res.data,
        });
        return res.data;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_ACHIEVEMENT,
        payload: error,
      });
    });
};
};

export const deleteHeroTextLineAction = (textId) => {
    return (dispatch) => {
        return ApiDelete(`/admin/text-line/${textId}`)
      .then((res) => {
        console.log('res', res);
        if (res.data) {
          dispatch({
            type: DELETE_TEXT_LINE,
            payload: res.data,
          });
          return res.data;
        }
      })
      .catch((error) => {
        dispatch({
          type: DELETE_TEXT_LINE,
          payload: error,
        });
      });
  };
};

export const deleteWhyChooseUsAction = (id) => {
    return (dispatch) => {
        return ApiPut(`/admin/why-choose-us/${id}`)
      .then((res) => {
        console.log('res', res);
        if (res.data) {
          dispatch({
            type: DELETE_WHY_CHOOSE_US,
            payload: res.data,
          });
          return res.data;
        }
      })
      .catch((error) => {
        dispatch({
          type: DELETE_WHY_CHOOSE_US,
          payload: error,
        });
      });
  };
};

export const deleteServiceAction = (id) => {
  return (dispatch) => {
      return ApiDelete(`/admin/service/${id}`)
    .then((res) => {
      console.log('Api delete category', res);
      if (res.data) {
        dispatch({
          type: DELETE_SERVICE,
          payload: res.data,
        });
        return res.data;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_SERVICE,
        payload: error,
      });
    });
};
};

export const deleteAchievementAction = (id) => {
  return (dispatch) => {
      return ApiDelete(`/admin/achievement/${id}`)
    .then((res) => {
      console.log('Api delete achievement', res);
      if (res.data) {
        dispatch({
          type: DELETE_ACHIEVEMENT,
          payload: res.data,
        });
        return res.data;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_ACHIEVEMENT,
        payload: error,
      });
    });
};
};



