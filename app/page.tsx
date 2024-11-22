"use client";

import React, {useEffect, useState} from 'react';

export default function Home() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval((): void => {
            setTime(new Date());
        }, 1000);

        return (): void => {
            clearInterval(timer);
        };
    }, []);

    const timeString: string = (time.getHours() < 10 ? '0' : '') + time.getHours() + ':' + (time.getMinutes() < 10 ? '0' : '') + time.getMinutes() + ':' + (time.getSeconds() < 10 ? '0' : '') + time.getSeconds();

    const days: string[] = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
    const dayName: string = days[time.getDay()];
    const todayFullDateString: string = (time.getDate() < 10 ? '0' : '') + time.getDate() + '.' + (time.getMonth() + 1 < 10 ? '0' : '') + (time.getMonth() + 1) + '.' + time.getFullYear();

    return (
        <main className="flex justify-center h-screen">
            <iframe className="m-4 w-2/5 rounded-lg"
                    title="Ruter sanntidsinformasjon"
                    src="https://mon.ruter.no/departures/59.9181008472934-10.742226849607649/N4Igrgzgpgwg9gGzAWwHYBkCGBPOYAuIAXAGaYLQA0IARnJgE4AmExA2qBPnAA4AKCTAGMoASRbsQAOQDKAJSIzu-QSKIBWABwAWAAwB2ENVkKlvAcKhEAbLoDMAJgcgAutSZRB2KEyWN8ACoAlshQxA7UABZBTB4YQahQrESgJorKFmq2js5EbNLyRACKYDhE+up6ALQAjJpVACJB0KhGBQolZRXVdVVmDHBVAOIMUCQtAARcAHRtaZ3Y5ZW6tfp9CS1zhQtLPWsyG1Cow6PjR1P4s8bbpYs1ug6advU1NVJVALKYAFZwDFxgI5bDq3Ij3R52ACctTeVQA0t9PBAAKesa4grrLWrQ9DfTA0BhgYHFUEVKHYz4-P4AoHokllcFPaE1SHvABSUAYqBomES3AYAHMoIQ6TtGeSWe8AKMQAnI-C09r0u4PJ4vVnwhgJAUQb7I4li1US9mc7m84V-IUipWGiEvd4AVQQCFNyh4ivmoPF0Ic7wAos7tRBCUxUR6bgyjfVfVUABtcTmoiYBVx0swqSw2CGST0Mmrqcl2NYACSRJGwDFTSvTmSsWj0hjyNq9uj06mZsK+v3++EBrVFLbbL1hCKRqINLchrzWNTsuneMl5TAAbkEANaYCeRqc1Gd6d4AISga7XSV7m4H2+ntXUKyGYGdkUwYAFW5VO5ntiqcmwJ4S-ebTF1GsVZv3XCBIjgCAeCCfByGFN8lnUGd9kOY4RjGSYZkQipgNqeo5HAyDoNg+DrVzRZcJnep+kGDCzlQC4rkAyj1DwllKW7GkAIopCZxxPECSJS8VTbZkNThLVUB1PVEPuIdsRNLkeT5S0EJEsFW10LRFKqGU5QVHiI1E7TmUdZ1XV4d0jIxEydNhDllPNfkrTkrT2yqGN4wVBgkxTDT5O06N-UDaTgzAUNNgC3RIQcbRtCqIsqlLChy0rFwAF9qFQFAaE5AB5EgGigHh-DAUZkhqCIQHwWCXWIEAYEwfBIimDcEAmHhkQmX4aBoNomGafEXSYAIGF5aC-nwD44A8ZI2DcEAjmGnxiHwQkoCiGIoDG4Q13gJA0GIMgKCgLLOAyVQxAkPJFo8LwfD8BhAhCMIiF0LbYiOdAEiSYhgCykAcuQPKGEK4rSue8q-qITRqFq-B6qIEAAmEkBBogFbRvG1BJuema5vYRblpoEbjvIKgQGiDxdqEfbEBQVpSAps7FuXTkICCOAmYcDKgA"/>
            <div className="m-4 w-2/5">
                <iframe className="rounded-lg mb-4 h-3/6 w-full"
                        title="Yr værvarsel for Oslo"
                        src="https://www.yr.no/nb/innhold/1-72837/card.html?mode=dark"/>
                <iframe className="rounded-lg mb-4 h-3/6 w-full"
                        title="Google Calendar"
                        src="https://calendar.google.com/calendar/embed?wkst=2&ctz=Europe%2FBerlin&showPrint=0&showTitle=0&showDate=0&showNav=0&mode=AGENDA&showTabs=0&showTz=0&src=MWJhZTk1MTdiMDlhMTNlYWU1NzZmNzk4YzA4Y2QzZDZlNzViZDA2ODk3NGIzMWY2OWZhMGU5YTU4YjVmMGYyZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F4511E" />
            </div>
            <div className="m-4 w-1/5 rounded-lg flex flex-col justify-around">
                <div className="flex justify-center items-center text-6xl h-3/6 w-full">
                    <p>{timeString}</p>
                </div>
                <div className="flex gap-4 flex-col justify-center items-center fle text-5xl h-3/6">
                    <p>{dayName}</p>
                    <p>{todayFullDateString}</p>
                </div>
            </div>
        </main>
    );
}
