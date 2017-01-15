# Reduxtagram :camera:

Redux tutorial from https://learnredux.com/.

(This is the second Instagram clone that I made. For my previous Ruby on Rails app (no JavaScript!), see [J-Instagram](https://github.com/junyuanxue/instagram-challenge).)

### Some notes from the videos :pencil:
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

* Inpure function:
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
