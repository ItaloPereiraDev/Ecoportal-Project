import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import completiontask from "./images/completiontask.png"

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="text-5xl">Welcome to the Fill In Tasks page!</h1>
    <p>Here you will edit from whom the stage should be completed! These work per stages, so to edit this, you will need to go to the "Edit Stages" option, and scroll all the way down.</p>
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Example of a completed Fill In Task:</Button>
        </PopoverTrigger>
        <PopoverContent className="h-auto w-auto">
          <Image src={completiontask} alt="Image showing fill in task"/>
        </PopoverContent>
      </Popover>
    </div>
      <p>When adding a Fill In Task, you will need to select which group this fill in task will apply for. By default, this is set to the one who has created the form initially.</p>
      <p>You can add a completion task for a specific group, for the prior/prior supervisor of the one who filled this form, for the organisation, etc.</p>
      <p>You can also set different priorites for this task, which go from none to high.</p>
      <p>Likewise, you can also add a review task, which follows the same rules, but works differently. Always add these following what was told by the client.</p>
    </div>
  );
}
