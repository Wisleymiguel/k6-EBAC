import { group} from 'k6';
import Login from "../request/login.reqeust";
import data from "../data/usuarios.json"
import User from "../request/user.reqeust";
import Product from '../request/production.request';


export default function () {

    let login = new Login()
    let user = new User()
    let product = new Product();


    group('login and get token', () => {
      login.access(data.usuarioOk.user,data.usuarioOk.pass)
    })

    group('list users', () => {
      user.list(login.getToken())
    })


    group("create product", () => {
      let product = new Product();
      let token = login.getToken();
    product.create(token, {
      "description": "Smartphone Samsung Galaxy",
      "itemPrice": 1200,  
      "name": "Galaxy S23"
    });

});




}