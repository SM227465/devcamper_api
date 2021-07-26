// @des     get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res) => {
  res.status(200).json({
    success: true,
    msg: 'Show all bootcamps',
  });
};

// @des     get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Show bootcamp ${req.params.id}`,
  });
};

// @des     Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = (req, res) => {
  res.status(200).json({
    success: true,
    msg: 'New bootcamp created',
  });
};

// @des     Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res) => {
  res.status(200).json({
    success: true,
    msg: `${req.params.id} bootcamp updated`,
  });
};

// @des     Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res) => {
  res.status(200).json({
    success: true,
    msg: `${req.params.id} bootcamp deleted`,
  });
};
