import otpGenerator from "otp-generator";

export const generateOTP = () => {
  const OTP = otpGenerator.generate(5, {
    upperCaseAlphabets: false,
    specialChars: false,
  });
  return OTP;
};

export const validateOtp = (otp, userOtp) => {
  if (otp === userOtp) {
    return false;
  }
  return true;
};
