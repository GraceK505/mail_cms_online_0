import { Directive, ElementRef, Renderer2, OnInit, ChangeDetectorRef, HostListener, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Directive({
  selector: '[appShowIconOnRoute]'
})
export class ShowIconOnRouteDirective implements OnInit {
  @Input('appShowIconOnRoute') matchPath!: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateVisibility(this.router.url);
    
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateVisibility(event.urlAfterRedirects);
      });
  }

  private updateVisibility(url: string): void {
    const shouldShow = url.includes(this.matchPath); 
    this.renderer.setStyle(
      this.el.nativeElement,
      'display',
      shouldShow ? 'flex' : 'none'
    );
  }
}