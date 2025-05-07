const validate = () => {
  const result = userSchema.validate({
    email: "test@test.com",
    password: "123456",
  });
  console.log(result.error ? result.error.message : "All good!");
};
