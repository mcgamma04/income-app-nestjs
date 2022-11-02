import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import {data, ReportType} from "src/data"

@Controller("report/:type")
export class AppController{

  @Get('')
  getAllExpense(@Param('type') type : string){
    //console.log(type);
     const reportType = type =="income"?ReportType.INCOME : ReportType.EXPENSES;

    return data.report.filter((report) =>report.type === reportType);
  }

  @Get(':id')
  getAllExpenseById(){
  return "This will return only expenses that match the specified id.";
  }

  @Post('')
  CreateReport(){
    return 'expenses';
  }

  @Put(':id')
  updateReport(){
    return "updated";
  }
  
 @Delete(':id') 
 deleteReport(){
  return 'item deleted successfully';
 }


}