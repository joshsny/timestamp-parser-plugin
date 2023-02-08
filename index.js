function processEvent(event) {
    console.log(event.properties)
    if (event.properties && event.properties['$timestamp'] && !isNaN(event.properties['$timestamp'])) {
        const timestamp = event.properties['$timestamp'] * 1000
        const eventDate = new Date(timestamp)
        event.properties['day_of_the_week'] = eventDate.toLocaleDateString('en-GB', { weekday: 'long' })
        const date = eventDate.toLocaleDateString('en-GB').split('/')
        event.properties['day'] = Number(date[0])
        event.properties['month'] = Number(date[1])
        event.properties['year'] = Number(date[2])
        event.properties['hour'] = eventDate.getHours()
        event.properties['minute'] = eventDate.getMinutes()
    }

    return event
}

module.exports = {
    processEvent
}
