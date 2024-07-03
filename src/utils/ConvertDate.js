export function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    console.log(date.toLocaleDateString('en-US', options));
    return date.toLocaleDateString('en-US', options);
}