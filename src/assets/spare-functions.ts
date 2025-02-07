// // section.service.ts

// private handleServiceSectionErrors<T>(operation = 'operation', result?: T) {
//   return (error: any): Observable<T> => {
//     // console logging the error
//     console.error(`${operation} failed: ${error.message}`);

//     // send error to remote logging infrastruce
//     // formatting error to be better readable for humans
//     // this.log(`${operation} failed: ${error.message}`);

//     // app continues running with empty result returned
//     return of(result as T);
//   };
// }


// // review.service.ts
// import { MessageService } from './';
// public serviceReviewsErrors: string[] = [];
// public httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

// createReview(review: ReviewApp, file: File): Observable<ReviewApp> {
//   return this._http.post<ReviewApp>(this.reviewBaseUrl, review).pipe(
//     catchError(this.handleServiceReviewErrorsTwo<ReviewApp>(`createReview`))
//   );
// }

// createReview(review: ReviewApp, file: File): Observable<ReviewApp> {
//   return this._http.post<ReviewApp>(this.reviewBaseUrl, review).pipe(
//     catchError(this.handleServiceReviewErrorsTwo<ReviewApp>(`createReview`))
//   );
// }
// private handleServiceReviewErrorsTwo<T>(operation = 'operation', result?: T) {
//   return (error: any): Observable<T> => {
//     // console logging the error
//     console.error(`${operation} failed: ${error.message}`);

//     // send error to remote logging infrastruce
//     // formatting error to be better readable for humans
//     // this.log(`${operation} failed: ${error.message}`);

//     // app continues running with empty result returned
//     return of(result as T);
//   };
// }

// // private log(errorMessage: string) {
// //   this.messageService.add(`ReviewService: ${errorMessage}`);
// // }

// private reviewRatingTwo: number = 0;
// private preReviewsOnSite: Array<ReviewApp> = [];
// private reviewsOnSite: BehaviorSubject<ReviewApp[]> = new BehaviorSubject<ReviewApp[]>([]);
// private afterReviewOnSite: Observable<ReviewApp[]> = this.reviewsOnSite.asObservable();

// onGetSiteR(): Observable<ReviewApp[]> {
//   return this.afterReviewOnSite;
// }

// onSetSiteR(reviews: ReviewApp[]): void {
//   return this.reviewsOnSite.next(reviews);
// }

// onGetSiteReviews(): void {
//   this.getSiteReviews()
//     .subscribe({
//       next: (reviewsOnSite) => {
//         reviewsOnSite.forEach((reviews, idx, arr) => {
//           reviews.createdAt?.slice(0,10).split('-').forEach((createdAtItem, index, array) => {
//             if(index === 2) {
//               reviews.createdAt = `${array[1]}-${array[2]}-${array[0]}`;
//               console.log('Got This');
//             }
//           });
//           this.reviewRatingTwo = reviews.byRating as number;
//           this.preReviewsOnSite.push(reviews);
//         })
//         this.onSetSiteR(this.preReviewsOnSite);
//       },
//       error: (error) => this.handleServiceReviewErrors(error.error),
//     });
// }


// // user-cookie.component.css
/* .cookies-bannerT {
  position: fixed;
  bottom: 50px;
  right: 20px;
  max-width: 345px;
  width: 100%;
  background: #fff;
  text-align: center;
  padding: 15px 25px 22px;
  border-radius: 8px;
}

.cookies-bannerT header {
  display: flex;
  align-items: center;
  column-gap: 15px;
} */
