
import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { initRenderer, initCamera, initScene, initObject, initStats, render, resizeRender } from './base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  @ViewChild('starry', { static: true }) starry: ElementRef;
  constructor() {}

  ngOnInit() {
    this.init();
  }
  init() {
    initRenderer(this.starry.nativeElement);
    initCamera(this.starry.nativeElement);
    initScene();
    initObject();
    initStats(this.starry.nativeElement);
    render();
  }
  // 监听当前窗口大小
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    resizeRender(this.starry.nativeElement);
  }
}
