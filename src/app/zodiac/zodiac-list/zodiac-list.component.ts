import { Component, OnInit } from '@angular/core';
import { ZodiacService } from 'src/app/zodiac.service';
import { Zodiac } from '../zodiac.model';

@Component({
  selector: 'app-zodiac-list',
  templateUrl: './zodiac-list.component.html',
  styleUrls: ['./zodiac-list.component.scss']
})
export class ZodiacListComponent implements OnInit {

zodiacs: Zodiac[] = [];

  constructor(private zodiacService: ZodiacService) { }

  ngOnInit(): void {
    const zodiacObservable = this.zodiacService.getZodiacInfo();
    zodiacObservable.subscribe((zodiacData: Zodiac[]) => {
        this.zodiacs = zodiacData;
    });
  }
}


