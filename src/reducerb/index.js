export default (state = { sum: 0 }, action) => {
  const num = parseInt(action.payload);
  switch (action.type) {
    case "SUM":
      return {
        sum: state.sum + num,
      };

    default:
      return state;
  }
};
