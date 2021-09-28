import axios from "axios";

const httpService = axios.create({
  timeout: 120000,
  cancelable: true
});

let getRequestCounter = 0;

/**
 * @function getRequestLoading
 * @param {} $progress
 */
export const getRequestLoading = $progress => {
  httpService.interceptors.request.use(
    config => {
      getRequestCounter++;
      $progress();
      return config;
    },
    error => Promise.reject(error)
  );
};

/**
 * @function getResponseLoading
 * @param {} $progress
 */
export const getResponseLoading = $progress => {
  httpService.interceptors.response.use(
    response => {
      getRequestCounter--;
      if (getRequestCounter <= 0) {
        $progress();
      }
      return response;
    },
    error => {
      getRequestCounter--;
      if (getRequestCounter <= 0) {
        $progress();
      }
      return Promise.reject(error);
    }
  );
};

export default httpService;
