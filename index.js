function combineUsers(...arrays) {
  const users = [].concat(...arrays);

  const merge_date = new Date().toISOString().split("T")[0];

  return {
    users,
    merge_date
  };
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};