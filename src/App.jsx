import { BrowserRouter as R, Route, Routes } from 'react-router'

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

const App = () => {
	return (
		<>
			<R>
				<noscript>
					<p>JavaScript отключен включите его в браузере !!!!!!</p>
				</noscript>
				<Header></Header>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='courses' element={<Courses />}></Route>
					<Route path='courses/js' element={<JavaScript />}></Route>
					<Route path='courses/js/1' element={<One />}></Route>
					<Route path='courses/js/2' element={<Two />}></Route>
					<Route path='courses/js/3' element={<Three />}></Route>
					<Route path='courses/js/4' element={<Four />}></Route>
					<Route path='courses/js/5' element={<Five />}></Route>
					<Route path='courses/js/6' element={<Six />}></Route>
					<Route path='courses/js/7' element={<Seven />}></Route>
					<Route path='courses/js/8' element={<Eight />}></Route>
					<Route path='courses/js/9' element={<Nine />}></Route>
					<Route path='courses/js/10' element={<Ten />}></Route>
					<Route path='courses/js/11' element={<Eleven />}></Route>
					<Route path='courses/js/12' element={<Twelve />}></Route>
					<Route path='courses/js/13' element={<Thirteen />}></Route>
					<Route path='courses/js/14' element={<Fourteen />}></Route>
					<Route path='courses/js/15' element={<Fifteen />}></Route>
					<Route path='courses/nodejs' element={<NodeJs />}></Route>
					<Route
						path='courses/nodejs/nodejslessons'
						element={<NodeJsAll />}
					></Route>
					<Route path='courses/react' element={<ReactJS />}></Route>
					<Route
						path='courses/react/reactlessons'
						element={<AllReact />}
					></Route>
					<Route path='courses/reactnative' element={<ReactNative />}></Route>
					<Route
						path='courses/reactnative/reactnative'
						element={<ReactNativeAll />}
					></Route>
					<Route path='courses/python' element={<Python />}></Route>
					<Route path='courses/python/python' element={<PythonAll />}></Route>
					<Route path='courses/html' element={<Html />}></Route>
					<Route path='courses/html/html' element={<HtmlAll />}></Route>
					<Route path='courses/css' element={<CSS />}></Route>
					<Route path='courses/css/css' element={<CSSALL />}></Route>
					<Route path='courses/vscode' element={<Vscode />}></Route>
					<Route path='courses/photoshop' element={<Photoshop />}></Route>
					<Route path='check' element={<CheckExercises />}></Route>

					<Route path='*' element={<NotFoundPage />}></Route>
				</Routes>
				<Footer></Footer>
			</R>
		</>
	)
}

export default App
