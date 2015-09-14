Check comments in each of your files for more detailed feedback. My initials `it:` mark my comments.


##Creativity
* Fun idea, would have been nice to see more execution on it.

##Planning
* Detailed user stories help immensly to plan and throughout a build, include them in your readme to illustrate the thought process and steps that it took to build the application.
* The organization of the models seems well thought-out.

##Execution
* Good use of javascript organization in terms of defining modular functions outside of page load, and executing them inside of page load.
* Nice use of templating
* Happy to see a working seed file; would be happier to see it seed more data!
* The app crashes on heroku & locally. Locally the problem is there is no db connection being established. Try changing the last connection to `mongodb://localhost/<appName>` otherwise it will not work. Given this error crashes the application, I am surprised this is still unresolved.

```
mongoose.connect(process.env.MONGOLAB_URI ||
                 process.env.MONGOHQ_URL || 
                 "mongodb://localhost/travel-bug");
```


##Next Steps

**To meet requirements:**
* Fix errors that crash the application locally.
* Flesh out the Readme with user stories, techonologies used, and setup instructions.

**Highly Recommended improvements:**
* Fix errors that crash the application on heroku.
* Get the data a user submits appended to a view and not simply rendered as JSON, obviously a poor UX. Even better, consider rendering it to a map.

**Nice to have:**
* Would be great to see refactoring of reusable parts of the views (such ash the `<head>` tag) with EJS partials