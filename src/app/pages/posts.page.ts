import { AsyncPipe, JsonPipe } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'app-posts',
    standalone: true,
    imports: [AsyncPipe, JsonPipe],
    template: `
        <h1>ListBlog Page</h1>
    `
})

export default class PostsPageComponent {
    // private route = inject(ActivatedRoute)
    // slug$ = this.route.snapshot.paramMap.get("slug")

}