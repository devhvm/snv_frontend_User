export default function () {
  return 'Bearer ' + localStorage.getItem('jwt_token')
}
