const refreshToTop = () => {
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };
};

export default refreshToTop;
