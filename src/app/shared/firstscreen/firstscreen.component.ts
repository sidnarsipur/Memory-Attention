import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-firstscreen',
  templateUrl: './firstscreen.component.html',
  styleUrls: ['./firstscreen.component.scss'],
})
export class FirstscreenComponent implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  }
  slide3 = false
  @ViewChild(IonSlides, {static: true}) slides: IonSlides

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    // this.slides.update()
  }

  async onDismissModal() {
    console.log("something new")
    this.modalController.dismiss()
  }

  enableDismiss() {
    this.slide3 = true
  }

}
