import { Route, BrowserRouter as Router, Routes } from 'react-router'

import Footer from './components/Footer'
import Header from './components/header'
import NotFoundPage from './components/NotFoundPage'
import './css/main.css'
import HtmlAll from './pages/AllHTML/HtmlAll'
import NodeJsAll from './pages/AllNodeJSLessons/nodejs'
import PythonAll from './pages/AllPython/PythonAll'
import AllReact from './pages/AllReact/AllReact'
import ReactNativeAll from './pages/AllReactNative/ReactNativeAll'
import CheckExercises from './pages/CheckExercises'
import Courses from './pages/Courses'
import CSSALL from './pages/CSSALL/CSSALL'
import Home from './pages/Home'
import CSS from './pages/HomePagesToCourses/CSS'
import Html from './pages/HomePagesToCourses/Html'
import JavaScript from './pages/HomePagesToCourses/JavaScript'
import NodeJs from './pages/HomePagesToCourses/NodeJs'
import Photoshop from './pages/HomePagesToCourses/Photoshop'
import Python from './pages/HomePagesToCourses/Python'
import ReactJS from './pages/HomePagesToCourses/React'
import ReactNative from './pages/HomePagesToCourses/ReactNative'
import Vscode from './pages/HomePagesToCourses/Vscode'
import One from './pages/JS/1'
import Ten from './pages/JS/10'
import Eleven from './pages/JS/11'
import Twelve from './pages/JS/12'
import Thirteen from './pages/JS/13'
import Fourteen from './pages/JS/14'
import Fifteen from './pages/JS/15'
import Two from './pages/JS/2'
import Three from './pages/JS/3'
import Four from './pages/JS/4'
import Five from './pages/JS/5'
import Six from './pages/JS/6'
import Seven from './pages/JS/7'
import Eight from './pages/JS/8'
import Nine from './pages/JS/9'
import AppRouter from './Router/Router'

const App = () => {
	return (
		<>
			<AppRouter/>
		</>
	)
}

export default App
