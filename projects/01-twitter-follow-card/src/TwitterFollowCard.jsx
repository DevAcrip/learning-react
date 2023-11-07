export function TwitterFollowCard() {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src="https://unavatar.io/acrip"
          alt="El avatar de acrip"
        />
        <div className="tw-followCard-info">
          <strong>Jorge Andrés Zapata</strong>
          <span className="tw-followCard-infoUsername">@Devacrip</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard
