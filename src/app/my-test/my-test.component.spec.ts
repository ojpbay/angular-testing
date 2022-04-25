import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MyTestComponent } from './my-test.component';


describe('MyTestComponent with spectator', () => {
  let spectator: Spectator<MyTestComponent>;
  const createComponent = createComponentFactory(MyTestComponent);

  beforeEach(() => spectator = createComponent());

  it('should have a success class by default', () => {
    expect(spectator.component).toBeTruthy();
  });
});
