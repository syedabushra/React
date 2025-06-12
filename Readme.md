# React Tutorial

...

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds - caching in "parcel-cache"
- Image Optimization
- Minification
- Bundling
- Compressing files
- Consisent Hashing
- Differential Bundler - Supports older Browsers
- Code Splitting
- Diagnostics
- Error Handling
- HTTPs
- Tree Shaking - Remove unused code
- Different Dev and Prod Bundles
  More about parcel on parceljs.org https://parceljs.org/

# Food ordering app
* Header
*   - Logo
*   - Nav Items
* Body
*   - Search
*   - Card Container
*       - Restaurant Cards
* Footer
*   - Copywrite
*   - Links
*   - Address
*   - Contact

Two types of Export/Import 
1. Default Export/Import
- export default Components;
- import Components from "path";

2. Named Export/Import
- export const Component;
import {Component} from "path";

----------******REACT HOOKS******----------
- They are normal JavaScript functions 
- Who wrote these functions? - Written by Facebook Developers
- also called as JS utility functions
- written inside react
- How to use it : We will have to **import** these utility functions 
- There are two very important react hooks:
  1. useState() - used to generate **super powerful state variables** in react
  2. useEffect()

# useState:
- Why is it called the state variable? - because it maintains the state of your Component
- The scope of a local state variable is inside that Component