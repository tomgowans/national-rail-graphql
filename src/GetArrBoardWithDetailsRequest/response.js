const response = {
  text: `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <soap:Body>
            <GetArrBoardWithDetailsResponse xmlns="http://thalesgroup.com/RTTI/2017-10-01/ldb/">
                <GetStationBoardResult xmlns:lt="http://thalesgroup.com/RTTI/2012-01-13/ldb/types" xmlns:lt6="http://thalesgroup.com/RTTI/2017-02-02/ldb/types" xmlns:lt7="http://thalesgroup.com/RTTI/2017-10-01/ldb/types" xmlns:lt4="http://thalesgroup.com/RTTI/2015-11-27/ldb/types" xmlns:lt5="http://thalesgroup.com/RTTI/2016-02-16/ldb/types" xmlns:lt2="http://thalesgroup.com/RTTI/2014-02-20/ldb/types" xmlns:lt3="http://thalesgroup.com/RTTI/2015-05-14/ldb/types">
                    <lt4:generatedAt>2019-12-15T13:57:39.4251321+00:00</lt4:generatedAt>
                    <lt4:locationName>East Croydon</lt4:locationName>
                    <lt4:crs>ECR</lt4:crs>
                    <lt4:platformAvailable>true</lt4:platformAvailable>
                    <lt7:trainServices>
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
                            <lt7:previousCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>East Grinstead</lt7:locationName>
                                        <lt7:crs>EGR</lt7:crs>
                                        <lt7:st>13:12</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Dormans</lt7:locationName>
                                        <lt7:crs>DMS</lt7:crs>
                                        <lt7:st>13:16</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Lingfield</lt7:locationName>
                                        <lt7:crs>LFD</lt7:crs>
                                        <lt7:st>13:19</lt7:st>
                                        <lt7:at>No report</lt7:at>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Hurst Green</lt7:locationName>
                                        <lt7:crs>HUR</lt7:crs>
                                        <lt7:st>13:26</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Oxted</lt7:locationName>
                                        <lt7:crs>OXT</lt7:crs>
                                        <lt7:st>13:29</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Woldingham</lt7:locationName>
                                        <lt7:crs>WOH</lt7:crs>
                                        <lt7:st>13:35</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Upper Warlingham</lt7:locationName>
                                        <lt7:crs>UWL</lt7:crs>
                                        <lt7:st>13:38</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Riddlesdown</lt7:locationName>
                                        <lt7:crs>RDD</lt7:crs>
                                        <lt7:st>13:42</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Sanderstead</lt7:locationName>
                                        <lt7:crs>SNR</lt7:crs>
                                        <lt7:st>13:46</lt7:st>
                                        <lt7:at>13:48</lt7:at>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:previousCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>13:53</lt4:sta>
                            <lt4:eta>14:07</lt4:eta>
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
                            <lt7:previousCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Victoria</lt7:locationName>
                                        <lt7:crs>VIC</lt7:crs>
                                        <lt7:st>13:35</lt7:st>
                                        <lt7:at>13:50</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Clapham Junction</lt7:locationName>
                                        <lt7:crs>CLJ</lt7:crs>
                                        <lt7:st>13:42</lt7:st>
                                        <lt7:at>13:56</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:previousCallingPoints>
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
                            <lt7:previousCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Bridge</lt7:locationName>
                                        <lt7:crs>LBG</lt7:crs>
                                        <lt7:st>13:24</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>New Cross Gate</lt7:locationName>
                                        <lt7:crs>NXG</lt7:crs>
                                        <lt7:st>13:30</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Brockley</lt7:locationName>
                                        <lt7:crs>BCY</lt7:crs>
                                        <lt7:st>13:33</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Honor Oak Park</lt7:locationName>
                                        <lt7:crs>HPA</lt7:crs>
                                        <lt7:st>13:35</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Forest Hill</lt7:locationName>
                                        <lt7:crs>FOH</lt7:crs>
                                        <lt7:st>13:38</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Sydenham</lt7:locationName>
                                        <lt7:crs>SYD</lt7:crs>
                                        <lt7:st>13:41</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Penge West</lt7:locationName>
                                        <lt7:crs>PNW</lt7:crs>
                                        <lt7:st>13:43</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Anerley</lt7:locationName>
                                        <lt7:crs>ANZ</lt7:crs>
                                        <lt7:st>13:45</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Norwood Junction</lt7:locationName>
                                        <lt7:crs>NWD</lt7:crs>
                                        <lt7:st>13:52</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:previousCallingPoints>
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
                            <lt7:previousCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Bridge</lt7:locationName>
                                        <lt7:crs>LBG</lt7:crs>
                                        <lt7:st>13:19</lt7:st>
                                        <lt7:at>13:22</lt7:at>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>South Bermondsey</lt7:locationName>
                                        <lt7:crs>SBM</lt7:crs>
                                        <lt7:st>13:25</lt7:st>
                                        <lt7:at>13:26</lt7:at>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Queens Road Peckham</lt7:locationName>
                                        <lt7:crs>QRP</lt7:crs>
                                        <lt7:st>13:28</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Peckham Rye</lt7:locationName>
                                        <lt7:crs>PMR</lt7:crs>
                                        <lt7:st>13:31</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>East Dulwich</lt7:locationName>
                                        <lt7:crs>EDW</lt7:crs>
                                        <lt7:st>13:34</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>North Dulwich</lt7:locationName>
                                        <lt7:crs>NDL</lt7:crs>
                                        <lt7:st>13:36</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Tulse Hill</lt7:locationName>
                                        <lt7:crs>TUH</lt7:crs>
                                        <lt7:st>13:40</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Streatham</lt7:locationName>
                                        <lt7:crs>STE</lt7:crs>
                                        <lt7:st>13:44</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Streatham Common</lt7:locationName>
                                        <lt7:crs>SRC</lt7:crs>
                                        <lt7:st>13:47</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Norbury</lt7:locationName>
                                        <lt7:crs>NRB</lt7:crs>
                                        <lt7:st>13:50</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Thornton Heath</lt7:locationName>
                                        <lt7:crs>TTH</lt7:crs>
                                        <lt7:st>13:53</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Selhurst</lt7:locationName>
                                        <lt7:crs>SRS</lt7:crs>
                                        <lt7:st>13:56</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:previousCallingPoints>
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
                            <lt7:previousCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Caterham</lt7:locationName>
                                        <lt7:crs>CAT</lt7:crs>
                                        <lt7:st>13:32</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Whyteleafe South</lt7:locationName>
                                        <lt7:crs>WHS</lt7:crs>
                                        <lt7:st>13:35</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Whyteleafe</lt7:locationName>
                                        <lt7:crs>WHY</lt7:crs>
                                        <lt7:st>13:37</lt7:st>
                                        <lt7:at>13:41</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Kenley</lt7:locationName>
                                        <lt7:crs>KLY</lt7:crs>
                                        <lt7:st>13:40</lt7:st>
                                        <lt7:at>13:42</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>13:52</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley Oaks</lt7:locationName>
                                        <lt7:crs>PUO</lt7:crs>
                                        <lt7:st>13:54</lt7:st>
                                        <lt7:at>13:56</lt7:at>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>South Croydon</lt7:locationName>
                                        <lt7:crs>SCY</lt7:crs>
                                        <lt7:st>13:57</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Tattenham Corner</lt7:locationName>
                                        <lt7:crs>TAT</lt7:crs>
                                        <lt7:st>13:20</lt7:st>
                                        <lt7:at>No report</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Tadworth</lt7:locationName>
                                        <lt7:crs>TAD</lt7:crs>
                                        <lt7:st>13:24</lt7:st>
                                        <lt7:at>No report</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Kingswood</lt7:locationName>
                                        <lt7:crs>KND</lt7:crs>
                                        <lt7:st>13:27</lt7:st>
                                        <lt7:at>No report</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Chipstead</lt7:locationName>
                                        <lt7:crs>CHP</lt7:crs>
                                        <lt7:st>13:33</lt7:st>
                                        <lt7:at>No report</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Woodmansterne</lt7:locationName>
                                        <lt7:crs>WME</lt7:crs>
                                        <lt7:st>13:36</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Coulsdon Town</lt7:locationName>
                                        <lt7:crs>CDN</lt7:crs>
                                        <lt7:st>13:40</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Reedham (Surrey)</lt7:locationName>
                                        <lt7:crs>RHM</lt7:crs>
                                        <lt7:st>13:43</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>13:52</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>5</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:previousCallingPoints>
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
                            <lt7:previousCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Gatwick Airport</lt7:locationName>
                                        <lt7:crs>GTW</lt7:crs>
                                        <lt7:st>13:32</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Horley</lt7:locationName>
                                        <lt7:crs>HOR</lt7:crs>
                                        <lt7:st>13:34</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Salfords</lt7:locationName>
                                        <lt7:crs>SAF</lt7:crs>
                                        <lt7:st>13:38</lt7:st>
                                        <lt7:at>13:40</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Earlswood (Surrey)</lt7:locationName>
                                        <lt7:crs>ELD</lt7:crs>
                                        <lt7:st>13:42</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Redhill</lt7:locationName>
                                        <lt7:crs>RDH</lt7:crs>
                                        <lt7:st>13:46</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Purley</lt7:locationName>
                                        <lt7:crs>PUR</lt7:crs>
                                        <lt7:st>13:57</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:previousCallingPoints>
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
                            <lt7:previousCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Victoria</lt7:locationName>
                                        <lt7:crs>VIC</lt7:crs>
                                        <lt7:st>13:46</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Clapham Junction</lt7:locationName>
                                        <lt7:crs>CLJ</lt7:crs>
                                        <lt7:st>13:53</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:previousCallingPoints>
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
                            <lt7:previousCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Bedford</lt7:locationName>
                                        <lt7:crs>BDM</lt7:crs>
                                        <lt7:st>12:21</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Flitwick</lt7:locationName>
                                        <lt7:crs>FLT</lt7:crs>
                                        <lt7:st>12:32</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Harlington</lt7:locationName>
                                        <lt7:crs>HLN</lt7:crs>
                                        <lt7:st>12:36</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Leagrave</lt7:locationName>
                                        <lt7:crs>LEA</lt7:crs>
                                        <lt7:st>12:41</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Luton</lt7:locationName>
                                        <lt7:crs>LUT</lt7:crs>
                                        <lt7:st>12:46</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Luton Airport Parkway</lt7:locationName>
                                        <lt7:crs>LTN</lt7:crs>
                                        <lt7:st>12:49</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Harpenden</lt7:locationName>
                                        <lt7:crs>HPD</lt7:crs>
                                        <lt7:st>12:54</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>St Albans</lt7:locationName>
                                        <lt7:crs>SAC</lt7:crs>
                                        <lt7:st>13:00</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>West Hampstead Thameslink</lt7:locationName>
                                        <lt7:crs>WHP</lt7:crs>
                                        <lt7:st>13:15</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London St Pancras (Intl)</lt7:locationName>
                                        <lt7:crs>STP</lt7:crs>
                                        <lt7:st>13:26</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Farringdon Underground</lt7:locationName>
                                        <lt7:crs>ZFD</lt7:crs>
                                        <lt7:st>13:30</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Blackfriars</lt7:locationName>
                                        <lt7:crs>BFR</lt7:crs>
                                        <lt7:st>13:35</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:previousCallingPoints>
                        </lt7:service>
                        <lt7:service>
                            <lt4:sta>14:06</lt4:sta>
                            <lt4:eta>14:15</lt4:eta>
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
                            <lt7:previousCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Bognor Regis</lt7:locationName>
                                        <lt7:crs>BOG</lt7:crs>
                                        <lt7:st>12:31</lt7:st>
                                        <lt7:at>Cancelled</lt7:at>
                                        <lt7:length>4</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Barnham</lt7:locationName>
                                        <lt7:crs>BAA</lt7:crs>
                                        <lt7:st>12:45</lt7:st>
                                        <lt7:at>12:51</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Ford</lt7:locationName>
                                        <lt7:crs>FOD</lt7:crs>
                                        <lt7:st>12:49</lt7:st>
                                        <lt7:at>12:57</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Arundel</lt7:locationName>
                                        <lt7:crs>ARU</lt7:crs>
                                        <lt7:st>12:54</lt7:st>
                                        <lt7:at>13:01</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Amberley</lt7:locationName>
                                        <lt7:crs>AMY</lt7:crs>
                                        <lt7:st>12:58</lt7:st>
                                        <lt7:at>13:07</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Pulborough</lt7:locationName>
                                        <lt7:crs>PUL</lt7:crs>
                                        <lt7:st>13:04</lt7:st>
                                        <lt7:at>13:13</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Billingshurst</lt7:locationName>
                                        <lt7:crs>BIG</lt7:crs>
                                        <lt7:st>13:11</lt7:st>
                                        <lt7:at>13:21</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Christs Hospital</lt7:locationName>
                                        <lt7:crs>CHH</lt7:crs>
                                        <lt7:st>13:17</lt7:st>
                                        <lt7:at>13:27</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Horsham</lt7:locationName>
                                        <lt7:crs>HRH</lt7:crs>
                                        <lt7:st>13:21</lt7:st>
                                        <lt7:at>13:31</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Crawley</lt7:locationName>
                                        <lt7:crs>CRW</lt7:crs>
                                        <lt7:st>13:30</lt7:st>
                                        <lt7:at>13:40</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Three Bridges</lt7:locationName>
                                        <lt7:crs>TBD</lt7:crs>
                                        <lt7:st>13:35</lt7:st>
                                        <lt7:at>13:44</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Gatwick Airport</lt7:locationName>
                                        <lt7:crs>GTW</lt7:crs>
                                        <lt7:st>13:41</lt7:st>
                                        <lt7:at>13:50</lt7:at>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Redhill</lt7:locationName>
                                        <lt7:crs>RDH</lt7:crs>
                                        <lt7:st>13:50</lt7:st>
                                        <lt7:et>14:02</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Coulsdon South</lt7:locationName>
                                        <lt7:crs>CDS</lt7:crs>
                                        <lt7:st>13:57</lt7:st>
                                        <lt7:et>14:09</lt7:et>
                                        <lt7:length>12</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Portsmouth Harbour</lt7:locationName>
                                        <lt7:crs>PMH</lt7:crs>
                                        <lt7:st>12:03</lt7:st>
                                        <lt7:at>Cancelled</lt7:at>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Portsmouth &amp; Southsea</lt7:locationName>
                                        <lt7:crs>PMS</lt7:crs>
                                        <lt7:st>12:07</lt7:st>
                                        <lt7:at>Cancelled</lt7:at>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Fratton</lt7:locationName>
                                        <lt7:crs>FTN</lt7:crs>
                                        <lt7:st>12:11</lt7:st>
                                        <lt7:at>Cancelled</lt7:at>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Havant</lt7:locationName>
                                        <lt7:crs>HAV</lt7:crs>
                                        <lt7:st>12:19</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Emsworth</lt7:locationName>
                                        <lt7:crs>EMS</lt7:crs>
                                        <lt7:st>12:23</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Southbourne</lt7:locationName>
                                        <lt7:crs>SOB</lt7:crs>
                                        <lt7:st>12:26</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Chichester</lt7:locationName>
                                        <lt7:crs>CCH</lt7:crs>
                                        <lt7:st>12:33</lt7:st>
                                        <lt7:at>On time</lt7:at>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Barnham</lt7:locationName>
                                        <lt7:crs>BAA</lt7:crs>
                                        <lt7:st>12:45</lt7:st>
                                        <lt7:at>12:46</lt7:at>
                                        <lt7:length>8</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:previousCallingPoints>
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
                            <lt7:previousCallingPoints>
                                <lt7:callingPointList>
                                    <lt7:callingPoint>
                                        <lt7:locationName>London Victoria</lt7:locationName>
                                        <lt7:crs>VIC</lt7:crs>
                                        <lt7:st>13:52</lt7:st>
                                        <lt7:at>13:54</lt7:at>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                    <lt7:callingPoint>
                                        <lt7:locationName>Clapham Junction</lt7:locationName>
                                        <lt7:crs>CLJ</lt7:crs>
                                        <lt7:st>13:59</lt7:st>
                                        <lt7:et>On time</lt7:et>
                                        <lt7:length>10</lt7:length>
                                    </lt7:callingPoint>
                                </lt7:callingPointList>
                            </lt7:previousCallingPoints>
                        </lt7:service>
                    </lt7:trainServices>
                </GetStationBoardResult>
            </GetArrBoardWithDetailsResponse>
        </soap:Body>
    </soap:Envelope>`,
};

module.exports = response;
