import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { ApiResponse } from "./models";
import { Observable, lastValueFrom, map } from "rxjs";

@Injectable()
export class JokeService {

    http = inject(HttpClient)

    // constructor(private http: HttpClient) { }

    getJokeIdAsObservable(): Observable<number> {
        return this.http.get<ApiResponse>('https://official-joke-api.appspot.com/random_joke')
            .pipe(
                map(resp => resp.id)
            )
    }
    
    /*
    getJokeIdAsPromise(): Promise<number> {
        return lastValueFrom(
            this.http.get<ApiResponse>('https://official-joke-api.appspot.com/random_joke')
        )
        .then(resp => resp.id)
    }
    
    getJokeAsObservable(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>('https://official-joke-api.appspot.com/random_joke')
    }
    */

    getJokeAsPromise(): Promise<ApiResponse> {
        return lastValueFrom(
            this.http.get<ApiResponse>('https://official-joke-api.appspot.com/random_joke')
        )
    }
}