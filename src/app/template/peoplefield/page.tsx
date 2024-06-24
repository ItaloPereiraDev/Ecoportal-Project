
import Image from "next/image";

import pplfield from "./images/pplfield.png"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-5xl">Welcome to the People Field page!</h1>
      <p>Here is an example of what a People Field like:</p>
      <div className="flex gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="flex w-1/4 p-6" variant="outline">People field:</Button>
          </PopoverTrigger>
          <PopoverContent>
            <Image src={pplfield} alt="Image guiding the creation of a section"/>
          </PopoverContent>
        </Popover>
      </div>
      <p>This time, i wont put all of the configuration, because there are a lot of different options here. In most advanced cases, you will need to select the schema and the user groups available for this field</p>
      <p>But fear not, since most of the times you wont need to change much here! Basically only the label of the field, and maybe a help text like we saw on the rich text example</p>
    </div>
  );
}
