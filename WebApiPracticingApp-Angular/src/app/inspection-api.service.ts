import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  readonly apiUrl = "https://localhost:7001/api";

  constructor(private http: HttpClient) { }

  // Inspection

  getInspectionList(): Observable<any[]>{
    return this.http.get<any>(this.apiUrl + '/inspections');
  }

  addInspection(data: any){
    return this.http.post(this.apiUrl + '/inspections', data);
  }

  updateInspection(id: number|string, data: any){
    return this.http.put(this.apiUrl + `/inspections/${id}`, data);
  }

  deleteInspection(id: number|string){
    return this.http.delete(this.apiUrl +  `/inspections/${id}`);
  }
  
  // Inspection Types
  
  getInspectionTypesList(): Observable<any[]>{
    return this.http.get<any>(this.apiUrl + '/inspectiontypes');
  }

  addInspectionType(data: any){
    return this.http.post(this.apiUrl + '/inspectiontypes', data);
  }

  updateInspectionType(id: number|string, data: any){
    return this.http.put(this.apiUrl + `/inspectiontypes/${id}`, data);
  }

  deleteInspectionType(id: number|string){
    return this.http.delete(this.apiUrl +  `/inspectiontypes/${id}`);
  }
  
  // Statuses
  
  getStatusesList(): Observable<any[]>{
    return this.http.get<any>(this.apiUrl + '/status');
  }

  addStatuse(data: any){
    return this.http.post(this.apiUrl + '/status', data);
  }

  updateStatuse(id: number|string, data: any){
    return this.http.put(this.apiUrl + `/status/${id}`, data);
  }

  deleteStatuse(id: number|string){
    return this.http.delete(this.apiUrl +  `/status/${id}`);
  }
}
