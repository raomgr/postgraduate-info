const getters = {
  /* app */
  sidebar: state => state.app.sidebar,
  getSliderStateWidth: state => {
    return state.app.sidebar.sliderState === 'full' ? '230px' : '60px'
  }
}
export default getters
