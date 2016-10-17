import {Routes, RouterModule} from "@angular/router";
import {SearchComponent} from "./search/search.component";
import {AboutComponent} from "./about/about.component";
import {ModuleWithProviders} from "@angular/core";
import {ArtistComponent} from "./artist/artist.component";
import {AlbumComponent} from "./album/album.component";

const appRoutes: Routes = [
    {
        path: '',
        component: SearchComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path:'artist',
        children: [
            {
                path:'',
                component: ArtistComponent
            },
            {
                path: ':id',
                component: ArtistComponent
            }
        ]
    },
    {
        path: 'album/:id',
        component: AlbumComponent
    },
    {
        path: '**',
        component: SearchComponent
    }
];

export const AppRoutingProvider: ModuleWithProviders = RouterModule.forRoot(appRoutes);