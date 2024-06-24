import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import page_explorer from "./images/pageexpl.png"
import enztools from "./images/enztools.png"
import forcetagtree from "./images/forcetagtree.png"
import enztoolstag from "./images/enztoolstag.png"
import enztoolstagtree from "./images/enztoolstagtree.png"

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="text-5xl">Welcome to the Updating Tag Tree page!</h1>
    <p>Here you can see how to correctly update the tag tree inside templates! First, you should go to a register which we will update the tag tree inside all of its templates. Then, choose a template. Afterwards, here are some images guiding you through this process.</p>
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Open the Page Explorer option in Enzyme Tools:</Button>
        </PopoverTrigger>
        <PopoverContent className="h-auto w-auto">
          <Image className="h-40 w-auto" src={page_explorer} alt="Image showing the page explorer option"/>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Go to Validity Checks:</Button>
        </PopoverTrigger>
        <PopoverContent className="h-auto w-auto">
          <Image className="h-90 w-auto" src={enztools} alt="Image showing where is validity checks"/>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Locate the Tag Tree on the force:</Button>
        </PopoverTrigger>
        <PopoverContent className="h-auto w-auto">
          <Image className="h-40 w-auto" src={forcetagtree} alt="Image showing tag tree on forces"/>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Open the new tag tree in Enz. Tools:</Button>
        </PopoverTrigger>
        <PopoverContent className="h-auto w-auto">
          <Image className="h-40 w-auto" src={enztoolstag} alt="Image showing where to find the Tag Tree on enz tools"/>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Copy and replace the one on the force:</Button>
        </PopoverTrigger>
        <PopoverContent className="h-auto w-auto">
          <Image className="h-80 w-auto" src={enztoolstagtree} alt="Image showing Tag Tree on Enz Tools"/>
        </PopoverContent>
      </Popover>
    </div>
    <p>Whenever you're doing a Tag Tree update to a client, you will need to go through all of its registers, and all of its templates, to see where the old tag tree is being used, so you can update the old one with the new one.</p>
    <p>The first step to doing this, is to, after you select the register and template you wanna work on updating, you should open the enzyme tools on the page explorer option, to see which forces are using the tag tree.</p>
    <p>Afterwards, you can go to each force, locate the tag tree there, and update it, getting the new one from the Lisp Indented option in the Enz. Tools again. Dont worry, the enzyme tools will still say its not updated yet, because, as i'm doing this tutorial, its still bugged.</p>
    <p>After updating the tag tree on the force with the tag tree, remember to Push the force, and after you change all of the tag trees inside the template, save the template, and move to the next one!</p>
    </div>
  );
}
