const response = {
  text: `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <soap:Body>
            <GetServiceDetailsResponse xmlns="http://thalesgroup.com/RTTI/2017-10-01/ldb/">
                <GetServiceDetailsResult xmlns:lt="http://thalesgroup.com/RTTI/2012-01-13/ldb/types" xmlns:lt6="http://thalesgroup.com/RTTI/2017-02-02/ldb/types" xmlns:lt7="http://thalesgroup.com/RTTI/2017-10-01/ldb/types" xmlns:lt4="http://thalesgroup.com/RTTI/2015-11-27/ldb/types" xmlns:lt5="http://thalesgroup.com/RTTI/2016-02-16/ldb/types" xmlns:lt2="http://thalesgroup.com/RTTI/2014-02-20/ldb/types" xmlns:lt3="http://thalesgroup.com/RTTI/2015-05-14/ldb/types">
                    <lt7:generatedAt>2019-12-17T08:22:05.3113816+00:00</lt7:generatedAt>
                    <lt7:serviceType>train</lt7:serviceType>
                    <lt7:locationName>East Croydon</lt7:locationName>
                    <lt7:crs>ECR</lt7:crs>
                    <lt7:operator>Thameslink</lt7:operator>
                    <lt7:operatorCode>TL</lt7:operatorCode>
                    <lt7:delayReason>This train has been delayed by a late running train being in front of this one</lt7:delayReason>
                    <lt7:length>12</lt7:length>
                    <lt7:platform>3</lt7:platform>
                    <lt7:sta>08:08</lt7:sta>
                    <lt7:ata>08:13</lt7:ata>
                    <lt7:std>08:08</lt7:std>
                    <lt7:atd>08:14</lt7:atd>
                    <lt7:previousCallingPoints>
                        <lt7:callingPointList>
                            <lt7:callingPoint>
                                <lt7:locationName>Bedford</lt7:locationName>
                                <lt7:crs>BDM</lt7:crs>
                                <lt7:st>06:52</lt7:st>
                                <lt7:at>06:54</lt7:at>
                                <lt7:length>12</lt7:length>
                            </lt7:callingPoint>
                            <lt7:callingPoint>
                                <lt7:locationName>Luton</lt7:locationName>
                                <lt7:crs>LUT</lt7:crs>
                                <lt7:st>07:09</lt7:st>
                                <lt7:at>07:11</lt7:at>
                                <lt7:length>12</lt7:length>
                            </lt7:callingPoint>
                            <lt7:callingPoint>
                                <lt7:locationName>St Albans</lt7:locationName>
                                <lt7:crs>SAC</lt7:crs>
                                <lt7:st>07:18</lt7:st>
                                <lt7:at>07:25</lt7:at>
                                <lt7:length>12</lt7:length>
                            </lt7:callingPoint>
                            <lt7:callingPoint>
                                <lt7:locationName>London St Pancras (Intl)</lt7:locationName>
                                <lt7:crs>STP</lt7:crs>
                                <lt7:st>07:40</lt7:st>
                                <lt7:at>07:44</lt7:at>
                                <lt7:length>12</lt7:length>
                            </lt7:callingPoint>
                            <lt7:callingPoint>
                                <lt7:locationName>Farringdon Underground</lt7:locationName>
                                <lt7:crs>ZFD</lt7:crs>
                                <lt7:st>07:44</lt7:st>
                                <lt7:at>07:49</lt7:at>
                                <lt7:length>12</lt7:length>
                            </lt7:callingPoint>
                            <lt7:callingPoint>
                                <lt7:locationName>City Thameslink</lt7:locationName>
                                <lt7:crs>CTK</lt7:crs>
                                <lt7:st>07:46</lt7:st>
                                <lt7:at>07:52</lt7:at>
                                <lt7:length>12</lt7:length>
                            </lt7:callingPoint>
                            <lt7:callingPoint>
                                <lt7:locationName>London Blackfriars</lt7:locationName>
                                <lt7:crs>BFR</lt7:crs>
                                <lt7:st>07:49</lt7:st>
                                <lt7:at>07:54</lt7:at>
                                <lt7:length>12</lt7:length>
                            </lt7:callingPoint>
                            <lt7:callingPoint>
                                <lt7:locationName>London Bridge</lt7:locationName>
                                <lt7:crs>LBG</lt7:crs>
                                <lt7:st>07:55</lt7:st>
                                <lt7:at>07:59</lt7:at>
                                <lt7:length>12</lt7:length>
                            </lt7:callingPoint>
                        </lt7:callingPointList>
                    </lt7:previousCallingPoints>
                    <lt7:subsequentCallingPoints>
                        <lt7:callingPointList>
                            <lt7:callingPoint>
                                <lt7:locationName>Gatwick Airport</lt7:locationName>
                                <lt7:crs>GTW</lt7:crs>
                                <lt7:st>08:23</lt7:st>
                                <lt7:et>08:28</lt7:et>
                                <lt7:length>12</lt7:length>
                            </lt7:callingPoint>
                        </lt7:callingPointList>
                    </lt7:subsequentCallingPoints>
                </GetServiceDetailsResult>
            </GetServiceDetailsResponse>
        </soap:Body>
    </soap:Envelope>`,
};

module.exports = response;
