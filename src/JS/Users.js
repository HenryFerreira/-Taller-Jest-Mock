//IMPORTS------------------------------//
import axios from 'axios';
//IMPORTS------------------------------//

//-------------------------------------//
class Users {
  static all() {
    return axios.get('/users.json').then(resp => resp.data);
  }
}
//-------------------------------------//

//EXPORT-----------//
export default Users;
//EXPORT-----------//