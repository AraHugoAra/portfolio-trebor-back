function MusicItem({itemName, itemCover, itemLink}) {

    return (
        <div>
            <h2>{itemName}</h2>
            <img src={`http://localhost:1337${itemCover}`} alt={`${itemName}-cover`} />
            <a href={itemLink}>Stream Now</a>
        </div>
    )
}

export default MusicItem