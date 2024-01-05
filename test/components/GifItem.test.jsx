import { render } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('Test in GifItem', () => {
  test('should match with snapshot', () => {
    render(<GifItem />)
  })
})
