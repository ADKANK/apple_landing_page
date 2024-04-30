import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef; // Get reference to video player
  showButton: boolean = true; // Show/hide button
  isPlaying: boolean = true; // Check if video is playing
  private hideButtonTimeout: any; // Timeout to hide button
  isMuted: boolean = true; // Check if video is muted

  constructor() { }

  ngOnInit() {
    this.resetTimer(); // Reset timer on page load
  }

  // Play/pause video

  togglePlay() {
    if (this.isPlaying) {
      this.videoPlayer.nativeElement.pause(); // Pause video
    } else {
      this.videoPlayer.nativeElement.play(); // Play video
    }
    this.isPlaying = !this.isPlaying; // Toggle video play/pause
    this.resetTimer(); // Reset timer
  }

  // Handle play event

  handlePlay() {
    this.showButton = false; // Hide button
    this.startHideButtonTimer(); // Start timer
  }

  // Handle pause event
  handlePause() {
    this.showButton = true; // Show button
    clearTimeout(this.hideButtonTimeout); // Clear timeout
  }

  // Start timer to hide button
  startHideButtonTimer() {
    this.hideButtonTimeout = setTimeout(() => {
      this.showButton = false;
    }, 3000); // 3000 milliseconds = 3 seconds
  }

  // Reset timer
  resetTimer() {
    clearTimeout(this.hideButtonTimeout); // Clear timeout
    this.startHideButtonTimer(); // Start timer
  }

  // Mute/unmute video
  toggleMute() {
    this.isMuted = !this.isMuted; // Toggle mute/unmute
    this.videoPlayer.nativeElement.muted = this.isMuted; // Mute/unmute video
  }

  // Show button on mouse move
  onMouseMove() {
    if (!this.showButton) {
      this.showButton = true; // Show button
      this.resetTimer(); // Reset timer
    }
  }

}

