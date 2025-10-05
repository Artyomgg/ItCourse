import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { sendMetrik } from './utils/SendMetrics.js'

createRoot(document.getElementById('root')).render(
		<App />
)
