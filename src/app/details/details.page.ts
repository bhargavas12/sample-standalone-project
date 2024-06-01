import { Component, Inject, Input, OnInit, WritableSignal, inject, input, signal } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonText, IonLabel, IonButtons, IonBackButton, IonItem, IonCard } from '@ionic/angular/standalone';
import { MovieService } from '../Services/movie.service';
import { MovieResult } from '../Services/interfaces';
import { cashOutline, calendarOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonText, IonLabel, IonButtons, IonBackButton, IonItem, CurrencyPipe, DatePipe, IonCard]
})
export class DetailsPage {
  private movieService = inject(MovieService);
  public imageBaseUrl = 'https://image.tmdb.org/t/p';
  public movie: WritableSignal<MovieResult | null> = signal(null);

  @Input()
  set id(movieId: string) {
      this.movieService.getMovieDetails(movieId).subscribe((movie: any) => {
          this.movie.set(movie);  
      });
  }
  constructor() { 
    addIcons({ cashOutline, calendarOutline});
  }
}
