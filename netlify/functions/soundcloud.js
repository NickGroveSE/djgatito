export default async (req, context) => {
  const url = new URL(req.url)
  const userId = url.searchParams.get('userId')
  const clientId = url.searchParams.get('clientId')
  const limit = url.searchParams.get('limit') || 7

  try {
    const response = await fetch(
      `https://api-v2.soundcloud.com/users/${userId}/tracks?client_id=${clientId}&limit=${limit}`
    )

    if (!response.ok) {
      return new Response('Failed to fetch from SoundCloud', { status: response.status })
    }

    const data = await response.json()

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
  } catch (error) {
    return new Response('Error fetching tracks', { status: 500 })
  }
}