const response = {
  text: () => {
    return `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <soap:Body>
        <GetDepartureBoardResponse xmlns="http://thalesgroup.com/RTTI/2017-10-01/ldb/">
          <GetStationBoardResult xmlns:lt="http://thalesgroup.com/RTTI/2012-01-13/ldb/types" xmlns:lt6="http://thalesgroup.com/RTTI/2017-02-02/ldb/types" xmlns:lt7="http://thalesgroup.com/RTTI/2017-10-01/ldb/types" xmlns:lt4="http://thalesgroup.com/RTTI/2015-11-27/ldb/types" xmlns:lt5="http://thalesgroup.com/RTTI/2016-02-16/ldb/types" xmlns:lt2="http://thalesgroup.com/RTTI/2014-02-20/ldb/types" xmlns:lt3="http://thalesgroup.com/RTTI/2015-05-14/ldb/types">
            <lt4:generatedAt>2019-11-20T21:09:59.5101527+00:00</lt4:generatedAt>
            <lt4:locationName>East Croydon</lt4:locationName>
            <lt4:crs>ECR</lt4:crs>
            <lt4:platformAvailable>true</lt4:platformAvailable>
            <lt7:trainServices>
              <lt7:service>
                <lt4:std>21:07</lt4:std>
                <lt4:etd>On time</lt4:etd>
                <lt4:platform>6</lt4:platform>
                <lt4:operator>Thameslink</lt4:operator>
                <lt4:operatorCode>TL</lt4:operatorCode>
                <lt4:serviceType>train</lt4:serviceType>
                <lt4:length>12</lt4:length>
                <lt4:serviceID>8NvDNS9Gpylp0MOg/MmCxw==</lt4:serviceID>
                <lt5:origin>
                <lt4:location>
                <lt4:locationName>Bedford</lt4:locationName>
                <lt4:crs>BDM</lt4:crs>
                </lt4:location>
                </lt5:origin>
                <lt5:destination>
                <lt4:location>
                <lt4:locationName>Gatwick Airport</lt4:locationName>
                <lt4:crs>GTW</lt4:crs>
                </lt4:location>
                </lt5:destination>
              </lt7:service>
              <lt7:service>
                <lt4:std>21:08</lt4:std>
                <lt4:etd>On time</lt4:etd>
                <lt4:platform>3</lt4:platform>
                <lt4:operator>Thameslink</lt4:operator>
                <lt4:operatorCode>TL</lt4:operatorCode>
                <lt4:serviceType>train</lt4:serviceType>
                <lt4:serviceID>rkEPUnFHelVWfAllpJoHZA==</lt4:serviceID>
                <lt5:origin>
                <lt4:location>
                <lt4:locationName>London Bridge</lt4:locationName>
                <lt4:crs>LBG</lt4:crs>
                </lt4:location>
                </lt5:origin>
                <lt5:destination>
                <lt4:location>
                <lt4:locationName>Three Bridges</lt4:locationName>
                <lt4:crs>TBD</lt4:crs>
                </lt4:location>
                </lt5:destination>
              </lt7:service>
            </lt7:trainServices>
          </GetStationBoardResult>
        </GetDepartureBoardResponse>
      </soap:Body>
    </soap:Envelope>`;
  }
};

module.exports = response;
