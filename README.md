QuoteBot legacy kata
===

This is a code exercise to practice how to manage and improve legacy code. It's not very big, and you can make it evolve progressively:

* Make it run. The current code doesn't run at all in a local development environment. And it does, it is wasting money on every run.
* Make it testable and create some tests. There are lots of coupling, at least for a very small project like this.
* Refactor and fix. Introduce some sanity in the code.
* Make it evolve, so it becomes a well-structured application. It would be nice. Make it Hexagonal, or Layered... or whatever interesting architecture you want to try.
* Change implementations of the `QuotePublisher` so you can get a good report of the job that this bot is doing.

## Notes from the original README:

A legacy codebase that resist a bit testing, by Cyrille Martraire.

[Original kata](https://github.com/cyriux/legacy-testing-kata-java)

First try to run it.

Then your goal is to make it testable so that you can make changes (FIXME inside) and perhaps refactor it a bit.

This code draws on a C# code kata authored by my distinguished colleague Nicolas M.; Thanks Nicolas for the good ideas in the kata!

## Personal notes about this kata

This kata is very interesting to practice several refactor techniques.

At first, you won't be able to test it, so you should rely on proven refactor techniques, some of them could be provided by your IDE.

One interesting suggestion is to define and keep two environments for this exercise: one that simulates a **production** setting, and one for the **development/testing**. This way, you can introduce changes and see how they would affect the production side. You should commit **small sets of changes** that doesn't break the application in production environment.

## Notes on the Typescript version

This TS version tries to mimic the behavior of the original java.

To try the code, clone or download this repo, provided that you have a proper node installation with npm:

```shell
npm install
```

Then, run this script to see how this program works (to say something):

```shell
npm run try
```

You should see an error like this:

```text
Error [InvalidLicenseError]: [Stupid license] Missing license!!!!
```

Congrats! You are up and running, ready to solve this kata.

Of course, you could populate the environment variable LICENSE to make it run properly, but take into account that in a real world scenario this could cost you money. Also, this is not very portable.

```shell
export LICENSE='quotebot-license'
npm run try
```

And... here we go, again:

```text
You've pushed a dummy auction to a real ads platform, the business is upset!
```

It's a trap! You are committing to (simulated) real servers and spending money every time you run the thing. 

Do you want to see what should happen in production environment?

You are not allowed to touch files in the `lib` folder, but if you are really curious to get a glimpse of how this should work, try with this change, and undo it when ready to start working.

```ts
export class QuotePublisher {

    static publish(proposal: number) {
        // console.log("You've pushed a dummy auction to a real ads platform, the business is upset!")
        // process.exit(-1)
        console.log(`You pushed a proposal of ${proposal}`);
    }
}
```

**Important note:** you must not touch the `lib` folder, given it is considered a vendor. In fact, the purpose of the exercise is to practice how to deal with these problems without touching that vendors, and without setting a LICENSE env variable in the dev/local/test environments.

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

