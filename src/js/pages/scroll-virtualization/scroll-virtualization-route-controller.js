import Mvc from 'crizmas-mvc';
import {RenderClipController, RenderClip2DController} from 'crizmas-components';

export default Mvc.controller(function ScrollVirtualization() {
  const length1D = 1e6;
  const items1D = Array(length1D);

  for (let i = 0; i < length1D; i += 1) {
    items1D[i] = i;
  }

  const ctrl = {
    renderClipController: new RenderClipController({
      items: items1D,
      itemHeight: (index) => items1D[0]
        ? 20 + (length1D - index - 1) % 40
        : 20 + index % 40
    }),

    renderClip2DController: new RenderClip2DController({
      verticalItemsCount: 50000,
      horizontalItemsCount: 50000,
      itemHeight: (index) => 50 + index % 40,
      itemWidth: (index) => 50 + index % 40
    })
  };

  ctrl.reverse1DList = () => {
    items1D.reverse();
    ctrl.renderClipController.updateLayout();
  };

  return ctrl;
});
