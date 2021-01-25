export const formatTime = (time) => {
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    const getMinutes = `0${Math.floor(time / 60) % 60}`.slice(-2);
    const getSeconds = `0${(time % 60)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
}