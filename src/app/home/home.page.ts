import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, InfiniteScrollCustomEvent, IonList, IonItem, IonSkeletonText, IonAvatar, IonAlert, IonLabel, IonBadge, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';
import { MovieService } from '../Services/movie.service';
import { catchError, finalize } from 'rxjs';
import { MovieResult } from '../Services/interfaces';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as confetti from 'canvas-confetti';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonSkeletonText, IonAvatar, IonAlert, IonLabel, DatePipe, RouterModule, IonBadge, IonInfiniteScroll, IonInfiniteScrollContent]
})
export class HomePage implements OnInit {
  private movieService = inject(MovieService);
  private alertController = inject(AlertController);
  private currentPage = 1;
  public error = null;
  public isLoading = false;
  public movies: MovieResult[] = [];
  public imageBaseUrl = 'https://image.tmdb.org/t/p';
  constructor() {
    this.welcome();
    this.loadMovies();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.removeCanvas();
    }, 7000)
  }

  removeCanvas() {
    const a = document.body.getElementsByTagName('canvas');
    a[0].remove();
  }

  async welcome() {
    const alert = this.alertController.create({
      header: 'Ready?',
      message: 'You have reached youre dream land',
      buttons: ['Hang tight'],
    });
    (await alert).present();

    var myCanvas = document.createElement('canvas');
    document.body.appendChild(myCanvas);

    confetti.create()({
      shapes: ['square'],
      particleCount: 1000,
      spread: 1800,
      origin: {
          y: (1),
          x: (0.5)
      }
  });
  }

  loadMovies(event?: InfiniteScrollCustomEvent) {
    this.error = null;
    if (!event) {
      this.isLoading = true;
    }
    this.movieService.getTopRatedMovies(this.currentPage).pipe(
      finalize(() => {
        this.isLoading = false;
        if (event) {
          event.target.complete();
        }
      }),
      catchError((err: any) => {
        this.error = err.error.status_message;
        return [];
      })
    ).subscribe({
      next: (res) => {
        console.log(res);
        this.movies.push(...res.results);
        if (event) {
          event.target.disabled = res.total_pages == this.currentPage;
        }
      }
    });

    this.movieService.getMovieDetails('872585').subscribe((movie) => {
      console.log(movie);
    });
  }

  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }
}
