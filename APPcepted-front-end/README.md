# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

=================================================================================================================================================================================================================

# APPcepted

### Background

Based on the 2006 film "Accepted" this app poses the question "What do you want to learn?"

Many of us have skills we would like to learn, but for one reason or another cannot attend rigorous structured classes. This app seeks to solve that problem. similar to meetup, someone can post a topic they're interested in learning about, or something they are able to teach, and the community takes it from there!

### Getting Started

Anyone who visits the homepage can see a list of all offered classes and suggested topics, as well as their current status (open slots in a class, popularity in a topic). To participate, though, they must sign up. Once an account is created, a user can enroll in classes, vote on topics, and even post their own suggested topics or offer to teach a new class!

### Next Steps

In its present form, there is no way for users to communicate with each other. The obvious next step would be to implement a message board, blog post, and/or chatroom to actually coordinate the learning.

Because classes are unrelated to topics, if there is one of each for the same subject, there is no way to correlate them. One possible enhancement, then, would be to implement a branching system, where a user could create a class based on a topic and auto enroll the first few people who upvoted it.

### Technologies Used

The front end is programmed in Javascript with React, using the react-router library.

The back end (linked below) is programmed in Javascript, using express, mongodb/mongoose, and json web tokens

https://github.com/vikramrgopalan-gaseb/unit3-project-back-end