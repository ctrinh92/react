import axios from "axios"; //axios would be our ajax

//patch axios to use application/x-www-form-urlencoded
//https://github.com/axios/axios/issues/350#issuecomment-227270046
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function (data, headers) { //this function states that whatever request we put through will be transformed so it will work
    var str = [];
    for (var p in data)
        if (data.hasOwnProperty(p) && data[p]) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
        }
    return str.join("&");
}];

export const apiExecute = (url: string, action: string, data: any): Promise<any> =>{
    switch (action) {
        case "GET":
            return axios.get(url, { withCredentials: true })
                .then((response) => (response.data), (err) => {
                    return Promise.reject(err);
                })
                .catch((err) => {
                    console.log("catch err", err);
                    return Promise.reject(err);
                });
        case "POST":
            return axios.post(url, data, { withCredentials: true })
                .then((response) => (response.data), (err) => {
                    return Promise.reject(err);
                })
                .catch((err) => {
                    console.log("catch err", err);
                    return Promise.reject(err);
                });
        case "PUT":
            return axios.put(url, data, { withCredentials: true })
                .then((response) => (response.data), (err) => {
                    return Promise.reject(err);
                })
                .catch((err) => {
                    console.log("catch err", err);
                    return Promise.reject(err);
                });
        case "DELETE":
            return axios.delete(url, { withCredentials: true })
                .then((response) => (response.data), (err) => {
                    return Promise.reject(err);
                })
                .catch((err) => {
                    console.log("catch err", err);
                    return Promise.reject(err);
                });
    }
}