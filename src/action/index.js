export default (payload) => {
  return {
    type: "NORMAL",
    payload,
  };
};

export const actionb = (payload) => {
  return {
    type: "SUM",
    payload,
  };
};
