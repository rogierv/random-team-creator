[![Netlify Status](https://api.netlify.com/api/v1/badges/dc8d6acc-afb8-4f55-a2d2-349097342742/deploy-status)](https://app.netlify.com/sites/random-team-creator/deploys)

# RANDOM TEAM CREATOR

## Table of contents

- [RANDOM TEAM CREATOR](#random-team-creator)
  - [Table of contents](#table-of-contents)
  - [What this project is about](#what-this-project-is-about)
  - [Technologies used](#technologies-used)
  - [Goals for this project:](#goals-for-this-project)
  - [User Stories](#user-stories)
    - [New user Stories (work in progress)](#new-user-stories-work-in-progress)
  - [Use Online or Run Locally](#use-online-or-run-locally)
  - [Contributors](#contributors)

## What this project is about

This individual project is to test my front-end skills in React/Redux in combination with local Storage and Material-UI. </br>
The aim of this application is to generate random teams out of a group. A teacher can quickly create teams from different groups. The groups and team members are stored in the localStorage, so even after a refresh the data is still there.

## Technologies used

The front-end was developed using `React`, `Redux` and `Material-UI`.<br />
Please follow the links below to some samples:

- **[react](./src/components/TeamGenerator/TeamSizes.js)**
- **[redux](./src/reducers/groups.js)**

## Goals for this project:

- To develop a front end application using React/Redux, localStorage and Material-UI
- Application should be online and all states should be saved in the local storage.
- To be used by the teachers of Codaisseur!

## User Stories

- [x] As a teacher I can create a new group and name it (i.e. "CODE 23")
- [x] As a teacher I can add names to a group
- [x] As a teacher I can create teams out of this group
- [x] As a teacher I can select the group size. The different group sizes are automatically presented
- [x] As a teacher I can randomly create teams based on the selected group size. I can always rerun.
- [x] As a teacher I do not have to remember the names in the group. The next time I open the app, the names are still in the groups.
- [x] As a teacher I can add and delete names from a group
- [x] As a teacher I do not have to remember the groups. The next time I open the app the groups is still there.
- [x] As a teacher I can edit and delete groups.

### New user Stories (work in progress)

- [ ] As a teacher I can categories the names (i.e. skill level). The randomizer will use this category to create teams.
- [ ] As a teacher I can send an email to each individual user in which team they are.
- [ ] As a teacher I can randomly pick a name from a group
- [ ] As a teacher I can ramdomly pick a selection of names from a group

## Use Online or Run Locally

You can use the application online at: https://random-team-creator.netlify.com/

Alternatively you can clone the repo and run everything locally.<br />

```sh
npm install
npm run start
```

## Contributors

Rogier Verkaik: https://github.com/rogierv<br />
