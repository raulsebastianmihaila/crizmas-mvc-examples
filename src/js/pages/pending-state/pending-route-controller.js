import {controller, observe, Cancellation} from 'crizmas-mvc';

let cancellation;

export default controller({
  child: observe({
    firstChildOperation() {
      return {
        then(resolve) {
          setTimeout(resolve, 1000);
        }
      };
    },

    secondChildOperation() {
      return delay(5000);
    },

    bothChildOperations() {
      this.firstChildOperation();
      this.secondChildOperation();
    }
  }),

  firstOperation() {
    return delay(2000);
  },

  secondOperation() {
    return delay(4000);
  },

  cancellableOperation() {
    cancellation = new Cancellation();

    return cancellation.cancellable(delay(100000));
  },

  cancelCancellableOperation() {
    if (this.pending.has('cancellableOperation')) {
      cancellation.cancel();
    }
  }
});

const delay = (time) => new Promise((r) => setTimeout(r, time));
