import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'

import { store } from './store/store'
import { RootCmp } from './RootCmp'

import './assets/styles/main.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<QueryClientProvider client={queryClient}>
		<Provider store={store}>
			<Router>
				<RootCmp />
				{/* <ReactQueryDevtools /> */}
			</Router>
		</Provider>
	</QueryClientProvider>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()
