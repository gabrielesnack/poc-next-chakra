import { ReactChild } from 'react'
import { BoxProps } from '@chakra-ui/react'

export type coverProps =
  | {
      children: ReactChild
    }
  | BoxProps
