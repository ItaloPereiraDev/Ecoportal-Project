import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import dashboards from "./images/dashboards.png"
import dashfilters from "./images/dashfilters.png"

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="text-5xl">Welcome to the Editting Dashboards page!</h1>
    <p>This is where you will make edits to the dashboards after you update the Tag Trees inside all of the templates on a register!</p>
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Where the dashboards are:</Button>
        </PopoverTrigger>
        <PopoverContent className="h-auto w-auto">
          <Image src={dashboards} alt="Image showing how to add a node"/>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Dashboards Filters:</Button>
        </PopoverTrigger>
        <PopoverContent className="h-auto w-auto">
          <Image src={dashfilters} alt="Image showing options on add node"/>
        </PopoverContent>
      </Popover>
    </div>
    <p>If there are filters on the dashboard (click on the filter icon to know if there are any filters applied), AND these filters are related to locations, you probably will need to add the location you just added to these filters.</p>
    <p>To do that, just click on the Filter, and you will see what is it filtering for. If it is filtering for locations (like it has a lot of tags for different names of places), click on "Tree View", and then select the location you just added.</p>
    </div>
  );
}
