import WonderCard from './WonderCard'

const WonderList = ({ data, showName }) => {

    return (
        <>
            <h1>Seven Wonders Of The World</h1>
            <div className="wonder-list">
                {data.map(wonder => <WonderCard {...wonder} key={wonder.id} showName={showName} />)}
            </div>
        </>
    )
}

export default WonderList