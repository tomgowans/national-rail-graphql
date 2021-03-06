const response = {
  text: `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <soap:Body>
            <GetArrDepBoardWithDetailsResponse xmlns="http://thalesgroup.com/RTTI/2017-10-01/ldb/">
                <GetStationBoardResult xmlns:lt="http://thalesgroup.com/RTTI/2012-01-13/ldb/types" xmlns:lt6="http://thalesgroup.com/RTTI/2017-02-02/ldb/types" xmlns:lt7="http://thalesgroup.com/RTTI/2017-10-01/ldb/types" xmlns:lt4="http://thalesgroup.com/RTTI/2015-11-27/ldb/types" xmlns:lt5="http://thalesgroup.com/RTTI/2016-02-16/ldb/types" xmlns:lt2="http://thalesgroup.com/RTTI/2014-02-20/ldb/types" xmlns:lt3="http://thalesgroup.com/RTTI/2015-05-14/ldb/types">
                    <lt4:generatedAt>2019-12-17T08:16:54.3494412+00:00</lt4:generatedAt>
                    <lt4:locationName>East Croydon</lt4:locationName>
                    <lt4:crs>ECR</lt4:crs>
                    <lt4:platformAvailable>true</lt4:platformAvailable>
                    <lt7:trainServices>
                        <lt7:service>
                            <lt4:sta>08:08</lt4:sta>
                            <lt4:eta>08:13</lt4:eta>
                            <lt4:std>08:08</lt4:std>
                            <lt4:etd>08:14</lt4:etd>
                            <lt4:platform>3</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:delayReason>This train has been delayed by a late running train being in front of this one</lt4:delayReason>
                            <lt4:serviceID>ooJ6RtyQfT7XCu7oA+0t6A==</lt4:serviceID>
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
                                        <lt7:et>08:30</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:15</lt4:sta>
                            <lt4:eta>08:21</lt4:eta>
                            <lt4:std>08:15</lt4:std>
                            <lt4:etd>08:22</lt4:etd>
                            <lt4:platform>4</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>nSisa9QWlEAkXirHs/wghw==</lt4:serviceID>
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
                            <lt7:previousCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>East Grinstead</lt7:locationName>
                                        <lt7:crs>EGR</lt7:crs>
                                        <lt7:st>07:36</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Dormans</lt7:locationName>
                                        <lt7:crs>DMS</lt7:crs>
                                        <lt7:st>07:40</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Lingfield</lt7:locationName>
                                        <lt7:crs>LFD</lt7:crs>
                                        <lt7:st>07:43</lt7:st>
                                        <lt7:at>No report</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Hurst Green</lt7:locationName>
                                        <lt7:crs>HUR</lt7:crs>
                                        <lt7:st>07:50</lt7:st>
                                        <lt7:at>07:56</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Oxted</lt7:locationName>
                                        <lt7:crs>OXT</lt7:crs>
                                        <lt7:st>07:53</lt7:st>
                                        <lt7:at>08:00</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Woldingham</lt7:locationName>
                                        <lt7:crs>WOH</lt7:crs>
                                        <lt7:st>07:59</lt7:st>
                                        <lt7:at>08:06</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Upper Warlingham</lt7:locationName>
                                        <lt7:crs>UWL</lt7:crs>
                                        <lt7:st>08:02</lt7:st>
                                        <lt7:at>08:10</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Riddlesdown</lt7:locationName>
                                        <lt7:crs>RDD</lt7:crs>
                                        <lt7:st>08:06</lt7:st>
                                        <lt7:at>08:14</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Sanderstead</lt7:locationName>
                                        <lt7:crs>SNR</lt7:crs>
                                        <lt7:st>08:09</lt7:st>
                                        <lt7:et>08:16</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:previousCallingPoints>
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Clapham Junction</lt7:locationName>
                                        <lt7:crs>CLJ</lt7:crs>
                                        <lt7:st>08:27</lt7:st>
                                        <lt7:et>08:31</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Victoria</lt7:locationName>
                                        <lt7:crs>VIC</lt7:crs>
                                        <lt7:st>08:35</lt7:st>
                                        <lt7:et>08:38</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:16</lt4:sta>
                            <lt4:eta>On time</lt4:eta>
                            <lt4:std>08:16</lt4:std>
                            <lt4:etd>On time</lt4:etd>
                            <lt4:platform>5</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:delayReason>This train has been delayed by congestion</lt4:delayReason>
                            <lt4:serviceID>RT99IN2flEobbKW4scfaog==</lt4:serviceID>
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
                            <lt7:previousCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Peterborough</lt7:locationName>
                                        <lt7:crs>PBO</lt7:crs>
                                        <lt7:st>06:24</lt7:st>
                                        <lt7:at>06:26</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Huntingdon</lt7:locationName>
                                        <lt7:crs>HUN</lt7:crs>
                                        <lt7:st>06:41</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>St Neots</lt7:locationName>
                                        <lt7:crs>SNO</lt7:crs>
                                        <lt7:st>06:48</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Sandy</lt7:locationName>
                                        <lt7:crs>SDY</lt7:crs>
                                        <lt7:st>06:56</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Biggleswade</lt7:locationName>
                                        <lt7:crs>BIW</lt7:crs>
                                        <lt7:st>07:00</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Arlesey</lt7:locationName>
                                        <lt7:crs>ARL</lt7:crs>
                                        <lt7:st>07:05</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Hitchin</lt7:locationName>
                                        <lt7:crs>HIT</lt7:crs>
                                        <lt7:st>07:11</lt7:st>
                                        <lt7:at>07:13</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Stevenage</lt7:locationName>
                                        <lt7:crs>SVG</lt7:crs>
                                        <lt7:st>07:17</lt7:st>
                                        <lt7:at>07:19</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Finsbury Park</lt7:locationName>
                                        <lt7:crs>FPK</lt7:crs>
                                        <lt7:st>07:38</lt7:st>
                                        <lt7:at>07:40</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London St Pancras (Intl)</lt7:locationName>
                                        <lt7:crs>STP</lt7:crs>
                                        <lt7:st>07:45</lt7:st>
                                        <lt7:at>07:47</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Farringdon Underground</lt7:locationName>
                                        <lt7:crs>ZFD</lt7:crs>
                                        <lt7:st>07:49</lt7:st>
                                        <lt7:at>07:52</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>City Thameslink</lt7:locationName>
                                        <lt7:crs>CTK</lt7:crs>
                                        <lt7:st>07:51</lt7:st>
                                        <lt7:at>07:55</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Blackfriars</lt7:locationName>
                                        <lt7:crs>BFR</lt7:crs>
                                        <lt7:st>07:54</lt7:st>
                                        <lt7:at>07:56</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Bridge</lt7:locationName>
                                        <lt7:crs>LBG</lt7:crs>
                                        <lt7:st>08:00</lt7:st>
                                        <lt7:at>08:01</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Norwood Junction</lt7:locationName>
                                        <lt7:crs>NWD</lt7:crs>
                                        <lt7:st>08:12</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:previousCallingPoints>
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Coulsdon South</lt7:locationName>
                                        <lt7:crs>CDS</lt7:crs>
                                        <lt7:st>08:25</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Merstham</lt7:locationName>
                                        <lt7:crs>MHM</lt7:crs>
                                        <lt7:st>08:31</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Redhill</lt7:locationName>
                                        <lt7:crs>RDH</lt7:crs>
                                        <lt7:st>08:35</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Horley</lt7:locationName>
                                        <lt7:crs>HOR</lt7:crs>
                                        <lt7:st>08:42</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Gatwick Airport</lt7:locationName>
                                        <lt7:crs>GTW</lt7:crs>
                                        <lt7:st>08:45</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Three Bridges</lt7:locationName>
                                        <lt7:crs>TBD</lt7:crs>
                                        <lt7:st>08:51</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Crawley</lt7:locationName>
                                        <lt7:crs>CRW</lt7:crs>
                                        <lt7:st>08:56</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Ifield</lt7:locationName>
                                        <lt7:crs>IFI</lt7:crs>
                                        <lt7:st>08:59</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Faygate</lt7:locationName>
                                        <lt7:crs>FGT</lt7:crs>
                                        <lt7:st>09:03</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Littlehaven</lt7:locationName>
                                        <lt7:crs>LVN</lt7:crs>
                                        <lt7:st>09:07</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Horsham</lt7:locationName>
                                        <lt7:crs>HRH</lt7:crs>
                                        <lt7:st>09:11</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:15</lt4:sta>
                            <lt4:eta>08:19</lt4:eta>
                            <lt4:std>08:16</lt4:std>
                            <lt4:etd>08:20</lt4:etd>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:delayReason>This train has been delayed by congestion</lt4:delayReason>
                            <lt4:serviceID>vFSfR9xCjBHuj1GUufPAUQ==</lt4:serviceID>
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
                            <lt7:previousCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Gatwick Airport</lt7:locationName>
                                        <lt7:crs>GTW</lt7:crs>
                                        <lt7:st>07:43</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Horley</lt7:locationName>
                                        <lt7:crs>HOR</lt7:crs>
                                        <lt7:st>07:46</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Salfords</lt7:locationName>
                                        <lt7:crs>SAF</lt7:crs>
                                        <lt7:st>07:50</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Earlswood (Surrey)</lt7:locationName>
                                        <lt7:crs>ELD</lt7:crs>
                                        <lt7:st>07:54</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Redhill</lt7:locationName>
                                        <lt7:crs>RDH</lt7:crs>
                                        <lt7:st>07:59</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Merstham</lt7:locationName>
                                        <lt7:crs>MHM</lt7:crs>
                                        <lt7:st>08:03</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Coulsdon South</lt7:locationName>
                                        <lt7:crs>CDS</lt7:crs>
                                        <lt7:st>08:09</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:previousCallingPoints>
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Bridge</lt7:locationName>
                                        <lt7:crs>LBG</lt7:crs>
                                        <lt7:st>08:30</lt7:st>
                                        <lt7:et>08:33</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Blackfriars</lt7:locationName>
                                        <lt7:crs>BFR</lt7:crs>
                                        <lt7:st>08:36</lt7:st>
                                        <lt7:et>08:39</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>City Thameslink</lt7:locationName>
                                        <lt7:crs>CTK</lt7:crs>
                                        <lt7:st>08:38</lt7:st>
                                        <lt7:et>08:41</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Farringdon Underground</lt7:locationName>
                                        <lt7:crs>ZFD</lt7:crs>
                                        <lt7:st>08:41</lt7:st>
                                        <lt7:et>08:43</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London St Pancras (Intl)</lt7:locationName>
                                        <lt7:crs>STP</lt7:crs>
                                        <lt7:st>08:45</lt7:st>
                                        <lt7:et>08:47</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Finsbury Park</lt7:locationName>
                                        <lt7:crs>FPK</lt7:crs>
                                        <lt7:st>08:52</lt7:st>
                                        <lt7:et>08:54</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Stevenage</lt7:locationName>
                                        <lt7:crs>SVG</lt7:crs>
                                        <lt7:st>09:13</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Hitchin</lt7:locationName>
                                        <lt7:crs>HIT</lt7:crs>
                                        <lt7:st>09:19</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Arlesey</lt7:locationName>
                                        <lt7:crs>ARL</lt7:crs>
                                        <lt7:st>09:25</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Biggleswade</lt7:locationName>
                                        <lt7:crs>BIW</lt7:crs>
                                        <lt7:st>09:30</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Sandy</lt7:locationName>
                                        <lt7:crs>SDY</lt7:crs>
                                        <lt7:st>09:34</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>St Neots</lt7:locationName>
                                        <lt7:crs>SNO</lt7:crs>
                                        <lt7:st>09:41</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Huntingdon</lt7:locationName>
                                        <lt7:crs>HUN</lt7:crs>
                                        <lt7:st>09:48</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Peterborough</lt7:locationName>
                                        <lt7:crs>PBO</lt7:crs>
                                        <lt7:st>10:05</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
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
                            <lt4:serviceID>ykRMqN5xF7HjeN3/9fnmdg==</lt4:serviceID>
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
                            <lt7:previousCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Caterham</lt7:locationName>
                                        <lt7:crs>CAT</lt7:crs>
                                        <lt7:st>07:50</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Whyteleafe South</lt7:locationName>
                                        <lt7:crs>WHS</lt7:crs>
                                        <lt7:st>07:53</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Whyteleafe</lt7:locationName>
                                        <lt7:crs>WHY</lt7:crs>
                                        <lt7:st>07:55</lt7:st>
                                        <lt7:at>No report</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Kenley</lt7:locationName>
                                        <lt7:crs>KLY</lt7:crs>
                                        <lt7:st>07:58</lt7:st>
                                        <lt7:at>08:00</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>08:09</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley Oaks</lt7:locationName>
                                        <lt7:crs>PUO</lt7:crs>
                                        <lt7:st>08:12</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>South Croydon</lt7:locationName>
                                        <lt7:crs>SCY</lt7:crs>
                                        <lt7:st>08:15</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Tattenham Corner</lt7:locationName>
                                        <lt7:crs>TAT</lt7:crs>
                                        <lt7:st>07:39</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Tadworth</lt7:locationName>
                                        <lt7:crs>TAD</lt7:crs>
                                        <lt7:st>07:43</lt7:st>
                                        <lt7:at>No report</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Kingswood</lt7:locationName>
                                        <lt7:crs>KND</lt7:crs>
                                        <lt7:st>07:46</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Chipstead</lt7:locationName>
                                        <lt7:crs>CHP</lt7:crs>
                                        <lt7:st>07:52</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Woodmansterne</lt7:locationName>
                                        <lt7:crs>WME</lt7:crs>
                                        <lt7:st>07:55</lt7:st>
                                        <lt7:at>07:58</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Coulsdon Town</lt7:locationName>
                                        <lt7:crs>CDN</lt7:crs>
                                        <lt7:st>07:59</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Reedham (Surrey)</lt7:locationName>
                                        <lt7:crs>RHM</lt7:crs>
                                        <lt7:st>08:02</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>08:09</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:previousCallingPoints>
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Bridge</lt7:locationName>
                                        <lt7:crs>LBG</lt7:crs>
                                        <lt7:st>08:34</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
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
                            <lt4:delayReason>This train has been delayed by congestion</lt4:delayReason>
                            <lt4:serviceID>fqc8YG9uelXBhSxlu/rxFg==</lt4:serviceID>
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
                            <lt7:previousCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Bedford</lt7:locationName>
                                        <lt7:crs>BDM</lt7:crs>
                                        <lt7:st>06:48</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Flitwick</lt7:locationName>
                                        <lt7:crs>FLT</lt7:crs>
                                        <lt7:st>06:59</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Harlington</lt7:locationName>
                                        <lt7:crs>HLN</lt7:crs>
                                        <lt7:st>07:03</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Leagrave</lt7:locationName>
                                        <lt7:crs>LEA</lt7:crs>
                                        <lt7:st>07:08</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Luton</lt7:locationName>
                                        <lt7:crs>LUT</lt7:crs>
                                        <lt7:st>07:12</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Luton Airport Parkway</lt7:locationName>
                                        <lt7:crs>LTN</lt7:crs>
                                        <lt7:st>07:15</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Harpenden</lt7:locationName>
                                        <lt7:crs>HPD</lt7:crs>
                                        <lt7:st>07:21</lt7:st>
                                        <lt7:at>07:24</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>St Albans</lt7:locationName>
                                        <lt7:crs>SAC</lt7:crs>
                                        <lt7:st>07:27</lt7:st>
                                        <lt7:at>07:31</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London St Pancras (Intl)</lt7:locationName>
                                        <lt7:crs>STP</lt7:crs>
                                        <lt7:st>07:50</lt7:st>
                                        <lt7:at>07:52</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Farringdon Underground</lt7:locationName>
                                        <lt7:crs>ZFD</lt7:crs>
                                        <lt7:st>07:54</lt7:st>
                                        <lt7:at>07:57</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>City Thameslink</lt7:locationName>
                                        <lt7:crs>CTK</lt7:crs>
                                        <lt7:st>07:56</lt7:st>
                                        <lt7:at>08:00</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Blackfriars</lt7:locationName>
                                        <lt7:crs>BFR</lt7:crs>
                                        <lt7:st>07:59</lt7:st>
                                        <lt7:at>08:01</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Bridge</lt7:locationName>
                                        <lt7:crs>LBG</lt7:crs>
                                        <lt7:st>08:05</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:previousCallingPoints>
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Gatwick Airport</lt7:locationName>
                                        <lt7:crs>GTW</lt7:crs>
                                        <lt7:st>08:34</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Three Bridges</lt7:locationName>
                                        <lt7:crs>TBD</lt7:crs>
                                        <lt7:st>08:39</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Balcombe</lt7:locationName>
                                        <lt7:crs>BAB</lt7:crs>
                                        <lt7:st>08:46</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Haywards Heath</lt7:locationName>
                                        <lt7:crs>HHE</lt7:crs>
                                        <lt7:st>08:51</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Wivelsfield</lt7:locationName>
                                        <lt7:crs>WVF</lt7:crs>
                                        <lt7:st>08:58</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Burgess Hill</lt7:locationName>
                                        <lt7:crs>BUG</lt7:crs>
                                        <lt7:st>09:00</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Brighton</lt7:locationName>
                                        <lt7:crs>BTN</lt7:crs>
                                        <lt7:st>09:12</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
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
                            <lt4:serviceID>lr3KkIjhYw2OluPLFHPCZg==</lt4:serviceID>
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
                            <lt7:previousCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Victoria</lt7:locationName>
                                        <lt7:crs>VIC</lt7:crs>
                                        <lt7:st>08:01</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Clapham Junction</lt7:locationName>
                                        <lt7:crs>CLJ</lt7:crs>
                                        <lt7:st>08:08</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:previousCallingPoints>
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>South Croydon</lt7:locationName>
                                        <lt7:crs>SCY</lt7:crs>
                                        <lt7:st>08:22</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley Oaks</lt7:locationName>
                                        <lt7:crs>PUO</lt7:crs>
                                        <lt7:st>08:26</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>08:29</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Kenley</lt7:locationName>
                                        <lt7:crs>KLY</lt7:crs>
                                        <lt7:st>08:35</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Whyteleafe</lt7:locationName>
                                        <lt7:crs>WHY</lt7:crs>
                                        <lt7:st>08:38</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Whyteleafe South</lt7:locationName>
                                        <lt7:crs>WHS</lt7:crs>
                                        <lt7:st>08:40</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Caterham</lt7:locationName>
                                        <lt7:crs>CAT</lt7:crs>
                                        <lt7:st>08:45</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:18</lt4:sta>
                            <lt4:eta>08:20</lt4:eta>
                            <lt4:std>08:20</lt4:std>
                            <lt4:etd>08:21</lt4:etd>
                            <lt4:platform>1</lt4:platform>
                            <lt4:operator>Southern</lt4:operator>
                            <lt4:operatorCode>SN</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:serviceID>vbWsRfKaCXOpQk37ZeW8Dg==</lt4:serviceID>
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
                            <lt7:previousCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Littlehampton</lt7:locationName>
                                        <lt7:crs>LIT</lt7:crs>
                                        <lt7:st>06:47</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Angmering</lt7:locationName>
                                        <lt7:crs>ANG</lt7:crs>
                                        <lt7:st>06:56</lt7:st>
                                        <lt7:at>06:59</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Goring-by-Sea</lt7:locationName>
                                        <lt7:crs>GBS</lt7:crs>
                                        <lt7:st>07:01</lt7:st>
                                        <lt7:at>07:04</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Durrington-on-Sea</lt7:locationName>
                                        <lt7:crs>DUR</lt7:crs>
                                        <lt7:st>07:04</lt7:st>
                                        <lt7:at>07:07</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>West Worthing</lt7:locationName>
                                        <lt7:crs>WWO</lt7:crs>
                                        <lt7:st>07:06</lt7:st>
                                        <lt7:at>07:09</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Worthing</lt7:locationName>
                                        <lt7:crs>WRH</lt7:crs>
                                        <lt7:st>07:09</lt7:st>
                                        <lt7:at>07:12</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Lancing</lt7:locationName>
                                        <lt7:crs>LAC</lt7:crs>
                                        <lt7:st>07:14</lt7:st>
                                        <lt7:at>07:16</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Shoreham-by-Sea</lt7:locationName>
                                        <lt7:crs>SSE</lt7:crs>
                                        <lt7:st>07:18</lt7:st>
                                        <lt7:at>07:21</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Portslade</lt7:locationName>
                                        <lt7:crs>PLD</lt7:crs>
                                        <lt7:st>07:23</lt7:st>
                                        <lt7:at>07:26</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Hove</lt7:locationName>
                                        <lt7:crs>HOV</lt7:crs>
                                        <lt7:st>07:27</lt7:st>
                                        <lt7:at>07:30</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Preston Park</lt7:locationName>
                                        <lt7:crs>PRP</lt7:crs>
                                        <lt7:st>07:33</lt7:st>
                                        <lt7:at>07:34</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Burgess Hill</lt7:locationName>
                                        <lt7:crs>BUG</lt7:crs>
                                        <lt7:st>07:42</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Haywards Heath</lt7:locationName>
                                        <lt7:crs>HHE</lt7:crs>
                                        <lt7:st>07:47</lt7:st>
                                        <lt7:at>07:49</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Three Bridges</lt7:locationName>
                                        <lt7:crs>TBD</lt7:crs>
                                        <lt7:st>07:57</lt7:st>
                                        <lt7:at>07:59</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Gatwick Airport</lt7:locationName>
                                        <lt7:crs>GTW</lt7:crs>
                                        <lt7:st>08:03</lt7:st>
                                        <lt7:at>08:05</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:previousCallingPoints>
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Clapham Junction</lt7:locationName>
                                        <lt7:crs>CLJ</lt7:crs>
                                        <lt7:st>08:30</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Victoria</lt7:locationName>
                                        <lt7:crs>VIC</lt7:crs>
                                        <lt7:st>08:37</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>08:20</lt4:sta>
                            <lt4:eta>08:25</lt4:eta>
                            <lt4:std>08:21</lt4:std>
                            <lt4:etd>08:26</lt4:etd>
                            <lt4:platform>2</lt4:platform>
                            <lt4:operator>Thameslink</lt4:operator>
                            <lt4:operatorCode>TL</lt4:operatorCode>
                            <lt4:serviceType>train</lt4:serviceType>
                            <lt4:length>12</lt4:length>
                            <lt4:delayReason>This train has been delayed by congestion</lt4:delayReason>
                            <lt4:serviceID>Nuo3Dtl+JRnJKlxZ//OyyA==</lt4:serviceID>
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
                            <lt7:previousCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Littlehampton</lt7:locationName>
                                        <lt7:crs>LIT</lt7:crs>
                                        <lt7:st>06:52</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Angmering</lt7:locationName>
                                        <lt7:crs>ANG</lt7:crs>
                                        <lt7:st>07:01</lt7:st>
                                        <lt7:at>07:04</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Goring-by-Sea</lt7:locationName>
                                        <lt7:crs>GBS</lt7:crs>
                                        <lt7:st>07:06</lt7:st>
                                        <lt7:at>07:09</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Durrington-on-Sea</lt7:locationName>
                                        <lt7:crs>DUR</lt7:crs>
                                        <lt7:st>07:09</lt7:st>
                                        <lt7:at>07:12</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>West Worthing</lt7:locationName>
                                        <lt7:crs>WWO</lt7:crs>
                                        <lt7:st>07:12</lt7:st>
                                        <lt7:at>07:14</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Worthing</lt7:locationName>
                                        <lt7:crs>WRH</lt7:crs>
                                        <lt7:st>07:15</lt7:st>
                                        <lt7:at>07:17</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Lancing</lt7:locationName>
                                        <lt7:crs>LAC</lt7:crs>
                                        <lt7:st>07:19</lt7:st>
                                        <lt7:at>07:22</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Shoreham-by-Sea</lt7:locationName>
                                        <lt7:crs>SSE</lt7:crs>
                                        <lt7:st>07:24</lt7:st>
                                        <lt7:at>07:26</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Portslade</lt7:locationName>
                                        <lt7:crs>PLD</lt7:crs>
                                        <lt7:st>07:29</lt7:st>
                                        <lt7:at>07:33</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Hove</lt7:locationName>
                                        <lt7:crs>HOV</lt7:crs>
                                        <lt7:st>07:33</lt7:st>
                                        <lt7:at>07:37</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Preston Park</lt7:locationName>
                                        <lt7:crs>PRP</lt7:crs>
                                        <lt7:st>07:38</lt7:st>
                                        <lt7:at>07:42</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Haywards Heath</lt7:locationName>
                                        <lt7:crs>HHE</lt7:crs>
                                        <lt7:st>07:51</lt7:st>
                                        <lt7:at>07:53</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Balcombe</lt7:locationName>
                                        <lt7:crs>BAB</lt7:crs>
                                        <lt7:st>07:57</lt7:st>
                                        <lt7:at>07:59</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Three Bridges</lt7:locationName>
                                        <lt7:crs>TBD</lt7:crs>
                                        <lt7:st>08:03</lt7:st>
                                        <lt7:at>08:06</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:previousCallingPoints>
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Bridge</lt7:locationName>
                                        <lt7:crs>LBG</lt7:crs>
                                        <lt7:st>08:34</lt7:st>
                                        <lt7:et>08:38</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Blackfriars</lt7:locationName>
                                        <lt7:crs>BFR</lt7:crs>
                                        <lt7:st>08:41</lt7:st>
                                        <lt7:et>08:45</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>City Thameslink</lt7:locationName>
                                        <lt7:crs>CTK</lt7:crs>
                                        <lt7:st>08:43</lt7:st>
                                        <lt7:et>08:47</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Farringdon Underground</lt7:locationName>
                                        <lt7:crs>ZFD</lt7:crs>
                                        <lt7:st>08:46</lt7:st>
                                        <lt7:et>08:50</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London St Pancras (Intl)</lt7:locationName>
                                        <lt7:crs>STP</lt7:crs>
                                        <lt7:st>08:50</lt7:st>
                                        <lt7:et>08:54</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Luton</lt7:locationName>
                                        <lt7:crs>LUT</lt7:crs>
                                        <lt7:st>09:17</lt7:st>
                                        <lt7:et>09:19</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Leagrave</lt7:locationName>
                                        <lt7:crs>LEA</lt7:crs>
                                        <lt7:st>09:22</lt7:st>
                                        <lt7:et>09:24</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Harlington</lt7:locationName>
                                        <lt7:crs>HLN</lt7:crs>
                                        <lt7:st>09:26</lt7:st>
                                        <lt7:et>09:28</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Flitwick</lt7:locationName>
                                        <lt7:crs>FLT</lt7:crs>
                                        <lt7:st>09:30</lt7:st>
                                        <lt7:et>09:32</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Bedford</lt7:locationName>
                                        <lt7:crs>BDM</lt7:crs>
                                        <lt7:st>09:42</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
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
                            <lt4:serviceID>F3k6McJWDgv7GW5GAQHytg==</lt4:serviceID>
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
                            <lt7:previousCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Bridge</lt7:locationName>
                                        <lt7:crs>LBG</lt7:crs>
                                        <lt7:st>08:07</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:previousCallingPoints>
                            <lt7:subsequentCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Oxted</lt7:locationName>
                                        <lt7:crs>OXT</lt7:crs>
                                        <lt7:st>08:35</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Hurst Green</lt7:locationName>
                                        <lt7:crs>HUR</lt7:crs>
                                        <lt7:st>08:38</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Edenbridge Town</lt7:locationName>
                                        <lt7:crs>EBT</lt7:crs>
                                        <lt7:st>08:45</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Hever</lt7:locationName>
                                        <lt7:crs>HEV</lt7:crs>
                                        <lt7:st>08:49</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Cowden</lt7:locationName>
                                        <lt7:crs>CWN</lt7:crs>
                                        <lt7:st>08:53</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Ashurst</lt7:locationName>
                                        <lt7:crs>AHS</lt7:crs>
                                        <lt7:st>08:57</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Eridge</lt7:locationName>
                                        <lt7:crs>ERI</lt7:crs>
                                        <lt7:st>09:03</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Crowborough</lt7:locationName>
                                        <lt7:crs>COH</lt7:crs>
                                        <lt7:st>09:09</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Buxted</lt7:locationName>
                                        <lt7:crs>BXD</lt7:crs>
                                        <lt7:st>09:16</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Uckfield</lt7:locationName>
                                        <lt7:crs>UCK</lt7:crs>
                                        <lt7:st>09:22</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:subsequentCallingPoints>
                        </lt7:service>
                    </lt7:trainServices>
                </GetStationBoardResult>
            </GetArrDepBoardWithDetailsResponse>
        </soap:Body>
    </soap:Envelope>`,
};

module.exports = response;
