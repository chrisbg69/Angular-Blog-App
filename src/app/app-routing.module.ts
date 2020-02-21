import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from "./auth/auth.guard";
import { NotFoundComponent } from './notfound/notfound.component';



const routes: Routes = [
  { path: "", component: PostListComponent },
  { path: "create", component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: "edit/:postId", component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: "contact", component: ContactComponent, canActivate: [AuthGuard]},
  { path: "auth", loadChildren: "./auth/auth.module#AuthModule"},
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
