import scrimbaLogo from '../assets/scrimba.png'
export default function Header() {
    return (
        <div className="header">
            <img className="header-logo" src={scrimbaLogo} alt="scrimba-header-logo" />
            <p className="header-title">Chef Bot</p>
        </div>
    )
}