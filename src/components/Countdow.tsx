'use client'

import { useEffect, useState } from 'react';

interface CountdownProps {
    targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const [remainingDays, setRemainingDays] = useState<string>('00');
    const [remainingHours, setRemainingHours] = useState<string>('00');
    const [remainingMinutes, setRemainingMinutes] = useState<string>('00');
    const [remainingSeconds, setRemainingSeconds] = useState<string>('00');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate.getTime() - now;

            if (difference <= 0) {
                clearInterval(interval);
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setRemainingDays(days.toString().padStart(2, '0'));
                setRemainingHours(hours.toString().padStart(2, '0'));
                setRemainingMinutes(minutes.toString().padStart(2, '0'));
                setRemainingSeconds(seconds.toString().padStart(2, '0'));
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="flex flex-wrap text-5xl lg:text-8xl">
            <p className="flex flex-col items-center">{remainingDays} <span className="text-2xl font-tinos">dias</span>
            </p>
            <p className="text-giusti">.</p>
            <p className="flex flex-col items-center">{remainingHours} <span className="text-2xl font-tinos">horas</span>
            </p>
            <p className="text-giusti">.</p>
            <p className="flex flex-col items-center">{remainingMinutes} <span className="text-2xl font-tinos">minutos</span>
            </p>
            <p className="text-giusti">.</p>
            <p className="flex flex-col items-center">{remainingSeconds} <span className="text-2xl font-tinos">segundos</span>
            </p>
        </div>
    );
};

export default Countdown;