export default refreshToTop = () => {
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };
};
