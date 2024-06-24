import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import lock from "./images/lockdeindex.png"

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="text-5xl">Welcome to the lock deindex page!</h1>
    <p>Here is an example of what a lock function looks like:</p>
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Lock function:</Button>
        </PopoverTrigger>
        <PopoverContent className="h-auto w-auto">
          <Image className="h-12 w-84" src={lock} alt="Image showing the lock function"/>
        </PopoverContent>
      </Popover>
    </div>
    <p>Following the example above, here are the components:</p>
    <p>map-1: Its a predetermined function that will apply the following function (lock) to everything thats after it</p>
    <p>lock-deindex: Another predetermined function, it will not allow the user to edit the data in a locked field, so for example, you can lock a rich text, and then you can use it as a guidance text.</p>
    <p>guide-txt1, etc: These are the bindings to the fields that will be locked by the previous functions</p>
    </div>
  );
}
