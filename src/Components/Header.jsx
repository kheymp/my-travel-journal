import globe from './Globe.png'

function Header() {
    return(
        <>
            <header>
                <img src={globe} />
                <span>my travel journal</span>
            </header>
        </>
    )
}

export default Header