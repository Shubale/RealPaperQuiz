import {
  Directive,
  OnInit,
  HostListener,
  HostBinding, Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'lightblue';
  @HostBinding('style.backgroundColor')backgroundColor: string;
  constructor() { }
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
  }

  @HostListener('mouseenter') mouseover(){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightgray');
    this.backgroundColor = this.defaultColor;
  }
}
