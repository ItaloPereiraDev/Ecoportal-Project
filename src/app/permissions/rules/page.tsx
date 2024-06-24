import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import rules1 from "./images/rules1.png"
import rules2 from "./images/rules2.png"

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="text-5xl">Welcome to the Permission Rules page!</h1>
    <p>Here you will edit how different Policy Groups will act inside the template, which things they will be able to do or not, and also at which stage of the template.</p>
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Permissions Rules config:</Button>
        </PopoverTrigger>
        <PopoverContent className="h-auto w-auto">
          <Image src={rules1} alt="Image showing different Permission Rules"/>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">More Permission Rules config:</Button>
        </PopoverTrigger>
        <PopoverContent className="h-auto w-auto">
          <Image src={rules2} alt="Image showing different Permission Rules"/>
        </PopoverContent>
      </Popover>
    </div>
      <p>You can access this by going to the Org. Settings ={">"} Permission Rules.</p>
      <p>While there, you can either edit already existing Permission Rules to change their abilities, or you can create entirely new ones, remembering to also add the necessary Policy Groups, along with the desired abilities you wish for them to have.</p>
      <p>In the description, you will need to tell what exactly is this rule for, and also your name, along with the date you added this rule.</p>
      <p>After that, you will need to say when is this permission rule act, by selecting a tag. If this tag is for the entire template, then put the template tag there. If its for only a single stage, then only put that stage tag there.</p>
      <p>Later, you can select the view/edit abilities, which is going to be told to you by the requirements from the client. And also to whom will this rule be applied. (This is where the "Can view" "Can Edit" stuff is put into the permissions table)</p>
    </div>
  );
}
