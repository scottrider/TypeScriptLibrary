// Declare and implement the method as before
declare global {
    interface Date {
        getDateString(): string;
        getISODateString(): string;
        getISOTimeString(): string;
        getTimeString(): string;
        inputDateFormat(): string;
        isInCurrentMonth(): boolean;
        isInFuture(): boolean;
        isInFutureOf(value: string|Date): boolean;
        isToday(): boolean;
        toInputDateTimeLocal() : string;
        setTimeString(time: string): Date|null;
    }
}

Date.prototype.isInCurrentMonth = function (): boolean {

    try {
        if (this === undefined || this === null) {
            throw new Error("Input must be a valid object.");
        }  
        const today = new Date();
    
        return this.getMonth() === today.getMonth() + 1 && this.getFullYear() === today.getFullYear();        
    } catch (e: any) {
        console.log(e.message);
    }

    return false;
}

Date.prototype.isToday = function (): boolean {

    try {
        if (this === undefined || this === null) {
            throw new Error("Input must be a valid object.");
        }  
        const today = new Date();

        return this.getDate() === today.getDate() && this.isInCurrentMonth();
    } catch (e: any) {
        console.log(e.message);
    }

    return false;
}

Date.prototype.inputDateFormat = function (): string {
    return this.toISOString().split('T')[0];
}

Date.prototype.isInFuture = function (): boolean {
    
    return this > new Date();
}

Date.prototype.isInFutureOf = function (value: string|Date): boolean {
    
    try {
        let date = value;
        if(typeof value === 'string') {
            date = new Date(Date.parse(value));
        }

        return this > new Date();
    } catch(e: any) {
        console.log(e.message);
    }
    
    return false;
}

Date.prototype.getTimeString = function (): string {
    
    try {

        return this.toLocaleTimeString('en-US');
    } catch(e: any) {
        console.log(e.message);
    }
    
    return "";
}

Date.prototype.getDateString = function (): string {
    
    try {

        return this.toDateString();
    } catch(e: any) {
        console.log(e.message);
    }
    
    return "";
}

Date.prototype.getISODateString = function (): string {
    
    try {

        return this.toISOString().split('T')[0];
    } catch(e: any) {
        console.log(e.message);
    }
    
    return "";
}

Date.prototype.getISOTimeString = function (): string {
    
    try {

        return this.toISOString().split('T')[1];
    } catch(e: any) {
        console.log(e.message);
    }
    
    return "";
}

Date.prototype.setTimeString = function (time: string): Date|null {
    
    try {
        const newDate = this;
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
    } catch(e: any) {
        console.log(e.message);
    }
    
    return null;
}

Date.prototype.toInputDateTimeLocal = function (): string {
    let d = this;

    try {
        if(this === undefined) {
            d = new Date();
        }
        const year = d.getFullYear();
        const month = ('0' + (d.getMonth() + 1)).slice(-2);
        const day = ('0' + d.getDate()).slice(-2);
        const hours = ('0' + d.getHours()).slice(-2);
        const minutes = ('0' + d.getMinutes()).slice(-2);
    
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    } catch(e: any) {
        console.log(e.message);
    }
    
    return "";
}
