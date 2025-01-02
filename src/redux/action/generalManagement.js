import { toast } from 'react-toastify';
import Auth from '../../config/auth';
import {
    ApiDelete,
    ApiGet,
    ApiPost,
    ApiPostData,
    ApiPostNoAuth,
    ApiPut,
    ApiPutWithId,
} from '../../helper/axios';
import { GET_TEAM, ADD_TEAM, UPDATE_TEAM, DELETE_TEAM, GET_FAQ, ADD_FAQ, UPDATE_FAQ, DELETE_FAQ, GET_BLOG, ADD_BLOG, UPDATE_BLOG, DELETE_BLOG, GET_TESTIMONIAL,ADD_TESTIMONIAL,UPDATE_TESTIMONIAL,DELETE_TESTIMONIAL, GET_ATTRIBUTE, ADD_ATTRIBUTE, UPDATE_ATTRIBUTE, DELETE_ATTRIBUTE} from '../type';


export const getAllTeamAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/admin/team`)
      .then((res) => {
        console.log('res', res);
        if (res.data) {
          dispatch({
            type: GET_TEAM,
            payload: res.data,
          });
          return res.data;
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_TEAM,
          payload: error,
        });
      });
  };
};


export const addTeamAction = (formData) => {
  return (dispatch) => {
      return ApiPost(`/api/v1/admin/team`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.data.data) {
        dispatch({
          type: ADD_TEAM,
          payload: res.data.data,
        });
        return res.data.data;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_TEAM,
        payload: error,
      });
    });
};
};

export const updateTeamAction = (id, formData) => {
  return (dispatch) => {
      return ApiPut(`/api/v1/admin/team/${id}`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.data) {
        dispatch({
          type: UPDATE_TEAM,
          payload: res.data,
        });
        return res.data;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_TEAM,
        payload: error,
      });
    });
};
};

export const deleteTeamAction = (id) => {
  return (dispatch) => {
      return ApiDelete(`/api/v1/admin/team/${id}`)
    .then((res) => {
      console.log('res', res);
      if (res.data) {
        dispatch({
          type: DELETE_TEAM,
          payload: res.data,
        });
        return res.data;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_TEAM,
        payload: error,
      });
    });
};
};


export const getFaqAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/admin/faq`)
      .then((res) => {
        console.log('res', res);
        if (res.data) {
          dispatch({
            type: GET_FAQ,
            payload: res.data,
          });
          return res.data;
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_FAQ,
          payload: error,
        });
      });
  };
};

export const addFaqAction = (formData) => {
  return (dispatch) => {
      return ApiPost(`/api/v1/admin/faq`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.data.data) {
        dispatch({
          type: ADD_FAQ,
          payload: res.data.data,
        });
        return res.data.data;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_FAQ,
        payload: error,
      });
    });
};
};

export const updateFaqAction = (id, formData) => {
  return (dispatch) => {
      return ApiPut(`/api/v1/admin/faq/${id}`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.data) {
        dispatch({
          type: UPDATE_FAQ,
          payload: res.data,
        });
        return res.data;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_FAQ,
        payload: error,
      });
    });
};
};

export const deleteFaqAction = (id) => {
  return (dispatch) => {
      return ApiDelete(`/api/v2/admin/faq/${id}`)
    .then((res) => {
      console.log('res', res);
      if (res.data) {
        dispatch({
          type: DELETE_FAQ,
          payload: res.data,
        });
        return res.data;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_FAQ,
        payload: error,
      });
    });
};
};

export const getAllBlogsAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/admin/blog`)
      .then((res) => {
        console.log('resqwerg', res);
        if (res.blog) {
          dispatch({
            type: GET_BLOG,
            payload: res.blog,
          });
          return res.blog;
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_BLOG,
          payload: error,
        });
      });
  };
};

export const addBlogAction = (formData) => {
  return (dispatch) => {
      return ApiPost(`/api/v1/admin/blog`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.data.blog) {
        dispatch({
          type: ADD_BLOG,
          payload: res.data.blog,
        });
        return res.data.blog;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_BLOG,
        payload: error,
      });
    });
};
};

export const updateBlogAction = (id, formData) => {
  return (dispatch) => {
      return ApiPut(`/api/v1/admin/blog/${id}`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.data) {
        dispatch({
          type: UPDATE_BLOG,
          payload: res.data,
        });
        return res.data;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_BLOG,
        payload: error,
      });
    });
};
};

export const deleteBlogAction = (id) => {
  return (dispatch) => {
      return ApiDelete(`/api/v1/admin/blog/${id}`)
    .then((res) => {
      console.log('res', res);
      if (res.data) {
        dispatch({
          type: DELETE_BLOG,
          payload: res.data,
        });
        return res.data;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_BLOG,
        payload: error,
      });
    });
};
};

export const getAllTestimonialAction = () => {
    return (dispatch) => {
        return ApiGet(`/api/v1/admin/testimonial`)
      .then((res) => {
        console.log('res', res);
        if (res.data) {
          dispatch({
            type: GET_TESTIMONIAL,
            payload: res.data,
          });
          return res.data;
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_TESTIMONIAL,
          payload: error,
        });
      });
  };
};

export const addTestimonialAction = (formData) => {
  return (dispatch) => {
      return ApiPost(`/api/v1/admin/testimonial`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.data.data) {
        dispatch({
          type: ADD_TESTIMONIAL,
          payload: res.data.data,
        });
        return res.data.data;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_TESTIMONIAL,
        payload: error,
      });
    });
};
};

export const updateTestimonialAction = (id, formData) => {
  return (dispatch) => {
      return ApiPut(`/api/v1/admin/testimonial/${id}`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.testimonial) {
        dispatch({
          type: UPDATE_TESTIMONIAL,
          payload: res.testimonial,
        });
        return res.testimonial;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_TESTIMONIAL,
        payload: error,
      });
    });
};
};

export const deleteTestimonialAction = (id) => {
  return (dispatch) => {
      return ApiDelete(`/api/v1/admin/testimonial/${id}`)
    .then((res) => {
      console.log('res', res);
      if (res.testimonial) {
        dispatch({
          type: DELETE_TESTIMONIAL,
          payload: res.testimonial,
        });
        return res.testimonial;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_TESTIMONIAL,
        payload: error,
      });
    });
};
};




export const getAllAttributeAction = () => {
    return (dispatch) => {
        return ApiGet(`/admin/attribute`)
      .then((res) => {
        console.log('res', res);
        if (res.category) {
          dispatch({
            type: GET_ATTRIBUTE,
            payload: res.category,
          });
          return res.category;
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_ATTRIBUTE,
          payload: error,
        });
      });
  };
};

export const addAttributeAction = (formData) => {
  return (dispatch) => {
      return ApiPost(`/admin/attribute`, formData )
    .then((res) => {
      console.log('res', res);
      if (res.category) {
        dispatch({
          type: ADD_ATTRIBUTE,
          payload: res.category,
        });
        return res.category;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_ATTRIBUTE,
        payload: error,
      });
    });
};
};

export const updateAttributeAction = (id, formData) => {
  return (dispatch) => {
      return ApiPut(`/admin/attribute/${id}`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.category) {
        dispatch({
          type: UPDATE_ATTRIBUTE,
          payload: res.category,
        });
        return res.category;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_ATTRIBUTE,
        payload: error,
      });
    });
};
};

export const deleteAttributeAction = (id) => {
  return (dispatch) => {
      return ApiDelete(`/admin/attribute/${id}`)
    .then((res) => {
      console.log('res', res);
      if (res.category) {
        dispatch({
          type: DELETE_ATTRIBUTE,
          payload: res.category,
        });
        return res.category;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_ATTRIBUTE,
        payload: error,
      });
    });
};
};


