// 时间格式化函数 utc格式 ->
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

// 将utc扩展到dayjs
dayjs.extend(utc)

// 默认转化格式
const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:ss:ss'

export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcString).format(format)
}
