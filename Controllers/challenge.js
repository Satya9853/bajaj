function charIsLetter(char) {
  if (typeof char !== "string") {
    return false;
  }

  return /^[a-zA-Z]+$/.test(char);
}

exports.getData = async (req, res, next) => {
  try {
    data = await req.body;
    const numberArray = data.data.filter((item) => +item);
    const alphabetArray = data.data.filter((item) => charIsLetter(item));
    const totalCount = numberArray.length + alphabetArray.length;
    res.status(200).json({
      is_success: true,
      user_id: "satya_bhusan_prusty_18102000",
      count: totalCount.toString(),
      email: "1902106@kiit.ac.in",
      roll_number: "1902106",
      numbers: numberArray,
      alphabets: alphabetArray,
    });
  } catch (error) {
    res.json({ is_success: false });
    error.statusCode = 500;
    throw error;
  }
};
