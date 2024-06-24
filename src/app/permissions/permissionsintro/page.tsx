import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import permtable from "./images/permissionstable.png"
import permrules from "./images/permissionrules.png"

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="text-5xl">Welcome to the Permissions Introduction page!</h1>
    <p>Being honest, this is, without a doubt, the topic that i consider myself the hardest one to understand and master fully. Although, i'll be doing my best to explain what i know, and i also can always improve this page when i acquire more knowledge about this.</p>
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Permissions Table of a template:</Button>
        </PopoverTrigger>
        <PopoverContent className="h-auto w-auto">
          <Image src={permtable} alt="Image showing how to add a node"/>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Permissions Rules:</Button>
        </PopoverTrigger>
        <PopoverContent className="h-auto w-auto">
          <Image src={permrules} alt="Image showing options on add node"/>
        </PopoverContent>
      </Popover>
    </div>
    <p>The permissions table of a template can be accessed from the Enzyme Tools aswell! Just go to the page explorer option, and select "Permission Table" on the top!</p>
    <p>You can edit each permission individually by going to the settings on the client page, and selecting the Permission Rules option! There, you can see all the different permissions each tag has.</p>
    <p>When you're creating a permission rule, you can select to which policy groups (groups of people) this rule will be applied to. For example, you can select that only some personel (Policy Group called Staff), can edit the information on the first stage of your template.</p>
    </div>
  );
}
