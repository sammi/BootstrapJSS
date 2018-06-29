import {
  badgePaddingY,
  badgePaddingX,
  badgeFontSize,
  badgeFontWeight,
  badgeBorderRadius,
  badgePillPaddingX,
  badgePillBorderRadius
} from '../Variables/Badges'

import {
  themeColors
} from '../Variables/Colors'

import {
  borderRadius
} from '../Mixins/borderRadius'

import {
  badgeVariant
} from '../Mixins/badge'

import format from 'string-format'
import _ from 'lodash'

import {
  badge,
  badgeInButton,
  badgePill,
  badgeThemeColors
} from './Badge'

describe('Badge classes', () => {
  it('badge', () => {
    expect(badge).toEqual({
      display: 'inline-block',
      padding: `${badgePaddingY} ${badgePaddingX}`,
      fontSize: badgeFontSize,
      fontWeight: badgeFontWeight,
      lineHeight: 1,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'baseline',
      ...borderRadius(badgeBorderRadius),
      '&:empty': {
        display: 'none'
      }
    })
  })

  it('quick fix for badges in buttons', () => {
    expect(badgeInButton).toEqual({
      position: 'relative',
      top: '-1px'
    })
  })

  it('Pill badges, Make them extra rounded with a modifier to replace v3\'s badges.', () => {
    expect(badgePill).toEqual({
      paddingRight: badgePillPaddingX,
      paddingLeft: badgePillPaddingX,
      ...borderRadius(badgePillBorderRadius)
    })
  })

  it('badgeThemeColors', () => {
    const badgeColors = badgeThemeColors()
    Object.keys(themeColors).forEach(themeColorName => {
      expect(badgeColors[format('badge{}', _.upperFirst(themeColorName))]).toEqual(
        badgeVariant(themeColors[themeColorName])
      )
    })
  })
})