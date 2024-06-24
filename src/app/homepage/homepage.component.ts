import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.loadScripts();
  }

  loadScripts() {
    const script = this.renderer.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';
    script.onload = () => {
      this.initCarousel();
    };
    this.renderer.appendChild(document.body, script);
  }

  initCarousel() {
    ($('#product-gallery1') as any).owlCarousel({
      items: 4,
      loop: true,
      margin: 20,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 4 }
      }
    });
  }
}
