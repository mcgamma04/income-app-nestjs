
export enum ReportType {
    INCOME = "income",
    EXPENSES = "expenses"
  }

export const data:Data  = {
    report:[
        {
            id : "uuid1",
            source:"salary",
            amount:5000,
            created_at: new Date(),
            updated_at: new Date(),
            type:ReportType.INCOME
        },
        {
            id : "uuid2",
            source:"Business",
            amount:3000,
            created_at: new Date(),
            updated_at: new Date(),
            type:ReportType.INCOME
        },

        {
            id : "uuid3",
            source:"Food",
            amount:5000,
            created_at: new Date(),
            updated_at: new Date(),
            type:ReportType.INCOME
        },
    ]
}



interface Data {
    report:{
        id:string,
        source:string,
        amount:number,
        created_at: Date,
        updated_at: Date,
        type:ReportType,
    }[]
}

