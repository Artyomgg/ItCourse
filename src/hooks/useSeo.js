import { useEffect } from 'react'

export const useSEO = ({ title, description, keywords, ogImage }) => {
	useEffect(() => {
		// Title
		if (title) {
			document.title = title
		}

		// Meta description
		updateMetaTag('name', 'description', description)

		// Keywords
		if (keywords) {
			updateMetaTag('name', 'keywords', keywords)
		}

		// Open Graph
		if (title) {
			updateMetaTag('property', 'og:title', title)
		}
		if (description) {
			updateMetaTag('property', 'og:description', description)
		}
		updateMetaTag('property', 'og:type', 'website')
		updateMetaTag('property', 'og:url', window.location.href)

		if (ogImage) {
			updateMetaTag('property', 'og:image', ogImage)
		}

		// Twitter Card
		if (title) {
			updateMetaTag('name', 'twitter:title', title)
		}
		if (description) {
			updateMetaTag('name', 'twitter:description', description)
		}
	}, [title, description, keywords, ogImage])
}

const updateMetaTag = (attr, name, content) => {
	if (!content) return

	let metaTag = document.querySelector(`meta[${attr}="${name}"]`)
	if (!metaTag) {
		metaTag = document.createElement('meta')
		metaTag.setAttribute(attr, name)
		document.head.appendChild(metaTag)
	}
	metaTag.content = content
}
