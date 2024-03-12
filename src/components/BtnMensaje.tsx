import { Button } from "@nextui-org/react"
import Link from "next/link";
import { useState } from "react";


function BtnMensaje() {

    const [isOptionsVisible, setIsOptionsVisible] = useState(false);

    const showOptions = () => (
        <div className="z-50 fixed right-4 bottom-[7rem] ">
            <div className=" rounded-lg">
                <ul className=" flex flex-col text-center gap-4">
                    <Link
                    target="_blank" 
                    href={'https://wa.me/573108548050'}
                    className="bg-white text-[#006A62] font-medium flex no-underline items-center gap-2 px-5 py-3 list-none rounded-full text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                            <path d="M0 19.022L1.29447 14.1957C0.562724 12.8745 0.175716 11.3932 0.175716 9.88971C0.175716 4.97657 4.17469 0.977539 9.08783 0.977539C14.001 0.977539 18 4.97657 18 9.88971C18 14.8028 14.001 18.8018 9.08783 18.8018C7.61322 18.8018 6.15645 18.4304 4.85088 17.7209L0 19.0198V19.022ZM5.09327 15.9127L5.39801 16.0951C6.51898 16.7623 7.7956 17.116 9.08783 17.116C13.0735 17.116 16.3163 13.8732 16.3163 9.88748C16.3163 5.90181 13.0735 2.65901 9.08783 2.65901C5.10216 2.65901 1.85936 5.90181 1.85936 9.88748C1.85936 11.2042 2.22412 12.4986 2.91583 13.6352L3.10267 13.9421L2.37983 16.6378L5.09105 15.9105L5.09327 15.9127Z" fill="#006A62" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.404 11.1294C12.037 10.9092 11.5588 10.6646 11.1273 10.8425C10.7959 10.9782 10.5846 11.4964 10.3688 11.7611C10.2576 11.8968 10.1264 11.919 9.95741 11.8501C8.71189 11.3541 7.75996 10.5245 7.0727 9.37903C6.95705 9.2011 6.97705 9.06097 7.11717 8.89638C7.32402 8.65173 7.58421 8.37372 7.64204 8.04454C7.69764 7.71537 7.54422 7.33059 7.40855 7.037C7.23507 6.66334 7.03932 6.12734 6.66566 5.91605C6.32092 5.72032 5.8672 5.8293 5.55804 6.08063C5.0287 6.51212 4.7707 7.18826 4.77959 7.85995C4.77959 8.05123 4.8063 8.24026 4.85078 8.42486C4.95754 8.86747 5.16215 9.28116 5.39346 9.67261C5.56694 9.96842 5.756 10.2553 5.9584 10.5334C6.62342 11.4386 7.45303 12.2237 8.41164 12.8109C8.88983 13.1045 9.40581 13.3625 9.94183 13.5382C10.5401 13.7361 11.0739 13.943 11.7234 13.8184C12.4017 13.6894 13.069 13.2713 13.3381 12.6174C13.4182 12.4239 13.4582 12.2082 13.4137 12.0035C13.3226 11.5809 12.7509 11.3296 12.4084 11.1272L12.404 11.1294Z" fill="#006A62" />
                        </svg>
                        Escríbenos al Watsapp
                    </Link>
                    <Link 
                    href={'mailto:kipow@nigmauniverse.com'}
                    className="bg-white text-[#006A62] font-medium flex no-underline items-center gap-2 px-5 py-3 list-none rounded-full text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <path d="M16.7 0.799805H2.3C1.31 0.799805 0.509 1.6098 0.509 2.5998L0.5 13.3998C0.5 14.3898 1.31 15.1998 2.3 15.1998H16.7C17.69 15.1998 18.5 14.3898 18.5 13.3998V2.5998C18.5 1.6098 17.69 0.799805 16.7 0.799805ZM16.7 13.3998H2.3V4.39981L9.5 8.89981L16.7 4.39981V13.3998ZM9.5 7.09981L2.3 2.5998H16.7L9.5 7.09981Z" fill="#006A62" />
                        </svg>
                        Escríbenos al correo
                    </Link>
                    <Link 
                    href={'#'}
                    className="bg-white text-[#006A62] font-medium flex no-underline items-center gap-2 px-5 py-3 list-none rounded-full text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M15 9.75H9.75V15H8.25V9.75H3V8.25H8.25V3H9.75V8.25H15V9.75Z" fill="#006A62" />
                        </svg>
                        Recibe más información
                    </Link>
                </ul>
            </div>
        </div>
    );

    return (
        <>

            {isOptionsVisible && showOptions()}
            {isOptionsVisible ? <Button
                className="z-50 cursor-pointer fixed right-5 bottom-10 bg-[#006A62] border-none px-4 py-6 min-w-unit-0"
                onClick={() => setIsOptionsVisible(!isOptionsVisible)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white" />
                </svg>
            </Button>
                :
                <Button
                    className="z-50 cursor-pointer fixed right-5 bottom-10 bg-m3-sys-light-secondary-container border-none px-4 py-6 min-w-unit-0"
                    onClick={() => setIsOptionsVisible(!isOptionsVisible)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="#735C00" />
                    </svg>
                </Button>}

        </>
    )
}

export default BtnMensaje