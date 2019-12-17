const response = {
  text: () => {
    return `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <soap:Body>
            <GetNextDeparturesResponse xmlns="http://thalesgroup.com/RTTI/2017-10-01/ldb/">
                <DeparturesBoard xmlns:lt="http://thalesgroup.com/RTTI/2012-01-13/ldb/types" xmlns:lt6="http://thalesgroup.com/RTTI/2017-02-02/ldb/types" xmlns:lt7="http://thalesgroup.com/RTTI/2017-10-01/ldb/types" xmlns:lt4="http://thalesgroup.com/RTTI/2015-11-27/ldb/types" xmlns:lt5="http://thalesgroup.com/RTTI/2016-02-16/ldb/types" xmlns:lt2="http://thalesgroup.com/RTTI/2014-02-20/ldb/types" xmlns:lt3="http://thalesgroup.com/RTTI/2015-05-14/ldb/types">
                    <lt4:generatedAt>2019-12-17T17:36:22.4902476+00:00</lt4:generatedAt>
                    <lt4:locationName>East Croydon</lt4:locationName>
                    <lt4:crs>ECR</lt4:crs>
                    <lt4:nrccMessages>
                        <lt:message>Major disruption between London and Stevenage. More details can be found in &lt;A href="http://nationalrail.co.uk/service_disruptions/238310.aspx"&gt;Latest Travel News.&lt;/A&gt;</lt:message>
                        <lt:message>Disruption through Redhill. More information can be found in &lt;A href="http://nationalrail.co.uk/service_disruptions/238336.aspx"&gt;Latest Travel News.&lt;/A&gt;</lt:message>
                    </lt4:nrccMessages>
                    <lt4:platformAvailable>true</lt4:platformAvailable>
                    <lt7:departures>
                        <lt7:destination crs="STP">
                            <lt7:service>
                                <lt4:sta>17:31</lt4:sta>
                                <lt4:eta>17:40</lt4:eta>
                                <lt4:std>17:31</lt4:std>
                                <lt4:etd>17:40</lt4:etd>
                                <lt4:platform>1</lt4:platform>
                                <lt4:operator>Thameslink</lt4:operator>
                                <lt4:operatorCode>TL</lt4:operatorCode>
                                <lt4:serviceType>train</lt4:serviceType>
                                <lt4:serviceID>4dU8fydGLLMrBhZUs9E2Uw==</lt4:serviceID>
                                <lt5:origin>
                                    <lt4:location>
                                        <lt4:locationName>Brighton</lt4:locationName>
                                        <lt4:crs>BTN</lt4:crs>
                                    </lt4:location>
                                </lt5:origin>
                                <lt5:destination>
                                    <lt4:location>
                                        <lt4:locationName>Cambridge</lt4:locationName>
                                        <lt4:crs>CBG</lt4:crs>
                                    </lt4:location>
                                </lt5:destination>
                            </lt7:service>
                        </lt7:destination>
                    </lt7:departures>
                </DeparturesBoard>
            </GetNextDeparturesResponse>
        </soap:Body>
    </soap:Envelope>`;
  }
};

module.exports = response;
