import axios from "axios";

export const get = (url, params) => {
  return new Promise((resolve, reject) =>
    axios
      .get(url, { params })
      .then(res => {
        console.log(res.data);
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      })
  );
};

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) =>
    axios
      .post(url, data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      })
  );
};
