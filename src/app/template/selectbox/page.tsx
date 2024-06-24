import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import selectbox from "./images/selectbox.png"
import selectboxoptions from "./images/selectboxoptions.png"

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="text-5xl">Welcome to the Select Box Field page!</h1>
    <p>Here is an example of what a Select Box Field like:</p>
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Select box with 3 options:</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Image src={selectbox} alt="Image guiding the creation of a section"/>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Options in the Select box:</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Image src={selectboxoptions} alt="Image guiding how to delete a section"/>
        </PopoverContent>
      </Popover>
    </div>
    <p>When creating a select box, you will also need to create its options, and for each option, you will need to assign a value, either a text, or a numerical value (remember to change to "number value" option if you do this), and this value is the one which you will use to manipulate it in the force</p>
    <p>This is one of the most common fields we create/delete/edit, along with the forces related to it. Hiding something unless a certain option in selected, for example, is a common task, that you will be required to do (so don't forget to ask for help, because learning the easy stuff is the key to learning the hard stuff aswell!)</p>
    </div>
  );
}
