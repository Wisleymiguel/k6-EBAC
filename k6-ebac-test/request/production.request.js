import http from "k6/http";
import Utils from "../utils/utils";
import { check } from "k6";

 
export default class Product {
  
  create(token, productData) {
    let response = http.post(`${Utils.getBaseUrl()}/products`, JSON.stringify(productData), {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    
    check(response, {
      "produto deve ser criado com sucesso": r => r.status === 201
    });
    
    return response;
  }
}