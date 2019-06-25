import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ClanMember } from '../models/clan-member';

@Injectable({
  providedIn: 'root'
})
export class ClanMembersService {

  private clanId = 3131018;

  constructor(
    private httpClient: HttpClient) {

  }

  getClanMembers(): Observable<ClanMember[]> {
    const url = 'https://www.bungie.net/Platform/GroupV2/' + this.clanId + '/Members/'

    return this.httpClient.get(url, {
      headers: this.getHeaders(),
      observe: 'response',
      responseType: 'json'
    }).pipe(
      map((response) => {
        return (response.body as any).Response.results.map((member) => {
          return new ClanMember(member.destinyUserInfo.displayName, member.isOnline);
        });
      })
    );
  }

  getHeaders(): HttpHeaders | { [header: string]: string | string[]; } {
    let httpHeaders = new HttpHeaders();

    httpHeaders = httpHeaders.append('X-API-Key', '80966b47b978457d92a3dd0a720bef87');
    httpHeaders = httpHeaders.append('Content-Type', 'application/json');

    return httpHeaders;
  }
}
