import feeble from 'feeble';

const model = feeble.model({
  namespace: 'count',
  state: 0,
});

model.action('increment');
model.action('decrement');

model.reducer(on => {
  on(model.increment, state => state + 1);

  on(model.decrement, state => state - 1);
})

export default model;
