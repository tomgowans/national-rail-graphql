const response = {
  text: `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <soap:Body>
            <GetDepBoardWithDetailsResponse xmlns="http://thalesgroup.com/RTTI/2017-10-01/ldb/">
                <GetStationBoardResult xmlns:lt="http://thalesgroup.com/RTTI/2012-01-13/ldb/types" xmlns:lt6="http://thalesgroup.com/RTTI/2017-02-02/ldb/types" xmlns:lt7="http://thalesgroup.com/RTTI/2017-10-01/ldb/types" xmlns:lt4="http://thalesgroup.com/RTTI/2015-11-27/ldb/types" xmlns:lt5="http://thalesgroup.com/RTTI/2016-02-16/ldb/types" xmlns:lt2="http://thalesgroup.com/RTTI/2014-02-20/ldb/types" xmlns:lt3="http://thalesgroup.com/RTTI/2015-05-14/ldb/types">
                    <lt4:generatedAt>2019-12-12T22:19:11.2192572+00:00</lt4:generatedAt>
                    <lt4:locationName>East Croydon</lt4:locationName>
                    <lt4:crs>ECR</lt4:crs>
                    <lt4:platformAvailable>true</lt4:platformAvailable>
                    <lt7:trainServices>
                        <lt7:service>
                            <lt4:std>22:15</lt4:std>
                            <lt4:etd>22:23</lt4:etd>
                            <lt4:platform>1</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:delayReason>This train has been delayed by a late running train being in front of this one</lt4:delayReason>
                            <lt4:serviceID>SYUY2JISgt0CXw00/GQ2yA==</lt4:serviceID>
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
                                        <lt7:st>22:30</lt7:st>
                                        <lt7:et>22:36</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Blackfriars</lt7:locationName>
                                        <lt7:crs>BFR</lt7:crs>
                                        <lt7:st>22:36</lt7:st>
                                        <lt7:et>22:42</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>City Thameslink</lt7:locationName>
                                        <lt7:crs>CTK</lt7:crs>
                                        <lt7:st>22:38</lt7:st>
                                        <lt7:et>22:44</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Farringdon Underground</lt7:locationName>
                                        <lt7:crs>ZFD</lt7:crs>
                                        <lt7:st>22:41</lt7:st>
                                        <lt7:et>22:47</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London St Pancras (Intl)</lt7:locationName>
                                        <lt7:crs>STP</lt7:crs>
                                        <lt7:st>22:45</lt7:st>
                                        <lt7:et>22:51</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Finsbury Park</lt7:locationName>
                                        <lt7:crs>FPK</lt7:crs>
                                        <lt7:st>22:52</lt7:st>
                                        <lt7:et>22:57</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Stevenage</lt7:locationName>
                                        <lt7:crs>SVG</lt7:crs>
                                        <lt7:st>23:14</lt7:st>
                                        <lt7:et>23:17</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Hitchin</lt7:locationName>
                                        <lt7:crs>HIT</lt7:crs>
                                        <lt7:st>23:20</lt7:st>
                                        <lt7:et>23:22</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Arlesey</lt7:locationName>
                                        <lt7:crs>ARL</lt7:crs>
                                        <lt7:st>23:25</lt7:st>
                                        <lt7:et>23:27</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Biggleswade</lt7:locationName>
                                        <lt7:crs>BIW</lt7:crs>
                                        <lt7:st>23:30</lt7:st>
                                        <lt7:et>23:32</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Sandy</lt7:locationName>
                                        <lt7:crs>SDY</lt7:crs>
                                        <lt7:st>23:34</lt7:st>
                                        <lt7:et>23:36</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>St Neots</lt7:locationName>
                                        <lt7:crs>SNO</lt7:crs>
                                        <lt7:st>23:41</lt7:st>
                                        <lt7:et>23:43</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Huntingdon</lt7:locationName>
                                        <lt7:crs>HUN</lt7:crs>
                                        <lt7:st>23:48</lt7:st>
                                        <lt7:et>23:50</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Peterborough</lt7:locationName>
                                        <lt7:crs>PBO</lt7:crs>
                                        <lt7:st>00:07</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:std>22:18</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>yWgQhHPrHarZUbNC3wZWtg==</lt4:serviceID>
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
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Bridge</lt7:locationName>
                                        <lt7:crs>LBG</lt7:crs>
                                        <lt7:st>22:34</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:std>22:19</lt4:std>
                            <lt4:etd>Cancelled</lt4:etd>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:isCancelled>true</lt4:isCancelled>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:cancelReason>This train has been cancelled because of a shortage of train crew</lt4:cancelReason>
                            <lt4:delayReason>This train has been delayed by a shortage of train crew</lt4:delayReason>
                            <lt4:serviceID>ltDiujlDajd5DzrQ37ZoUg==</lt4:serviceID>
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
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Gatwick Airport</lt7:locationName>
                                        <lt7:crs>GTW</lt7:crs>
                                        <lt7:st>22:34</lt7:st>
                                        <lt7:et>Cancelled</lt7:et>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Three Bridges</lt7:locationName>
                                        <lt7:crs>TBD</lt7:crs>
                                        <lt7:st>22:39</lt7:st>
                                        <lt7:et>Cancelled</lt7:et>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Balcombe</lt7:locationName>
                                        <lt7:crs>BAB</lt7:crs>
                                        <lt7:st>22:46</lt7:st>
                                        <lt7:et>Cancelled</lt7:et>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Haywards Heath</lt7:locationName>
                                        <lt7:crs>HHE</lt7:crs>
                                        <lt7:st>22:51</lt7:st>
                                        <lt7:et>Cancelled</lt7:et>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Wivelsfield</lt7:locationName>
                                        <lt7:crs>WVF</lt7:crs>
                                        <lt7:st>22:58</lt7:st>
                                        <lt7:et>Cancelled</lt7:et>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Burgess Hill</lt7:locationName>
                                        <lt7:crs>BUG</lt7:crs>
                                        <lt7:st>23:00</lt7:st>
                                        <lt7:et>Cancelled</lt7:et>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Brighton</lt7:locationName>
                                        <lt7:crs>BTN</lt7:crs>
                                        <lt7:st>23:12</lt7:st>
                                        <lt7:et>Cancelled</lt7:et>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:std>22:19</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>1</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>wXDM3mb4UeIfMpjYTJHPZw==</lt4:serviceID>
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
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Clapham Junction</lt7:locationName>
                                        <lt7:crs>CLJ</lt7:crs>
                                        <lt7:st>22:28</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Victoria</lt7:locationName>
                                        <lt7:crs>VIC</lt7:crs>
                                        <lt7:st>22:37</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:std>22:21</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>WWRR89+lI/yfgO27pugMog==</lt4:serviceID>
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
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Bridge</lt7:locationName>
                                        <lt7:crs>LBG</lt7:crs>
                                        <lt7:st>22:34</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Blackfriars</lt7:locationName>
                                        <lt7:crs>BFR</lt7:crs>
                                        <lt7:st>22:41</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>City Thameslink</lt7:locationName>
                                        <lt7:crs>CTK</lt7:crs>
                                        <lt7:st>22:43</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Farringdon Underground</lt7:locationName>
                                        <lt7:crs>ZFD</lt7:crs>
                                        <lt7:st>22:46</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London St Pancras (Intl)</lt7:locationName>
                                        <lt7:crs>STP</lt7:crs>
                                        <lt7:st>22:50</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>West Hampstead Thameslink</lt7:locationName>
                                        <lt7:crs>WHP</lt7:crs>
                                        <lt7:st>22:59</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>St Albans</lt7:locationName>
                                        <lt7:crs>SAC</lt7:crs>
                                        <lt7:st>23:15</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Harpenden</lt7:locationName>
                                        <lt7:crs>HPD</lt7:crs>
                                        <lt7:st>23:22</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Luton Airport Parkway</lt7:locationName>
                                        <lt7:crs>LTN</lt7:crs>
                                        <lt7:st>23:27</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Luton</lt7:locationName>
                                        <lt7:crs>LUT</lt7:crs>
                                        <lt7:st>23:31</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Leagrave</lt7:locationName>
                                        <lt7:crs>LEA</lt7:crs>
                                        <lt7:st>23:35</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Harlington</lt7:locationName>
                                        <lt7:crs>HLN</lt7:crs>
                                        <lt7:st>23:40</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Flitwick</lt7:locationName>
                                        <lt7:crs>FLT</lt7:crs>
                                        <lt7:st>23:44</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Bedford</lt7:locationName>
                                        <lt7:crs>BDM</lt7:crs>
                                        <lt7:st>23:55</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:std>22:22</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>yTHy32jvnHjsPoKkCfUwnA==</lt4:serviceID>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>Caterham</lt4:locationName>
                                    <lt4:crs>CAT</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>London Bridge</lt4:locationName>
                                    <lt4:crs>LBG</lt4:crs>
                                    <lt4:via>via Norbury</lt4:via>
                                </lt4:location>
                            </lt5:destination>
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Selhurst</lt7:locationName>
                                        <lt7:crs>SRS</lt7:crs>
                                        <lt7:st>22:26</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Thornton Heath</lt7:locationName>
                                        <lt7:crs>TTH</lt7:crs>
                                        <lt7:st>22:28</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Norbury</lt7:locationName>
                                        <lt7:crs>NRB</lt7:crs>
                                        <lt7:st>22:31</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Streatham Common</lt7:locationName>
                                        <lt7:crs>SRC</lt7:crs>
                                        <lt7:st>22:34</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Streatham</lt7:locationName>
                                        <lt7:crs>STE</lt7:crs>
                                        <lt7:st>22:42</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Tulse Hill</lt7:locationName>
                                        <lt7:crs>TUH</lt7:crs>
                                        <lt7:st>22:47</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>North Dulwich</lt7:locationName>
                                        <lt7:crs>NDL</lt7:crs>
                                        <lt7:st>22:50</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>East Dulwich</lt7:locationName>
                                        <lt7:crs>EDW</lt7:crs>
                                        <lt7:st>22:53</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Peckham Rye</lt7:locationName>
                                        <lt7:crs>PMR</lt7:crs>
                                        <lt7:st>22:56</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Queens Road Peckham</lt7:locationName>
                                        <lt7:crs>QRP</lt7:crs>
                                        <lt7:st>22:58</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>South Bermondsey</lt7:locationName>
                                        <lt7:crs>SBM</lt7:crs>
                                        <lt7:st>23:01</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Bridge</lt7:locationName>
                                        <lt7:crs>LBG</lt7:crs>
                                        <lt7:st>23:06</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:std>22:22</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>6</lt4:length>
                            <lt4:serviceID>UFgJkultqJWsgsexCJfHsQ==</lt4:serviceID>
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
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Oxted</lt7:locationName>
                                        <lt7:crs>OXT</lt7:crs>
                                        <lt7:st>22:35</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>6</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Hurst Green</lt7:locationName>
                                        <lt7:crs>HUR</lt7:crs>
                                        <lt7:st>22:38</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>6</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Edenbridge Town</lt7:locationName>
                                        <lt7:crs>EBT</lt7:crs>
                                        <lt7:st>22:45</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>6</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Hever</lt7:locationName>
                                        <lt7:crs>HEV</lt7:crs>
                                        <lt7:st>22:49</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>6</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Cowden</lt7:locationName>
                                        <lt7:crs>CWN</lt7:crs>
                                        <lt7:st>22:53</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>6</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Ashurst</lt7:locationName>
                                        <lt7:crs>AHS</lt7:crs>
                                        <lt7:st>22:57</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>6</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Eridge</lt7:locationName>
                                        <lt7:crs>ERI</lt7:crs>
                                        <lt7:st>23:03</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>6</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Crowborough</lt7:locationName>
                                        <lt7:crs>COH</lt7:crs>
                                        <lt7:st>23:09</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>6</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Buxted</lt7:locationName>
                                        <lt7:crs>BXD</lt7:crs>
                                        <lt7:st>23:16</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>6</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Uckfield</lt7:locationName>
                                        <lt7:crs>UCK</lt7:crs>
                                        <lt7:st>23:22</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>6</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:std>22:23</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>18ZcOo1bjoxDMXvXlhvf4g==</lt4:serviceID>
                            <lt5:rsid>SN270003</lt5:rsid>
                            <lt5:origin>
                                <lt4:location>
                                    <lt4:locationName>London Victoria</lt4:locationName>
                                    <lt4:crs>VIC</lt4:crs>
                                </lt4:location>
                            </lt5:origin>
                            <lt5:destination>
                                <lt4:location>
                                    <lt4:locationName>Chichester</lt4:locationName>
                                    <lt4:crs>CCH</lt4:crs>
                                    <lt4:via>via Horsham </lt4:via>
                                </lt4:location>
                                <lt4:location>
                                    <lt4:locationName>Bognor Regis</lt4:locationName>
                                    <lt4:crs>BOG</lt4:crs>
                                    <lt4:via>via Horsham </lt4:via>
                                </lt4:location>
                            </lt5:destination>
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Gatwick Airport</lt7:locationName>
                                        <lt7:crs>GTW</lt7:crs>
                                        <lt7:st>22:38</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Three Bridges</lt7:locationName>
                                        <lt7:crs>TBD</lt7:crs>
                                        <lt7:st>22:44</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Crawley</lt7:locationName>
                                        <lt7:crs>CRW</lt7:crs>
                                        <lt7:st>22:48</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Horsham</lt7:locationName>
                                        <lt7:crs>HRH</lt7:crs>
                                        <lt7:st>22:57</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Christs Hospital</lt7:locationName>
                                        <lt7:crs>CHH</lt7:crs>
                                        <lt7:st>23:02</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Billingshurst</lt7:locationName>
                                        <lt7:crs>BIG</lt7:crs>
                                        <lt7:st>23:08</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Pulborough</lt7:locationName>
                                        <lt7:crs>PUL</lt7:crs>
                                        <lt7:st>23:15</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Amberley</lt7:locationName>
                                        <lt7:crs>AMY</lt7:crs>
                                        <lt7:st>23:21</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Arundel</lt7:locationName>
                                        <lt7:crs>ARU</lt7:crs>
                                        <lt7:st>23:25</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Ford</lt7:locationName>
                                        <lt7:crs>FOD</lt7:crs>
                                        <lt7:st>23:32</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Barnham</lt7:locationName>
                                        <lt7:crs>BAA</lt7:crs>
                                        <lt7:st>23:36</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>4</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Chichester</lt7:locationName>
                                        <lt7:crs>CCH</lt7:crs>
                                        <lt7:st>23:48</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>4</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Barnham</lt7:locationName>
                                        <lt7:crs>BAA</lt7:crs>
                                        <lt7:st>23:36</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Bognor Regis</lt7:locationName>
                                        <lt7:crs>BOG</lt7:crs>
                                        <lt7:st>23:49</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:std>22:24</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>5</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:serviceID>ywReAvthjDbAv8FWeajagQ==</lt4:serviceID>
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
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>22:31</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Kenley</lt7:locationName>
                                        <lt7:crs>KLY</lt7:crs>
                                        <lt7:st>22:36</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Whyteleafe</lt7:locationName>
                                        <lt7:crs>WHY</lt7:crs>
                                        <lt7:st>22:40</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Whyteleafe South</lt7:locationName>
                                        <lt7:crs>WHS</lt7:crs>
                                        <lt7:st>22:42</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Caterham</lt7:locationName>
                                        <lt7:crs>CAT</lt7:crs>
                                        <lt7:st>22:47</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:std>22:24</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>1</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>PlUMsUTYLO+F71H146exAg==</lt4:serviceID>
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
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Clapham Junction</lt7:locationName>
                                        <lt7:crs>CLJ</lt7:crs>
                                        <lt7:st>22:33</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Victoria</lt7:locationName>
                                        <lt7:crs>VIC</lt7:crs>
                                        <lt7:st>22:42</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                    </lt7:trainServices>
                </GetStationBoardResult>
            </GetDepBoardWithDetailsResponse>
        </soap:Body>
    </soap:Envelope>`,
};

const EcrToLKnd = {
  text: `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <soap:Body>
            <GetDepBoardWithDetailsResponse xmlns="http://thalesgroup.com/RTTI/2017-10-01/ldb/">
                <GetStationBoardResult xmlns:lt="http://thalesgroup.com/RTTI/2012-01-13/ldb/types" xmlns:lt6="http://thalesgroup.com/RTTI/2017-02-02/ldb/types" xmlns:lt7="http://thalesgroup.com/RTTI/2017-10-01/ldb/types" xmlns:lt4="http://thalesgroup.com/RTTI/2015-11-27/ldb/types" xmlns:lt5="http://thalesgroup.com/RTTI/2016-02-16/ldb/types" xmlns:lt2="http://thalesgroup.com/RTTI/2014-02-20/ldb/types" xmlns:lt3="http://thalesgroup.com/RTTI/2015-05-14/ldb/types">
                    <lt4:generatedAt>2020-02-24T17:31:54.7519442+00:00</lt4:generatedAt>
                    <lt4:locationName>East Croydon</lt4:locationName>
                    <lt4:crs>ECR</lt4:crs>
                    <lt4:filterLocationName>Kingswood</lt4:filterLocationName>
                    <lt4:filtercrs>KND</lt4:filtercrs>
                    <lt4:nrccMessages>
                        <lt:message>&lt;P&gt;Line closed between Lingfield and East Grinstead due to a landslip. More information can be found in &lt;A href="http://nationalrail.co.uk/service_disruptions/242588.aspx"&gt;Latest Travel News.&lt;/A&gt;&lt;/P&gt;</lt:message>
                        <lt:message>The lifts are out of order between platforms 3 &amp;amp; 4 and the footbridge at East Croydon station </lt:message>
                        <lt:message>The lifts are out of order between platforms 3 &amp;amp; 4 and the footbridge at East Croydon station </lt:message>
                        <lt:message>Delays to Thameslink services between Luton and London St Pancras International due to a points failure between Cricklewood and West Hampstead Thameslink. More details can be found in &lt;A href="http://nationalrail.co.uk/service_disruptions/243501.aspx "&gt;Latest Travel News&lt;/A&gt;.</lt:message>
                    </lt4:nrccMessages>
                    <lt4:platformAvailable>true</lt4:platformAvailable>
                    <lt7:trainServices>
                        <lt7:service>
                            <lt4:std>17:33</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>q8XqRgtqdwSZvTxW2y8U+w==</lt4:serviceID>
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
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>South Croydon</lt7:locationName>
                                        <lt7:crs>SCY</lt7:crs>
                                        <lt7:st>17:35</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley Oaks</lt7:locationName>
                                        <lt7:crs>PUO</lt7:crs>
                                        <lt7:st>17:38</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>17:41</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Kenley</lt7:locationName>
                                        <lt7:crs>KLY</lt7:crs>
                                        <lt7:st>17:48</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Whyteleafe</lt7:locationName>
                                        <lt7:crs>WHY</lt7:crs>
                                        <lt7:st>17:51</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Whyteleafe South</lt7:locationName>
                                        <lt7:crs>WHS</lt7:crs>
                                        <lt7:st>17:53</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Caterham</lt7:locationName>
                                        <lt7:crs>CAT</lt7:crs>
                                        <lt7:st>17:58</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>17:41</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Reedham (Surrey)</lt7:locationName>
                                        <lt7:crs>RHM</lt7:crs>
                                        <lt7:st>17:50</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Coulsdon Town</lt7:locationName>
                                        <lt7:crs>CDN</lt7:crs>
                                        <lt7:st>17:53</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Woodmansterne</lt7:locationName>
                                        <lt7:crs>WME</lt7:crs>
                                        <lt7:st>17:56</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Chipstead</lt7:locationName>
                                        <lt7:crs>CHP</lt7:crs>
                                        <lt7:st>17:59</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Kingswood</lt7:locationName>
                                        <lt7:crs>KND</lt7:crs>
                                        <lt7:st>18:05</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Tadworth</lt7:locationName>
                                        <lt7:crs>TAD</lt7:crs>
                                        <lt7:st>18:08</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Tattenham Corner</lt7:locationName>
                                        <lt7:crs>TAT</lt7:crs>
                                        <lt7:st>18:12</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:std>17:50</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>5</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>6P+RNgm5Sm8oG4C92zIoIA==</lt4:serviceID>
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
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>South Croydon</lt7:locationName>
                                        <lt7:crs>SCY</lt7:crs>
                                        <lt7:st>17:52</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley Oaks</lt7:locationName>
                                        <lt7:crs>PUO</lt7:crs>
                                        <lt7:st>17:56</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>17:59</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Kenley</lt7:locationName>
                                        <lt7:crs>KLY</lt7:crs>
                                        <lt7:st>18:08</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Whyteleafe</lt7:locationName>
                                        <lt7:crs>WHY</lt7:crs>
                                        <lt7:st>18:11</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Whyteleafe South</lt7:locationName>
                                        <lt7:crs>WHS</lt7:crs>
                                        <lt7:st>18:13</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Caterham</lt7:locationName>
                                        <lt7:crs>CAT</lt7:crs>
                                        <lt7:st>18:18</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>17:59</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Reedham (Surrey)</lt7:locationName>
                                        <lt7:crs>RHM</lt7:crs>
                                        <lt7:st>18:10</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Coulsdon Town</lt7:locationName>
                                        <lt7:crs>CDN</lt7:crs>
                                        <lt7:st>18:13</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Woodmansterne</lt7:locationName>
                                        <lt7:crs>WME</lt7:crs>
                                        <lt7:st>18:16</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Chipstead</lt7:locationName>
                                        <lt7:crs>CHP</lt7:crs>
                                        <lt7:st>18:19</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Kingswood</lt7:locationName>
                                        <lt7:crs>KND</lt7:crs>
                                        <lt7:st>18:25</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Tadworth</lt7:locationName>
                                        <lt7:crs>TAD</lt7:crs>
                                        <lt7:st>18:28</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Tattenham Corner</lt7:locationName>
                                        <lt7:crs>TAT</lt7:crs>
                                        <lt7:st>18:32</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:std>18:03</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>J/SxdtSvUmx2Yx68DT1F0Q==</lt4:serviceID>
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
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>South Croydon</lt7:locationName>
                                        <lt7:crs>SCY</lt7:crs>
                                        <lt7:st>18:05</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley Oaks</lt7:locationName>
                                        <lt7:crs>PUO</lt7:crs>
                                        <lt7:st>18:08</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>18:11</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Kenley</lt7:locationName>
                                        <lt7:crs>KLY</lt7:crs>
                                        <lt7:st>18:18</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Whyteleafe</lt7:locationName>
                                        <lt7:crs>WHY</lt7:crs>
                                        <lt7:st>18:21</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Whyteleafe South</lt7:locationName>
                                        <lt7:crs>WHS</lt7:crs>
                                        <lt7:st>18:23</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Caterham</lt7:locationName>
                                        <lt7:crs>CAT</lt7:crs>
                                        <lt7:st>18:28</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>18:11</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Reedham (Surrey)</lt7:locationName>
                                        <lt7:crs>RHM</lt7:crs>
                                        <lt7:st>18:20</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Coulsdon Town</lt7:locationName>
                                        <lt7:crs>CDN</lt7:crs>
                                        <lt7:st>18:23</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Woodmansterne</lt7:locationName>
                                        <lt7:crs>WME</lt7:crs>
                                        <lt7:st>18:26</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Chipstead</lt7:locationName>
                                        <lt7:crs>CHP</lt7:crs>
                                        <lt7:st>18:29</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Kingswood</lt7:locationName>
                                        <lt7:crs>KND</lt7:crs>
                                        <lt7:st>18:35</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Tadworth</lt7:locationName>
                                        <lt7:crs>TAD</lt7:crs>
                                        <lt7:st>18:38</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Tattenham Corner</lt7:locationName>
                                        <lt7:crs>TAT</lt7:crs>
                                        <lt7:st>18:42</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:std>18:20</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>5</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>CUItlCdwSAP7vgel2brr2A==</lt4:serviceID>
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
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>South Croydon</lt7:locationName>
                                        <lt7:crs>SCY</lt7:crs>
                                        <lt7:st>18:22</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley Oaks</lt7:locationName>
                                        <lt7:crs>PUO</lt7:crs>
                                        <lt7:st>18:26</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>18:29</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Kenley</lt7:locationName>
                                        <lt7:crs>KLY</lt7:crs>
                                        <lt7:st>18:38</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Whyteleafe</lt7:locationName>
                                        <lt7:crs>WHY</lt7:crs>
                                        <lt7:st>18:41</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Whyteleafe South</lt7:locationName>
                                        <lt7:crs>WHS</lt7:crs>
                                        <lt7:st>18:43</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Caterham</lt7:locationName>
                                        <lt7:crs>CAT</lt7:crs>
                                        <lt7:st>18:48</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>18:29</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Reedham (Surrey)</lt7:locationName>
                                        <lt7:crs>RHM</lt7:crs>
                                        <lt7:st>18:40</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Coulsdon Town</lt7:locationName>
                                        <lt7:crs>CDN</lt7:crs>
                                        <lt7:st>18:43</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Woodmansterne</lt7:locationName>
                                        <lt7:crs>WME</lt7:crs>
                                        <lt7:st>18:46</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Chipstead</lt7:locationName>
                                        <lt7:crs>CHP</lt7:crs>
                                        <lt7:st>18:49</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Kingswood</lt7:locationName>
                                        <lt7:crs>KND</lt7:crs>
                                        <lt7:st>18:55</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Tadworth</lt7:locationName>
                                        <lt7:crs>TAD</lt7:crs>
                                        <lt7:st>18:58</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Tattenham Corner</lt7:locationName>
                                        <lt7:crs>TAT</lt7:crs>
                                        <lt7:st>19:02</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:std>18:33</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>mEaNb4tOEz9kzh3zHFyeOQ==</lt4:serviceID>
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
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>South Croydon</lt7:locationName>
                                        <lt7:crs>SCY</lt7:crs>
                                        <lt7:st>18:36</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley Oaks</lt7:locationName>
                                        <lt7:crs>PUO</lt7:crs>
                                        <lt7:st>18:38</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>18:41</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Kenley</lt7:locationName>
                                        <lt7:crs>KLY</lt7:crs>
                                        <lt7:st>18:48</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Whyteleafe</lt7:locationName>
                                        <lt7:crs>WHY</lt7:crs>
                                        <lt7:st>18:51</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Whyteleafe South</lt7:locationName>
                                        <lt7:crs>WHS</lt7:crs>
                                        <lt7:st>18:53</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Caterham</lt7:locationName>
                                        <lt7:crs>CAT</lt7:crs>
                                        <lt7:st>18:58</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>18:41</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Reedham (Surrey)</lt7:locationName>
                                        <lt7:crs>RHM</lt7:crs>
                                        <lt7:st>18:50</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Coulsdon Town</lt7:locationName>
                                        <lt7:crs>CDN</lt7:crs>
                                        <lt7:st>18:53</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Woodmansterne</lt7:locationName>
                                        <lt7:crs>WME</lt7:crs>
                                        <lt7:st>18:56</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Chipstead</lt7:locationName>
                                        <lt7:crs>CHP</lt7:crs>
                                        <lt7:st>18:59</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Kingswood</lt7:locationName>
                                        <lt7:crs>KND</lt7:crs>
                                        <lt7:st>19:05</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Tadworth</lt7:locationName>
                                        <lt7:crs>TAD</lt7:crs>
                                        <lt7:st>19:08</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Tattenham Corner</lt7:locationName>
                                        <lt7:crs>TAT</lt7:crs>
                                        <lt7:st>19:12</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:std>18:50</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>5</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>8</lt4:length>
                            <lt4:serviceID>VTpxeg2h2PKJiBZAggCemg==</lt4:serviceID>
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
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>South Croydon</lt7:locationName>
                                        <lt7:crs>SCY</lt7:crs>
                                        <lt7:st>18:52</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley Oaks</lt7:locationName>
                                        <lt7:crs>PUO</lt7:crs>
                                        <lt7:st>18:56</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>18:59</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>4</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Kenley</lt7:locationName>
                                        <lt7:crs>KLY</lt7:crs>
                                        <lt7:st>19:08</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>4</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Whyteleafe</lt7:locationName>
                                        <lt7:crs>WHY</lt7:crs>
                                        <lt7:st>19:11</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>4</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Whyteleafe South</lt7:locationName>
                                        <lt7:crs>WHS</lt7:crs>
                                        <lt7:st>19:13</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>4</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Caterham</lt7:locationName>
                                        <lt7:crs>CAT</lt7:crs>
                                        <lt7:st>19:18</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>4</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>18:59</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>4</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Reedham (Surrey)</lt7:locationName>
                                        <lt7:crs>RHM</lt7:crs>
                                        <lt7:st>19:10</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>4</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Coulsdon Town</lt7:locationName>
                                        <lt7:crs>CDN</lt7:crs>
                                        <lt7:st>19:13</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>4</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Woodmansterne</lt7:locationName>
                                        <lt7:crs>WME</lt7:crs>
                                        <lt7:st>19:16</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>4</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Chipstead</lt7:locationName>
                                        <lt7:crs>CHP</lt7:crs>
                                        <lt7:st>19:19</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>4</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Kingswood</lt7:locationName>
                                        <lt7:crs>KND</lt7:crs>
                                        <lt7:st>19:25</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>4</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Tadworth</lt7:locationName>
                                        <lt7:crs>TAD</lt7:crs>
                                        <lt7:st>19:28</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>4</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Tattenham Corner</lt7:locationName>
                                        <lt7:crs>TAT</lt7:crs>
                                        <lt7:st>19:32</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>4</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:std>19:03</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>6</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>10</lt4:length>
                            <lt4:serviceID>tawhRVR2xxRV+3N0J29HIQ==</lt4:serviceID>
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
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>South Croydon</lt7:locationName>
                                        <lt7:crs>SCY</lt7:crs>
                                        <lt7:st>19:06</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley Oaks</lt7:locationName>
                                        <lt7:crs>PUO</lt7:crs>
                                        <lt7:st>19:08</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>19:11</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Kenley</lt7:locationName>
                                        <lt7:crs>KLY</lt7:crs>
                                        <lt7:st>19:18</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Whyteleafe</lt7:locationName>
                                        <lt7:crs>WHY</lt7:crs>
                                        <lt7:st>19:21</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Whyteleafe South</lt7:locationName>
                                        <lt7:crs>WHS</lt7:crs>
                                        <lt7:st>19:23</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Caterham</lt7:locationName>
                                        <lt7:crs>CAT</lt7:crs>
                                        <lt7:st>19:28</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>19:11</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Reedham (Surrey)</lt7:locationName>
                                        <lt7:crs>RHM</lt7:crs>
                                        <lt7:st>19:20</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Coulsdon Town</lt7:locationName>
                                        <lt7:crs>CDN</lt7:crs>
                                        <lt7:st>19:23</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Woodmansterne</lt7:locationName>
                                        <lt7:crs>WME</lt7:crs>
                                        <lt7:st>19:26</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Chipstead</lt7:locationName>
                                        <lt7:crs>CHP</lt7:crs>
                                        <lt7:st>19:29</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Kingswood</lt7:locationName>
                                        <lt7:crs>KND</lt7:crs>
                                        <lt7:st>19:35</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Tadworth</lt7:locationName>
                                        <lt7:crs>TAD</lt7:crs>
                                        <lt7:st>19:38</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Tattenham Corner</lt7:locationName>
                                        <lt7:crs>TAT</lt7:crs>
                                        <lt7:st>19:42</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                    </lt7:trainServices>
                </GetStationBoardResult>
            </GetDepBoardWithDetailsResponse>
        </soap:Body>
    </soap:Envelope>`,
};

const KndToEcr = {
  text: `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <soap:Body>
            <GetDepBoardWithDetailsResponse xmlns="http://thalesgroup.com/RTTI/2017-10-01/ldb/">
                <GetStationBoardResult xmlns:lt="http://thalesgroup.com/RTTI/2012-01-13/ldb/types" xmlns:lt6="http://thalesgroup.com/RTTI/2017-02-02/ldb/types" xmlns:lt7="http://thalesgroup.com/RTTI/2017-10-01/ldb/types" xmlns:lt4="http://thalesgroup.com/RTTI/2015-11-27/ldb/types" xmlns:lt5="http://thalesgroup.com/RTTI/2016-02-16/ldb/types" xmlns:lt2="http://thalesgroup.com/RTTI/2014-02-20/ldb/types" xmlns:lt3="http://thalesgroup.com/RTTI/2015-05-14/ldb/types">
                    <lt4:generatedAt>2020-02-24T17:33:24.9872329+00:00</lt4:generatedAt>
                    <lt4:locationName>Kingswood</lt4:locationName>
                    <lt4:crs>KND</lt4:crs>
                    <lt4:filterLocationName>East Croydon</lt4:filterLocationName>
                    <lt4:filtercrs>ECR</lt4:filtercrs>
                    <lt4:platformAvailable>true</lt4:platformAvailable>
                    <lt7:trainServices>
                        <lt7:service>
                            <lt4:std>17:46</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>1</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>5</lt4:length>
                            <lt4:serviceID>mqyS0fsYqLoasoKENa4MzQ==</lt4:serviceID>
                            <lt5:origin>
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
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Chipstead</lt7:locationName>
                                        <lt7:crs>CHP</lt7:crs>
                                        <lt7:st>17:52</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Woodmansterne</lt7:locationName>
                                        <lt7:crs>WME</lt7:crs>
                                        <lt7:st>17:55</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Coulsdon Town</lt7:locationName>
                                        <lt7:crs>CDN</lt7:crs>
                                        <lt7:st>17:58</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Reedham (Surrey)</lt7:locationName>
                                        <lt7:crs>RHM</lt7:crs>
                                        <lt7:st>18:02</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>18:05</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley Oaks</lt7:locationName>
                                        <lt7:crs>PUO</lt7:crs>
                                        <lt7:st>18:11</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>South Croydon</lt7:locationName>
                                        <lt7:crs>SCY</lt7:crs>
                                        <lt7:st>18:15</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>East Croydon</lt7:locationName>
                                        <lt7:crs>ECR</lt7:crs>
                                        <lt7:st>18:18</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Bridge</lt7:locationName>
                                        <lt7:crs>LBG</lt7:crs>
                                        <lt7:st>18:34</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:std>18:16</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>1</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>5</lt4:length>
                            <lt4:serviceID>6Ck/b9QfT6ngC++hMyBWzA==</lt4:serviceID>
                            <lt5:origin>
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
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Chipstead</lt7:locationName>
                                        <lt7:crs>CHP</lt7:crs>
                                        <lt7:st>18:22</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Woodmansterne</lt7:locationName>
                                        <lt7:crs>WME</lt7:crs>
                                        <lt7:st>18:25</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Coulsdon Town</lt7:locationName>
                                        <lt7:crs>CDN</lt7:crs>
                                        <lt7:st>18:28</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Reedham (Surrey)</lt7:locationName>
                                        <lt7:crs>RHM</lt7:crs>
                                        <lt7:st>18:32</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>18:35</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley Oaks</lt7:locationName>
                                        <lt7:crs>PUO</lt7:crs>
                                        <lt7:st>18:41</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>South Croydon</lt7:locationName>
                                        <lt7:crs>SCY</lt7:crs>
                                        <lt7:st>18:45</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>East Croydon</lt7:locationName>
                                        <lt7:crs>ECR</lt7:crs>
                                        <lt7:st>18:48</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Bridge</lt7:locationName>
                                        <lt7:crs>LBG</lt7:crs>
                                        <lt7:st>19:04</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:std>18:46</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>1</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>5</lt4:length>
                            <lt4:serviceID>aUBqQ+5/vthukaQS08Xwgg==</lt4:serviceID>
                            <lt5:origin>
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
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Chipstead</lt7:locationName>
                                        <lt7:crs>CHP</lt7:crs>
                                        <lt7:st>18:52</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Woodmansterne</lt7:locationName>
                                        <lt7:crs>WME</lt7:crs>
                                        <lt7:st>18:55</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Coulsdon Town</lt7:locationName>
                                        <lt7:crs>CDN</lt7:crs>
                                        <lt7:st>18:58</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Reedham (Surrey)</lt7:locationName>
                                        <lt7:crs>RHM</lt7:crs>
                                        <lt7:st>19:02</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>19:05</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley Oaks</lt7:locationName>
                                        <lt7:crs>PUO</lt7:crs>
                                        <lt7:st>19:11</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>South Croydon</lt7:locationName>
                                        <lt7:crs>SCY</lt7:crs>
                                        <lt7:st>19:15</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>East Croydon</lt7:locationName>
                                        <lt7:crs>ECR</lt7:crs>
                                        <lt7:st>19:18</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Bridge</lt7:locationName>
                                        <lt7:crs>LBG</lt7:crs>
                                        <lt7:st>19:34</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:std>19:16</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>1</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>5</lt4:length>
                            <lt4:serviceID>O/iVlgGNszspHr+okO7BfQ==</lt4:serviceID>
                            <lt5:origin>
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
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Chipstead</lt7:locationName>
                                        <lt7:crs>CHP</lt7:crs>
                                        <lt7:st>19:22</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Woodmansterne</lt7:locationName>
                                        <lt7:crs>WME</lt7:crs>
                                        <lt7:st>19:25</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Coulsdon Town</lt7:locationName>
                                        <lt7:crs>CDN</lt7:crs>
                                        <lt7:st>19:28</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Reedham (Surrey)</lt7:locationName>
                                        <lt7:crs>RHM</lt7:crs>
                                        <lt7:st>19:32</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>19:35</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley Oaks</lt7:locationName>
                                        <lt7:crs>PUO</lt7:crs>
                                        <lt7:st>19:41</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>South Croydon</lt7:locationName>
                                        <lt7:crs>SCY</lt7:crs>
                                        <lt7:st>19:45</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>East Croydon</lt7:locationName>
                                        <lt7:crs>ECR</lt7:crs>
                                        <lt7:st>19:48</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Bridge</lt7:locationName>
                                        <lt7:crs>LBG</lt7:crs>
                                        <lt7:st>20:05</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                    </lt7:trainServices>
                </GetStationBoardResult>
            </GetDepBoardWithDetailsResponse>
        </soap:Body>
    </soap:Envelope>`,
};

module.exports = response;
