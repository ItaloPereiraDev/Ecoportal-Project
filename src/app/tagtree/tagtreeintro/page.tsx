import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import tagcard from "./images/tagcard.png"
import tagsheet from "./images/tagsheet.png"
import tagtree from "./images/tagtree.png"

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="text-5xl">Welcome to the Tag Tree Intro page!</h1>
    <p>Here is an example of what a Tag Tree card looks like, along with the file you will receive to update the tag tree:</p>
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Tag Tree card:</Button>
        </PopoverTrigger>
        <PopoverContent className="h-auto w-auto">
          <Image className="h-40 w-auto" src={tagcard} alt="Image showing Tag Tree card"/>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Tag Tree sheet:</Button>
        </PopoverTrigger>
        <PopoverContent className="h-auto w-auto">
          <Image className="h-80 w-auto" src={tagsheet} alt="Image showing Tag Tree sheet"/>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Tag Tree on clients site:</Button>
        </PopoverTrigger>
        <PopoverContent className="h-auto w-auto">
          <Image className="h-80 w-auto" src={tagtree} alt="Image showing Tag Tree on clients site"/>
        </PopoverContent>
      </Popover>
    </div>
    <p>The first image shows how a Tag Tree card, in this example, i had to create this Tag Tree from scratch, because this was a new client. So i got sent an excel file to the full Tag Tree.</p>
    <p>The second image is a picture of the excel file, guiding how the tag tree should be created.</p>
    <p>The third image shows how the Excel sheet translates into the clients site.</p>
    <p>To create/edit the Tag Tree into the clients site, you will need to go to: Settings ={">"} Reporting structures. And then click on the Edit option on the upper right corner.</p>
    </div>
  );
}
