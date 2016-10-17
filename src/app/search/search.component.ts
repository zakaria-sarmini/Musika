import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {SpotifyService} from "../services/spotify.service";
import {Artist} from "../types/artist";
import {Subject} from "rxjs/Rx";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    public searchRes: Artist[];
    private form: FormGroup;
    private typings = new Subject<string>();

    constructor(private _spotifyService: SpotifyService, private _fb: FormBuilder) {
    }

    onType(query){
        this.typings
            .next(query);
    }

    ngOnInit() {
        this.buildForm();
        this.typings
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap((query: string) => this._spotifyService.searchBand(query?query:'*'))
            .subscribe(
                data => this.searchRes = data.artists.items,
                error => console.log(error),
                () => console.log('done')
            )
    };

    buildForm():void{
        this.form = this._fb.group({
            query: ['', [Validators.required]]
        })
    }

}
