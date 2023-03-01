const validateEmail = (email: string) => {
  var re = /\S+@\S+\.\S+/
  return re.test(email)
}
const checkForbiddenString = (value: string, inputVal: string) => {
  if (value === inputVal) {
    throw new Error(`Słowo ${inputVal} jest zakazane przy wyborze `)
  }
}
export { validateEmail, checkForbiddenString }
