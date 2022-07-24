import { Component, OnDestroy, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormArray,
    FormControl,
    FormGroup,
    ValidationErrors,
    ValidatorFn,
    Validators,
} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { first, Subscription } from 'rxjs';
import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface';
import { CocktailService } from 'src/app/shared/services/cocktail.service';

@Component({
    selector: 'app-cocktail-form',
    templateUrl: './cocktail-form.component.html',
    styleUrls: ['./cocktail-form.component.scss'],
})
export class CocktailFormComponent implements OnInit, OnDestroy {
    public cocktails: Cocktail[] = [];
    public cocktailSubscription!: Subscription;
    public cocktail!: Cocktail;
    public cocktailIndex!: string | null;

    // FORM
    public form: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required, this.validName()]),
        img: new FormControl('', Validators.required),
        ingredients: new FormArray([], Validators.minLength(1)),
        description: new FormControl('', Validators.required),
    });

    // FORM init
    private initForm(
        cocktail: Cocktail = {
            name: '',
            description: '',
            ingredients: [],
            img: '',
        }
    ): FormGroup {
        return new FormGroup({
            name: new FormControl(cocktail.name, [
                Validators.required,
                this.validName,
            ]),
            img: new FormControl(cocktail.img, Validators.required),
            ingredients: new FormArray(
                cocktail.ingredients.map(
                    (ingredient) =>
                        new FormGroup({
                            name: new FormControl(
                                ingredient.name,
                                Validators.required
                            ),
                            quantity: new FormControl(
                                ingredient.quantity,
                                Validators.required
                            ),
                        })
                ),
                Validators.minLength(1)
            ),
            description: new FormControl(
                cocktail.description,
                Validators.required
            ),
        });
    }

    // Name validator
    validName(): ValidatorFn {
        return (control: AbstractControl): { [s: string]: boolean } | null => {
            if (
                this.cocktails
                    .map((x) => x.name.toLowerCase())
                    .includes(control.value.toLowerCase())
            ) {
                console.log('Le nom du cocktail est déjà pris');
                return { nameAlreadyTaken: true };
            }
            return null;
        };
    }

    // ERROR Management
    public errorsForm: { [s: string]: string | string[] } = {
        name: '',
        img: '',
        ingredients: [],
        description: '',
    };

    public formMessages: { [s: string]: { [s: string]: string } } = {
        name: {
            required: 'Un nom est requis',
            nameAlreadyTaken: 'Ce cocktail existe déjà!',
        },
        img: {
            required: 'Une image est requise',
        },
        ingredients: {
            required: 'Un ingredient minimum est requis',
            minLength: 'Un ingredient minimum est requis',
        },
        description: {
            required: 'Une description est requise',
        },
    };

    // STATUSCHANGES' CALLBACK
    public changementForm() {
        if (!this.form) {
            return;
        }
        const form = this.form;
        for (const field in this.errorsForm) {
            this.errorsForm[field] = '';
            let control: AbstractControl;
            if (
                field === 'form' &&
                form.get('name')?.untouched &&
                form.get('ingredients')?.untouched &&
                form.get('description')?.untouched
            ) {
                control = form;
            } else {
                control = form.get(field)!;
            }

            if (
                control &&
                (control.dirty || field === 'ingredients') &&
                control.invalid
            ) {
                const msgs = this.formMessages[field];
                for (const key in control.errors) {
                    this.errorsForm[field] += msgs[key] + ' ';
                }
            }
        }
    }

    // FORM GETTERS
    public get name() {
        return this.form.get('name');
    }
    public get img() {
        return this.form.get('img');
    }
    public get ingredients() {
        return this.form.get('ingredients') as FormArray;
    }
    public get description() {
        return this.form.get('description');
    }

    // Observable STATUSCHANGES
    public formSubscription: Subscription = this.form.statusChanges.subscribe(
        () => this.changementForm()
    );

    // SUBMIT form
    submit(): void {
        if (this.form.valid === false) {
            return;
        }
        console.log('cocktailIndex', this.cocktailIndex);

        if (this.cocktail) {
            this.cocktailService.editCocktail(
                this.cocktail._id,
                this.form.value
            ).subscribe();
        } else {
            this.cocktailService.addCocktail(this.form.value).subscribe();
        }
        console.log('SUBMIT Form ', this.form.value);
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
    }

    // ERASE form
    erase(): void {
        this.form.reset();
    }

    // ADD/DELETE ingredient
    addIngredient(): void {
        this.ingredients.push(
            new FormGroup({
                name: new FormControl('', [
                    Validators.required,
                    Validators.minLength(2),
                ]),
                quantity: new FormControl(0, Validators.required),
            })
        );
    }

    deleteIngredient(index: number): void {
        this.ingredients.removeAt(index);
    }

    // COCKTAILS Observable mngt
    constructor(
        private cocktailService: CocktailService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.cocktailSubscription = this.cocktailService.cocktails$.subscribe(
            (cocktails: Cocktail[]) => (this.cocktails = cocktails)
        );
        //console.log('COCKTAILS -', this.cocktails);
        this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
            this.cocktailIndex = paramMap.get('index');
            if (this.cocktailIndex !== null) {
                this.cocktailService
                    .getCocktail(+this.cocktailIndex)
                    .pipe(first())
                    .subscribe((cocktail: Cocktail) => {
                        this.cocktail = cocktail;
                    });
            }
            this.form = this.initForm(this.cocktail);
        });
    }

    ngOnDestroy(): void {
        this.cocktailSubscription.unsubscribe();
        this.formSubscription.unsubscribe();
    }
}
