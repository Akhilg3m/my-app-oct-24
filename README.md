Angular Project Setup:
======================

1) Install nodejs

    check: node -v
           npm -v

2) Install angular

    npm install -g @angular/cli@15

    check: ng version

3) in vscode start the server

    ng serve

    check:  localhost:4200

***) 
    1) open powershell as administartor
    2) set-executionPolicy unrestricted


Project Heirarchy:
==================


Directives: useful to alter the DOM
==========

    1) Structural Direvies:

            *ngFor, *ngIf


    2) Attribute Directives:

            ngStyle, ngClass


Pipes: Useful to alter the data format.
======

        | uppercase
        | lowercase
        | date
        | date:'yyyy-MM-dd'


API Integration:
================

0) Create vehilce component and service

1) Import HttpClientModule

2) Inject HttpClient in vehicle service
   write a get method to hit API

3) API call is an observable so
   subscribe it in ts to read data





ALL POSSIBLE API CALLS:
=======================

1) all         get           get(URL)

2) specific    get           get(URL/id)

3) filtering   get           get(URL?filter=red)

4) pagination  get           get(URL?limit=10&page=1)

5) sorting     get    get(URL?sortBy=color&order=asc)
                                                desc

6) create      post          post(URL,data)

7) update      put           put(URL/id, data)

8) delete      delete        delete(URL/id)








GIT:
====
1) Link laptop with github website

    git config --global user.name "XXXXXX"
    git config --global user.email "XXXXXX"

    Check: git config --list

2) Link project with repository

    git init
    git remote add origin URL

    Check: git remote -v

3) Sync code

    git add .                     changes->stagedchanges
    git commit -m "XXXX"          stanged chagnes -> 0
    git push                      100%


    ***) fist time push suggetion command with -f


Forms:
======
1) FormGroup           
2) Nested FormGroup    
3) Dynamic Forms
4) FormArray
5) Validations
6) Custom Validators




Form Validations:

TS:
===
    age: new FormControl('',[Validators.required, Validators.min(18), Validators.max(60)]),

HTML:
=====

     <div *ngIf="CONTROL?.touched && CONTROL?.invalid">

        <p *ngIf="CONTROL?.errors?.['required']">   xxxxxx  </p>
        <p *ngIf="CONTROL?.errors?.['min']">        xxxxxx  </p>
        <p *ngIf="CONTROL?.errors?.['max']">        xxxxxx  </p>

    </div>

    CONTROLS:
    =========
    1) FormGroup:         userForm.get('age')
    2) NestedFormGroup:   userForm.get('address')?.get('pin')
    3) FormArray:         cardsFormArray.controls[i]?.get('cvv')



Communications:
===============

    1) component communication
        -> Parent to child
        -> Child to parent
        -> Sibilng
    2) page communication (view, edit)
    3) module communication
































git add .

git commit -m "XXXX

git push


go to git hub website

    => Raise and merge the pull request
































    