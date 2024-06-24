import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import defvar from "./images/defvar.png"

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="text-5xl">Welcome to the defining variables page!</h1>
    <p>Here is an example of what a variable looks like:</p>
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Defining variables</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Image src={defvar} alt="Image showing a variable"/>
        </PopoverContent>
      </Popover>
    </div>
    <p>Following the example: (defvar variable-name initial-value "optional-documentation-string")</p>
    <p>Here are the components:</p>
    <p>Variable-name: The name of the variable you want to define.</p>
    <p>Initial-value: The value you want to assign to the variable. This is optional; if not provided, the variable is initialized to nil.</p>
    <p>Optional-documentation-string: A string describing the variable. This is also optional but useful for documentation purposes.</p>
    <p>In the image above, we created a more complex variable, using values and bindings from the template. So we gave the q1 question, the "q1" variable . and so on</p>
    </div>
  );
}
