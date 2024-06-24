import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import unlessdisable from "./images/unlessdisable.png"

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="text-5xl">Welcome to the Unless Disable page!</h1>
    <p>Here is an example of what a unless disable function looks like:</p>
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline"> Unless Disable function:</Button>
        </PopoverTrigger>
        <PopoverContent className="h-auto w-auto">
          <Image className="h-20 w-84" src={unlessdisable} alt="Image showing the unlessdisable function"/>
        </PopoverContent>
      </Popover>
    </div>
    <p>Following the example above, here are the components:</p>
    <p>unless-disable: Its a predetermined function that will apply the following function (unless-disable) to everything thats after it</p>
    <p>2nd term (inside the parenthesis): The condition in which the unless-disable will work on.</p>
    <p>3rd term, for example alblist: This is what will be hidden, if the 2nd term (the condition) isn't fulfilled.</p>
    <p>In this example, the first line says that it will hide the alblist field, if the "Albany" value isn't tagged in the template, and so on for the others.</p>
    </div>
  );
}
