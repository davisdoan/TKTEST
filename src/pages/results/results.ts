import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Lobby} from '../lobby/lobby';

/**
 * Generated class for the Results page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class Results {
  @ViewChild('barCanvas') barCanvas;
  barChart: any;
  test: any = {};
  showHome: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  toLobby() {
    this.navCtrl.push(Lobby);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Results');
    
    this.test = this.navParams.get("test");
    this.showHome = this.navParams.get("showHome");
    let testLabels = [
            'Avoiding',
            'Accommodating',
            'Compromising',
            'Competing',
            'Collaborating'
          ]
          for(let i=0; i < testLabels.length; i++){
          console.log("Result for" + i + " is " + this.test[testLabels[i]] * 12);
          }
      
          
          console.log("My result for "+ testLabels[0] + " is:" +   Math.round((this.test[testLabels[0]] * 12) / 100) )
    
        this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: testLabels,
        datasets: [{
          data: [
            Math.round((this.test[testLabels[0]] / 12) * 100),
            Math.round((this.test[testLabels[1]] / 12) * 100),
            Math.round((this.test[testLabels[2]] / 12) * 100),
            Math.round((this.test[testLabels[3]] / 12) * 100),
            Math.round((this.test[testLabels[4]] / 12) * 100)
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true,
              max: 100
            }
          }]
        },
        legend: {
          display: false
       },
       tooltips: {
          enabled: false
       }
      }
    });
  }

}
