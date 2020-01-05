const parseString = require("xml2js").parseString;
const fetch = require("node-fetch");

const fetchData = ({ body, tokenValue }) => {
  return new Promise((resolve, reject) => {
    if (!body || !tokenValue) {
      reject(new Error("Error with credentials"));
    } else {
      fetch("https://lite.realtime.nationalrail.co.uk/OpenLDBWS/ldb11.asmx", {
        method: "POST",
        headers: {
          "Content-Type": "text/xml"
        },
        body: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:typ="http://thalesgroup.com/RTTI/2013-11-28/Token/types" xmlns:ldb="http://thalesgroup.com/RTTI/2017-10-01/ldb/">
                  <soap:Header>
                    <typ:AccessToken>
                      <typ:TokenValue>${tokenValue}</typ:TokenValue>
                    </typ:AccessToken>
                  </soap:Header>
                  <soap:Body>
                    ${body}
                  </soap:Body>
                </soap:Envelope>`
      })
        .then(response => response.text())
        .then(response => response.replace(/(<\/?)(\w*:)/gm, "$1"))
        .then(response => {
          parseString(response, (error, result) => {
            if (error) {
              return reject(error);
            } else {
              return resolve(result.Envelope.Body[0]);
            }
          });
        })
        .catch(err => {
          // console.error("Error returned from fetch", err);
          return reject(err);
        });
    }
  });
};

module.exports = fetchData;
