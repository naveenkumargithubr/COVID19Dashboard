import './index.css'

const HomeCardItem = props => {
  const {
    stateTotal,
    showActiveCases,
    showDeceasedCases,
    showRecoveredCases,
    showConfirmedCases,
  } = props

  // console.log(stateTotal)

  const {confirmed, deceased, recovered, active} = stateTotal

  const activeConfirmedClass = showConfirmedCases
    ? 'confirmed-active-class'
    : ''
  const activeActiveClass = showActiveCases ? 'active-active-class' : ''

  const activeRecoveredClass = showRecoveredCases
    ? `recovered-active-class`
    : ''

  const activeDecreasedClass = showDeceasedCases ? `deceased-active-class` : ''

  return (
    <>
      <div
        // testid="countryWideConfirmedCases"
        className={`home-country-wide-data confirmed ${activeConfirmedClass}`}
      >
        <p className="home-card-heading">Confirmed</p>
        <img
          src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521128/mini-project/check-mark_1_e83qpy.png"
          alt="country wide confirmed cases pic"
        />
        <p className="cases-count confirmed">{confirmed}</p>
      </div>
      <div
        // testid="countryWideActiveCases"
        className={`home-country-wide-data active ${activeActiveClass}`}
      >
        <p className="home-card-heading">Active</p>
        <img
          src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521130/mini-project/protection_1_roaazd.png"
          alt="country wide active cases pic"
        />
        <p className="cases-count">{active}</p>
      </div>
      <div
        // testid="countryWideRecoveredCases"
        // onClick={onClickRecovered}
        className={`home-country-wide-data recovered ${activeRecoveredClass}`}
        // className="country-wide recovered"
      >
        <p className="home-card-heading">Recovered</p>
        <img
          src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521130/mini-project/recovered_1_pz28bz.png"
          alt="country wide recovered cases pic"
        />
        <p className="cases-count">{recovered}</p>
      </div>

      <div
        // testid="countryWideDeceasedCases"
        className={`home-country-wide-data deceased ${activeDecreasedClass}`}
      >
        <p className="home-card-heading">Deceased</p>
        <img
          src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521128/mini-project/breathing_1_uxmvq9.png"
          alt="country wide deceased cases pic"
        />
        <p className="cases-count">{deceased}</p>
      </div>
    </>
  )
}
export default HomeCardItem
