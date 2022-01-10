function telephoneCheck(str) {
  const regexPattern = [
    /^\d{3}-\d{3}-\d{4}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^\d{10}$/,
    /^1 \d{3} \d{3} \d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /1\(\d{3}\)\d{3}-\d{4}/
  ];

  return regexPattern.some((pattern) => pattern.test(str));
}

telephoneCheck("555-555-5555");