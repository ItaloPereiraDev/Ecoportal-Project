
import { v4 as uuidv4 } from 'uuid';
import { BookUp2, FileSpreadsheet, Key, LayoutPanelTop, ListTree, UsersRound } from "lucide-react";
import Logo from "./Logo";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "./ui/command";
import Link from "next/link";

export default function Sidebar() {

    const menuList = [
        {
            group: "Template Edit",
            icon: <LayoutPanelTop />,
            items: [
                { link: "/template/templateintro", text: "Template - Intro" },
                { link: "/template/checklist", text: "Checklist" },
                { link: "/template/richtext", text: "Rich Text" },
                { link: "/template/peoplefield", text: "People field" },
                { link: "/template/number", text: "Number" },
                { link: "/template/date", text: "Date" },
                { link: "/template/selectbox", text: "Select Box" },
                { link: "/template/matrix", text: "Matrix Gauge" },
            ]
        },
        {
            group: "Forces",
            icon: <BookUp2 />,
            items: [
                { link: "/forces/forcesintro", text: "Forces - Intro" },
                { link: "/forces/variables", text: "Defining Variables" },
                { link: "/forces/functions", text: "Defining Functions" },
                { link: "/forces/lock", text: "Lock-deindex" },
                { link: "/forces/unlessdisable", text: "Unless-disable" },
                { link: "/forces/conditioners", text: "Conditioners" },
            ]
        },
        {
            group: "Tag Tree Updates",
            icon: <ListTree />,
            items: [
                { link: "/tagtree/tagtreeintro", text: "Tag Tree - Intro" },
                { link: "/tagtree/reporting", text: "Reporting Structures" },
                { link: "/tagtree/updating", text: "Updating templates" },
                { link: "/tagtree/editing", text: "Edit dashboard filters" },
            ]
        },
        {
            group: "Permissions",
            icon: <UsersRound />,
            items: [
                { link: "/permissions/permissionsintro", text: "Permissions - Intro" },
                { link: "/permissions/policy", text: "Policy Groups" },
                { link: "/permissions/rules", text: "Permission Rules" },
                { link: "/permissions/fillintasks", text: "Fill in tasks" },
            ]
        },
        {
            group: "Import Spreadsheet",
            icon: <FileSpreadsheet />,
            items: [
                { link: "/spreadsheets/spreadintro", text: "Import Spreadsheet - Intro" },
                { link: "/spreadsheets/template", text: "Template Spreadsheet" },
                { link: "/spreadsheets/people", text: "People Spreadsheet" },
            ]
        },
    ];

    return <div className="fixed flex flex-col gap-4 min-w-[300px] p-4 max-h-screen min-h-screen">
        <div>
            <Link href={"/"}>
                <Logo />
            </Link>
        </div>
        <div className="overflow-y-auto">
            <Command>
                <CommandInput placeholder="Search your subject..." />
                <CommandList className="max-h-full">
                    <CommandEmpty>
                        No results found.
                    </CommandEmpty>
                    {menuList.map((group) => (
                        <div key={uuidv4()}>
                            <CommandGroup heading={
                                <p className="font-bold flex items-center gap-1 text-black">{group.icon}{group.group}</p>
                            }>
                                {group.items.map((subGroup) =>
                                    <Link href={subGroup.link} key={uuidv4()}>
                                        <CommandItem className="bg-white hover:bg-gray-100 cursor-pointer">
                                            <span>{subGroup.text}</span>
                                        </CommandItem>
                                    </Link>
                                )}
                            </CommandGroup>
                            <CommandSeparator />
                        </div>
                    ))}
                </CommandList>
            </Command>
        </div>
    </div>
}
