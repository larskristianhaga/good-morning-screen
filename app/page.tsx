"use client";

import React, { useEffect, useState } from 'react';

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

  const days = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
  const dayName = days[time.getDay()];

  return (
    <main className="flex justify-center">
      <iframe className="m-5 w-2/5 h-screen rounded-lg" src="https://mon.ruter.no/departures/59.9181008472934-10.742226849607649/N4Igrgzgpgwg9gGzAWwHYBkCGBPOYAuIAXAGaYLQA0IARnJgE4AmExA2qBPnAA4AKCTAGMoASRbsQAOQDKAJSIzu-QSKIA2AAwBmAEy6Q1WQqW8BwqBt0AObSAC61JlEHYoTJY3wAVAJbIoYl1qAAtfJmcMX1QoViJQY0VlczUtPQMiNml5IgBFMBwiAHYAVgAWTQBaAEZrSoARX2hUQ2yFfMLSipq60wY4SoBxBigSZoACLgA6VsSO7GLyquqiyplo5tmc+cXulbWNqFQhkbGjyfwZo22CherNG2066uqpSoBZTAArOAYuMCOW3atyI90eAE4aq9KgBpL4uCAAU9Y12BnSWNUh6C+mBoDDAQLyINK2kh1Uhnx+f3wAJaqKJhTBtjJ4LeACkoAxUDRMDFuAwAOZQQj0nZM0mYt4AUYgeMR+EBopB4uerNhDGiAogX0RhLFD2ZNXZnO5vOFvyFIraDLuBqeRsqAFUEAgTcoeIrrfqIZVdG8AKIuzUQfFMZGeubKu11P2VAAbXE5yPG3gc9NMKgsVlskkjjOqJQl2lWAAkESRsAwHABfaioFA0TkAeRI9SgPC8YBGcWs1HwvnwruIIBgmHwIUmAGtyOMeIjxj8aDRWkwmrjXUxvAxeRAeL98O84M44mxHCAjuv3MR8PioKFwlAt8JJ-AkGhiGQKFBa5xkqoxBImRns4rjuJ4DA+P4gREJo94REc6DRLExDALWID1sgjYMC2bYdhBXbIUQvYgP2g7QSA3gEk4a40BuT6oLu+6Hse7BnhetFXqQ5BUCAYTOE+QgvogKAtFxX7VmeABunIQL4cCibo1ZAA" />
      <iframe className="m-5 w-2/5 h-screen rounded-lg" src="https://www.yr.no/nb/innhold/1-72837/card.html?mode=dark"/>
      <div className="m-5 w-1/5 h-screen rounded-lg flex flex-col justify-around">
        <div className="text-4xl h-3/6">
          <p>{dayName}</p>
        </div>
        <div className="text-4xl h-3/6">
          <p>{dayName}</p>
        </div>
      </div>
    </main>
  );
}