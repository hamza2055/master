import axios from "axios";
import { Injectable } from "@angular/core";
const url = "http://compliancetool.herokuapp.com/calculation/lease";

@Injectable({ providedIn: "root" })
export class LeaseService {
  async calculate(data) {
    alert("calling service");
   
    const response = await axios.post(url, data);
    return response.data;
  }
}
