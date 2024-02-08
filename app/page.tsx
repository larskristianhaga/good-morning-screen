"use client";

import React, {useEffect, useState} from 'react';

export default function Home() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const timeString: string = (time.getHours() < 10 ? '0' : '') + time.getHours() + ':' + (time.getMinutes() < 10 ? '0' : '') + time.getMinutes() + ':' + (time.getSeconds() < 10 ? '0' : '') + time.getSeconds();

    const days: string[] = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
    const dayName: string = days[time.getDay()];
    const todayFullDateString: string = (time.getDate() < 10 ? '0' : '') + time.getDate() + '.' + (time.getMonth() + 1 < 10 ? '0' : '') + (time.getMonth() + 1) + '.' + time.getFullYear();

    return (
        <main className="flex justify-center">
            <iframe className="m-5 w-2/5 h-screen rounded-lg"
                    title="Ruter sanntidsinformasjon"
                    src="https://mon.ruter.no/departures/59.9181008472934-10.742226849607649/N4Igrgzgpgwg9gGzAWwHYBkCGBPOYAuIAXAGaYLQA0IARnJgE4AmExA2qBPnAA4AKCTAGMoASRbsQAOQDKAJSIzu-QSKIA2AAwBmAEy6Q1WQqW8BwqBt0AObSAC61JlEHYoTJY3wAVAJbIoYl1qAAtfJmcMX1QoViJQY0VlczUtPQMiNml5IgBFMBwiAHYAVgAWTQBaAEZrSoARX2hUQ2yFfMLSipq60wY4SoBxBigSZoACLgA6VsSO7GLyquqiyplo5tmc+cXulbWNqFQhkbGjyfwZo22CherNG2066uqpSoBZTAArOAYuMCOW3atyI90eAE4aq9KgBpL4uCAAU9Y12BnSWNUh6C+mBoDDAQLyINK2kh1Uhnx+f3wAJaqKJhTBtjJ4LeACkoAxUDRMDFuAwAOZQQj0nZM0mYt4AUYgeMR+EBopB4uerNhDGiAogX0RhLFD2ZNXZnO5vOFvyFIraDLuBqeRsqAFUEAgTcoeIrrfqIZVdG8AKIuzUQfFMZGeubKu11P2VAAbXE5yPG3gc9NMKgsVlskkjjOqJQl2lWAAkESRsAwHABfaioFA0TkAeRI9SgPC8YBGcWqwRA+F8+FdxBAMEw+BCkwA1uRxjxEeMfjQaK0mE1ca6mN4GLyIDxfvh3nBnHE2I4QEcN+5iPh8VBQuEoNvhFP4Eg0MQyBQoLXOMlVGIEiZOeziuO4ngMD4-iBEQmgPhERzoNEsTEMAtYgPWyCNgwLZth2kFdihRDWNQA5DjBIDeASTjrjQm7Pqge4HkeJ7sOel50depDkFQIBhM4z5CK+iAoC03HftW54AG6chAvhwGJujVkAA"/>
            <iframe className="m-5 w-2/5 h-screen rounded-lg"
                    title="Yr værvarsel for Oslo"
                    src="https://www.yr.no/nb/innhold/1-72837/card.html?mode=dark"/>
            <div className="m-5 w-1/5 h-screen rounded-lg flex flex-col justify-around">
                <div className="text-4xl h-3/6">
                    <p>{timeString}</p>
                </div>
                <div className="text-4xl h-3/6">
                    <p>{dayName}</p>
                    <p>{todayFullDateString}</p>
                </div>
            </div>
        </main>
    );
}
