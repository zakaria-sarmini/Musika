import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SpotifyService} from "../services/spotify.service";
import {Album} from "../types/album";

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

    public album:Album;

    constructor(private _route: ActivatedRoute, private _spotifyService: SpotifyService ) {
    }

    soundCloud(track:string){
        console.log(track);
        this._spotifyService.getTrack().subscribe(data => console.log(data))
    }

    ngOnInit() {
        this._route.params
            .map((id) => id['id'])
            .subscribe((id) => {
                this._spotifyService.getAlbum(id)
                    .subscribe(
                        data => {console.log(data.tracks.items[0].name);this.album=data}
                    )
            })
    }

}
