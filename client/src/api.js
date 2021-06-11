import axios from 'axios';

const registrationApi =  axios.create({
  baseURL: `https://api.apispreadsheets.com/data/13830/`
});

export { registrationApi }
