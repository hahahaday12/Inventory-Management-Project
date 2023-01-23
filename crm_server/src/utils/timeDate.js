module.exports = {
    /* chnage UTC to KTC */

    getToday: () => {
        const tempDate = new Date();
        return new Date(tempDate.setHours(tempDate.getHours() + 9));
    }, 

    getYMD: (date) => {
        const specificDate = new Date(date);
        const [year, month, day] = specificDate.toLocaleDateString("ko-KR").split("/")[0].split("-");
        return `${year}-${month}-${day}`;
    },
    getYMDT: (date) => {
        const specificDate = new Date(date);
        const dayInfo = this.getYMD(date);
        const [hour, minute, second] = specificDate.toLocaleTimeString("ko-KR").split(/:| /);
        return dayInfo+`${hour}:${minute}:${second}`;
    },
    getChangeDate: (date) => {
        const tempDate = new Date(date);
        return new Date(tempDate.setHours(tempDate.getHours() + 9));
    },
}