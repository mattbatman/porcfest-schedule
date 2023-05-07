function getShouldIncludeDay({ dayFilters, eventDate }) {
  const dayOfWeekIndex = eventDate.getDay();
  const { isActive } = dayFilters.find(function ({ ofWeek }) {
    return ofWeek === dayOfWeekIndex;
  });

  return isActive;
}

export { getShouldIncludeDay };
