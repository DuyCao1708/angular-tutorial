export enum AlertType {
  Error = 'error',
  Success = 'success',
  Warn = 'warn'
}

export interface IAlertInit {
  type: AlertType,
  title: string,
  message: string,
  action?: Function
}