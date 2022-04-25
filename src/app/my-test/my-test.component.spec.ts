import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MyTestComponent } from './my-test.component';

describe('MyTestComponent with spectator', () => {
  let spectator: Spectator<MyTestComponent>;
  const createComponent = createComponentFactory(MyTestComponent);

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
