import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/Rx'
import {Observable} from "rxjs/Rx";

@Injectable()

export class SpotifyService {


    constructor(private _http:Http) {}

    searchBand(query:string, type = 'artist') {
        return this._http.get("https://api.spotify.com/v1/search?query=" + query + "&offset=0&limit=20&type=" + type + "&market=US")
            .map(response => response.json())
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json())
            })
    }

    getArtist(id:string) {
        return this._http.get("https://api.spotify.com/v1/artists/" + id)
            .map(response => response.json())
            .catch(error => {
                console.error('catching error: ' + error);
                return Observable.throw(error.json());
            })
    }

    getAlbums(id: string) {
        return this._http.get("https://api.spotify.com/v1/artists/" + id + "/albums?album_type=single,album&market=ES")
            .map(response => response.json())
            .catch(error => {
                console.error('catching error 2 : ' + error);
                return Observable.throw(error.json());
            })
    }

    getAlbum(id: string){
        return this._http.get('https://api.spotify.com/v1/albums/' + id)
            .map(response => response.json())
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json());
            })
    }

    getTrack(){
        return this._http.get("http://api.soundcloud.com/tracks/?client_id=d02c42795f3bcac39f84eee0ae384b00&q=sweet child o'mine guns n' roses&license=cc-by")
            .map(res => res.json())
            .catch(error => {
                console.trace(error);
                return Observable.throw(error.json());
            })
    }

}


