import { RouteMeta } from "@analogjs/router";
import { Component } from "@angular/core";

export const routeMeta: RouteMeta = {
    canActivate: [() => new Promise((resolve) => setTimeout(() => resolve(true), 3000))]
}
@Component({
    selector: 'app-child-home',
    standalone: true,
    template: `
        <h1>Child Route</h1>
    `
})

export default class ParentChildPageComponent {

}