import { Controller, Delete, Get, Post, Put } from "@nestjs/common";


@Controller("report/income")
export class AppController{

  @Get('')
  getAllExpense(){
    return [];
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