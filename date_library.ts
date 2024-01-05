export const isInCurrentMonth = (date: string, current: string): boolean => {
    const er = new Date(Date.parse(date));
    const ee = new Date(Date.parse(current));

    return er.getMonth() === ee.getMonth() &&
        er.getFullYear() === ee.getFullYear();
}

export const isToday = (date: string, current: string): boolean => {
    const er = new Date(Date.parse(date));
    const ee = new Date(Date.parse(current));

    return (
        er.getDate() === ee.getDate() &&
        er.getMonth() === ee.getMonth() &&
        er.getFullYear() === ee.getFullYear()
    );
}

let dt;

export const InputTimeFormat = (date: string): string => {

    return "";
}

export const InputDateFormat = (date: string): string => 
    new Date(date).toISOString().split('T')[0];

export const isInFuture = (date: string, current: string): boolean => {
    return new Date(Date.parse(date)) > new Date(Date.parse(current));
}

export const getTimeString = (date: string): string =>
    new Date(Date.parse(date)).toLocaleTimeString('en-US');

export const getDateString = (date: string): string =>
    new Date(Date.parse(date)).toDateString();

export const getISODateString = (date: string): string =>
    new Date(Date.parse(date)).toISOString().split('T')[0];

export const getISOTimeString = (date: string): string =>
    new Date(Date.parse(date)).toISOString().split('T')[1];

export const setTimeString = (date: string, time: string): Date => {
    const newDate = new Date(Date.parse(date));
    const newTime = time.split(":");

    let hours = parseInt(newTime[0], 10);

    if (newTime[2]?.includes("PM") && hours < 12) {
        hours += 12;
    } else if (newTime[2]?.includes("AM") && hours === 12) {
        hours = 0;
    }

    newDate.setHours(hours);
    newDate.setMinutes(parseInt(newTime[1], 10));

    return newDate;
}

export const toInputDateTimeLocal = (date?: Date) => {

    if(date === undefined) {
        date = new Date();
    }
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are zero-based
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);

    return `${year}-${month}-${day}T${hours}:${minutes}`;
}
