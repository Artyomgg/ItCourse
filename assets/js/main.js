let preloader = document.querySelector('.preloader')

window.addEventListener(
	'load',
	function () {
		preloader.classList.add('hide')
		this.setTimeout(function () {
			preloader.remove()
		})
	},
	1000
)
