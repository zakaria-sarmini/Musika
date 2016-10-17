import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SpotifyService} from "../services/spotify.service";
import {Artist} from "../types/artist";
import {Album} from "../types/album";

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

    public artist:Artist;
    public albums:Album[];

    constructor(private _route:ActivatedRoute, private _spotifyservice:SpotifyService) {
    }

    ngOnInit() {
        this._route.params
            .map(params => params['id'])
            .subscribe((id:string) => {
                    this._spotifyservice.getArtist(id)
                        .subscribe(
                            data => this.artist = data,
                            error => console.log('subscribe 1 :' + error),
                            () => console.log('done')
                    );
                    this._spotifyservice.getAlbums(id)
                        .subscribe(
                            data => {this.albums = data.items},
                            error => console.log('subscribe 2 : ' + error),
                            () => console.log('done')
                        )
                }
            )
    }

}
