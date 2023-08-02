const test = (req, res) => {
  return res
    .status(200)
    .json({message:"I'm here and I'm running"})
}

module.exports = {
  test
}