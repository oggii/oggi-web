export const formatDateTime = (timestamp: string): string => {
  const date = new Date(timestamp)

  const months = date.toLocaleDateString('en-US', {
    month: 'long',
  })

  return `${months} ${date.getDate()}, ${date.getFullYear()}`
}
