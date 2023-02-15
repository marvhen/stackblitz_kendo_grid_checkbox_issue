import { Component } from '@angular/core';

@Component({
    selector: 'my-grid',
    template: `
        <kendo-grid
            [data]="data"
            [selectable]="true">
            <kendo-grid-checkbox-column width="50"></kendo-grid-checkbox-column>
            <kendo-grid-column field="note"></kendo-grid-column>
        </kendo-grid>
    `
})
export class MyGridComponent {
    public data = [{note:'Click the the checkbox on this row and then try to uncheck it.  If pagable and navigable are enabled on the above grid, it can be checked but it cannot be unchecked. It appears that it is programatically being uncheked and then rechecked with a single click.'}]

    constructor(
    ) {
    }
}
