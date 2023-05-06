import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUser() {
    return this.httpClient.get('http://localhost:3000/account');
  }

  addUserInfo(data: any) {
    return this.httpClient.post('http://localhost:3000/account', data);
  }
  getUserInfo() {
    return this.httpClient.get('http://localhost:3000/account');
  }

  addTicket(data: any) {
    return this.httpClient.post('http://localhost:3000/Tickets', data);
  }
  getTicketInfo() {
    return this.httpClient.get('http://localhost:3000/Tickets');
  }

  getTicketInfobyId(id:any) {
    return this.httpClient.get(`http://localhost:3000/Tickets/${id}`);
  }

  updateUserInfo(id: any, data: any) {
    return this.httpClient.put(`http://localhost:3000/account/${id}`, data);
  }
  deleteUSerInfo(id: any) {
    return this.httpClient.delete(`http://localhost:3000/account/${id}`);
  }
  deleteTickeInfo(id: any) {
    return this.httpClient.delete(`http://localhost:3000/Tickets/${id}`);
  }

  getchart() {
    return this.httpClient.get('http://localhost:3000/sales');
  }

  
}
