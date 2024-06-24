import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import nmbfield from "./images/numberfield.png"
export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="text-5xl">Welcome to the Number Field page!</h1>
    <p>Here is an example of what a Number Field like:</p>
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Number field:</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Image src={nmbfield} alt="Image guiding the creation of a section"/>
        </PopoverContent>
      </Popover>
    </div>
    <p>Again, i wont put all of the configuration, because there isn't many options here. In most advanced cases, you will need to add forces that will change this number and whats shown here.</p>
    <p>Doing changes in the forces is actually most of the things that we do, so, while at the start it may seem like a daunting task, you will understand them each time a little more.</p>
    </div>
  );
}
