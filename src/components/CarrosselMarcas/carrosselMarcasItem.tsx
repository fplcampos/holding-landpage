import { useState } from "react";

interface ICarrosselMarcasItem {
    logo: React.ReactNode;
    color: string;
    description: string;
}

export default function CarrosselMarcasItem({ logo, color, description }: ICarrosselMarcasItem) {

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setIsVisible(!isVisible);
    };

    return (
        <>
            <a onClick={handleClick} className="p-6 cursor-pointer max-w-12" data-cursor-color="#ffffff" data-cursor-background-image="/images/ico-open.svg" data-cursor-size="70px">
                {logo}
            </a>
            {isVisible &&
                <div className='mx-auto'>
                    <p className={`${color} text-center font-inter text-2xl mt-2 p-2`}>{description}</p>
                </div>
            }
        </>
    )
}