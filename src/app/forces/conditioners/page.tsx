import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import conditioners from "./images/conditioners.png"

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="text-5xl">Welcome to the Conditioners page!</h1>
    <p>Here is an example of what a condition looks like:</p>
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline"> Condition example:</Button>
        </PopoverTrigger>
        <PopoverContent className="h-auto w-auto">
          <Image className="h-20 w-84" src={conditioners} alt="Image showing the conditioners"/>
        </PopoverContent>
      </Popover>
    </div>
    <p>You may have noticed that i used the same image as the unless disable function, and this is no mistake! Its because there is already a conditioner there! In the form of "tagged"</p>
    <p>There are a lot of different conditioners, and you will need to find the best use case for each of them.</p>
    <p>The tagged one, will be marked as "true", if in the template there is a tag with the name that comes after it. Another type of conditioner you can learn more about is the "if", which you can check <a className="underline text-blue-600" href="https://docs.ecoportal.com/internal/lisp/if" target="_blank" rel="noopener noreferrer">here</a></p>
    </div>
  );
}
