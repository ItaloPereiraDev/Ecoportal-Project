import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import importsheet from "./images/importsheet.png"

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="text-5xl">Welcome to the Spreadsheet Intro page!</h1>
    <p>Here you will learn how to create import spreadsheets!</p>
    <p>First of all, you must follow the instructions in the wiki, to download the right assets, add-ins, and enable the correct options! Here is the link to it: <a className="underline text-blue-600" href="https://docs.ecoportal.com/internal/best_practices/implementation/create_imports_spreadsheet" target="_blank" rel="noopener noreferrer">Wiki</a></p>
    <p>This link will also teach you the next step of my guide, which is on how to create template spreadsheets, but you can stand here, because i've done this step aswell</p>
    <p>The card for a spreadsheet import will directly link you to the template, or to the org. personel, depending if its a template spreadsheet, or a people schema.</p>
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Example of import spreadsheet card:</Button>
        </PopoverTrigger>
        <PopoverContent className="h-auto w-auto">
          <Image src={importsheet} alt="Image showing import spreadsheet card"/>
        </PopoverContent>
      </Popover>
    </div>
      <p>After following the instructions in the wiki after getting your first card, proceed to the next sections to know how to actually use it, because if it is a template spreadsheet, or a people schema, it will have different ways to do it</p>
    </div>
  );
}
