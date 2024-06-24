export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="text-5xl">Welcome to the People Schema page!</h1>
    <p>Here is a step by step guide on how to create People Schema spreadsheets in the <a className="underline text-blue-600" href="https://docs.ecoportal.com/internal/best_practices/implementation/create_people_manager_imports_spreadsheet" target="_blank" rel="noopener noreferrer">Wiki</a></p>
    <p>Although, if you've been enjoying my guide so far, you can keep looking here!</p>
    <p>First of all, make sure you did all of the required configuration on Excel on your PC, as previously told by the link that leads to the wiki page.</p>
    <p>Now, open the Import Tools master file, and do the following:</p>
    <ul className="list-disc list-inside space-y-4">
      <li>
        Click on People Schema
      </li>
      <li>
        Create a name for the file, on the "Create a new workbook" option. Set it to something like: "Name_of_client Name_of_Template"
      </li>
      <li>
        Change the amount of entries per spreadsheet. The default is 500, change it to a higher number, like 3000.
      </li>
      <li>
        On the template page, press the right mouse button, select "Enzyme Tools", and go to "Org Tools".
      </li>
      <li>
        Go to the Policy Groups tab, and copy & paste all of it into the Excel tab.
      </li>
      <li>
        Then, go to the "Page Explorer" option in Enzyme Tools, to check which forces use the Tag Tree, and compare it. If they're the same, it means the template tag tree is up to date. If it isn't, then you will need to update this template (and most likely all the other registers/templates too) before doing this.
      </li>
      <li>
        Copy and Paste the List Tree Indented UPPER in Excel, and click done.
      </li>
      <li>
        Lastly, go to the JSON definition of the correct policy group. On the Org Tools, click on "Schemas", and pay attention! If you've been asked to do this for the "Staff" policy group, then select the correct policy group.
      </li>
      <li>
        Copy and Paste it into Excel's tab, and then again, its done! Save, and thats all of it! You did your first ever people schema spreadsheet!
      </li>
    </ul>
    </div>
  );
}
