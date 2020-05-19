// Get visible expenses

export default (tasks, { text, sortBy }, status) => {
    console.log(status);
    return tasks.filter((task) => {
        // console.log("t:")
        // console.log(title);
        const textMatch = task.title.toLowerCase().includes(text.toLowerCase());

        return textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'start-date') {
            return a.startDate < b.startDate ? 1 : -1;
        } else if (sortBy === 'end-date') {
            return a.endDate < b.endDate ? 1 : -1;
        }
    });
};
