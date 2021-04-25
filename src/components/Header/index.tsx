import './styles.module.scss'

export function Header() {
  return (
    <header className="headerContainer">
      <img src="./assets/logo.svg" alt="Podcastr" />

      <p>O melhor para você ouvir, sempre</p>

      <span>Qui, 8 Abril</span>
    </header>
  );
}