import {MediaMatcher, BreakpointObserver,Breakpoints} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { DataService } from 'src/app/services/dataservice/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;
  
  gridView:any
  message:any

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private data:DataService,private responsive: BreakpointObserver) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)
    this.data.currentView.subscribe(flag => this.gridView = flag)

    this.responsive.observe([
      Breakpoints.TabletPortrait,
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.TabletLandscape])
      .subscribe(result => {
    
        const breakpoints = result.breakpoints;
    
        if (breakpoints[Breakpoints.TabletPortrait]) {
          console.log("screens matches TabletPortrait");
        }
        else if (breakpoints[Breakpoints.HandsetLandscape]) {
          console.log("screens matches HandsetLandscape");
        }
        else if (breakpoints[Breakpoints.HandsetPortrait]) {
          console.log("screens matches HandsetLandscape");
        }
        else if (breakpoints[Breakpoints.TabletLandscape]) {
          console.log("screens matches HandsetLandscape");
        }
    
    
    
      });
    
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onekeyup(text:any){
    this.data.changeMessage(text.target.value);
  }

  grid(){
    this.gridView=true;
    this.data.changeView(this.gridView)
  }
  list(){
    this.gridView=false;
    this.data.changeView(this.gridView)
  }
}
