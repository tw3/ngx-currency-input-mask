import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lotteryWinnings;
  debts = 1000;
  moneyRemaining;

  ngOnInit() {
    this.updateWinnings(5000);
  }

  updateWinnings(newWinnings: number): void {
    this.lotteryWinnings = newWinnings;
    this.moneyRemaining = this.lotteryWinnings - this.debts;
  }

  updateRemainingMoney(newRemaining: number): void {
    this.moneyRemaining = newRemaining;
    this.lotteryWinnings = this.moneyRemaining + this.debts;
  }
}
