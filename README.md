# Start here
At CSC Engineering we help distressed retail and e-commerce brands get their technology right.
We frequently work with codebases that were not well maintained. Even with modern frameworks.

So we improve the codebase as we go. We don't just implement new features. We refactor, make the code maintainable and install best practices.

## The Boy Scout Rule
We use the boy scout rule - shout out to Uncle Bob. "Always leave the campground cleaner than you found it." In other words, check a module in better than when you checked it out.

A confusing piece of code takes more time than necessary to understand it. Every time we encounter such a piece of code, it's a chance to improve it - write a test, extract a variable or a function, move pieces of code.

## Scout Essentials
This simplified scenario is designed to test if you subscribe to this ideology. We want to see how you operate. 

We're looking at a Scout Essentials cart page. We want to see how It uses React, but its code isn't clean.

## Your Task
You will implement two features. We expect that you improve the readability and maintainability of the codebase when you're done. Do whatever you would in real life. Don't hesitate. Take action.


### Feature #1
Group the items in the cart.

If you click 'Add to Cart' 3 times, it will look like this:
Trail Mix
Trail Mix
Trail Mix

Make it look like this:
Trail Mix x 3

### Feature #2
Add discount code support.
Whenever someone enters "CLEANCODE10", we give them a pat on the back and a 10% discount.

### Feature #3
Add promo code support per item:
ENERGY15 gives a 15% discount on Trail Mixes.
DRY20 gives a 20% discount on Rain Gear.
Discounts and promo codes cannot be combined.


## Finally
If you can get all the features in - great. If not - don't worry, we're not a sweat shop. We are a customer obsessed software company.


---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
