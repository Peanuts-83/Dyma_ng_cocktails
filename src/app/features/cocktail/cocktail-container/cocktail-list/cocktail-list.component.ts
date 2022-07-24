
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface'
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe'

@Component({
    selector: 'app-cocktail-list',
    templateUrl: './cocktail-list.component.html',
    styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
    @Input() public cocktails: Cocktail[] | null = null
    public search = ''

    constructor() { }

    ngOnInit(): void {
    }

}
