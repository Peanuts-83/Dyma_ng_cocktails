import { TestBed } from "@angular/core/testing"
import { AppComponent } from "./app.component"


describe('AppCOmponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent]
        }).compileComponents()
    })


    it('App title should be Cocktails', () => {
        const fixture = TestBed.createComponent(AppComponent)
        console.log(fixture.nativeElement.querySelector('span'));

    })
})