# Reduxtagram :camera:

Redux tutorial from https://learnredux.com/.

(This is the second Instagram clone that I made. For my previous Ruby on Rails app (no JavaScript!), see [J-Instagram](https://github.com/junyuanxue/instagram-challenge).)

![Imgur](http://i.imgur.com/4bj6D0R.png)

## Tools :wrench:
* React
* Redux
* Redux Saga
* Webpack
* Express
* Instagram API
* jQuery
* Stylus

## To do :ballot_box_with_check:

<!-- TODO -->
- [ ] Create add photo action.
- [x] Hook up Redux with an API: Redux Thunk or Saga (which would allow me to do async calls to an API in Redux).
- [ ] If deeply nested JSON: try Normalizr.

## Some notes from the videos :pencil:

The idea of Redux: instead of having many multiple states we have a giant **store** that holds all the states.
We update the store/states with **actions**. When actions get dispatched, they're handled by **reducers**.

---

A reducer takes in 2 things:

1) the action (info what happened);
2) copy of current state.

i.e. pass in action, store --> reducer checking --> return updated store.

---

The reducer does the editing of state. Every time an action is dispatched, every reducer is going to run,
hence the switch statement.

---

In redux, we use functional programming:
_we do not **mutate our state**, we use **pure functions**_. (We do not mutate something that's outside a function.)

* Impure function:
```
function addLikes (picture) {
  picture.likes ++
  return picture
}
```
* Pure function: we take a copy of the state, modify it, and return the new state -
```
function addLikes (picture) {
  var pic = Object.assign({}, picture)
    pic.likes ++
    return pic
  }
```
So everytime we pass in the same object, it will return the same value. It's a predicatable and pure function that is not mutating any external state.

---

**Reducer composition**: we only want a **slice** of the state to manage.
So rather than changing the entire comments state, we only want to change the state of comments that belong to one post.

## Author :cat:
Junyuan Xue

[github](https://github.com/junyuanxue) | [blog](https://spinningcodes.wordpress.com/) | [website](http://junyuanxue.github.io/)
