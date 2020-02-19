const response = {
  text: `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <soap:Body>
            <GetArrivalBoardResponse xmlns="http://thalesgroup.com/RTTI/2017-10-01/ldb/">
                <GetStationBoardResult xmlns:lt="http://thalesgroup.com/RTTI/2012-01-13/ldb/types" xmlns:lt6="http://thalesgroup.com/RTTI/2017-02-02/ldb/types" xmlns:lt7="http://thalesgroup.com/RTTI/2017-10-01/ldb/types" xmlns:lt4="http://thalesgroup.com/RTTI/2015-11-27/ldb/types" xmlns:lt5="http://thalesgroup.com/RTTI/2016-02-16/ldb/types" xmlns:lt2="http://thalesgroup.com/RTTI/2014-02-20/ldb/types" xmlns:lt3="http://thalesgroup.com/RTTI/2015-05-14/ldb/types">
                    <lt4:generatedAt>2019-12-15T13:48:39.1382221+00:00</lt4:generatedAt>
                    <lt4:locationName>East Croydon</lt4:locationName>
                    <lt4:crs>ECR</lt4:crs>
                    <lt4:platformAvailable>true</lt4:platformAvailable>
                    <lt7:trainServices>
                        <lt7:service>
                            <lt4:sta>13:42</lt4:sta>
                            <lt4:eta>13:44</lt4:eta>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>PjNtFN3fwL+Pr+qC/oUByw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Littlehampton</lt4:locationName>
                                    <lt4:crs>LIT</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>13:46</lt4:sta>
                            <lt4:eta>13:49</lt4:eta>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>F7vfvIZVIMEz8NM4kHKiHA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Brighton</lt4:locationName>
                                    <lt4:crs>BTN</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>13:50</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>htcXQiJjJTVVWgdzHfYscg==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Brighton</lt4:locationName>
                                    <lt4:crs>BTN</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>13:53</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>zHN1qYqF7kZefiS0DIa3bw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>East Grinstead</lt4:locationName>
                                    <lt4:crs>EGR</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>13:53</lt4:sta>
                            <lt4:eta>Delayed</lt4:eta>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:cancelReason>This train has been cancelled because of earlier engineering works not being finished on time</lt4:cancelReason>
                            <lt4:delayReason>This train has been delayed by earlier engineering works not being finished on time</lt4:delayReason>
                            <lt4:serviceID>fYFNYyHSm4/9gwPfcyvIHA==</lt4:serviceID>
                            <lt5:rsid>SN670303</lt5:rsid>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Portsmouth Harbour</lt4:locationName>
                                    <lt4:crs>PMH</lt4:crs>
                                    <lt4:via>via Horsham </lt4:via>
                                </lt4:location>
                                <lt4:location>
                                    <lt4:locationName>Bognor Regis</lt4:locationName>
                                    <lt4:crs>BOG</lt4:crs>
                                    <lt4:via>via Horsham </lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>13:56</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>z26fuyfOxIItCpy1p9dj/w==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Caterham</lt4:locationName>
                                    <lt4:crs>CAT</lt4:crs>
                                </lt4:location>
                                <lt4:location>
                                    <lt4:locationName>Tattenham Corner</lt4:locationName>
                                    <lt4:crs>TAT</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>13:59</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>5</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:serviceID>hCthuRaq4OnVdByqGoJVww==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>East Croydon</lt4:locationName>
                                    <lt4:crs>ECR</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:00</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>Cw51+3CKU0TdJjZbIjTj3g==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Caterham</lt4:locationName>
                                    <lt4:crs>CAT</lt4:crs>
                                </lt4:location>
                                <lt4:location>
                                    <lt4:locationName>Tattenham Corner</lt4:locationName>
                                    <lt4:crs>TAT</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                    <lt4:via>via Forest Hill</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:03</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>I7lbgYlePQ8N38zoBmRXVQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Gatwick Airport</lt4:locationName>
                                    <lt4:crs>GTW</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Cambridge</lt4:locationName>
                                    <lt4:crs>CBG</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:03</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>a5ar7XL9XBf2EZuw4mOHpQ==</lt4:serviceID>
                            <lt5:rsid>SN377000</lt5:rsid>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Lewes</lt4:locationName>
                                    <lt4:crs>LWS</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:06</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>AKqlFj5Qc0WnNXf/L80eFw==</lt4:serviceID>
                            <lt5:rsid>TL017000</lt5:rsid>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Brighton</lt4:locationName>
                                    <lt4:crs>BTN</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:06</lt4:sta>
                            <lt4:eta>14:11</lt4:eta>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:cancelReason>This train has been cancelled because of earlier engineering works not being finished on time</lt4:cancelReason>
                            <lt4:delayReason>This train has been delayed by earlier engineering works not being finished on time</lt4:delayReason>
                            <lt4:serviceID>MoV6UHw+KZoomovkR+1ugA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Barnham</lt4:locationName>
                                    <lt4:crs>BAA</lt4:crs>
                                </lt4:location>
                                <lt4:location>
                                    <lt4:locationName>Havant</lt4:locationName>
                                    <lt4:crs>HAV</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:10</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>53QvLeRfp5mbEXL/08Fw4Q==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>East Grinstead</lt4:locationName>
                                    <lt4:crs>EGR</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:12</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>ga6ohzYLm/4kjtMsOoXLkg==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Cambridge</lt4:locationName>
                                    <lt4:crs>CBG</lt4:crs>
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
                            <lt4:sta>14:13</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>n072C85nYPBDoZTYmrsCwA==</lt4:serviceID>
                            <lt5:rsid>SN377100</lt5:rsid>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Lewes</lt4:locationName>
                                    <lt4:crs>LWS</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:13</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>hsmOmQilLAza5MPdqzNTtg==</lt4:serviceID>
                            <lt5:rsid>SN370700</lt5:rsid>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Brighton</lt4:locationName>
                                    <lt4:crs>BTN</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:17</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>t9OVxydA3WSVPMTtuoMK7w==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Brighton</lt4:locationName>
                                    <lt4:crs>BTN</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:20</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>1ZoQfiHjyO7K86JUE5Cqbw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Brighton</lt4:locationName>
                                    <lt4:crs>BTN</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:22</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>4</lt4:length>
                            <lt4:serviceID>Bz9T0HAiy7HtanuzsmrjLg==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Reigate</lt4:locationName>
                                    <lt4:crs>REI</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:23</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>Ue761+AcACUng1RC4qQEkw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>East Grinstead</lt4:locationName>
                                    <lt4:crs>EGR</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:25</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>yAWUyuwnSch0LtLrHNEjdg==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Caterham</lt4:locationName>
                                    <lt4:crs>CAT</lt4:crs>
                                </lt4:location>
                                <lt4:location>
                                    <lt4:locationName>Tattenham Corner</lt4:locationName>
                                    <lt4:crs>TAT</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:29</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>5</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:serviceID>nISv4JsgmWkzFw2CsguJyw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>East Croydon</lt4:locationName>
                                    <lt4:crs>ECR</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:29</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>QsnDf8kWNX945jxCHsiRxg==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Caterham</lt4:locationName>
                                    <lt4:crs>CAT</lt4:crs>
                                </lt4:location>
                                <lt4:location>
                                    <lt4:locationName>Tattenham Corner</lt4:locationName>
                                    <lt4:crs>TAT</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                    <lt4:via>via Forest Hill</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:32</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>xrryp92XoNR7R/7lUblmhw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Littlehampton</lt4:locationName>
                                    <lt4:crs>LIT</lt4:crs>
                                    <lt4:via>via Hove &amp; Worthing</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:32</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>4</lt4:length>
                            <lt4:serviceID>RnYey7hDozfAV2eP1hYT9g==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Reigate</lt4:locationName>
                                    <lt4:crs>REI</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:36</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>DQxiDjoNNVr9E/KDZtScSw==</lt4:serviceID>
                            <lt5:rsid>TL017100</lt5:rsid>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Brighton</lt4:locationName>
                                    <lt4:crs>BTN</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:37</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:serviceID>ZSLQ2EFBqnzrHv5upiRlqA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Horsham</lt4:locationName>
                                    <lt4:crs>HRH</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                    <lt4:via>via Norwood Junction</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:39</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>vlhg2Q9mscNY2bS0sk6qsA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>East Grinstead</lt4:locationName>
                                    <lt4:crs>EGR</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:42</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>bSJGKC8l/3pmvvyAipUxJg==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Littlehampton</lt4:locationName>
                                    <lt4:crs>LIT</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:42</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:serviceID>JX7FciWXk3DTUJRTmxsE2w==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Horsham</lt4:locationName>
                                    <lt4:crs>HRH</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:44</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>fRwEBqtVscLfP674RbDB0w==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Brighton</lt4:locationName>
                                    <lt4:crs>BTN</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:46</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>2GNL/HMLV57Hy0slOJjNSQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Brighton</lt4:locationName>
                                    <lt4:crs>BTN</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:50</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>uaIpZHWxvUvUGOpdn+bdgA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Brighton</lt4:locationName>
                                    <lt4:crs>BTN</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:53</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>JEXfVxTfoUGQwaaGrkTeEw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>East Grinstead</lt4:locationName>
                                    <lt4:crs>EGR</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:53</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>+f76j3veLsld99BMgW8vgg==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Portsmouth Harbour</lt4:locationName>
                                    <lt4:crs>PMH</lt4:crs>
                                    <lt4:via>via Horsham </lt4:via>
                                </lt4:location>
                                <lt4:location>
                                    <lt4:locationName>Bognor Regis</lt4:locationName>
                                    <lt4:crs>BOG</lt4:crs>
                                    <lt4:via>via Horsham </lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:56</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>MkdQtD+QXj/jGPBAncEYBw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Caterham</lt4:locationName>
                                    <lt4:crs>CAT</lt4:crs>
                                </lt4:location>
                                <lt4:location>
                                    <lt4:locationName>Tattenham Corner</lt4:locationName>
                                    <lt4:crs>TAT</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:59</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>5</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:serviceID>vNrTgIm+4IgbK2mCq31OjQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>East Croydon</lt4:locationName>
                                    <lt4:crs>ECR</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:00</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>iWR9y5pcJrLwIja6n6BNUQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Caterham</lt4:locationName>
                                    <lt4:crs>CAT</lt4:crs>
                                </lt4:location>
                                <lt4:location>
                                    <lt4:locationName>Tattenham Corner</lt4:locationName>
                                    <lt4:crs>TAT</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                    <lt4:via>via Forest Hill</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:03</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>ngGbm+r7Fi4QCsezXda6/A==</lt4:serviceID>
                            <lt5:rsid>TL266000</lt5:rsid>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Gatwick Airport</lt4:locationName>
                                    <lt4:crs>GTW</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Cambridge</lt4:locationName>
                                    <lt4:crs>CBG</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:03</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>5hp5ODVcrxDVh4Bh6A/AWw==</lt4:serviceID>
                            <lt5:rsid>SN377200</lt5:rsid>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Lewes</lt4:locationName>
                                    <lt4:crs>LWS</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:06</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>CeVkEYtH/rYbDCXRWZ2AYA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Brighton</lt4:locationName>
                                    <lt4:crs>BTN</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:06</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>6gtN0t13Ps0IYl8sTVorDQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Bognor Regis</lt4:locationName>
                                    <lt4:crs>BOG</lt4:crs>
                                </lt4:location>
                                <lt4:location>
                                    <lt4:locationName>Havant</lt4:locationName>
                                    <lt4:crs>HAV</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:10</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>RQbfN8tREychOGtGHwQPYA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>East Grinstead</lt4:locationName>
                                    <lt4:crs>EGR</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:12</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>OlYW+gnYH4k9A0m1m9r2jQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Cambridge</lt4:locationName>
                                    <lt4:crs>CBG</lt4:crs>
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
                            <lt4:sta>15:13</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>tKLsdWi8WI53bhQhcMunLQ==</lt4:serviceID>
                            <lt5:rsid>SN377300</lt5:rsid>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Lewes</lt4:locationName>
                                    <lt4:crs>LWS</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:13</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>j0+qzvU1377BczJmAyQ/bg==</lt4:serviceID>
                            <lt5:rsid>SN371100</lt5:rsid>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Brighton</lt4:locationName>
                                    <lt4:crs>BTN</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:17</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>iVt6GXdECr2bEuxLkp+CQQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Brighton</lt4:locationName>
                                    <lt4:crs>BTN</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:20</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>mtSLJGSImsf5JNO5gZ0qyA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Brighton</lt4:locationName>
                                    <lt4:crs>BTN</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:22</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>4</lt4:length>
                            <lt4:serviceID>PLhVrfFfmwmzscPta44uvA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Reigate</lt4:locationName>
                                    <lt4:crs>REI</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:23</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>jD30WkakBPAL2mh/9vaBdg==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>East Grinstead</lt4:locationName>
                                    <lt4:crs>EGR</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:25</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>PGkWp7SizU7pmjeP1HEGLA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Caterham</lt4:locationName>
                                    <lt4:crs>CAT</lt4:crs>
                                </lt4:location>
                                <lt4:location>
                                    <lt4:locationName>Tattenham Corner</lt4:locationName>
                                    <lt4:crs>TAT</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:29</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>5</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:serviceID>sVDJQrGC4IP8hFXr6+JYhg==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>East Croydon</lt4:locationName>
                                    <lt4:crs>ECR</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:29</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>xK6jGbFBEoZhh7lKhu9lOw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Caterham</lt4:locationName>
                                    <lt4:crs>CAT</lt4:crs>
                                </lt4:location>
                                <lt4:location>
                                    <lt4:locationName>Tattenham Corner</lt4:locationName>
                                    <lt4:crs>TAT</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                    <lt4:via>via Forest Hill</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:32</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>72vgRWxHUaSZ7acVsNY1hA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Littlehampton</lt4:locationName>
                                    <lt4:crs>LIT</lt4:crs>
                                    <lt4:via>via Hove &amp; Worthing</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:32</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>4</lt4:length>
                            <lt4:serviceID>lOlPgX7XEdQKKac5bV/R3w==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Reigate</lt4:locationName>
                                    <lt4:crs>REI</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:36</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>xZueLIcARZu52Y3rmH/reQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Brighton</lt4:locationName>
                                    <lt4:crs>BTN</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:37</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:serviceID>r8VrmzE+2S9GJowUjEniNw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Horsham</lt4:locationName>
                                    <lt4:crs>HRH</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                    <lt4:via>via Norwood Junction</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:39</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>9nJxbG6zU89eac7ZYx0rsQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>East Grinstead</lt4:locationName>
                                    <lt4:crs>EGR</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:42</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>mLRKK77X9L7SdvcFoPZBcQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Littlehampton</lt4:locationName>
                                    <lt4:crs>LIT</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:42</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:serviceID>x7AZ7HwhVVSGJJrx6rN7uA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Horsham</lt4:locationName>
                                    <lt4:crs>HRH</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:44</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>fOpRVOTMohXefTIucRrnSw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Brighton</lt4:locationName>
                                    <lt4:crs>BTN</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>15:46</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>EDUcf3XItGmFyFktBYOIjg==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Brighton</lt4:locationName>
                                    <lt4:crs>BTN</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                    </lt7:trainServices>
                </GetStationBoardResult>
            </GetArrivalBoardResponse>
        </soap:Body>
    </soap:Envelope>`,
};

module.exports = response;
