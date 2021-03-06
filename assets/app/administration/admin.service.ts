import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http,Headers} from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class AdminService {
    constructor(private http:Http){}
    post(obj,url):Observable<any>{
        const body = JSON.stringify(obj);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(url, body, {headers: headers})
            .map(response => response.json());
    }
    get(url):Observable<any>{
        return this.http.get(url)
            .map(response => response.json());

    }
    getAllComplaints():Observable<any>{
        return this.http.get("/admin/complaints")
            .map(response => response.json());

    }
    getAllCategories():Observable<any>{
        return this.http.get("/admin/categories")
            .map(response => response.json());

    }
    addCategory(categoryName):Observable<any>{
        const body = JSON.stringify({categoryName:categoryName});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('admin/addCategory', body, {headers: headers})
            .map(response => response.json());
    }
    addComplain(complain):Observable<any>{
        const body = JSON.stringify({complain:complain});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('complain/one', body, {headers: headers})
            .map(response => response.json());
    }
    removeCategory(category):Observable<any>{
        const body = JSON.stringify({category:category});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('admin/removeCategory', body, {headers: headers})
            .map(response => response.json());
    }
    removeComplaint(complaint):Observable<any>{
        const body = JSON.stringify({complaint:complaint});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('admin/removeComplaint', body, {headers: headers})
            .map(response => response.json());
    }
    removeComplaintsOfCategory(category):Observable<any>{
        const body = JSON.stringify({category:category});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('admin/removeComplaintOfCategory', body, {headers: headers})
            .map(response => response.json());
    }
    removeAllComplaints():Observable<any>{
        const body = JSON.stringify({});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('admin/removeAllComplaints', body, {headers: headers})
            .map(response => response.json());
    }

    getDistinctCategories():Observable<any>{
        return this.http.get("/admin/getDistinctCategories")
            .map(response => response.json());

    }
}

