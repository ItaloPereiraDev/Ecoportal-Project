import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import addnode from "./images/addnode.png"
import plussign from "./images/plussign.png"

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="text-5xl">Welcome to the Reporting Structures page!</h1>
    <p>This is where you will make edits to existing Tag Trees, or even create new ones entirely! After you click on the Edit button on the tag tree you wanna Edit, here are two images to guide you:</p>
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Add node button:</Button>
        </PopoverTrigger>
        <PopoverContent className="h-auto w-auto">
          <Image className="h-40 w-auto" src={plussign} alt="Image showing how to add a node"/>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Blank Added Node:</Button>
        </PopoverTrigger>
        <PopoverContent className="h-auto w-auto">
          <Image className="h-50 w-auto" src={addnode} alt="Image showing options on add node"/>
        </PopoverContent>
      </Popover>
    </div>
    <p>The first image shows how to create a node on an existing Tag Tree. This button is hidden until you put your mouse on where it should be (on the rightmost part of the tag tree)</p>
    <p>The second image is a picture showing what will be created after you click on the add button.</p>
    <p>There, you will need to put the name and ID of the nodes. In the excel sheet you will receive, you will only receive the name. The ID is internal, and only important to us. Although, there are some important tips to follow, like:</p>
    <ul>
      <li>- Put the whole name of the ID in uppercase</li>
      <li>- All the ID's must be different. So if there are repeating names in the tag tree, starting putting the name of their parent nodes aswell</li>
      <li>- It is not possible to use special characters in the ID's</li>
    </ul>
    </div>
  );
}
