export function TwitterFollowCard({ children, userName = 'unknown', isFollowing }) {
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="El avatar de acrip"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUsername">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName}>{text}</button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard
