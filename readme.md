1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
2. How do you create and insert a new element into the DOM?
3. What is Event Bubbling and how does it work?
4. What is Event Delegation in JavaScript? Why is it useful?
5. What is the difference between preventDefault() and stopPropagation() methods?

### 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
  - getElementById - It returns the single element and it select only id.
  - getElementsByClassName - It returns the HTMLCollection and it select only class.
  - querySelector - It returns Single element and it select any css selector.
  - querySelectorAll - It returns Nodelist which is like array and it select any css selector. 


### 2. Create and insert a new element into the dom
  - first i create an element with document.createElement()
  - then add text or any content with ele.textContent or innerHTML
  - then insert it into dom with appendChild() or prepend()


### 3. Event Bubbling
  - Events Bubbling means event are spread in the form of bubbles from the innermost elements outward.

### 4. Event Delegation
  - Event Delegation is a technique where we use a single event listener on a parent element, and handle the events of multiple child elements within that parent together.

### 5. Difference between preventDefault() and stoppropagation()
  - preventDefault() is used to stop the default browser action for an element.

  - stopPropagation() is used to stop event bubbling or capturing.