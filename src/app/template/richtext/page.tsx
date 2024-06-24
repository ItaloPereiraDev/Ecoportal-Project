
import Image from "next/image";

import richtxt from "./images/richtext.png"
import richtxtop from "./images/richtextop.png"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-5xl">Welcome to the Rich Text page!</h1>
      <p>Here is an example of what a Rich Text looks like:</p>
      <div className="flex gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="flex w-1/4 p-6" variant="outline">Rich Text field:</Button>
          </PopoverTrigger>
          <PopoverContent>
            <Image src={richtxt} alt="Image guiding the creation of a section"/>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button className="flex w-1/4 p-6" variant="outline">Rich Text field options:</Button>
          </PopoverTrigger>
          <PopoverContent>
            <Image src={richtxtop} alt="Image guiding the creation of a section"/>
          </PopoverContent>
        </Popover>
      </div>
      <p>To achieve the results in the Rich text field shown, we input the options that were shown in the second image</p>
      <p>Usually the rich text field is used to either explain something to the person who is filling the template, as a guidance text, or to get really detailed info</p>
    </div>
  );
}
