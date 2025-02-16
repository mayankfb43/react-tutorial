import axios from "axios";

export class Axios {
    static #instance;
    constructor() {
        if (!Axios.#instance) {
          throw new Error("Use getInstance() to get an instance.");
        }
        return Axios.#instance;
      }

    static getInstance() {
        if(!this.#instance) {
            Axios.#instance =  axios.create({
                baseURL: 'https://jsonplaceholder.typicode.com/todos/',
                timeout: 1000,
                headers: {'X-Custom-Header': 'foobar'}
              });
            
              Axios.#instance.interceptors.request.use((config) => {
                console.log('intercept')
                    if (config.triggerUSDODInterceptor) {
                        console.log("Interceptor triggered for this request!");
                        config.headers["X-Custom-Interceptor"] = "Activated";
                    }
                    return config;
                }, (error) => {
                    return Promise.reject(error);
                });
            
            return Axios.#instance;
        } else {
            return Axios.#instance;
        }
    }
}

