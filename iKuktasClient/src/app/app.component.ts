import { SummaryModel } from './models/summary.model';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { filter, map, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { GraphModel } from './models/graph.model';
import { IAppConfig } from './models/app-config.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  settings: IAppConfig;

  title = 'iKuktasClient';
  stillError = false;
  playingSubscription: Subscription;

  data: SummaryModel;
  graphDataMonth: GraphModel = null;
  graphDataDay: GraphModel = null;

  chartMonthData: object;
  chartDayData: object;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.loadSettings().then(() => {
      this.initHttpRequests();
      this.initAudio();
    });
  }

  loadSettings() {
      const jsonFile = `assets/config.json`;
      return new Promise<void>((resolve, reject) => {
          this.http.get(jsonFile).toPromise().then((response : IAppConfig) => {
              this.settings = response;
              resolve();
          }).catch((response: any) => {
              reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
          });
      });
  }

  initHttpRequests() {
    if(!this.settings) return;

    interval(9000).pipe(startWith(0)).subscribe(x => {
      this.http.get<any>(this.settings.baseUrl + '/Temperature/extended').subscribe(data => {
        this.data = data;
      })
    });

    interval(90000).pipe(startWith(0)).subscribe(x => {
      this.http.get<GraphModel>(this.settings.baseUrl + '/Temperature/graphMonth').subscribe(data => {
        this.graphDataMonth = data;

        let labels = []
        this.graphDataMonth.timeStamps.forEach(x => {
          labels.push(x.toString().split('T')[0])
        })

        this.chartMonthData = {
          labels: labels,
          datasets: [{
              label: 'Zewn-1',
              data: this.graphDataMonth.leftTopTemps,
              fill: false,
              tension: 0.1   
            },{
              label: 'Wew-1',
              data: this.graphDataMonth.leftMiddleTemps,
              fill: false,
              tension: 0.1   
            },{
              label: 'Wew-2',
              data: this.graphDataMonth.rightTopTemps,
              fill: false,
              tension: 0.1   
            },{
              label: 'Wew-3',
              data: this.graphDataMonth.rightMiddleTemps,
              fill: false,
              tension: 0.1   
            },{
              label: 'Wew-4',
              data: this.graphDataMonth.rightBottomTemps,
              fill: false,
              tension: 0.1   
            }]
        }
      })
    })

    interval(90000).pipe(startWith(0)).subscribe(x => {
      this.http.get<GraphModel>(this.settings.baseUrl + '/Temperature/graphDay').subscribe(data => {
        this.graphDataDay = data;

        let labels = []
        this.graphDataDay.timeStamps.forEach(x => {
          labels.push(x.toString().split('T')[1].split("+")[0])
        })

        this.chartDayData = {
          labels: labels,
          datasets: [{
              label: 'Zewn-1',
              data: this.graphDataDay.leftTopTemps,
              fill: false,
              tension: 0.1   
            },{
              label: 'Wew-1',
              data: this.graphDataDay.leftMiddleTemps,
              fill: false,
              tension: 0.1   
            },{
              label: 'Wew-2',
              data: this.graphDataDay.rightTopTemps,
              fill: false,
              tension: 0.1   
            },{
              label: 'Wew-3',
              data: this.graphDataDay.rightMiddleTemps,
              fill: false,
              tension: 0.1   
            },{
              label: 'Wew-4',
              data: this.graphDataDay.rightBottomTemps,
              fill: false,
              tension: 0.1   
            }]
        }
      })
    })
  }

  initAudio() {
    let audio = new Audio();
    audio.src = "assets/alarm.wav";
    audio.load();

    this.playingSubscription = interval(1000).pipe(filter(f => this.stillError)).subscribe(x => {
      audio.play();
    });
  }

  isError() {
    this.stillError = this.data?.rightTopTemp.temperature < 5 ||
    this.data?.rightMiddleTemp.temperature < 5 ||
    this.data?.rightBottomTemp.temperature < 5 ||
    this.data?.leftMiddleTemp.temperature < 5;

    return this.stillError;
  }

  isWarning() {
    if(this.isError()) return false;

    return this.data?.rightTopTemp.hourPrediction < 5 ||
    this.data?.rightMiddleTemp.hourPrediction < 5 ||
    this.data?.rightBottomTemp.hourPrediction < 5 ||
    this.data?.leftMiddleTemp.hourPrediction < 5;
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms));
  }
}
