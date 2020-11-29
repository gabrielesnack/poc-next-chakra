import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTimes as fasTimes,
  faBars as fasBars,
  faHeart as fasHeart,
  faShare as fasShare,
  faStar as fasStar,
  faSearch as fasSearch,
} from '@fortawesome/free-solid-svg-icons'
import {
  faHeart as farHeart,
  faCopy as farCopy,
} from '@fortawesome/free-regular-svg-icons'

library.add(fasHeart, fasTimes, fasBars, fasShare, fasStar, fasSearch)
library.add(farHeart, farCopy)
