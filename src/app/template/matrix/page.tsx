import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import matrix from "./images/matrix.png"
import matrixoptions from "./images/matrixoptions.png"

export default function Home() {
  return (
  <div className="flex flex-col space-y-4">
  <h1 className="text-5xl">Welcome to the Date Field page!</h1>
  <p>Here is an example of what a Date Field like:</p>
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Matrix Gauge:</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Image src={matrix} alt="Image guiding the creation of a matrix"/>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Options in the Matrix Gauge:</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Image src={matrixoptions} alt="Image guiding the options of a matrix"/>
        </PopoverContent>
      </Popover>
    </div>
  <p>Here, as you can see, you can edit a lot of different stuff in the gauge. You can change the max value, the colors that will appear while its being filled, but mainly with the forces, you can do magic with this stuff</p>
  <p>The matrix gauge was, personally for me, one of the hardest things to learn how to properly change, but fear not, since whenever you're using it, you will most likely just import it (the gauge and the forces related to it) from another template. So, at a starter level, you will likely just change the bindings and modify current values.</p>
  </div>
  );
}
