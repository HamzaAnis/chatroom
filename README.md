# DoorDash Frontend Interview Project
* TLDR: *Build a chat app with real APIs*
* Time: *3hr - 6hrs*
* Allowed tools & frameworks: *anything*
* Show us what you got!

## Howdy! 👋  

This is the frontend interview project for DoorDash! We're going to ask you to build something with whatever tools you want, whatever language you want, or whatever.

If you want to keep it vanilla, that's fine—this should take you 2/3 hours with jQuery, plain ol' HTML and CSS. If you want to use other tools, (like Angular, React, Vue, Ember) that's fine too—*just make sure you have enough documentation for us to be able to build and run the app*. We just want you to build something that's maintainable, testable, and that you're proud of.

The goal here is not to demonstrate your pure coding ability—we're here to give you a problem that's not totally spec'd out for you, and we want to see far you can go. How good can you make it without much guidance? What are the sort of improvements and choices you'll make as you build this thing, and where do your priorities lie?

Remember, building stuff is supposed to be fun, so be creative! Happy coding!

## Getting started
There's a few things you need to get started on to get this to work.

### 1. Installing minimum deps
Make sure you have `node` installed, with a version greater than `7.0.0`. I highly recommend [`nvm`](https://github.com/creationix/nvm), or just installing the latest version of `node` with `brew install node` on macOS.

Once you have a good `node` installed, run `npm install` in this repo to get your dependencies.

### 2. Serving your app
By default, you can run `npm start` to run your app, serving the files from `/public`. You can, however, change this to whatever you want! Just make sure you document the changes somewhere so we can run this.

### 3. Running the api server
We have provided a simple api server for you. You can run `npm run api-server` to start it. Read the [spec](./spec/api-endpoints.md) for more details on the api.

### 4. Read the spec
There's a pretty fleshed out spec in the `./spec` directory. Checkout the [design specs here](./spec/designs/detailed-design-specs.md) to understand what you're building!

## What you can use to build
You can use literally _anything_ that can be served on the web. You should use what you're most comfortable with, no matter what (even if you heard that we use React). **We want you to use the tools you know, and we want to see you at your best and most productive.** 

Secondly, don't worry much about setting up build tools—use something simple and fast to spin up:
* If you're using Ember, it's fast to spin up something with [`ember-cli`](https://ember-cli.com/)
* If you're using Angular 1.x, you can use [this yeoman generator](https://github.com/yeoman/generator-angular) to spin up a scaffold
* If you're using React, it's easy to use [`create-react-app`](https://github.com/facebookincubator/create-react-app) to start the project
* If you're using Vue, [`vue-cli`](https://github.com/vuejs/vue-cli) will be a fast way to get started.
* For anything else, use your favorite generators or templates!

## How we'll test this
We're going to review your code to see how you work and how you make tradeoffs—no automated tests for this one. We'll schedule a call with you after you submit this to walk through the code to understand your thought process. If you come on-site, we'll take your code here, and we'll build on it to tests other things—how you write tests, how you build out new features and refactor old code, etc.

## We'll be evaluating for:
* maintainability
* testability
* readability
* solid UX without strict guidance

## Submission Instructions
1. Write up instructions on how to run your project and ensure there's ample documentation on your intent
2. Upload your repo as a **private** repository to GitHub or GitLab
3. Ensure that we're added as collaborators to the repo, and have access to read/download your project:
  * [`ryngonzalez`](github.com/ryngonzalez) (GitHub/GitLab)
  * [`badsauce`](github.com/badsauce) (GitHub)
  * [`marknach`](github.com/marknach) (GitHub/GitLab)
  * [`cindyyu`](github.com/cindyyu) (GitHub)
  * [`dpenny`](github.com/dpenny) (GitHub)
  * [`ashwin1dd`](github.com/ashwin1dd) (GitHub)
  * [`qknudsen`](github.com/qknudsen) (GitHub)
4. Send an email back to recruiting to ensure that we have a link/access to the repo.
5. We'll review and get back to you soon!

## Extra notes

A couple of things to say:

1. Feel free to change the language you're writing this in. We want to see what good code looks like for you - feel free to add a `gulpfile`, setup `webpack`, or just use the plain JS, CSS, and HTML you're given. It's all up to you!

2. Feel free to use any libraries or frameworks you want, with the idea that they're increasing your productivity, not writing the app for you.

3. Feel free to change any of the scaffolding we provided for you.
