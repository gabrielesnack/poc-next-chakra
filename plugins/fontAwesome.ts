import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTimes as fasTimes,
  faBars as fasBars,
  faHeart as fasHeart,
  faShare as fasShare,
} from '@fortawesome/free-solid-svg-icons'
import {
  faHeart as farHeart,
  faCopy as farCopy,
} from '@fortawesome/free-regular-svg-icons'

library.add(fasHeart, fasTimes, fasBars, fasShare)
library.add(farHeart, farCopy)
