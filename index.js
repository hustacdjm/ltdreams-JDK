import axios from 'axios'

export class LTDreamsClient {

    constructor() {
      this.apiBaseUrl = null;
      this.token = null;
      this.headers=null;
    }
  
    /**
     * Connects to the domain and retrieves the base API URL.
     * @param {string} domain - The domain (e.g., "ltdreams.com")
     * @param env.Authorized ->using different token
     */
     connect(domain, header) {
        if (!domain) {
          throw new Error('api_base_url not found in response');
        }
      
        this.apiBaseUrl = domain;
        this.header = header;
      }
  
    /**
     * Sample API call: tode (example function)
     * @returns {Promise<object>}
     */
     callApi(apiId, request) {

        if (!this.apiBaseUrl) {
          return Promise.reject(new Error('Not connected. Call connect(domain) first.'));
        }
      
        const url = `${this.apiBaseUrl}/apiCallByRequest/${encodeURIComponent(apiId)}`;
      
        return axios
          .post(url, request, this.headers) // use POST if sending a body
          .then(res => res.data)
          .catch(err => {
            throw new Error(`Failed to call /callApi: ${err.message}`);
          });
      }


  }
  
  // Export as default for `import LTDreamsClient from '...'`
  export default LTDreamsClient;