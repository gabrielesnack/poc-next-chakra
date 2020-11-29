import { Box } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconProps } from './types'

const CIcon = ({ icon, size, ...rest }: iconProps) => {
  return (
    <Box {...rest}>
      <FontAwesomeIcon icon={icon} size={size} />
    </Box>
  )
}

export default CIcon
