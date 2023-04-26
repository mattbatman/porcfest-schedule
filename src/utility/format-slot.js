function formatSlotFromString(datetime) {
  return new Date(datetime).toLocaleDateString('en-US', {
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric'
  });
}

export { formatSlotFromString };
