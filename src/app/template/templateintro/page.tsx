
import Image from "next/image";
import example1src from "./images/template-intro-example.png"
import example2src from "./images/template-intro-example-2.png"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"




export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="text-5xl">Welcome to the Template Intro page!</h1>

    <p>Here is an example of what a Template Update request card looks like, since these kinds of images will guide you through editing the whole template:</p>
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Where to insert 5 why's section</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Image src={example1src} alt="Image guiding the creation of a section"/>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Sections to be deleted</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Image src={example2src} alt="Image guiding how to delete a section"/>
        </PopoverContent>
      </Popover>
    </div>
    <p>When looking at them, you'll see examples of guidance that will be sent to you, so you know what are the changes that should be done in each template.</p>
    <p>Adding/Deleting/Comparing entire sections, changing fields and their order, are some of the most common tasks in the template edit stage.</p>
    <p>Have in mind that each field you create will have different options when configurating them, and i'll do my best to explain how to properly create these fields as we go</p>

    </div>
  );
}