import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas';
import { Loading } from "../Loading";
import { useState } from "react";

interface ScreenshotButtonProps {
    screenshot: string | null;
    onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({ 
    screenshot, 
    onScreenshotTook
} : ScreenshotButtonProps) {
    const [isTakingScreenshot,setIsTakingScreenshot] = useState(false)

    async function handleTakeScreenshot() {
        setIsTakingScreenshot(true);

        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png');

        onScreenshotTook(base64image);
        setIsTakingScreenshot(false);
    }

    if(screenshot) {
        return (

            <button
            type="button"
            className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-orange-300 hover:text-orange-100 transition-colors"
            onClick={() => onScreenshotTook(null)}
            style={{
                backgroundImage: `url(${screenshot})`,
                backgroundPosition: 'right bottom',
                backgroundSize: 180,
            }}
            >
                <Trash weight="fill" />
            </button>
        );
    }

    return (
        <button
        type="button"
        onClick={handleTakeScreenshot}
        className="p-2 bg-orange-600 rounded-md border-transparent hover:bg-orange:700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-900 focus:ring-brand-500"
    >
        {isTakingScreenshot ? <Loading/> : <Camera className="w-6 h-6" /> }
    </button>
    )
}

