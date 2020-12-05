export interface IResponse {
  error: boolean
  data?: any
  message?: string
  status: 'idle' | 'pending' | 'done'
}
