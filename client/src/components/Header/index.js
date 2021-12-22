import './styles.css'

export const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles"> 
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img 
                className="headerImg"
                src="https://i.picsum.photos/id/1028/5184/3456.jpg?hmac=WhttNfn25eTgLTNnhRujSq4IVjx2mMa6wvPG1c6qMVc" 
                alt="main"
            />
        </div>
    )
}