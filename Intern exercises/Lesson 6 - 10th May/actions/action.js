import {INCREASE_COUNTER, DECREASE_COUNTER} from './counts';

export const increaseCounter = () => ({
  type: INCREASE_COUNTER,
});

export const decreaseCounter = () => ({
  type: DECREASE_COUNTER,
})