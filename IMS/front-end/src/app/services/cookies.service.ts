import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor() { }

  getUserToken(){
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjUxZGJhYzJhNTBkYjdmNjA1MGFmMiIsImVtYWlsIjoidW1hckBnbWFpbC5jb20iLCJleHBpcmUiOjE2NTMyMTkxNzgwNDIsImlhdCI6MTY1MjYxNDM3OH0.JhLdVRRlZBl9_fv4k6pHqpWPiOBNLXGWA7ZPEYTKcQE'  }
}
