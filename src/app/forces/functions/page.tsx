import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import defun from "./images/defun.png"

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="text-5xl">Welcome to the defining functions page!</h1>
    <p>Here is an example of what defining a function looks like:</p>
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Defining functions:</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Image src={defun} alt="Image showing a function"/>
        </PopoverContent>
      </Popover>
    </div>
    <p>Following the example: (defun square (x) "Returns the square of x." (* x x))</p>
    <p>In this example:</p>
    <p>square is the function name.</p>
    <p>(x) is the parameter list, indicating that square takes one argument, x</p>
    <p>"Returns the square of x." is the optional documentation string.</p>
    <p>(* x x) is the body of the function, which calculates and returns the square of x</p>
    </div>
  );
}
