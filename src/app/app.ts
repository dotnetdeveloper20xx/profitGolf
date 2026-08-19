import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

type View = 'home' | 'membership' | 'dashboard' | 'admin' | 'login' | 'register' | 'checkout' | 'profile' | 'tip-detail' | 'tip-editor' | 'news' | 'schedules' | 'courses' | 'contact' | 'competitions' | 'rewards' | 'about' | 'tips-public' | 'forgot-password' | 'verify-email' | 'competition-entry' | 'article' | 'payments' | 'referrals' | 'notifications' | 'admin-users' | 'admin-competitions' | 'admin-rewards' | 'admin-reports' | 'admin-settings' | 'legal';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  view = signal<View>('home');
  menuOpen = signal(false);
  modalOpen = signal(false);
  selectedPlan = signal('PGA Tour & Majors');
  paymentMethod = signal<'card' | 'paypal' | 'apple'>('card');
  openFaq = signal<number | null>(0);
  legalPage = signal('Privacy policy');
  toast = signal('');

  plans = [
    { name: 'Major Pack', price: '£25', label: 'The essentials', events: '5 marquee events', features: ['The four Majors', 'The Players Championship', 'Outright & prop picks', 'Course previews'], featured: false },
    { name: 'PGA Tour & Majors', price: '£85', label: 'Most popular', events: '44 events', features: ['Full PGA Tour coverage', 'All Major championships', 'Every pick & staking guide', 'Members-only analysis'], featured: true },
    { name: 'Full Package', price: '£150', label: 'Every edge', events: '90+ events', features: ['PGA & DP World Tours', 'All Major championships', 'Five LPGA Majors', 'Complete tip archive'], featured: false }
  ];

  tips = [
    { event: 'BMW Championship', market: 'Outright winner', pick: 'Scottie Scheffler', odds: '5/1', stake: '2.0 pts', confidence: 82, time: 'Today · 08:30', status: 'OPEN' },
    { event: 'BMW Championship', market: 'Top 10 finish', pick: 'Tommy Fleetwood', odds: '9/4', stake: '1.5 pts', confidence: 76, time: 'Today · 08:35', status: 'OPEN' },
    { event: 'FedEx St. Jude', market: 'Top 20 finish', pick: 'Robert MacIntyre', odds: '7/4', stake: '1.0 pt', confidence: 69, time: '12 Aug · 10:15', status: 'SETTLED' }
  ];

  sourceTips = [
    { tag: 'HOT PICK', player: 'Rory McIlroy', event: 'The Open Championship', course: 'Royal Portrush', dates: '17–20 Jul 2026', odds: '7/1', type: 'Each Way', tipster: 'James Hargreaves', profit: '+£420', confidence: '88%', analysis: 'McIlroy has an outstanding links record and returns to a course where he has previously excelled. Current form is strong after back-to-back top-10 finishes. Excellent each-way value at these odds.' },
    { tag: 'FORM', player: 'Scottie Scheffler', event: 'The Open Championship', course: 'Royal Portrush', dates: '17–20 Jul 2026', odds: '9/2', type: 'Win', tipster: 'Sarah Mitchell', profit: '+£180', confidence: '91%', analysis: "World number one and in the form of his life. Scheffler's ball-striking is unmatched on tour right now. Slight concern over links experience but his adaptability is second to none." },
    { tag: 'VALUE', player: 'Jon Rahm', event: 'The Open Championship', course: 'Royal Portrush', dates: '17–20 Jul 2026', odds: '10/1', type: 'Each Way', tipster: 'James Hargreaves', profit: '+£310', confidence: '82%', analysis: 'Rahm is a proven major winner and thrives in links conditions. Slightly overlooked by the market given his pedigree. At 10/1 this represents outstanding each-way value with five places on offer.' },
    { tag: 'OUTSIDER', player: 'Viktor Hovland', event: 'PGA Tour — Travelers Championship', course: 'TPC River Highlands', dates: '19–22 Jun 2026', odds: '14/1', type: 'Each Way', tipster: 'Tom Ellison', profit: '+£560', confidence: '74%', analysis: 'Hovland has been quietly building form and this course suits his aggressive style. At 14/1 he represents the best outsider value on the card. Three top-20s in his last four starts.' },
    { tag: 'EACH WAY', player: 'Tommy Fleetwood', event: 'The Open Championship', course: 'Royal Portrush', dates: '17–20 Jul 2026', odds: '22/1', type: 'Each Way', tipster: 'Sarah Mitchell', profit: '+£880', confidence: '79%', analysis: 'Fleetwood is one of the best links players in the world and is criminally underrated by the market. He has been in excellent form on the European Tour. Huge each-way value at 22/1.' },
    { tag: 'VALUE', player: 'Collin Morikawa', event: 'The Open Championship', course: 'Royal Portrush', dates: '17–20 Jul 2026', odds: '16/1', type: 'Each Way', tipster: 'Tom Ellison', profit: '+£640', confidence: '77%', analysis: "A former Open champion who knows how to win majors. Morikawa's iron play is perfectly suited to links golf. Returning to form after a mid-season dip — this could be his time." }
  ];

  competitions = [
    { tag: 'Featured competition', type: 'Top 5 Predictor', title: 'The Open Championship Predictor', event: 'The Open Championship 2026', description: 'Pick your top 5 finishers for The Open Championship at Royal Portrush. Closest predictions win. Tiebreaker: winning score.', prize: '£500 cash', split: '1st: £300 · 2nd: £150 · 3rd: £50', entered: '847', capacity: '2,000 max', closes: '16 Jul 2026, 6pm', status: 'Open' },
    { tag: 'Open', type: 'Accumulator', title: 'Weekly Accumulator Challenge', event: 'PGA Tour — Week 32', description: "Build a 5-fold accumulator from this week's PGA Tour field. Highest combined odds from correct picks wins.", prize: '£200 cash', split: '1st: £120 · 2nd: £50 · 3rd: £30', entered: '412', capacity: '1,000 max', closes: '18 Jun 2026, 9am', status: 'Open' },
    { tag: 'Featured competition', type: 'Fantasy Draft', title: 'Ryder Cup Fantasy Draft', event: 'Ryder Cup 2026', description: 'Draft your 6-man Ryder Cup team. Points awarded for wins, halves, and birdies. The ultimate golf fantasy competition.', prize: '£1,000 cash', split: '1st: £600 · 2nd: £250 · 3rd: £100 · 4th: £50', entered: '1,203', capacity: '5,000 max', closes: '24 Sep 2026, 12pm', status: 'Open' },
    { tag: 'Live now', type: 'Pick One', title: "Travelers Championship Pick 'Em", event: 'Travelers Championship 2026', description: 'Pick one winner from the Travelers Championship field. Simple, clean, winner takes most.', prize: '£150 cash', split: '1st: £100 · 2nd: £30 · 3rd: £20', entered: '634', capacity: '1,000 max', closes: 'Closed', status: 'Live' },
    { tag: 'Completed', type: 'Leaderboard Match', title: 'US Open Leaderboard Bingo', event: 'US Open 2026', description: 'Match players to leaderboard positions across all four rounds. Most correct placements wins.', prize: '£300 cash', split: 'Paid out', entered: '1,891', capacity: '2,000 max', closes: 'Closed', status: 'Results in' },
    { tag: 'Completed', type: 'Sweepstake', title: 'Masters Hole-in-One Sweepstake', event: 'The Masters 2026', description: 'Draw a player and a hole. If your player makes a hole-in-one on your hole, you win the jackpot.', prize: '£250 cash', split: 'Paid out', entered: '2,000', capacity: '2,000 max', closes: 'Closed', status: 'Results in' }
  ];

  rewards = [
    { action: 'Enter a FREE to play competition', points: '+50 pts' },
    { action: 'Your Pick Em selection comes in the top 10', points: '+100 pts' },
    { action: 'Your Pick Em selection wins the tournament', points: '+250 pts' },
    { action: 'Refer a friend — for every friend', points: '+2,000 pts' },
    { action: 'Daily login streak — 7 days', points: '+50 pts' }
  ];

  faqs = [
    { q: 'Is Profit Golf really free?', a: 'Yes. Registration, public tips and free-to-play competitions do not require a deposit. Optional paid packages may be introduced only when their price and benefits have been clearly confirmed.' },
    { q: 'How are tipsters ranked?', a: 'Tipsters are compared using their complete published record, including level-stakes profit, return on investment, win rate and number of settled tips. Losing selections remain visible.' },
    { q: 'How do I enter a competition?', a: 'Create a verified account, open an available competition, make your selections and accept the competition rules. Your entry then appears in My Competitions.' },
    { q: 'How are prizes paid out?', a: 'Winners are notified by email and in their account. Cash prizes are paid to a verified PayPal or bank account after eligibility checks; points and credits are added automatically.' },
    { q: 'What are Profit Points?', a: 'Profit Points are loyalty points earned through eligible activity such as competition entries, results and referrals. They can be redeemed in the rewards shop and have no cash value unless a reward specifically says otherwise.' },
    { q: 'Is this gambling?', a: 'Profit Golf provides information and free-to-play games. Where content relates to betting, it is intended only for adults aged 18 or over. Betting always carries risk; never stake more than you can afford to lose.' }
  ];

  go(view: View) {
    this.view.set(view);
    this.menuOpen.set(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  join(plan: string) {
    this.selectedPlan.set(plan);
    this.go('checkout');
  }

  choosePayment(method: 'card' | 'paypal' | 'apple') {
    this.paymentMethod.set(method);
  }

  showLegal(page: string) {
    this.legalPage.set(page);
    this.go('legal');
  }

  submit(action: string, destination?: View) {
    this.demo(action);
    if (destination) setTimeout(() => this.go(destination), 500);
  }

  demo(action: string) {
    this.toast.set(action);
    setTimeout(() => this.toast.set(''), 2600);
  }
}
