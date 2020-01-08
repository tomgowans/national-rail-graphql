var response = {
    text: function () {
        return "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n    <soap:Envelope xmlns:soap=\"http://www.w3.org/2003/05/soap-envelope\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n      <soap:Body>\n        <GetDepartureBoardResponse xmlns=\"http://thalesgroup.com/RTTI/2017-10-01/ldb/\">\n          <GetStationBoardResult xmlns:lt=\"http://thalesgroup.com/RTTI/2012-01-13/ldb/types\" xmlns:lt6=\"http://thalesgroup.com/RTTI/2017-02-02/ldb/types\" xmlns:lt7=\"http://thalesgroup.com/RTTI/2017-10-01/ldb/types\" xmlns:lt4=\"http://thalesgroup.com/RTTI/2015-11-27/ldb/types\" xmlns:lt5=\"http://thalesgroup.com/RTTI/2016-02-16/ldb/types\" xmlns:lt2=\"http://thalesgroup.com/RTTI/2014-02-20/ldb/types\" xmlns:lt3=\"http://thalesgroup.com/RTTI/2015-05-14/ldb/types\">\n            <lt4:generatedAt>2019-11-20T21:09:59.5101527+00:00</lt4:generatedAt>\n            <lt4:locationName>East Croydon</lt4:locationName>\n            <lt4:crs>ECR</lt4:crs>\n            <lt4:platformAvailable>true</lt4:platformAvailable>\n            <lt7:trainServices>\n              <lt7:service>\n                <lt4:std>21:07</lt4:std>\n                <lt4:etd>On time</lt4:etd>\n                <lt4:platform>6</lt4:platform>\n                <lt4:operator>Thameslink</lt4:operator>\n                <lt4:operatorCode>TL</lt4:operatorCode>\n                <lt4:serviceType>train</lt4:serviceType>\n                <lt4:length>12</lt4:length>\n                <lt4:serviceID>8NvDNS9Gpylp0MOg/MmCxw==</lt4:serviceID>\n                <lt5:origin>\n                <lt4:location>\n                <lt4:locationName>Bedford</lt4:locationName>\n                <lt4:crs>BDM</lt4:crs>\n                </lt4:location>\n                </lt5:origin>\n                <lt5:destination>\n                <lt4:location>\n                <lt4:locationName>Gatwick Airport</lt4:locationName>\n                <lt4:crs>GTW</lt4:crs>\n                </lt4:location>\n                </lt5:destination>\n              </lt7:service>\n              <lt7:service>\n                <lt4:std>21:08</lt4:std>\n                <lt4:etd>On time</lt4:etd>\n                <lt4:platform>3</lt4:platform>\n                <lt4:operator>Thameslink</lt4:operator>\n                <lt4:operatorCode>TL</lt4:operatorCode>\n                <lt4:serviceType>train</lt4:serviceType>\n                <lt4:serviceID>rkEPUnFHelVWfAllpJoHZA==</lt4:serviceID>\n                <lt5:origin>\n                <lt4:location>\n                <lt4:locationName>London Bridge</lt4:locationName>\n                <lt4:crs>LBG</lt4:crs>\n                </lt4:location>\n                </lt5:origin>\n                <lt5:destination>\n                <lt4:location>\n                <lt4:locationName>Three Bridges</lt4:locationName>\n                <lt4:crs>TBD</lt4:crs>\n                </lt4:location>\n                </lt5:destination>\n              </lt7:service>\n            </lt7:trainServices>\n          </GetStationBoardResult>\n        </GetDepartureBoardResponse>\n      </soap:Body>\n    </soap:Envelope>";
    }
};
module.exports = response;
