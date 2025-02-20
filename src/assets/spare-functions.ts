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

// <ng-particles [id]="id" [options]="particlesOptions" [particlesInit]="particlesInit" (particlesLoaded)="particlesLoaded($event)"></ng-particles>
// import { MoveDirection, ClickMode, HoverMode, OutMode, tsParticles } from "tsparticles-engine";
// import type { Container, Engine } from 'tsparticles-engine';
// import { loadSlim } from "tsparticles-slim";

  // public readonly title: string = 'mean-419';
  // public readonly id: string = "tsparticles";
  // public readonly particlesUrl: string = "http://foo.bar/particles.json";
  // public readonly particlesOptions: object = {
  //   fullScreen: {
  //     enable: true,
  //     zIndex: 0
  //   },
  //   background: {
  //     image: "url('../assets/images/2023-02-01.jpg')",
  //     size: "100% 100%",
  //     position: "center",
  //     repeat: "no-repeat"
  //     // color: {
  //     //   value: "#0d47a1",
  //     // },
  //   },
  //   fpsLimit: 120,
  //   interactivity: {
  //     events: {
  //       onClick: {
  //         enable: false,
  //         mode: ClickMode.push,
  //       },
  //       onHover: {
  //         enable: false,
  //         mode: HoverMode.repulse,
  //       },
  //       resize: true,
  //     },
  //     modes: {
  //       push: {
  //         quantity: 4,
  //       },
  //       repulse: {
  //         distance: 200,
  //         duration: 0.4,
  //       },
  //     },
  //   },
  //   particles: {
  //     color: {
  //       value: "#ffffff",
  //     },
  //     links: {
  //       color: "#ffffff",
  //       distance: 150,
  //       enable: true,
  //       opacity: 0.5,
  //       width: 1,
  //     },
  //     move: {
  //       direction: MoveDirection.none,
  //       enable: true,
  //       outModes: {
  //         default: OutMode.bounce,
  //       },
  //       random: false,
  //       speed: 3,
  //       straight: false,
  //     },
  //     number: {
  //       density: {
  //         enable: true,
  //         area: 800,
  //       },
  //       value: 80,
  //     },
  //     opacity: {
  //       value: 0.5,
  //     },
  //     shape: {
  //       type: "image",
  //       image: {
  //         src: "../assets/icons/tow-truck.png",
  //         width: 100,
  //         height: 100
  //       }
  //     },
  //     size: {
  //       value: { min: 1, max: 20 },
  //     },
  //   },
  //   detectRetina: true,
  // };

  // particlesLoaded(container: Container): void {
  //   console.log(container);
  // };

  // async particlesInit(engine: Engine): Promise<void> {
  //   console.log(engine);
  //   // await loadFull(engine);
  //   await loadSlim(engine);
  // };

  // <div class="carousel-caption">
  //   <h1>419 Paint and Body LLC</h1>
  //   <h4>1-419-789-8088</h4>
  // </div>

  // h1 {
  //   background: -moz-radial-gradient(
  //     ellipse farthest-corner at right bottom,
  //     #FEDB37 0%,
  //     #FDB931 8%,
  //     #9f7928 30%,
  //     #8A6E2F 40%,
  //     transparent 80%
  //   ),
  //   -moz-radial-gradient(
  //     ellipse farthest-corner at left top,
  //     #FFFFFF 0%,
  //     #FFFFAC 8%,
  //     #D1B464 25%,
  //     #5d4a1f 62.5%,
  //     #5d4a1f 100%
  //   );
  //   background: -webkit-radial-gradient(
  //     ellipse farthest-corner at right bottom,
  //     #FEDB37 0%,
  //     #FDB931 8%,
  //     #9f7928 30%,
  //     #8A6E2F 40%,
  //     transparent 80%
  //   ),
  //   -webkit-radial-gradient(
  //     ellipse farthest-corner at left top,
  //     #FFFFFF 0%,
  //     #FFFFAC 8%,
  //     #D1B464 25%,
  //     #5d4a1f 62.5%,
  //     #5d4a1f 100%
  //   );
  //   background: -o-radial-gradient(
  //     ellipse farthest-corner at right bottom,
  //     #FEDB37 0%,
  //     #FDB931 8%,
  //     #9f7928 30%,
  //     #8A6E2F 40%,
  //     transparent 80%
  //   ),
  //   -o-radial-gradient(
  //     ellipse farthest-corner at left top,
  //     #FFFFFF 0%,
  //     #FFFFAC 8%,
  //     #D1B464 25%,
  //     #5d4a1f 62.5%,
  //     #5d4a1f 100%
  //   );
  //   background: radial-gradient(
  //     ellipse farthest-corner at right bottom,
  //     #FEDB37 0%,
  //     #FDB931 8%,
  //     #9f7928 30%,
  //     #8A6E2F 40%,
  //     transparent 80%
  //   ),
  //   radial-gradient(
  //     ellipse farthest-corner at left top,
  //     #FFFFFF 0%,
  //     #FFFFAC 8%,
  //     #D1B464 25%,
  //     #5d4a1f 62.5%,
  //     #5d4a1f 100%
  //   );
  //   -moz-background-clip: text;
  //   -webkit-background-clip: text;
  //   -o-background-clip: text;
  //   background-clip: text;
  //   -moz-text-fill-color: transparent;
  //   -webkit-text-fill-color: transparent;
  //   -o-text-fill-color: transparent;
  //   font-weight: bold;
  // }

  // h4 {
  //   background: -moz-radial-gradient(
  //     ellipse farthest-corner at right bottom,
  //     rgb(229, 231, 235) 0%,
  //     rgb(156, 163, 175) 8%,
  //     rgb(75, 85, 99) 30%,
  //     rgb(229, 231, 235) 40%,
  //     transparent 80%
  //   ),
  //   -moz-radial-gradient(
  //     ellipse farthest-corner at left top,
  //     #FFFFFF 0%,
  //     #454545 8%,
  //     rgb(243, 244, 246) 25%,
  //     rgb(17, 24, 39) 62.5%,
  //     #FFFFFF 100%
  //   );
  //   background: -webkit-radial-gradient(
  //     ellipse farthest-corner at right bottom,
  //     rgb(229, 231, 235) 0%,
  //     rgb(156, 163, 175) 8%,
  //     rgb(75, 85, 99) 30%,
  //     rgb(229, 231, 235) 40%,
  //     transparent 80%
  //   ),
  //   -webkit-radial-gradient(
  //     ellipse farthest-corner at left top,
  //     #FFFFFF 0%,
  //     #454545 8%,
  //     rgb(243, 244, 246) 25%,
  //     rgb(17, 24, 39) 62.5%,
  //     #FFFFFF 100%
  //   );
  //   background: -o-radial-gradient(
  //     ellipse farthest-corner at right bottom,
  //     rgb(229, 231, 235) 0%,
  //     rgb(156, 163, 175) 8%,
  //     rgb(75, 85, 99) 30%,
  //     rgb(229, 231, 235) 40%,
  //     transparent 80%
  //   ),
  //   -o-radial-gradient(
  //     ellipse farthest-corner at left top,
  //     #FFFFFF 0%,
  //     #454545 8%,
  //     rgb(243, 244, 246) 25%,
  //     rgb(17, 24, 39) 62.5%,
  //     #FFFFFF 100%
  //   );
  //   background: radial-gradient(
  //     ellipse farthest-corner at right bottom,
  //     rgb(229, 231, 235) 0%,
  //     rgb(156, 163, 175) 8%,
  //     rgb(75, 85, 99) 30%,
  //     rgb(229, 231, 235) 40%,
  //     transparent 80%
  //   ),
  //   radial-gradient(
  //     ellipse farthest-corner at left top,
  //     #FFFFFF 0%,
  //     #454545 8%,
  //     rgb(243, 244, 246) 25%,
  //     rgb(17, 24, 39) 62.5%,
  //     #FFFFFF 100%
  //   );
  //   -moz-background-clip: text;
  //   -webkit-background-clip: text;
  //   -o-background-clip: text;
  //   background-clip: text;
  //   -moz-text-fill-color: transparent;
  //   -webkit-text-fill-color: transparent;
  //   -o-text-fill-color: transparent;
  // }

  // .carousel-caption {
  //   background: black;
  //   border-radius: 18px;
  //   border: 3px solid darkgoldenrod;
  //   padding-top: 0.25rem;
  //   padding-bottom: 0rem;
  //   right: 10%;
  //   left: 10%;
  //   bottom: .1rem;

  // }
