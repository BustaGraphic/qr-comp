import Image from "next/image";
import Qrimg from "../public/image-qr-code.png";


export default function Home() {
  return (
    <main class="bg-blue-100 flex justify-center items-center h-screen">
    <div class="bg-white rounded-xl flex-colum p-3 flex-col items-center justify-center">
        
            <Image src={Qrimg} alt="arlogo" class="h-52 w-52 rounded-lg"/>
        <div class="mt-3">
            <div class="font-bold w-52 flex justify-center text-center text-md mb-3">
                Improve your font-end skills by building projects
            </div>
            <div class="w-52 text-center text-gray-400 text-xs mb-3">
                Scan the QR code to visit Fronend Mentor and take your coding skill to the next level
            </div>
        </div>
    </div>
</main>
  );
}
