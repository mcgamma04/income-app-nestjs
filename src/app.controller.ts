import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import {data, ReportType} from "src/data"
import {v4 as uuid } from 'uuid'

@Controller("report/:type")
export class AppController{

  @Get('')
  getAllExpense(@Param('type') type : string){
    //console.log(type);
     const reportType = type =="income"?ReportType.INCOME : ReportType.EXPENSES;

    return data.report.filter((report) =>report.type === reportType);
  }

  @Get(':id')
  getAllExpenseById(@Param('type')type:string, @Param('id')id : string){
   
    const reportType = type == "income"?ReportType.INCOME : ReportType.EXPENSES;
    return data.report.filter((report) => report.type === reportType)
         .find((report) =>report.id ===id)


  return "This will return only expenses that match the specified id.";
  }

  @Post('')
  CreateReport(@Param('type') type : string,@Body(){source,amount}:{source:string;amount:number}){
     
     const newReport = {
      id:uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at : new Date(),
      type:type ==="income"?ReportType.INCOME : ReportType.EXPENSES
     }
     data.report.push(newReport);
    return newReport;
  }

  @Put(':id')
  updateReport(
    @Param('id') id:string,
    @Param('type') type : string,
    @Body() body: {amount:number,source:string}
  )
  {
    const reportType = type === "income"?ReportType.INCOME : ReportType.EXPENSES;
    
    const reportToUpdate = data.report.filter((report) => report.type === reportType)
    .find((report) => report.id===id);
    
    if(!reportToUpdate) return;

    const reportIndex = data.report.findIndex((report) => report.id === reportToUpdate.id);

    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body
    };

    return data.report[reportIndex]

  }
  
 @Delete(':id') 
 deleteReport(@Param('type') type : string,@Param('id')id: string){

 const reportIndex = data.report.findIndex(report =>report.id === id)
      console.log(reportIndex);
      
  // return `report with ${id} deleted successfully`;

  if(reportIndex !== -1){
   data.report.splice(reportIndex,1);
   return "report deleted successfully";
  }
  
 return `No report with ${id}`;
 }


}