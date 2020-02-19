const response = {
  text: `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <soap:Body>
            <GetFastestDeparturesWithDetailsResponse xmlns="http://thalesgroup.com/RTTI/2017-10-01/ldb/">
                <DeparturesBoard xmlns:lt="http://thalesgroup.com/RTTI/2012-01-13/ldb/types" xmlns:lt6="http://thalesgroup.com/RTTI/2017-02-02/ldb/types" xmlns:lt7="http://thalesgroup.com/RTTI/2017-10-01/ldb/types" xmlns:lt4="http://thalesgroup.com/RTTI/2015-11-27/ldb/types" xmlns:lt5="http://thalesgroup.com/RTTI/2016-02-16/ldb/types" xmlns:lt2="http://thalesgroup.com/RTTI/2014-02-20/ldb/types" xmlns:lt3="http://thalesgroup.com/RTTI/2015-05-14/ldb/types">
                    <lt4:generatedAt>2019-12-17T17:27:28.1271088+00:00</lt4:generatedAt>
                    <lt4:locationName>East Croydon</lt4:locationName>
                    <lt4:crs>ECR</lt4:crs>
                    <lt4:nrccMessages>
                        <lt:message>Major disruption between London and Stevenage. More details can be found in &lt;A href="http://nationalrail.co.uk/service_disruptions/238310.aspx"&gt;Latest Travel News.&lt;/A&gt;</lt:message>
                        <lt:message>A passenger has been taken ill on a train at St Albans City and as a result some lins are blocked.  More information can be found in&lt;A href="http://nationalrail.co.uk/service_disruptions/238335.aspx"&gt; Latest Travel News.&lt;/A&gt;</lt:message>
                        <lt:message>Disruption through Redhill. More information can be found in &lt;A href="http://nationalrail.co.uk/service_disruptions/238336.aspx"&gt;Latest Travel News.&lt;/A&gt;</lt:message>
                    </lt4:nrccMessages>
                    <lt4:platformAvailable>true</lt4:platformAvailable>
                    <lt7:departures>
                        <lt7:destination crs="STP">
                            <lt7:service>
                                <lt4:sta>17:15</lt4:sta>
                                <lt4:eta>17:27</lt4:eta>
                                <lt4:std>17:15</lt4:std>
                                <lt4:etd>17:27</lt4:etd>
                                <lt4:platform>1</lt4:platform>
                                <lt4:operator>Thameslink</lt4:operator>
                                <lt4:operatorCode>TL</lt4:operatorCode>
                                <lt4:serviceType>train</lt4:serviceType>
                                <lt4:length>12</lt4:length>
                                <lt4:cancelReason>This train has been cancelled because of a fault with the signalling system earlier today</lt4:cancelReason>
                                <lt4:delayReason>This train has been delayed by a fault with the signalling system earlier today</lt4:delayReason>
                                <lt4:serviceID>2tI4/cosU7DYIHRO7z0DLg==</lt4:serviceID>
                                <lt5:origin>
                                    <lt4:location>
                                        <lt4:locationName>Horsham</lt4:locationName>
                                        <lt4:crs>HRH</lt4:crs>
                                    </lt4:location>
                                </lt5:origin>
                                <lt5:destination>
                                    <lt4:location>
                                        <lt4:locationName>Peterborough</lt4:locationName>
                                        <lt4:crs>PBO</lt4:crs>
                                    </lt4:location>
                                </lt5:destination>
                                <lt7:subsequentCallingPoints>
                                    <lt7:callingPointList>
                                        <lt7:callingPoint>
                                            <lt7:locationName>London Bridge</lt7:locationName>
                                            <lt7:crs>LBG</lt7:crs>
                                            <lt7:st>17:30</lt7:st>
                                            <lt7:et>17:41</lt7:et>
                                            <lt7:length>12</lt7:length>
                                        </lt7:callingPoint>
                                        <lt7:callingPoint>
                                            <lt7:locationName>London Blackfriars</lt7:locationName>
                                            <lt7:crs>BFR</lt7:crs>
                                            <lt7:st>17:36</lt7:st>
                                            <lt7:et>17:47</lt7:et>
                                            <lt7:length>12</lt7:length>
                                        </lt7:callingPoint>
                                        <lt7:callingPoint>
                                            <lt7:locationName>City Thameslink</lt7:locationName>
                                            <lt7:crs>CTK</lt7:crs>
                                            <lt7:st>17:38</lt7:st>
                                            <lt7:et>17:49</lt7:et>
                                            <lt7:length>12</lt7:length>
                                        </lt7:callingPoint>
                                        <lt7:callingPoint>
                                            <lt7:locationName>Farringdon Underground</lt7:locationName>
                                            <lt7:crs>ZFD</lt7:crs>
                                            <lt7:st>17:41</lt7:st>
                                            <lt7:et>17:51</lt7:et>
                                            <lt7:length>12</lt7:length>
                                        </lt7:callingPoint>
                                        <lt7:callingPoint>
                                            <lt7:locationName>London St Pancras (Intl)</lt7:locationName>
                                            <lt7:crs>STP</lt7:crs>
                                            <lt7:st>17:45</lt7:st>
                                            <lt7:et>17:55</lt7:et>
                                            <lt7:length>12</lt7:length>
                                        </lt7:callingPoint>
                                        <lt7:callingPoint>
                                            <lt7:locationName>Finsbury Park</lt7:locationName>
                                            <lt7:crs>FPK</lt7:crs>
                                            <lt7:st>17:52</lt7:st>
                                            <lt7:et>18:02</lt7:et>
                                            <lt7:length>12</lt7:length>
                                        </lt7:callingPoint>
                                        <lt7:callingPoint>
                                            <lt7:locationName>Stevenage</lt7:locationName>
                                            <lt7:crs>SVG</lt7:crs>
                                            <lt7:st>18:13</lt7:st>
                                            <lt7:et>18:22</lt7:et>
                                            <lt7:length>12</lt7:length>
                                        </lt7:callingPoint>
                                        <lt7:callingPoint>
                                            <lt7:locationName>Hitchin</lt7:locationName>
                                            <lt7:crs>HIT</lt7:crs>
                                            <lt7:st>18:19</lt7:st>
                                            <lt7:et>18:27</lt7:et>
                                            <lt7:length>12</lt7:length>
                                        </lt7:callingPoint>
                                        <lt7:callingPoint>
                                            <lt7:locationName>Arlesey</lt7:locationName>
                                            <lt7:crs>ARL</lt7:crs>
                                            <lt7:st>18:25</lt7:st>
                                            <lt7:et>18:33</lt7:et>
                                            <lt7:length>12</lt7:length>
                                        </lt7:callingPoint>
                                        <lt7:callingPoint>
                                            <lt7:locationName>Biggleswade</lt7:locationName>
                                            <lt7:crs>BIW</lt7:crs>
                                            <lt7:st>18:30</lt7:st>
                                            <lt7:et>18:38</lt7:et>
                                            <lt7:length>12</lt7:length>
                                        </lt7:callingPoint>
                                        <lt7:callingPoint>
                                            <lt7:locationName>Sandy</lt7:locationName>
                                            <lt7:crs>SDY</lt7:crs>
                                            <lt7:st>18:34</lt7:st>
                                            <lt7:et>18:41</lt7:et>
                                            <lt7:length>12</lt7:length>
                                        </lt7:callingPoint>
                                        <lt7:callingPoint>
                                            <lt7:locationName>St Neots</lt7:locationName>
                                            <lt7:crs>SNO</lt7:crs>
                                            <lt7:st>18:41</lt7:st>
                                            <lt7:et>18:48</lt7:et>
                                            <lt7:length>12</lt7:length>
                                        </lt7:callingPoint>
                                        <lt7:callingPoint>
                                            <lt7:locationName>Huntingdon</lt7:locationName>
                                            <lt7:crs>HUN</lt7:crs>
                                            <lt7:st>18:48</lt7:st>
                                            <lt7:et>18:55</lt7:et>
                                            <lt7:length>12</lt7:length>
                                        </lt7:callingPoint>
                                        <lt7:callingPoint>
                                            <lt7:locationName>Peterborough</lt7:locationName>
                                            <lt7:crs>PBO</lt7:crs>
                                            <lt7:st>19:05</lt7:st>
                                            <lt7:et>19:10</lt7:et>
                                            <lt7:length>12</lt7:length>
                                        </lt7:callingPoint>
                                    </lt7:callingPointList>
                                </lt7:subsequentCallingPoints>
                            </lt7:service>
                        </lt7:destination>
                    </lt7:departures>
                </DeparturesBoard>
            </GetFastestDeparturesWithDetailsResponse>
        </soap:Body>
    </soap:Envelope>`,
};

module.exports = response;
