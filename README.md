# AnimalRehab

**Author**: Ethan Davis, Terrell Douglas, Raven Delaney, Amy Evans, Joseph Hangarter

**Version**: 1.0.0 

## User Stories
* As a user, I want to give medical detail for medicine dosage to heal animal (species, weight, dilution)
* As a user, I want notes section to log health
* As a user, I would like available meds for treatment so i can find information faster
* As a user, I would like it to be easy to navigate
* As a user, I would like to be able to add/delete animals from my log
* As a user, I would like to archive logs for future reference

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for a Code Fellows 401 class. (i.e. What's your problem domain?) -->
Our application will help support the many volunteers that spend their extra time and resources caring for sick or injured wildlife. Without the in-depth training vets receive, these volunteers need resources so there's no guess-and-check in giving animals medication the could result in the animals getting worse, rather than better. Our idea was to make this website a resource with a list of medications that are safe to use and a way to calculate the correct dosage. 

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
![Wireframes](/assets/wireframes.jpg)
![Models](/assets/models.jpg)

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. This is also an area which you can include any visuals; flow charts, example usage gifs, screen captures, etc.-->
- Basic tools: Python, VS code, Github, Command line

- Our application was built with a Django backend and a React front end. We have a postgresql database and several react components to render our pages. 

- We deployed the backend to DigitalOcean, and the front end to Now.

## API
<!-- Provide detailed instructions for your applications usage. This should include any methods or endpoints available to the user/client/developer. Each section should be formatted to provide clear syntax for usage, example calls including input data requirements and options, and example responses or return values. -->
React Deployment - Zeit Now
* https://animal-rehab.josephhangarter.now.sh/

Django Deployment - Digital Ocean
* http://64.225.2.201:8000/api/v1/animals/
* https://animal-back-end.xyz/

- Animal In-Care Page
  - Initial Render
    - .../animals/:uid/ - Get all user's animals in-care
  - Form Renders
    - .../animals/:uid/create/ - Create animal

- Animal Profile Page
  - Initial Render
    - .../animal/:aid/ - Get all animal details
    - .../animal/:aid/logs/ - Get all logs for animal
  - Form Renders
    - .../animal/:aid/archive/ - Archive animal
    - .../animal/:aid/delete/ - Delete animal
    - .../animal/:aid/release/ - Release animal from care
    - .../log/:aid/create/ - Create a log
    - .../log/:lid/ - Update or delete a log

## Change Log
<!-- Use this are to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:
01-01-2001 4:59pm - Added functionality to add and delete some things.
-->
* 2/7/20 Repo Initialized
* 2/10/20 Models being served, Pages render in localhost
* 2/11/20 Front and back end deployed to hosting sites
* 2/12/20 Can create new animal instance and find medicine dose for animal, Medicine page and dose form dynamically created from props
* 2/13/20
