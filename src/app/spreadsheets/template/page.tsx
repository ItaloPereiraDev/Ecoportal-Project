export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="text-5xl">Welcome to the Template Spreadsheet page!</h1>
    <p>Here is a step by step guide on how to create import spreadsheets for templates!</p>
    <p>First of all, make sure you did all of the required configuration on Excel on your PC, as previously told by the link that leads to the wiki page.</p>
    <p>Now, open the Import Tools master file, and do the following:</p>
    <ul className="list-disc list-inside space-y-4">
      <li>
        Click on Imports & Exports
      </li>
      <li>
        Create a name for the file, on the "Create a new workbook" option. Set it to something like: "Name_of_client Name_of_Template"
      </li>
      <li>
        Change the amount of entries per spreadsheet. The default is 500, change it to a higher number, like 3000.
      </li>
      <li>
        On the template page, press the right mouse button, select "Enzyme Tools", and go to "Tagtree Tools", and finally "List tree Indented UPPER"
      </li>
      <li>
        Then, go to the "Page Explorer" option in Enzyme Tools, to check which forces use the Tag Tree, and compare it. If they're the same, it means the template tag tree is up to date. If it isn't, then you will need to update this template (and most likely all the other registers/templates too) before doing this.
      </li>
      <li>
        Copy and Paste the List Tree Indented UPPER in Excel, and click done.
      </li>
      <li>
        Lastly, make a backup of the template to JSON (if you updated the tag tree inside the forces, remember to first push the force, and then save the template before backing it up)
      </li>
      <li>
        Select the JSON file of the template in Excel's next step. Save, and thats all of it! You did your first ever import spreadsheet!
      </li>
    </ul>
    </div>
  );
}
