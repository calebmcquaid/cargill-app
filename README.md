# cargill-app

### Built With

- React Native
- Expo
- Firebase

## Getting Started

### Prerequisites

- yarn

- expo-cli

  ```sh
  yarn global add expo-cli
  ```

- eas-cli

  ```sh
  yarn global add eas-cli
  ```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/nicerstudio/cargill-app.git
   ```

2. CD into the repo

   ```sh
   cd cargill-app
   ```

3. Install

   ```sh
   yarn install
   ```

4. Request a `.env` file from another developer on the project

5. Start the project

   ```sh
   expo start
   ```

6. Open the project in an the iOS simulator

   ```sh
   i
   ```

## Contributing

1. `git checkout main`
2. `git pull`
3. Link the Linear ticket to the branch name using the ticket ID - `git checkout -b feature/CAR-##-cool-new-feature`
4. Open a PR, including the ticket ID in the PR title
5. Tag the appropriate devs (at least Caleb) in the PR
6. Ensure the ticket is in the proper state on Linear

### Building

1. `yarn run build:prod`

### Errors Reference

- `Invariant Violation: "main" has not been registered.` + `FirebaseError: Firebase: Error (auth/invalid-api-key).`

  Need to put a .env file with Firebase config variables at root

- `CombinedError: [GraphQL] Experience with name 'XXXX' does not exist.`

  Need to create a project in your expo account matching the name

- `CombinedError: [GraphQL] Entity not authorized`

  Need to update `extra.eas.projectId` in `app.config.js`
