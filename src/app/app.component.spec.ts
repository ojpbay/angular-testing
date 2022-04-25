import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { AppComponent } from './app.component';

describe('AppComponent with spectator', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory(AppComponent);

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it(`should have as title 'angular-testing'`, () => {
    expect(spectator.component.title).toEqual('angular-testing');
  });

  it('should render title', () => {
    expect(spectator.query('.content span')?.textContent).toContain('angular-testing app is running!');
  });
});
