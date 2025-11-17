import Image from "next/image";
import nextthump from "@/public/images/nextjs.jpeg";

export default function Home() {
  return (
    <div>
      <h1>Hello World. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, minima beatae enim pariatur officiis veniam perferendis hic quidem exercitationem recusandae amet architecto aut! Saepe veniam nemo harum, accusantium consequuntur quo.</h1>
      <Image  src={nextthump} alt="thumbnail" width={'400'} quality={60} />
    </div>
  )
}

