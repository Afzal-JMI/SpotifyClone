let id1 = document.getElementById("id1");
console.log(id1);
// matches syntax: element.matches(css)
console.log(id1.matches(".af"));
console.log(id1.matches(".box"));
// elem.closest(css) : To look for the nearesyt ancestor that matches the given CSS selector. The elem itself is also cheched.
console.log(sp1.closest("#sp1"));
//  elemA.contains(elemB): Returns true if elemB is inside elemA or both are same.
console.log(id1.contains(sp1));
console.log(id1.contains(id1));
console.log(sp1.contains(id1));