import { AsyncPipe, JsonPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-blog-post',
    standalone: true,
    imports: [AsyncPipe, JsonPipe],
    template: `
        <h1>First Blog Page</h1>

        slug: {{ slug$ | json }}
    `
})

export default class BlogPostPageComponent {
    private route = inject(ActivatedRoute)
    slug$ = this.route.snapshot.paramMap.get("slug")

}