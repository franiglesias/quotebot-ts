QuoteBot legacy kata
===

This is a code exercise to practice how to manage and improve legacy code. It's not very big, and you can make it evolve progressively:

* Make it run. The current code doesn't run at all.
* Make it testable and create some tests. There are lots of coupling with production, at least for this very small project.
* Refactor and fix. Introduce some sanity in the code.
* Make it evolve, so it becomes a well-structured application. It would be nice.
* Make it Hexagonal :-)... or whatever interesting architecture you want to try.

## Notes from the original README:

A legacy codebase that resist a bit testing, by Cyrille Martraire.

[Original kata](https://github.com/cyriux/legacy-testing-kata-java)

First try to run it.

Then your goal is to make it testable so that you can make changes (FIXME inside) and perhaps refactor it a bit.

This code draws on a C# code kata authored by my distinguished colleague Nicolas M.; Thanks Nicolas for the good ideas in the kata!

## Personal notes about this kata

This kata is very interesting to practice several refactor techniques.

At first, you won't be able to test it, so you should rely on secure refactor techniques as provided by your IDE.

One interesting suggestion is to define and keep two environments for this exercise: one that simulates a **production** setting, and one for the **development/testing**. This way, you can introduce changes and see how they would affect the production side. You should commit **small sets of changes** that doesn't break the application in production environment.

## Notes on Typescript version

This TS version tries to mimic the behavior of the original java.

To try the code, clone or download this repo.

```
npm install
```

Then, run this script to see how this program works (to say something):

```
npm run try
```

You should see an error like this:

```text
script to see how this program works (to say something):
```

Congrats! You are up and running to solve this kata.

**Important note:** you must not touch the `lib` folder, given it is considered a vendor.




## Where to start? Extracted notes from the original

If you hesitate where to start, here are some of the tricky bits that make it hard to test:

* Lack of dependency injection:
* A static main with no args
* Static service
* Hard-coded instantiation of a service that itself instantiates its dependencies, and again

Implementation issues:

* Very slow service
* Hidden dependency to a license key in env variable
* Random return value -> non-deterministic test
* Dialog popping up prompting for user input

Other tricks:

* New Date() in the middle of calculations -> non-deterministic test
* High combinatorial of calculations lead to too many required test cases
* Stateful behavior from internal cache: first call different from next calls
* Heavy dependency called within a large loop with different values
* Use a dependency or another depending on the passed parameter

