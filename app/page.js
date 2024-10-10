import Image from "next/image";
import picture from './mypic.png';

export default function Home() {
  return (
    <div>
      <Image className="grayscale" src={picture} alt="my Picture"/>  
    </div>
  );
}
