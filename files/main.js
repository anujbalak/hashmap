import { HashMap } from "./hashmap.mjs";
import { HashSet } from "./hashset.mjs";

let hashmap = new HashMap();
hashmap.set("apple", "red"); //
hashmap.set("banana", "yellow"); //
hashmap.set("carrot", "orange"); //
hashmap.set("dog", "brown");
hashmap.set("elephant", "gray"); //
hashmap.set("frog", "green"); //
hashmap.set("grape", "purple");
hashmap.set("hat", "black"); //
hashmap.set("ice cream", "white"); //
hashmap.set("jacket", "blue"); //
hashmap.set("kite", "pink"); //
hashmap.set("lion", "golden"); //
hashmap.set("cat", "white"); //
hashmap.set("speaker", "black");
hashmap.set("mouse", "white");
hashmap.set("goat", "red");
hashmap.set("buffalo", "black");
hashmap.set("cat", "black");
console.log(hashmap.entries());

let set = new HashSet();
set.set("Anuj");
console.log(set);
