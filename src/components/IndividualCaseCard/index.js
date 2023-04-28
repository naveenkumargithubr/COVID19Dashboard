import './index.css'

const IndividualCaseCard = props => {
  const {
    stateTotal,
    showConfirmed,
    showActive,
    showRecovered,
    showDeceased,
    showActiveCases,
    showDeceasedCases,
    showRecoveredCases,
    showConfirmedCases,
  } = props
  const {confirmed, deceased, recovered, active} = stateTotal

  const onClickConfirmed = () => {
    showConfirmed()
  }

  const onClickActive = () => {
    showActive()
  }

  const onClickRecovered = () => {
    showRecovered()
  }

  const onClickDeceased = () => {
    showDeceased()
  }

  const activeConfirmedClass = showConfirmedCases
    ? 'confirmed-active-class'
    : ''
  const activeActiveClass = showActiveCases ? 'active-active-class' : ''

  const activeRecoveredClass = showRecoveredCases
    ? `recovered-active-class`
    : ''

  const activeDeceasedClass = showDeceasedCases ? `deceased-active-class` : ''

  return (
    <ul className="unordered-diff-type-cases">
      <li
        //  testid="stateSpecificConfirmedCasesContainer"
        onClick={onClickConfirmed}
        className={`country-wide-data confirmed ${activeConfirmedClass}`}
        // className="country-wide confirmed "
      >
        <p className="individual-card-heading">confirmed</p>
        <img
          src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521128/mini-project/check-mark_1_e83qpy.png"
          alt="state specific confirmed cases pic"
        />
        <p className="cases-count confirmed">{confirmed}</p>
      </li>
      <li
        // testid="stateSpecificActiveCasesContainer"
        onClick={onClickActive}
        className={`country-wide-data active ${activeActiveClass}`}
        // className="country-wide active"
      >
        <p className="individual-card-heading">Active</p>
        <img
          src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521130/mini-project/protection_1_roaazd.png"
          alt="state specific active cases pic"
        />
        <p className="cases-count active">{active}</p>
      </li>
      <li
        // testid="stateSpecificRecoveredCasesContainer"
        onClick={onClickRecovered}
        className={`country-wide-data recovered ${activeRecoveredClass}`}
        // className="country-wide recovered"
      >
        <p className="individual-card-heading">Recovered</p>
        <img
          src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521130/mini-project/recovered_1_pz28bz.png"
          alt="state specific recovered cases pic"
        />
        <p className="cases-count recovered">{recovered}</p>
      </li>

      <li
        // testid="stateSpecificDeceasedCasesContainer"
        onClick={onClickDeceased}
        className={`country-wide-data decreased ${activeDeceasedClass}`}
        // className="country-wide deceased"
      >
        <p className="individual-card-heading">Deceased</p>
        <img
          src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521128/mini-project/breathing_1_uxmvq9.png"
          alt="state specific decreased cases pic"
        />
        <p className="cases-count decreased">{deceased}</p>
      </li>
    </ul>
  )
}
export default IndividualCaseCard
