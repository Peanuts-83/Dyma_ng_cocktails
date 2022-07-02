import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core'

@Directive({
    selector: '[appSelected]'
})
export class SelectedDirective implements OnChanges {
    @Input() public appSelected?: boolean
    @HostBinding('style.backgroundColor') private backgroundColor?: string
    @HostBinding('style.fontWeight') private fontWeight?: string
    @HostBinding('style.color') private color?: string

    constructor() { }


    ngOnChanges(changes: SimpleChanges): void {
        if (this.appSelected) {
            this.backgroundColor = 'var(--primary)'
            this.fontWeight = '500'
            this.color = 'white'
        } else {
            this.backgroundColor = 'white'
            this.fontWeight = '500'
            this.color = 'var(--text-regular)'

        }
    }

}
