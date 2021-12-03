Contains a few components to demonstrate some of the newer features of React!

Included in this project is a handful of

# Error Boundaries

Error boundaries are great for users of your application (and can be quite useful in development).

As your React app grows (to 1000 components or more!), and the team contributing to your application grows, error handling becomes essential. Limiting the damange one component render error can do will save many elements of your UI from feeling "broken"

Let's dive into our [Error Boundaries Folder](./src/components/error-boundaries) and take a look at how we can improve our components to handle errors appropriately.

# Portals

Portals are a newer feature of React that allow you, the developer, to control and manipulate elements outside of the DOM element tree consisting of your React application. What exactly would you do with this, you ask?

A great example of how Portals might be used is a modal overlay of an application - oftentimes styles like `overflow-y: hidden` or `position: fixed` applied to component higher up the tree prevents the developer from mounting a modal to the DOM.

Let's dive into our [Portals Folder](./src/components/portals) and implement our own version of a bootstrap modal using Portals.

# React Refs

Refs are neat. We can control and manipulate DOM elements from elsewhere in our JS code. So for instance, focusing on inputs, or submitting HTML forms can be done by interacting directly with an `ref`!

Let's dive into our [React Refs Folder](./src/components/react-refs) and implement some focusing input elements using Refs.

## License

This project is [MIT Licensed](./License.md)
