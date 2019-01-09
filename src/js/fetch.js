export default function fetch(url) {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    });
}