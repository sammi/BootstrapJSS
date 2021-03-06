import { white, black } from './Colors'
import { rgba } from '../Functions/rgba'
import { borderWidth, borderRadius } from './Components'
import { gridGutterWidth } from './Grid'
import { size } from '../Functions/size'

import {
  cardSpacerY,
  cardSpacerX,
  cardBorderWidth,
  cardBorderRadius,
  cardBorderColor,
  cardInnerBorderRadius,
  cardCapBg,
  cardBg,
  cardImgOverlayPadding,
  cardGroupMargin,
  cardDeckMargin,
  cardColumnsCount,
  cardColumnsGap,
  cardColumnsMargin
} from './Cards'

describe('Cards', () => {
  it('Cards', () => {
    expect(cardSpacerY).toEqual('.75rem')
    expect(cardSpacerX).toEqual('1.25rem')
    expect(cardBorderWidth).toEqual(borderWidth)
    expect(cardBorderRadius).toEqual(borderRadius)
    expect(cardBorderColor).toEqual(rgba(black, 0.125))
    expect(cardInnerBorderRadius).toEqual(`${size(cardBorderRadius).value - size(cardBorderWidth).value}${size(cardBorderRadius).unit}`)

    expect(cardCapBg).toEqual(rgba(black, 0.03))
    expect(cardBg).toEqual(white)

    expect(cardImgOverlayPadding).toEqual('1.25rem')

    expect(cardGroupMargin).toEqual(`${size(gridGutterWidth).value / 2}${size(gridGutterWidth).unit}`)

    expect(cardDeckMargin).toEqual(cardGroupMargin)

    expect(cardColumnsCount).toEqual('3')
    expect(cardColumnsGap).toEqual('1.25rem')
    expect(cardColumnsMargin).toEqual(cardSpacerY)
  })
})
