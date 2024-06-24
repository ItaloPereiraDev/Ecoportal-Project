import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import forces from "./images/Forces.png"
import whereforces from "./images/wheretofindforces.png"

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="text-5xl">Welcome to the introduction of the forces!</h1>
    <p>Here is an example of where to find the forces in your template:</p>
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Where to find:</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Image src={whereforces} alt="Image guiding where to find forces"/>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Example of forces:</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Image src={forces} alt="Image showing the forces"/>
        </PopoverContent>
      </Popover>
    </div>
    <p>Here is where you will create and edit forces for each template you will work on.</p>
    <p>On the next sections, i will split each thing you will find in the forces, because the key to understand these is to go by step by step</p>
    </div>
  );
}
