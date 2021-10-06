import axios from "axios";
import querystring from "querystring";

export default async function checkToken({ token, ip }) {
  try {
    const response = await axios({
      method: "POST",
      url: "https://www.google.com/recaptcha/api/siteverify",
      data: querystring.stringify({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: token,
        remoteip: ip,
      }),
    });

    return response.data.success;
  } catch (err) {
    console.error(err);
    return false;
  }
}
