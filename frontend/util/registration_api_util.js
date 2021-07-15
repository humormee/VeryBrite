
export const fetchRegistrations = () => (
  $.ajax({
    method: 'GET',
    url: 'api/registrations',
  })
)

export const createRegistration = registration => (
  $.ajax({
    method: 'POST',
    url: 'api/registrations',
    data: { registration }
  })
)

export const deleteRegistration = registrationId => {
  debugger
  return(
  $.ajax({
    method: 'DELETE',
    url: `api/registrations/${registrationId.regId}`
  })
)
}
