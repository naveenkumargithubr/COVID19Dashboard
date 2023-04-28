import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import FaqItem from '../FaqsList'
import Footer from '../Footer'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class AboutItem extends Component {
  state = {
    faqsList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getAboutData()
  }

  getAboutData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const faqUrl = 'https://apis.ccbp.in/covid19-faqs'
    const options = {
      method: 'GET',
    }

    const response = await fetch(faqUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      this.setState({
        faqsList: fetchedData.faq,
        apiStatus: apiStatusConstants.success,
      })
    }
  }

  renderAbout = () => {
    const {faqsList} = this.state
    return (
      <div className="about-bg-container">
        <h1 className="about-heading">About</h1>
        <p className="about-update">Last update on Monday, Nov 15th 2021.</p>
        <p className="about-desc">
          COVID-19 vaccines be ready for distribution
        </p>
        <ul className="faq-list">
          {' '}
          {/* testid="faqsUnorderedList" */}
          {faqsList.map(eachFaq => (
            <FaqItem faqData={eachFaq} key={eachFaq.qno} />
          ))}
        </ul>
        <Footer />
      </div>
    )
  }

  // testid="aboutRouteLoader"
  renderLoadingView = () => (
    <div className="covid-loader-container">
      <Loader type="Oval" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderAboutData = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderAbout()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.renderAboutData()}
      </>
    )
  }
}

export default AboutItem
