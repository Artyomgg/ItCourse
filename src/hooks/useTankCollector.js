import { useEffect, useState } from 'react'

export function useTankCollector() {
	const [collectedTanks, setCollectedTanks] = useState([])

	useEffect(() => {
		const savedTanks = JSON.parse(localStorage.getItem('collectedTanks')) || []
		setCollectedTanks(savedTanks)
	}, [])

	const collectTank = tankId => {
		if (!collectedTanks.includes(tankId)) {
			const updatedTanks = [...collectedTanks, tankId]
			localStorage.setItem('collectedTanks', JSON.stringify(updatedTanks))
			setCollectedTanks(updatedTanks)
			return true // Танк был собран
		}
		return false // Танк уже был в коллекции
	}

	return { collectedTanks, collectTank }
}
