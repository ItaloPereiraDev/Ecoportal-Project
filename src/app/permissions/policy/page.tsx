import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import policygroups from "./images/policygroups.png"

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="text-5xl">Welcome to the Policy Groups page!</h1>
    <p>Here you will edit the different permissions each group of people will have inside the templates. You can also add different personel here through their emails so they're assigned to this policy group.</p>
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex w-1/4 p-6" variant="outline">Example of Policy Groups:</Button>
        </PopoverTrigger>
        <PopoverContent className="h-auto w-auto">
          <Image src={policygroups} alt="Image showing different policy groups"/>
        </PopoverContent>
      </Popover>
    </div>
      <p>You can access this by going to the Org. Settings ={">"} Policy Groups.</p>
      <p>While there, you can either edit already existing policy groups to change their abilities, or you can create entirely new ones, remembering to also add the necessary people, along with the desired abilities you wish for them to have.</p>
    </div>
  );
}
