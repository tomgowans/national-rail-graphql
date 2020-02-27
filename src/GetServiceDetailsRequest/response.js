const response = {
  text: `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <soap:Body>
          <GetServiceDetailsResponse xmlns="http://thalesgroup.com/RTTI/2017-10-01/ldb/">
              <GetServiceDetailsResult xmlns:lt="http://thalesgroup.com/RTTI/2012-01-13/ldb/types" xmlns:lt6="http://thalesgroup.com/RTTI/2017-02-02/ldb/types" xmlns:lt7="http://thalesgroup.com/RTTI/2017-10-01/ldb/types" xmlns:lt4="http://thalesgroup.com/RTTI/2015-11-27/ldb/types" xmlns:lt5="http://thalesgroup.com/RTTI/2016-02-16/ldb/types" xmlns:lt2="http://thalesgroup.com/RTTI/2014-02-20/ldb/types" xmlns:lt3="http://thalesgroup.com/RTTI/2015-05-14/ldb/types">
                  <lt7:generatedAt>2020-02-27T08:31:54.4790478+00:00</lt7:generatedAt>
                  <lt7:serviceType>train</lt7:serviceType>
                  <lt7:locationName>East Croydon</lt7:locationName>
                  <lt7:crs>ECR</lt7:crs>
                  <lt7:operator>Southern</lt7:operator>
                  <lt7:operatorCode>SN</lt7:operatorCode>
                  <lt7:length>10</lt7:length>
                  <lt7:platform>6</lt7:platform>
                  <lt7:sta>09:03</lt7:sta>
                  <lt7:eta>On time</lt7:eta>
                  <lt7:std>09:04</lt7:std>
                  <lt7:etd>On time</lt7:etd>
                  <lt7:previousCallingPoints>
                      <lt7:callingPointList>
                          <lt7:callingPoint>
                              <lt7:locationName>London Bridge</lt7:locationName>
                              <lt7:crs>LBG</lt7:crs>
                              <lt7:st>08:47</lt7:st>
                              <lt7:et>On time</lt7:et>
                              <lt7:length>10</lt7:length>
                          </lt7:callingPoint>
                      </lt7:callingPointList>
                  </lt7:previousCallingPoints>
                  <lt7:subsequentCallingPoints>
                      <lt7:callingPointList>
                          <lt7:callingPoint>
                              <lt7:locationName>South Croydon</lt7:locationName>
                              <lt7:crs>SCY</lt7:crs>
                              <lt7:st>09:06</lt7:st>
                              <lt7:et>On time</lt7:et>
                              <lt7:length>10</lt7:length>
                          </lt7:callingPoint>
                          <lt7:callingPoint>
                              <lt7:locationName>Purley Oaks</lt7:locationName>
                              <lt7:crs>PUO</lt7:crs>
                              <lt7:st>09:09</lt7:st>
                              <lt7:et>On time</lt7:et>
                              <lt7:length>10</lt7:length>
                          </lt7:callingPoint>
                          <lt7:callingPoint>
                              <lt7:locationName>Purley</lt7:locationName>
                              <lt7:crs>PUR</lt7:crs>
                              <lt7:st>09:12</lt7:st>
                              <lt7:et>On time</lt7:et>
                              <lt7:length>5</lt7:length>
                          </lt7:callingPoint>
                          <lt7:callingPoint>
                              <lt7:locationName>Kenley</lt7:locationName>
                              <lt7:crs>KLY</lt7:crs>
                              <lt7:st>09:18</lt7:st>
                              <lt7:et>On time</lt7:et>
                              <lt7:length>5</lt7:length>
                          </lt7:callingPoint>
                          <lt7:callingPoint>
                              <lt7:locationName>Whyteleafe</lt7:locationName>
                              <lt7:crs>WHY</lt7:crs>
                              <lt7:st>09:22</lt7:st>
                              <lt7:et>On time</lt7:et>
                              <lt7:length>5</lt7:length>
                          </lt7:callingPoint>
                          <lt7:callingPoint>
                              <lt7:locationName>Whyteleafe South</lt7:locationName>
                              <lt7:crs>WHS</lt7:crs>
                              <lt7:st>09:24</lt7:st>
                              <lt7:et>On time</lt7:et>
                              <lt7:length>5</lt7:length>
                          </lt7:callingPoint>
                          <lt7:callingPoint>
                              <lt7:locationName>Caterham</lt7:locationName>
                              <lt7:crs>CAT</lt7:crs>
                              <lt7:st>09:28</lt7:st>
                              <lt7:et>On time</lt7:et>
                              <lt7:length>5</lt7:length>
                          </lt7:callingPoint>
                      </lt7:callingPointList>
                      <lt7:callingPointList>
                          <lt7:callingPoint>
                              <lt7:locationName>Purley</lt7:locationName>
                              <lt7:crs>PUR</lt7:crs>
                              <lt7:st>09:12</lt7:st>
                              <lt7:et>On time</lt7:et>
                              <lt7:length>5</lt7:length>
                          </lt7:callingPoint>
                          <lt7:callingPoint>
                              <lt7:locationName>Reedham (Surrey)</lt7:locationName>
                              <lt7:crs>RHM</lt7:crs>
                              <lt7:st>09:20</lt7:st>
                              <lt7:et>On time</lt7:et>
                              <lt7:length>5</lt7:length>
                          </lt7:callingPoint>
                          <lt7:callingPoint>
                              <lt7:locationName>Coulsdon Town</lt7:locationName>
                              <lt7:crs>CDN</lt7:crs>
                              <lt7:st>09:23</lt7:st>
                              <lt7:et>On time</lt7:et>
                              <lt7:length>5</lt7:length>
                          </lt7:callingPoint>
                          <lt7:callingPoint>
                              <lt7:locationName>Woodmansterne</lt7:locationName>
                              <lt7:crs>WME</lt7:crs>
                              <lt7:st>09:26</lt7:st>
                              <lt7:et>On time</lt7:et>
                              <lt7:length>5</lt7:length>
                          </lt7:callingPoint>
                          <lt7:callingPoint>
                              <lt7:locationName>Chipstead</lt7:locationName>
                              <lt7:crs>CHP</lt7:crs>
                              <lt7:st>09:29</lt7:st>
                              <lt7:et>On time</lt7:et>
                              <lt7:length>5</lt7:length>
                          </lt7:callingPoint>
                          <lt7:callingPoint>
                              <lt7:locationName>Kingswood</lt7:locationName>
                              <lt7:crs>KND</lt7:crs>
                              <lt7:st>09:35</lt7:st>
                              <lt7:et>On time</lt7:et>
                              <lt7:length>5</lt7:length>
                          </lt7:callingPoint>
                          <lt7:callingPoint>
                              <lt7:locationName>Tadworth</lt7:locationName>
                              <lt7:crs>TAD</lt7:crs>
                              <lt7:st>09:38</lt7:st>
                              <lt7:et>On time</lt7:et>
                              <lt7:length>5</lt7:length>
                          </lt7:callingPoint>
                          <lt7:callingPoint>
                              <lt7:locationName>Tattenham Corner</lt7:locationName>
                              <lt7:crs>TAT</lt7:crs>
                              <lt7:st>09:42</lt7:st>
                              <lt7:et>On time</lt7:et>
                              <lt7:length>5</lt7:length>
                          </lt7:callingPoint>
                      </lt7:callingPointList>
                  </lt7:subsequentCallingPoints>
              </GetServiceDetailsResult>
          </GetServiceDetailsResponse>
      </soap:Body>
  </soap:Envelope>`,
};

module.exports = response;
