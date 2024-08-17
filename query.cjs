exports.currentYear = () => {
    const today = new Date();
    const options = {
      year: "numeric",
    };
    return today.toLocaleDateString("en-US", options);
  };
  