import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import checklist from "./images/checklist.png"

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="text-5xl">Welcome to the Checklist page!</h1>
    <p>Here is an example of what a Checklist like:</p>
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Checklist field</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Image src={checklist} alt="Image showing a checklist"/>
        </PopoverContent>
      </Popover>
    </div>
    <p>There aren't many options here to change, and basically you will only ever need to add this field if asked.</p>
    <p>The function of a checklist field is for the client themselves to select the options inside that will fulfill their requirements</p>
    </div>
  );
}
