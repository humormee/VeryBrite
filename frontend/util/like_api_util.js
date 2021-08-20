export const fetchLikes = eventId => (
  $.ajax({
    method: 'GET',
    url: `api/events/${eventId}/likes`,
  })
)

export const createLike = like => {
  return (
    $.ajax({
    method: 'POST',
    url: `api/events/${like.event_id}/likes`,
    data: { like }
  })
  )
  
}

export const deleteLike = like => {
  return(
  $.ajax({
    method: 'DELETE',
    url: `api/events/${like.event_id}/likes/${like.id}`
  })
)
}