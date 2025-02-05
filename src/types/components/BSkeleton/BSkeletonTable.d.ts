import type {SkeletonAnimation} from '@/types'
// Props
export interface Props {
  animation?: SkeletonAnimation
  columns?: number
  hideHeader?: boolean
  rows?: number
  showFooter?: boolean
  tableProps?: Record<string, unknown>
}
// Emits

// Other
