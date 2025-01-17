//enum days and months
enum days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
enum months {
    Jannuary,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}
console.log("--Weekdays--");
        for (const day in days) {
    console.log(days[day as keyof typeof days]);
  }

        console.log("--Months--");
         for (const month in months) {
    console.log(months[month as keyof typeof months]);
}
    
