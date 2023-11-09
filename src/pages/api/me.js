import axios from "axios";
import { siteConfig } from "@/config/site";

export default function handler(req, res) {
 
  axios.get("http://localhost:3000/api/auth/me").then((response) => {
    res.status(200).json(response.data);
  }
  );
}


