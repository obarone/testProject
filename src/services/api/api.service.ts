import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = `https://private-anon-bda8faa255-smaplypersonastest.apiary-mock.com`;
  constructor(private _http: HttpClient) {}

  public getPersona () {
    return this._http.get(`${this.url}/personas/personaId`);
  }

  public getPersonaColumns () {
    return this._http.get(`${this.url}/personas/personaId/columns`);
  }

  public getPersonaFields () {
    return this._http.get(`${this.url}/personas/personaId/fields`);
  }

  public updatePersona (form) {
    return this._http.put(`${this.url}/personas/personaId/`, form);
  }

  public createPersonaField (form) {
    return this._http.post(`${this.url}/personas/personaId/fields`, form);
  }

  public updatePersonaField (fieldId, form) {
    return this._http
      .put(`${this.url}/personas/personaId/fields/${fieldId}`, form);
  }

  public deletePersonaField (fieldId) {
    return this._http
      .delete(`${this.url}/personas/personaId/fields/${fieldId}`);
  }
}
