import {
    ApiDelete,
    ApiGet,
    ApiPost,
    ApiPut,
} from '../../helper/axios';
import { GET_TEXT_LINE, GET_SERVICE, GET_WHY_CHOOSE_US, ADD_ACHIEVEMENT, ADD_SERVICE, DELETE_CATEGORY, GET_ACHIEVEMENT, GET_ABOUT_US, ADD_TEXT_LINE, ADD_WHY_CHOOSE_US, ADD_ABOUT_US, UPDATE_TEXT_LINE, UPDATE_CATEGORY, DELETE_TEXT_LINE, DELETE_SUB_CATEGORY} from '../type';


export const getHeroTextSliderAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/admin/text-line`)
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
      return ApiGet(`/api/v1/admin/about-us`)
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
      return ApiGet(`/api/v1/admin/why-choose-us`)
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
        return ApiGet(`/api/v1/admin/service`)
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
      return ApiGet(`/api/v1/admin/achievement`)
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
      return ApiPost(`/api/v1/admin/text-line`, formData)
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
        return ApiPost(`/api/v1/admin/about-us`, formData)
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
        return ApiPost(`/api/v1/admin/why-choose-us`,formData)
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
      return ApiPost(`/api/v1/admin/service`,formData)
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
      return ApiPost(`/api/v1/admin/achievement`,formData)
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
        return ApiPut(`/api/v1/admin/text-line/${textId}`, formData)
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

export const updateCategoryAction = (categoryId, updateName) => {
    return (dispatch) => {
        return ApiPut(`/admin/category/${categoryId}`, {name: updateName})
      .then((res) => {
        console.log('res', res);
        if (res.category) {
          dispatch({
            type: UPDATE_CATEGORY,
            payload: res.category,
          });
          return res.category;
        }
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_CATEGORY,
          payload: error,
        });
      });
  };
};

export const deleteHeroTextLineAction = (textId) => {
    return (dispatch) => {
        return ApiDelete(`/api/v1/admin/text-line/${textId}`)
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

export const deleteSubCategoryAction = (categoryId) => {
    return (dispatch) => {
        return ApiPut(`/admin/subcategory/${categoryId}`)
      .then((res) => {
        console.log('res', res);
        if (res.category) {
          dispatch({
            type: DELETE_SUB_CATEGORY,
            payload: res.category,
          });
          return res.category;
        }
      })
      .catch((error) => {
        dispatch({
          type: DELETE_SUB_CATEGORY,
          payload: error,
        });
      });
  };
};

export const deleteCategoryAction = (categoryId) => {
  return (dispatch) => {
      return ApiDelete(`/admin/category/${categoryId}`)
    .then((res) => {
      console.log('Api delete category', res);
      if (res.category) {
        dispatch({
          type: DELETE_CATEGORY,
          payload: res.category,
        });
        return res.category;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_CATEGORY,
        payload: error,
      });
    });
};
};


