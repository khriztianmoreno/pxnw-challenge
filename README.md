# Challenge pxnw

> Technical challenge for [PXNW](https://pxnw.co/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.3.

## Challenge

We're transporting you back to the early 2000's – we're building a quick blog. We're asking you to build an application with two pages, one to list blog posts and a short excerpt, one to display a full blog post. The backend for this blog are Github Gists. The idea is that you can configure a username to look up on Github and the index page will display excerpts of the Gists. The post detail page will then display the full content of the gist. Possible enhancements are a searchable list of posts, only show certain Gists as blog posts, formatted Markdown as HTML etc.

## Requirements

- As a reader, I want to be able to see a list of blog posts that a writer has posted on Github in the form of Gists, so that I can make a decision on which post to read.
- As a reader, I want to be able to select a post on the index page and see the post details, so that I can read the post. 
- As a reader, I want to be able to navigate from a post to the next post so that I can read the next post.
- As a reader, I want to be able to navigate to the index page from a post so that I can select a different post to read.
- As a writer, I want to be able to post a Gist to Github and have that post show up on my blog so that a reader can read the new post.
- As a writer, I want to able to make updates to a post by updating the Gist so that I can correct typos and make content updates.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```shell
# NodeJS 6.11.0

$ npm install typescript node-sass bootstrap-sass @angular/cli
```


### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Author

* **Cristian Moreno** - *FullStack JavaScript Developer* - [Github](https://github.com/khriztianmoreno)

See also the list of [contributors](https://github.com/khriztianmoreno/pxnw-challengecontributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
