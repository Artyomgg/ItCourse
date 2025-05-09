import { useTankCollector } from '../hooks/useTankCollector'

export const Tank = ({ tankId, imgSrc = '/img/9 мая/Танк.png' }) => {
	const { collectedTanks, collectTank } = useTankCollector()

	const handleClick = () => {
		const isNewTank = collectTank(tankId)
		if (isNewTank) {
			alert(`Танк ${tankId} добавлен в коллекцию!`)
		}
	}

	if (collectedTanks.includes(tankId)) return null

	return (
		<img
			className='tank'
			src={imgSrc}
			alt={`Танк ${tankId}`}
			onClick={handleClick}
			style={{
				cursor: 'pointer',
			}}
		/>
	)
}
