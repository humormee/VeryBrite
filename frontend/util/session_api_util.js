export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/user',
    data: { user }
  })
);

export const signin = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user , authenticity_token: $("['name=csrf-token']")[0].content}
  })
)

export const signout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
)

