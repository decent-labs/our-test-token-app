# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Development Setup

Let's walk through getting your development environment set up.

### Installing Dependencies

If you don't have the supported version of node installed (see `.nvmrc`), install it.

```sh
$ nvm install <version number from `.nvmrc`>
```

Now make sure to tell `nvm` to use that version of Node for this project.

```sh
$ nvm use
```

Next, install the `npm` dependencies.

```sh
$ npm install
```

Now, you can start the app with `npm start` (or `npm run start-windows` on Windows), but you won't see much.

### Creating the Environment Variables

We use environment variables to set key pieces of information that are needed for the app to function properly. When doing local development, you'll need to be able to set these yourself. So first, make sure you have a place to set your local environment variables.

```sh
$ cp .env .env.local
```

Use the next section to learn about what these are, and how to set them.

### Understanding the Environment Variables

Some environment variables are important only if you're doing local blockchain development. Others are important only if you're connecting to public networks. Let's go through them now.

#### Local Blockchain Development

If you'll be running a local blockchain, and using that as your blockchain backend, the three environment variables starting with `REACT_APP_LOCAL_` are important for you.

| Environment Variable | Description |
|-|-|
| REACT_APP_LOCAL_CHAIN_ID | The Chain ID of your local blockchain. If using Hardhat's local node, it should be `31337`. |
| REACT_APP_LOCAL_PROVIDER_URL | The URL where your local blockchain can be reached. If using Hardhat's local node, it should be `http://127.0.0.1:8545`. |
| REACT_APP_LOCAL_OUR_TEST_TOKEN_ADDRESS | The address on your local chain where the OurTestToken contract was deployed. |

Spin up your local blockchain from the Token smart contracts repository (`npm run node`), and notice where `OurTestToken` was deployed. That's the address that goes into `REACT_APP_LOCAL_OUR_TEST_TOKEN_ADDRESS`.

Then you can start the app with `npm start` (or `npm run start-windows` on Windows), and you should see that you're reading data from your local blockchain!

#### Public Blockchain Development

If you're more interested in running your local app connected to public blockchains, the rest of the environment variables are for you.

| Environment Variable | Description |
|-|-|
| REACT_APP_FALLBACK_CHAIN_ID | When the user has not connected their own Web3 Provider (Metamask, WalletConnect, etc), the app will fall back into Read-Only mode, read data from this blockchain. |
| REACT_APP_SUPPORTED_CHAIN_IDS | A comma-separated list of chain IDs that the app supports. A user can freely switch between these chains in their Provider and the app will gracefully switch over. |
| REACT_APP_OUR_TEST_TOKEN_ADDRESSES | A stringified JSON object containing key-value pairs of "chain id" to "Our Test Token contract address". This object must contain keys for the Fallback Chain ID, as well as all Supported Chain IDs. |
| REACT_APP_INFURA_API_KEY | Used when the Fallback Provider is triggered. An Infura API key so that we can read data from the blockchain. Optional, but expect degraded behavior if not set. |
| REACT_APP_ALCHEMY_API_KEY | Used when the Fallback Provider is triggered. An Alchemy API key so that we can read data from the blockchain. Optional, but expect degraded behavior if not set. |
| REACT_APP_ETHERSCAN_API_KEY | Used when the Fallback Provider is triggered. An Etherscan API key so that we can read data from the blockchain. Optional, but expect degraded behavior if not set. |

After setting these variables, start the app with `npm start` (or `npm run start-windows` on Windows) and you should see that you're reading data from the public blockchains!

## Available Scripts

In the project directory, you can run:

### `npm start` (or `npm run start-windows` on Windows)

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` (or `npm run build-windows` on Windows)

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
