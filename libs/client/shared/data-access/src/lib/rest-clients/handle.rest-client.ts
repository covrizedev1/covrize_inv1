import { HttpClient } from '@angular/common/http';
import { DTO_KEY, GenericHandleSearchDto, GenericHandleSearchQuery, Handle, HandleChatQuery, IParser, Query, InvolvemintRoutes, QUERY_KEY, SearchHandleDto, VerifyHandleDto, ViewProfileDto, ViewProfileInfoQuery, environment } from '@involvemint/shared/domain';
import { Injectable } from '@angular/core';

@Injectable()
export class HandleRestClient {
  apiUrl = `${environment.apiUrl}/${InvolvemintRoutes.handle}`;

  constructor(private http: HttpClient) { }

  verifyHandle(query: Query<{ isUnique: boolean }>, dto: VerifyHandleDto) {
    const body = {
      [QUERY_KEY]: query,
      [DTO_KEY]: dto
    };

    return this.http
          .post<IParser<{ isUnique: boolean }, { isUnique: boolean }>>(`${this.apiUrl}/verifyHandle`, body);
  }

  searchHandles(query: Query<Handle>, dto: SearchHandleDto) {
    const body = {
      [QUERY_KEY]: query,
      [DTO_KEY]: dto
    };

    return this.http
          .post<IParser<Handle, typeof HandleChatQuery>[]>(`${this.apiUrl}/searchHandles`, body);
  }

  viewProfile(query: Query<Handle>, dto: ViewProfileDto) {
    const body = {
      [QUERY_KEY]: query,
      [DTO_KEY]: dto
    };

    return this.http
          .post<IParser<Handle, typeof ViewProfileInfoQuery>>(`${this.apiUrl}/viewProfile`, body);
  }

  genericSearch(query: Query<Handle>, dto: GenericHandleSearchDto) {
    const body = {
      [QUERY_KEY]: query,
      [DTO_KEY]: dto
    };

    return this.http
          .post<IParser<Handle, typeof GenericHandleSearchQuery>[]>(`${this.apiUrl}/genericSearch`, body);
  }
}
