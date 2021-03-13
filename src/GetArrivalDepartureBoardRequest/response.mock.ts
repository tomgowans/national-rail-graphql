const response = {
  text: `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <soap:Body>
            <GetArrivalDepartureBoardResponse xmlns="http://thalesgroup.com/RTTI/2017-10-01/ldb/">
                <GetStationBoardResult xmlns:lt="http://thalesgroup.com/RTTI/2012-01-13/ldb/types" xmlns:lt6="http://thalesgroup.com/RTTI/2017-02-02/ldb/types" xmlns:lt7="http://thalesgroup.com/RTTI/2017-10-01/ldb/types" xmlns:lt4="http://thalesgroup.com/RTTI/2015-11-27/ldb/types" xmlns:lt5="http://thalesgroup.com/RTTI/2016-02-16/ldb/types" xmlns:lt2="http://thalesgroup.com/RTTI/2014-02-20/ldb/types" xmlns:lt3="http://thalesgroup.com/RTTI/2015-05-14/ldb/types">
                    <lt4:generatedAt>2019-12-16T07:20:28.6660564+00:00</lt4:generatedAt>
                    <lt4:locationName>East Croydon</lt4:locationName>
                    <lt4:crs>ECR</lt4:crs>
                    <lt4:platformAvailable>true</lt4:platformAvailable>
                    <lt7:trainServices>
                        <lt7:service>
                            <lt4:sta>07:15</lt4:sta>
                            <lt4:eta>07:17</lt4:eta>
                            <lt4:std>07:16</lt4:std>
                            <lt4:etd>07:19</lt4:etd>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>FbzyMg1G5AKa/6EVlRvHVQ==</lt4:serviceID>
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
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>07:18</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:18</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>pJpM3tbOx4WIz++x3lVwVQ==</lt4:serviceID>
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
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>07:18</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:19</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>AdARaoTM3RTWzLfXdENjFw==</lt4:serviceID>
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
                            <lt4:sta>07:18</lt4:sta>
                            <lt4:eta>07:20</lt4:eta>
                            <lt4:std>07:19</lt4:std>
                            <lt4:etd>07:21</lt4:etd>
                            <lt4:platform>1</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>3awVq2Mhn+5pEPLgbfSAUw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Hastings</lt4:locationName>
                                    <lt4:crs>HGS</lt4:crs>
                                </lt4:location>
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
                            <lt4:sta>07:19</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:20</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>5</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>ZOgeRHzJbbOfPGQ9PaFAAA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
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
                            <lt4:sta>07:20</lt4:sta>
                            <lt4:eta>07:22</lt4:eta>
                            <lt4:std>07:21</lt4:std>
                            <lt4:etd>07:23</lt4:etd>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>pXz+o8sgyREtAekq4qY8bw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Littlehampton</lt4:locationName>
                                    <lt4:crs>LIT</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
                                    <lt4:via>via London Bridge</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>07:22</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:22</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>4</lt4:length>
                            <lt4:serviceID>ctnzQ12jKXEW3ZvSfrDIYA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Bognor Regis</lt4:locationName>
                                    <lt4:crs>BOG</lt4:crs>
                                    <lt4:via>via Horsham </lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>07:21</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:22</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>4</lt4:length>
                            <lt4:serviceID>oE0IYdO/dyiJGKr/lQK0yw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Uckfield</lt4:locationName>
                                    <lt4:crs>UCK</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>07:23</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:24</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>1</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>tfHNN0kST79kIfB6zeN+rA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Horsham</lt4:locationName>
                                    <lt4:crs>HRH</lt4:crs>
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
                            <lt4:sta>07:24</lt4:sta>
                            <lt4:eta>07:26</lt4:eta>
                            <lt4:std>07:25</lt4:std>
                            <lt4:etd>07:27</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>MBFVmupJMPhcdN0RDd2jmg==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>East Grinstead</lt4:locationName>
                                    <lt4:crs>EGR</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
                                    <lt4:via>via London Bridge</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>07:24</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:25</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>n4zQfArQT3sOHYGyFvf5ig==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
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
                            <lt4:sta>07:27</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:27</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>5</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>4fQDEI27Png6s3XQVNQ3aQ==</lt4:serviceID>
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
                                <lt4:location>
                                    <lt4:locationName>Gatwick Airport</lt4:locationName>
                                    <lt4:crs>GTW</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>07:26</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:27</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>jKjPgXaRQYkd9VgXTGhjIw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Bognor Regis</lt4:locationName>
                                    <lt4:crs>BOG</lt4:crs>
                                </lt4:location>
                                <lt4:location>
                                    <lt4:locationName>Portsmouth Harbour</lt4:locationName>
                                    <lt4:crs>PMH</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>07:28</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:28</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>fxnxkxc1NoRQMNSz4lq+Ww==</lt4:serviceID>
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
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>07:29</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:30</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>zW9qbBTgfLHyTx3lIqDg/A==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Cambridge</lt4:locationName>
                                    <lt4:crs>CBG</lt4:crs>
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
                            <lt4:sta>07:31</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:31</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>Y0rAiHjHMxPmg32XSejHmQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Horsham</lt4:locationName>
                                    <lt4:crs>HRH</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
                                    <lt4:via>via London Bridge</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>07:31</lt4:sta>
                            <lt4:eta>07:34</lt4:eta>
                            <lt4:std>07:31</lt4:std>
                            <lt4:etd>07:35</lt4:etd>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:delayReason>This train has been delayed by a late running train being in front of this one</lt4:delayReason>
                            <lt4:serviceID>gdIqv+3FojvLDAhkG+DNJQ==</lt4:serviceID>
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
                        <lt7:service>
                            <lt4:sta>07:32</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:33</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>4</lt4:length>
                            <lt4:serviceID>CBGGRTGtm6jeRlTV47L7VQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Eastbourne</lt4:locationName>
                                    <lt4:crs>EBN</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>07:32</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:33</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>5vYNclFV2OmcLCD8PZFW5w==</lt4:serviceID>
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
                            <lt4:sta>07:34</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:34</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>YrfjJOpuChN0TWxdXSXqFg==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Gatwick Airport</lt4:locationName>
                                    <lt4:crs>GTW</lt4:crs>
                                </lt4:location>
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
                            <lt4:sta>07:38</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:38</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>e/My1Gaicx8LzSI1qynATQ==</lt4:serviceID>
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
                            <lt4:sta>07:37</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:38</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>IF8xNVY+XuJv5oEosyaJjg==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Uckfield</lt4:locationName>
                                    <lt4:crs>UCK</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>07:37</lt4:sta>
                            <lt4:eta>07:40</lt4:eta>
                            <lt4:std>07:38</lt4:std>
                            <lt4:etd>07:41</lt4:etd>
                            <lt4:platform>1</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>1cDazn15L31Kz/rJpXh78Q==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Eastbourne</lt4:locationName>
                                    <lt4:crs>EBN</lt4:crs>
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
                            <lt4:sta>07:40</lt4:sta>
                            <lt4:eta>07:45</lt4:eta>
                            <lt4:std>07:40</lt4:std>
                            <lt4:etd>07:45</lt4:etd>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:cancelReason>This train has been cancelled because of this train being late from the depot</lt4:cancelReason>
                            <lt4:delayReason>This train has been delayed by this train being late from the depot</lt4:delayReason>
                            <lt4:serviceID>wR48Wh5LTjZrayZW+O5hzg==</lt4:serviceID>
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
                                    <lt4:via>via London Bridge</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>07:39</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:40</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>xSpbieukHZzzBN1X3AEjMw==</lt4:serviceID>
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
                            <lt4:std>07:40</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>5</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>gHIJ1QZO7FN0POc7yKZ+6w==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>East Croydon</lt4:locationName>
                                    <lt4:crs>ECR</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Watford Junction</lt4:locationName>
                                    <lt4:crs>WFJ</lt4:crs>
                                    <lt4:via>via Kensington Olympia</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>07:45</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:45</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>EXnzytpD4+WM5R/xudvYIA==</lt4:serviceID>
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
                            <lt4:sta>07:46</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:46</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>VgwuexGDDGCwsFz5GWMDnQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Peterborough</lt4:locationName>
                                    <lt4:crs>PBO</lt4:crs>
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
                            <lt4:sta>07:46</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:46</lt4:std>
                            <lt4:etd>07:48</lt4:etd>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>IN6vz08QRrjYuiyMKdGasg==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Gatwick Airport</lt4:locationName>
                                    <lt4:crs>GTW</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Peterborough</lt4:locationName>
                                    <lt4:crs>PBO</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>07:48</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:48</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>k3mP3OW+vi1fQEktXHOo9g==</lt4:serviceID>
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
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>07:48</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:49</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>qfsVdeSbFQ+RsLJEENTmKA==</lt4:serviceID>
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
                            <lt4:sta>07:49</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:50</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>5</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>5</lt4:length>
                            <lt4:serviceID>5jFRmSkdu4ESCg5lZcCdTw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Caterham</lt4:locationName>
                                    <lt4:crs>CAT</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>07:52</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:52</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>yUCvAnyoWE30v3tVs/Zj1w==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Southampton Central</lt4:locationName>
                                    <lt4:crs>SOU</lt4:crs>
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
                            <lt4:sta>07:52</lt4:sta>
                            <lt4:eta>07:54</lt4:eta>
                            <lt4:std>07:52</lt4:std>
                            <lt4:etd>07:54</lt4:etd>
                            <lt4:platform>1</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>3Ubd11WZ+P2+WVIdZdefIA==</lt4:serviceID>
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
                            <lt4:sta>07:54</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:55</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>2NC2ooZTj1v2Nyucia1Piw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>East Grinstead</lt4:locationName>
                                    <lt4:crs>EGR</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
                                    <lt4:via>via London Bridge</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>07:54</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:55</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>uXVm4XKWTc9+ZtkKjHZ2oQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
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
                            <lt4:sta>07:54</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:55</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>1</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>/+bAP1sVGSDluVRj5/ZK3w==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Bognor Regis</lt4:locationName>
                                    <lt4:crs>BOG</lt4:crs>
                                </lt4:location>
                                <lt4:location>
                                    <lt4:locationName>Portsmouth Harbour</lt4:locationName>
                                    <lt4:crs>PMH</lt4:crs>
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
                            <lt4:sta>07:57</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:57</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>5</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>OOF+gD/FaHZe0ySXhSnaEw==</lt4:serviceID>
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
                                <lt4:location>
                                    <lt4:locationName>Gatwick Airport</lt4:locationName>
                                    <lt4:crs>GTW</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>07:57</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:57</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>BzZwnn80udDLyu6THr6EbA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Eastbourne</lt4:locationName>
                                    <lt4:crs>EBN</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>07:58</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>07:58</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>KPg78D7/yl2k59+nvQKRTw==</lt4:serviceID>
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
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:00</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:00</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>cR/hilgP4kR60oPpNtitDQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Cambridge</lt4:locationName>
                                    <lt4:crs>CBG</lt4:crs>
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
                            <lt4:sta>08:01</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:01</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>DK76Azr95Du2xn+lnmlVUA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Horsham</lt4:locationName>
                                    <lt4:crs>HRH</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
                                    <lt4:via>via London Bridge</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:01</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:01</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>Td0Tiappwad8/9kHzSjjLw==</lt4:serviceID>
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
                        <lt7:service>
                            <lt4:sta>08:01</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>5</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>WQu6j6J6awYJ4G7qnJzYBA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Watford Junction</lt4:locationName>
                                    <lt4:crs>WFJ</lt4:crs>
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
                            <lt4:sta>08:03</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:03</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>vcsQ0S+dFeHZV7H1jsa9tQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Ore</lt4:locationName>
                                    <lt4:crs>ORE</lt4:crs>
                                </lt4:location>
                                <lt4:location>
                                    <lt4:locationName>Littlehampton</lt4:locationName>
                                    <lt4:crs>LIT</lt4:crs>
                                    <lt4:via>via Hove &amp; Worthing</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:04</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:04</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>0wcc2BbQQLsZwO2ua3H8/g==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Gatwick Airport</lt4:locationName>
                                    <lt4:crs>GTW</lt4:crs>
                                </lt4:location>
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
                            <lt4:sta>08:03</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:04</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>qZI/z1ULvn1i8QIX/4/iAA==</lt4:serviceID>
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
                            <lt4:sta>08:08</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:08</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>ljth5MkTacbxMYh/BiqIGw==</lt4:serviceID>
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
                            <lt4:sta>08:07</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:08</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>6</lt4:length>
                            <lt4:serviceID>gZvgcYKcoU73m0yO3GGxtw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Uckfield</lt4:locationName>
                                    <lt4:crs>UCK</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:07</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:08</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>1</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>TN0jBvmzVfBcKYYjNwCtgg==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Seaford</lt4:locationName>
                                    <lt4:crs>SEF</lt4:crs>
                                </lt4:location>
                                <lt4:location>
                                    <lt4:locationName>Hastings</lt4:locationName>
                                    <lt4:crs>HGS</lt4:crs>
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
                            <lt4:sta>08:09</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:10</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>Xr+ueuDNKRXoJqXYsEe4bg==</lt4:serviceID>
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
                                    <lt4:via>via London Bridge</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:09</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:10</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>NzMsU19wuzpcmISW+syzyQ==</lt4:serviceID>
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
                            <lt4:sta>08:11</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:11</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>7/dP4HrS8HvpdhqrUxXBqA==</lt4:serviceID>
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
                            <lt4:std>08:11</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>5</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>dzzVtUDO4x/dcD8+LlIAzw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>East Croydon</lt4:locationName>
                                    <lt4:crs>ECR</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Milton Keynes Central</lt4:locationName>
                                    <lt4:crs>MKC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:15</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:15</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>4bFZo9pW+n3bbPq8ASXdIw==</lt4:serviceID>
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
                            <lt4:sta>08:16</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:16</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>n1FcQXQaSJGcwv8bCux0Sw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Peterborough</lt4:locationName>
                                    <lt4:crs>PBO</lt4:crs>
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
                            <lt4:sta>08:15</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:16</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>UZ0hX8flY4LTd1d3cIg/vQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Gatwick Airport</lt4:locationName>
                                    <lt4:crs>GTW</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Peterborough</lt4:locationName>
                                    <lt4:crs>PBO</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:18</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:18</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>ej89nu99FoUupiV4cwgyRA==</lt4:serviceID>
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
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:18</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:19</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>KURzwvRWTvoY32+/mjRpQQ==</lt4:serviceID>
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
                            <lt4:sta>08:19</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:20</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>5</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:serviceID>TIIqdEk7TNHImIbMIpocZQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Caterham</lt4:locationName>
                                    <lt4:crs>CAT</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:18</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:20</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>1</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>naMmNTNPBXxBB1i6Refveg==</lt4:serviceID>
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
                            <lt4:sta>08:20</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:21</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>pKYE8ZRfNkv1neekSGIYiA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Littlehampton</lt4:locationName>
                                    <lt4:crs>LIT</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
                                    <lt4:via>via London Bridge</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:22</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:22</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>ia7idUkYvmkm1B28g63AjA==</lt4:serviceID>
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
                            <lt4:sta>08:21</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:22</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>vEnxG8QZv1m7SnqCZlk9gw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Uckfield</lt4:locationName>
                                    <lt4:crs>UCK</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:23</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:24</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>1</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>bDezYxuULdxWhJfPC5LLPQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Bognor Regis</lt4:locationName>
                                    <lt4:crs>BOG</lt4:crs>
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
                            <lt4:sta>08:24</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:25</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>I0jUEyhE1yWWv7R3KesqIw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>East Grinstead</lt4:locationName>
                                    <lt4:crs>EGR</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
                                    <lt4:via>via London Bridge</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:24</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:25</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>Blpt2ANtzEqTiqer6dZJCg==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
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
                            <lt4:sta>08:26</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:27</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>zygz9xEw4vX4SVzssoT2ew==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Bognor Regis</lt4:locationName>
                                    <lt4:crs>BOG</lt4:crs>
                                </lt4:location>
                                <lt4:location>
                                    <lt4:locationName>Southampton Central</lt4:locationName>
                                    <lt4:crs>SOU</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:27</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:28</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>5</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>Y7BiVkNoyZNc2KcFgQtSiA==</lt4:serviceID>
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
                                <lt4:location>
                                    <lt4:locationName>Gatwick Airport</lt4:locationName>
                                    <lt4:crs>GTW</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:28</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:28</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>JB31nL6o0Wd3ffjh2NJuRQ==</lt4:serviceID>
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
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:29</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:29</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:delayReason>This train has been delayed by a shortage of train crew</lt4:delayReason>
                            <lt4:serviceID>tn6VFd8VMDfPDcN5anuAUw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Cambridge</lt4:locationName>
                                    <lt4:crs>CBG</lt4:crs>
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
                            <lt4:sta>08:31</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:31</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>B6kEynu8pMx2npe95Xk21w==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Horsham</lt4:locationName>
                                    <lt4:crs>HRH</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
                                    <lt4:via>via London Bridge</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:31</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:31</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>9lqNBfbh78c8hqSB/oE2rA==</lt4:serviceID>
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
                        <lt7:service>
                            <lt4:sta>08:31</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>5</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>A/1RadRpijiAve4EbM43zg==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Watford Junction</lt4:locationName>
                                    <lt4:crs>WFJ</lt4:crs>
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
                            <lt4:sta>08:33</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:33</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>2eHq0DLsuFHVQ5enPHywUQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Eastbourne</lt4:locationName>
                                    <lt4:crs>EBN</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:34</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:34</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>pdKHjQgCzqPEt1mKR4pxmw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Gatwick Airport</lt4:locationName>
                                    <lt4:crs>GTW</lt4:crs>
                                </lt4:location>
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
                            <lt4:sta>08:33</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:34</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>fWM1RH/tQx3HFn8GNtVbQg==</lt4:serviceID>
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
                            <lt4:sta>08:36</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:37</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>s4096zaR6VGfWeCRVFiQow==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Three Bridges</lt4:locationName>
                                    <lt4:crs>TBD</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:38</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:38</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>ePAEmQQlbhAGfXxmr2ZrtA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
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
                            <lt4:sta>08:37</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:38</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>bsuK3yTdo3TvtwsGyP+vXQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Uckfield</lt4:locationName>
                                    <lt4:crs>UCK</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:37</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:38</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>1</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>lyjNFGO590NDbmvrUxraQQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Eastbourne</lt4:locationName>
                                    <lt4:crs>EBN</lt4:crs>
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
                            <lt4:sta>08:39</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:40</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>nec53QSnd19ti5hoGHWk0A==</lt4:serviceID>
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
                            <lt4:std>08:40</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>5</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>ngaQ5EI06cPZ4rh+ugWChw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>East Croydon</lt4:locationName>
                                    <lt4:crs>ECR</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Shepherds Bush</lt4:locationName>
                                    <lt4:crs>SPB</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:41</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:41</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>DwKAuhsWBCpC7juBzDX8cg==</lt4:serviceID>
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
                            <lt4:sta>08:42</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:43</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:serviceID>kMvuT621TLzolQA7x0y4WQ==</lt4:serviceID>
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
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:45</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:45</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>dMHddhu3fG3QhyUH88ZHXQ==</lt4:serviceID>
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
                            <lt4:sta>08:46</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:46</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>GyOQJqUwlTsGrosbCzudxg==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Peterborough</lt4:locationName>
                                    <lt4:crs>PBO</lt4:crs>
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
                            <lt4:sta>08:45</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:46</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>39rzhGxLdaH6hZU7t6TKZg==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Gatwick Airport</lt4:locationName>
                                    <lt4:crs>GTW</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Peterborough</lt4:locationName>
                                    <lt4:crs>PBO</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:48</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:48</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>vIGo5QJpGKGvg9ZhpYe9SA==</lt4:serviceID>
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
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:48</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:49</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>fturqzE2PLMIEv3uPHeYQA==</lt4:serviceID>
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
                            <lt4:sta>08:48</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:50</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>1</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>qSM1A4o5yyEhTGWK78Srdw==</lt4:serviceID>
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
                            <lt4:sta>08:51</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:51</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>rTyMsdyOJ1cLR1Z863Yzfw==</lt4:serviceID>
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
                                    <lt4:via>via London Bridge</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:51</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:52</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>6</lt4:length>
                            <lt4:serviceID>NEG03Ogh2QXYVvAJlQ+cSw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Uckfield</lt4:locationName>
                                    <lt4:crs>UCK</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:52</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:53</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>O84QBBcrSJf4Odn46exEhg==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Southampton Central</lt4:locationName>
                                    <lt4:crs>SOU</lt4:crs>
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
                            <lt4:sta>08:54</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:54</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>1</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>wx2DIVBojz3TGB9ZCSoRHA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Bognor Regis</lt4:locationName>
                                    <lt4:crs>BOG</lt4:crs>
                                </lt4:location>
                                <lt4:location>
                                    <lt4:locationName>Southampton Central</lt4:locationName>
                                    <lt4:crs>SOU</lt4:crs>
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
                            <lt4:sta>08:54</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:55</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>EkI9MBi8b6J3gm1/L3y1uA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>East Grinstead</lt4:locationName>
                                    <lt4:crs>EGR</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
                                    <lt4:via>via London Bridge</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:54</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:55</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>mMGBmq9tp1LFjZicOeZC6Q==</lt4:serviceID>
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
                            <lt4:sta>08:57</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:57</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>5</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>4</lt4:length>
                            <lt4:serviceID>grFxcIBS5MygXS8zJXwAPw==</lt4:serviceID>
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
                            <lt4:sta>08:58</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:58</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>WFEnOTD1xyXlQc8CUeA0FA==</lt4:serviceID>
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
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:58</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:59</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>fMRULpdXXL9keF/nXgDYvQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Cambridge</lt4:locationName>
                                    <lt4:crs>CBG</lt4:crs>
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
                            <lt4:sta>09:01</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>09:01</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>c/a6HgC+iOSRgrmzlJbhsg==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Horsham</lt4:locationName>
                                    <lt4:crs>HRH</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
                                    <lt4:via>via London Bridge</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>09:01</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>09:01</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>SOmLqViOYPmgxcn//bX0Nw==</lt4:serviceID>
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
                        <lt7:service>
                            <lt4:sta>09:01</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:platform>5</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>0li2QztVPrnrLRNc6xc1hw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Milton Keynes Central</lt4:locationName>
                                    <lt4:crs>MKC</lt4:crs>
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
                            <lt4:sta>09:02</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>09:03</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>gxz4r6jwQIx9v1hWIbs0uQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Ore</lt4:locationName>
                                    <lt4:crs>ORE</lt4:crs>
                                </lt4:location>
                                <lt4:location>
                                    <lt4:locationName>Littlehampton</lt4:locationName>
                                    <lt4:crs>LIT</lt4:crs>
                                    <lt4:via>via Hove &amp; Worthing</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>09:04</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>09:04</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>Z7ZTkFJlDpA7w90MTbcyAA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Gatwick Airport</lt4:locationName>
                                    <lt4:crs>GTW</lt4:crs>
                                </lt4:location>
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
                            <lt4:sta>09:03</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>09:04</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>1H6a1tIc5mdlKKMJEhJP9w==</lt4:serviceID>
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
                            <lt4:sta>09:06</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>09:07</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>vWOznRsDlb8JzoPMy+ZTwg==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Flitwick</lt4:locationName>
                                    <lt4:crs>FLT</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Three Bridges</lt4:locationName>
                                    <lt4:crs>TBD</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>09:07</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>09:08</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>4</lt4:length>
                            <lt4:serviceID>A+5l4LcQ2V3nb/WLxzTtvQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Uckfield</lt4:locationName>
                                    <lt4:crs>UCK</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>09:08</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>09:08</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>X+CEz6w3JgThfdJ4HTEgRQ==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Bedford</lt4:locationName>
                                    <lt4:crs>BDM</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Three Bridges</lt4:locationName>
                                    <lt4:crs>TBD</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>09:09</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>09:09</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>Vy917KkcDBXUiLdkO9mwLw==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Ore</lt4:locationName>
                                    <lt4:crs>ORE</lt4:crs>
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
                            <lt4:sta>09:09</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>09:10</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>ptzABUYHLY9kseAc/kEiNA==</lt4:serviceID>
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
                            <lt4:std>09:10</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>GTDpv1KMVqIaax4XNRRRtA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>East Croydon</lt4:locationName>
                                    <lt4:crs>ECR</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Milton Keynes Central</lt4:locationName>
                                    <lt4:crs>MKC</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>09:11</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>09:11</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>BdLWymotqWZdnOFhJjACAg==</lt4:serviceID>
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
                            <lt4:sta>09:12</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>09:14</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:serviceID>F1RNFiQy4bwpjnMkCzKhrQ==</lt4:serviceID>
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
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>09:15</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>09:15</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>P46u5jbAOwO6eIQzogyYOw==</lt4:serviceID>
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
                            <lt4:sta>09:14</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>09:16</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>KHcCxSrGsmndWU443pDO0Q==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Peterborough</lt4:locationName>
                                    <lt4:crs>PBO</lt4:crs>
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
                            <lt4:sta>09:15</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>09:16</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>xPESGRkRDw9J9ZbEJ+jreg==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Gatwick Airport</lt4:locationName>
                                    <lt4:crs>GTW</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Peterborough</lt4:locationName>
                                    <lt4:crs>PBO</lt4:crs>
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>09:18</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>09:18</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>3ENnb4Ql5MNRePf4OO2oUw==</lt4:serviceID>
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
                                </lt4:location>
                            </lt5:destination>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>09:18</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>09:19</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>9cXdQLGbPsZjpchPJyOSag==</lt4:serviceID>
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
                            <lt4:sta>09:18</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>09:19</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>8gVveFHKcccRVyY+aFA4Yg==</lt4:serviceID>
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
                    </lt7:trainServices>
                </GetStationBoardResult>
            </GetArrivalDepartureBoardResponse>
        </soap:Body>
    </soap:Envelope>`,
};

export { response as default };
