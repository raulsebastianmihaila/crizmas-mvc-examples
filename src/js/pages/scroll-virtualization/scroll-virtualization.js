import React from 'react';
import {RenderClip, RenderClip2D} from 'crizmas-components';

export default ({controller}) => <div>
  <div className="row">
    In these examples the items have different sizes. Whenever possible, prefer a fixed
    size, because it's more efficient.
  </div>
  <div className="row" style={{height: 200, border: '1px solid #000'}}>
    <RenderClip
      controller={controller.renderClipController}
      renderItem={({index, item, itemHeight}) => {
        return <div key={index} style={{height: itemHeight}}>{item}</div>;
      }} />
  </div>
  <div className="row">
    <button onClick={controller.reverse1DList}>reverse 1D list</button>
  </div>
  <div className="row" style={{width: 500, height: 300, border: '1px solid #000'}}>
    <RenderClip2D
      controller={controller.renderClip2DController}
      renderRow={({index, itemHeight, renderCells}) => {
        return <div key={index} style={{height: itemHeight, display: 'flex'}}>{renderCells()}</div>;
      }}
      renderCell={({index, itemWidth, itemHeight, rowIndex}) => {
        return <div
          key={index}
          style={{
            width: itemWidth,
            height: itemHeight,
            flexShrink: 0,
            fontSize: 12,
            whiteSpace: 'break-spaces',
            overflowWrap: 'break-word',
            background: index % 2 === rowIndex % 2
              ? '#2c7ce4'
              : '#87cc87'
          }}>
            <div>{rowIndex + 1}</div>
            <div>{index + 1}</div>
          </div>;
      }} />
  </div>
</div>;
